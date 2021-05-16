let arrayOfColors = [];
let arrayOfSizes = [
    { 'symbol': 'S', 'value': '50px' },
    { 'symbol': 'M', 'value': '100px' },
    { 'symbol': 'L', 'value': '200px' }
];

let randColor = (numberOfColors) => {
    for (let i = 0; i < numberOfColors; i++) {
        let r = Math.floor(Math.random() * (255));
        let g = Math.floor(Math.random() * (255));
        let b = Math.floor(Math.random() * (255));
        let color = "rgb(" + r + ", " + g + ", " + b + ")";
        arrayOfColors.push({ 'number': i, 'color': color });
    }
}

let randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
}

let DivObject = () => {
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

        // this.div.id = 

        if (parseInt(this.div.style.top) < 0 || parseInt(this.div.style.top) > 100) {
            this.div.style.top = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
        }
        if (parseInt(this.div.style.left) < 0 || parseInt(this.div.style.left) > 100) {
            this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
        }
    }

}

let Calculate = () => {
    let divs = document.getElementsByClassName("panel");
    for (let i of divs) {
        for (let j of divs) {
            if (i == j) {
                continue;
            } else {
                let arrayOfX = [];
                let arrayOfY = [];
                arrayOfX.push({
                    'x1': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().bottom)),
                    'x2': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().top)),
                    'x3': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().top)),
                    'x4': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().bottom)),
                })
                arrayOfY.push({
                    'y2': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().left)),
                    'y1': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().left)),
                    'y3': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().right)),
                    'y4': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().right)),
                })
                arrayOfX.push({
                    'x1': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().bottom)),
                    'x2': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().top)),
                    'x3': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().top)),
                    'x4': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().bottom)),
                })
                arrayOfY.push({
                    'y1': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().left)),
                    'y2': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().left)),
                    'y3': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().right)),
                    'y4': Math.abs(parseInt(i.getBoundingClientRect().left) - parseInt(j.getBoundingClientRect().right)),
                })
                arrayOfX.push({
                    'x1': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().bottom)),
                    'x2': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().top)),
                    'x3': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().top)),
                    'x4': Math.abs(parseInt(i.getBoundingClientRect().top) - parseInt(j.getBoundingClientRect().bottom)),
                })
                arrayOfY.push({
                    'y1': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().left)),
                    'y2': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().left)),
                    'y3': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().right)),
                    'y4': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().right)),
                })
                arrayOfX.push({
                    'x1': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().bottom)),
                    'x2': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().top)),
                    'x3': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().top)),
                    'x4': Math.abs(parseInt(i.getBoundingClientRect().bottom) - parseInt(j.getBoundingClientRect().bottom)),
                })
                arrayOfY.push({
                    'y1': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().left)),
                    'y2': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().left)),
                    'y3': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().right)),
                    'y4': Math.abs(parseInt(i.getBoundingClientRect().right) - parseInt(j.getBoundingClientRect().right)),
                })

                let minX = arrayOfX[0].x1;

                for (let k of arrayOfX) {
                    let arr = Object.values(k);
                    let localMin = Math.min(...arr);
                    if (localMin < minX) {
                        minX = localMin;
                    }
                }

                let minY = arrayOfY[0].y1;

                for (let k of arrayOfY) {
                    let arr = Object.values(k);
                    let localMin = Math.min(...arr);
                    if (localMin < minY) {
                        minY = localMin;
                    }
                }
            }

        }
    }
}