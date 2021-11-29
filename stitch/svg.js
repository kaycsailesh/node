const { exec } = require('child_process');
const fs = require('fs');
const gm = require('gm');
const svgPath = __dirname + '/images/dt.svg' ;

let width = 0;
let height = 0;
let count = 0;
let row = 0;
let column = 0;
let x = 0;
let y = 0;
let xa = 0;
let ya = 0;
const imgs = [];


getImageSize();


function getImageSize() {
    gm('images/dt.svg').size((err, size) => {
        console.log(size);
        xa = size.width / 2;
        ya = size.height / 2;
        let command = '/Applications/Inkscape.app/Contents/MacOS/inkscape --export-type="png" --export-area=' +  x + ':' + y + ':' + xa + ':' + ya + ' ' + svgPath + ' --export-width=30000 -o images/00.png';
        exec(command);

        x = xa;
        xa = size.width;
        let command1 = '/Applications/Inkscape.app/Contents/MacOS/inkscape --export-type="png" --export-area=' +  x + ':' + y + ':' + xa + ':' + ya + ' ' + svgPath + ' --export-width=30000 -o images/01.png';
        exec(command1);

        x = 0;
        y = ya;
        xa = size.width/2
        ya = size.height;
        let command2 = '/Applications/Inkscape.app/Contents/MacOS/inkscape --export-type="png" --export-area=' +  x + ':' + y + ':' + xa + ':' + ya + ' ' + svgPath + ' --export-width=30000 -o images/10.png';
        exec(command2);

        x = xa;
        xa = size.width;
        ya = size.height;
        let command3 = '/Applications/Inkscape.app/Contents/MacOS/inkscape --export-type="png" --export-area=' +  x + ':' + y + ':' + xa + ':' + ya + ' ' + svgPath + ' --export-width=30000 -o images/11.png';
        exec(command3);
    });
}
