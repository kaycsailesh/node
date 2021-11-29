const combineTiles = require('combine-tiles');
const fs = require('fs');
const gm = require('gm');
const mergeImages = require('merge-images');


let width = 0;
let height = 0;
let count = 0;
let row = 1;
let column = 1;
let x = 0;
let y = 0;
const images = [
    {x: 0, y: 0, src: 'images/00.png'},
    {x: 1, y: 0, src: 'images/01.png'},
    {x: 0, y: 1, src: 'images/10.png'},
    {x: 1, y: 1, src: 'images/11.png'}
]
let grid = Math.sqrt(images.length)
const imgs = [];

// for (let i =0; i < images.length; i ++) {
//     // imgs[index]= new Image();
//     // imgs[index].src = images[index].src;
//     // imgs[index].onload = function() {
//     //     console.log(img.width + 'x' + img.height);
//     // }
//
// }
getImageSize();


function getImageSize() {
    const image = images[count];
    gm(image.src).size((err, size) => {
        console.log(size);
        if (err) {
            return console.log(err)
        } else {
            // image.height = size.height;
            // image.width = size.width;
            if (row === column) {
                width = width + size.width;
                height = height + size.height;
            }
            if (column === grid) {
                column = 0;
                x = 0;
                y =  y + size.height
                row += 1;
            } else {
                column += 1;
                x = x +size.width;
            }
            image.x = x;
            image.y = y;
            console.log(row, column)
            count += 1;
            if (count === images.length) {
                width = width + size.width;
                height = height + size.height;
                console.log(images)
                console.log(width, height)
                combine()
            } else  {
                getImageSize();
            }
        }
    });
}


function combine() {
    const dest = 'images/combined.png'

    const size = 300
    const tiles = [
        {x: 0, y: 0, file: 'images/00.png'},
        {x: 1, y: 0, file: 'images/01.png'},
        {x: 0, y: 1, file: 'images/10.png'},
        {x: 1, y: 1, file: 'images/11.png'}
    ]

    combineTiles(tiles, width, height, dest)
        .catch(console.error)
}
