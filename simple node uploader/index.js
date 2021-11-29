const zlib = require('zlib');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const PORT = 3400;
const path = require('path');
const fs = require('fs');

const app = express();
const public = path.join(__dirname, 'public');

app.use(fileUpload({
    safeFileNames: true,
    preserveExtension: true
}));
app.use(cors());

app.post('/upload/:type/:id', function (req, res) {
    let sampleFile;
    let uploadPath;

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    sampleFile = req.files.file;


    uploadPath = __dirname + '/public/' + req.params.id + '/' + req.params.type
    fs.readdir(uploadPath, (err) => {
        if (err) {
            fs.mkdir(uploadPath, { recursive: true }, (err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).send("Unable to create folder");
                }
            })
        }
    })

    let fileName = uploadPath + '/' + uuidv4() + sampleFile.name;
    sampleFile.mv(fileName, function (err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.status(200).send({
            filePath: uploadPath
        });
    });
});

app.use('/public', express.static(public));

app.get('/', (req, res) => {
    console.log('here');
    res.send('hello')
})

app.post('/', (req, res) => {
    console.log(req);
    res.send('hello')
})

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);