const { createCanvas, loadImage } = require('canvas')

const width = 1200;
const height = 630;
const color = '#65bb6a';
const bgColor = '#fff';

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = bgColor;
context.fillRect(0, 0, width, height);

context.font = '30pt Glacial Indiferrent';
context.textAlign = 'center';
context.textBaseline = 'top';
context.fillStyle = color;

const text = 'Estado actual:';

const textWidth = context.measureText(text).width;
let textY = 170;
context.fillRect(600 - textWidth / 2 - 10, textY - 5, textWidth + 20, 300);
context.fillStyle = bgColor;
context.fillText(text, 600, textY);

context.font = '12pt Glacial Indiferrent';
context.textAlign = 'center';
context.textBaseline = 'top';
context.fillStyle = bgColor;
const infectados = '5,749 TOTAL INFECTADOS';
textY += 50;
context.fillText(infectados, 600, textY);
const deaths = '5,749 TOTAL MUERTES';
textY += 50;
context.fillText(deaths, 600, textY);
const recuperados = '5,749 TOTAL RECUPERADOS';
textY += 50;
context.fillText(recuperados, 600, textY);

context.fillStyle = color;
context.font = 'bold 30pt Menlo';
context.textAlign = 'center';
context.fillText('coronavirus-rd.com', 450, 530);

const getImageUrl = async () => {
    let image = await loadImage('1logotipo3000x3000.png');
    context.drawImage(image, 200, 170 - 5, 200, 200);
    return canvas.toDataURL();
};

export {
    getImageUrl
}
