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
    let numberOfColors = Math.abs(Number(prompt('Input number of colors', '')));
    let size = prompt('Input size of cells (S, M, L)', '').toUpperCase();
    if (size == 'S' || size == 'M' || size == 'L') {
        randColor(numberOfColors);
        let numberOfCells = Math.abs(Number(prompt('Input number of cells', '')));
        for (let i = 0; i < numberOfCells; i++) {
            this.div = document.createElement("div");
            document.body.appendChild(this.div);

            this.div.style.width = arrayOfSizes.find(s => s.symbol === size).value;
            this.div.style.height = arrayOfSizes.find(s => s.symbol === size).value;

            this.div.className = "panel";

            this.div.style.top = parseInt(100 * randomNumber(0, 1)) + "%";
            this.div.style.left = parseInt(100 * Math.random() * (0, 1)) + "%";

            let obj = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];
            this.div.style.backgroundColor = obj.color;
            this.div.textContent = obj.number;

            if (parseInt(this.div.style.top) < 0 || parseInt(this.div.style.top) > 100) {
                this.div.style.top = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
            }
            if (parseInt(this.div.style.left) < 0 || parseInt(this.div.style.left) > 100) {
                this.div.style.left = parseInt(100 * Math.random() * (0, 1) + 0 - 15) + "%";
            }
        }
    } else {
        alert('Invalid size');
    }
}

let Calculate = () => {
    let distance = Math.abs(Number(prompt('Input disatnce between cells', '')));
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

                if (minX < distance && minY < distance) {
                    let numberI = arrayOfColors.find(e => e.color === i.style.backgroundColor).number;
                    let numberJ = arrayOfColors.find(e => e.color === j.style.backgroundColor).number;
                    if (numberI + 1 == numberJ) {
                        i.style.backgroundColor = j.style.backgroundColor;
                        i.textContent = numberJ;
                    }
                }
            }
        }
    }
}

let getAverageRGB = () => {
    let imgEl = document.getElementById('i');
    let blockSize = 5;
    let defaultRGB = { r: 0, g: 0, b: 0 }; 
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    let data;
    let i = -4;
    let rgb = { r: 0, g: 0, b: 0 };
    let count = 0;

    if (!context) {
        return defaultRGB;
    }

    let height = context.height = canvas.height = imgEl.height;
    let width = context.width = canvas.width = imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
        data = context.getImageData(0, 0, width, height);
    } catch (e) {
        return defaultRGB;
    }

    let length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}

let imageToBase64 = () => {
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    async function convert() {
        const file = document.querySelector('#myfile').files[0];
        res = await toBase64(file);

        let img = document.getElementById('i');
        img.style.display = "none";
        img.src = res;
    }
    convert();
}
const getAverage = () => {
    let rgb = getAverageRGB();
    document.body.style.backgroundImage = null;
    document.body.style.backgroundColor = 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
}