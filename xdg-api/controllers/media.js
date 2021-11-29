const fs = require('fs');
const config = require('../config/config');

const Media = require('../models').Media;

module.exports = {
  list(req, res) {
    return Media
      .findAll()
      .then((media) => {
        res.status(200).send(media);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  },

  getByID(req, res) {
    return Media
      .findById(req.params.id)
      .then((media) => {
        if (!media) {
          return res.status(404).send({
            message: 'Post Not Found'
          })
        }
        return res.status(200).send(media);
      })
      .catch((err) => {
        res.status(400).send(err);
      })
  },

  create(req, res) {
    const file = req.files.filepond;
    const date = new Date().toISOString().slice(0,10);
    const time = new Date().getTime();
    const uploadPath = 'uploads/' + date  + '/';
    const filename = uploadPath + time + '-' + file.name;
    const fileurl = config.appUrl + filename;

    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath)
    } 
    file.mv(filename, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }

      const body = {
        mediaUrl: fileurl,
        postId: req.body.postId,
        userId: req.body.user.id
      };
      return Media.create(body).then(media => {
        return res.status(200).send(media);
      })
    });
  },

  delete(req, res) {
    return Media
      .findById(req.params.id)
      .then(media => {
        if (!media) {
          return res.status(400).send({
            message: 'Media not found'
          });
        }
        return media
          .destroy()
          .then(() => {
            res.status(204).send()
          })
          .catch(err => {
            res.status(400).send(err)
          })
      })
      .catch((err) => {
        res.status(400).send(err)
      })
  }
};
