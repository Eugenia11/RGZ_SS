let arrayOfColors = [];
let arrayOfSizes = [
    { 'symbol': 'S', 'value': '50px' },
    { 'symbol': 'M', 'value': '100px' },
    { 'symbol': 'L', 'value': '200px' }
];

let randColor = (numberOfColors) => {
    for (let i = 0; i < numberOfColors; i++) {
        let r = Math.floor(Math.random() * (256));
        let g = Math.floor(Math.random() * (256));
        let b = Math.floor(Math.random() * (256));
        let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        arrayOfColors.push({ 'number': i, 'color': color });
    }
}

let randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

let DivObject =  () => {
    let numberOfColors = prompt('Input number of colors', '');
    let size = prompt('Input size of cells (S, M, L)', '').toUpperCase();
    randColor(numberOfColors);
    let numberOfCells = prompt('Input number of cells', '');

    for (let i = 0; i < numberOfCells; i++) {
        this.div = document.createElement("div");
        document.body.appendChild(this.div);

        this.div.style.width = arrayOfSizes.find(s => s.symbol === size).value;
        this.div.style.height = arrayOfSizes.find(s => s.symbol === size).value;

        this.div.className = "panel";

        this.div.style.top = parseInt(100 * randomNumber(0, 1)) + "%";
        this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";

        this.div.style.backgroundColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)].color;

        if (parseInt(this.div.style.top) < 0 || parseInt(this.div.style.top) > 100) {
            this.div.style.top = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
        }
        if (parseInt(this.div.style.left) < 0 || parseInt(this.div.style.left) > 100) {
            this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
        }
    }

}