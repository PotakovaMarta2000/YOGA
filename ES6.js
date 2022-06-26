// Создала класс options
class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    // Создала новый объект через класс

    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }
}

// Вызвала его метод и получила элемент на странице

const item = new Options(300, 350, "red", 14, "center");

item.createDiv();

