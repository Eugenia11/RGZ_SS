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

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

DivObject = function () {
    this.div = document.createElement("div");
    document.body.appendChild(this.div);
    this.div.className = "panel";
    this.div.style.top = parseInt(100 * randomNumber(0, 1)) + "%";
    this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
    this.div.style.backgroundColor = "hsla(" + parseInt(360 * Math.random()) + ", " + parseInt(100 * Math.random()) + "%, " + parseInt(100 * Math.random()) + "%, " + Math.random() + ")";
    if (parseInt(this.div.style.top) < 0 || parseInt(this.div.style.top) > 100) {
        this.div.style.top = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
    }
    if (parseInt(this.div.style.left) < 0 || parseInt(this.div.style.left) > 100) {
        this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
    }
}