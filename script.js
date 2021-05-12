let arrayOfColors = [];
let arrayOfSizes = [
    {'S': '50px'},
    {'M': '100px'},
    {'L': '200px'}
];

let randColor = () => {
    let numberOfColors = prompt('Input number of colors', '');

    for (let i = 0; i < numberOfColors; i++) {
        let r = Math.floor(Math.random() * (256));
        let g = Math.floor(Math.random() * (256));
        let b = Math.floor(Math.random() * (256));
        let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        arrayOfColors.push({'number': i, 'color': color});
    }
    //let element = document.querySelector('.example');
    //element.style.background = color;

}