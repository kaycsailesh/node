const express = require('express');
const bodyparser = require('body-parser');
const session = require('express-session');
const cookieparser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const helmet = require('helmet');
const csrf = require('csurf');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();
app.use(helmet());

const apiRouter = require('./routes/api');
const indexRouter = require('./routes/index');

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
app.use(cookieparser());
app.use(session({
    key: 'user_sid',
    secret: "Your secret key",
    resave: false,
    saveUninitialized: false,
}));
// app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    abortOnLimit: true,
    useTempFiles : true,
    tempFileDir : 'uploads/tmp/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/api', apiRouter);
app.use('/dash', indexRouter);

app.use('/uploads', express.static('uploads'));
app.use('/assets', express.static('views/assets'));
app.use('/', express.static('web'));

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
