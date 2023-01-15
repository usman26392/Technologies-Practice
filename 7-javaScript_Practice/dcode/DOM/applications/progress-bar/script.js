
class ProgressBar {
    constructor(element, initialValue = 0) {
        this.valueElm = element.querySelector(".progress-bar__value");
        this.fillElm = element.querySelector(".progress-bar__fill");
        this.setValueOfFill(initialValue);
    }
    setValueOfFill(newValue) {
        if(newValue < 0) {
            newValue = 0
        }
        if(newValue > 100) {
            newValue = 100
        }
        this.value = newValue;
        console.log(this.value = newValue);
        this.update();
    }
    update() {
        const percentage = this.value + "%";
        this.fillElm.style.width = percentage;
        this.valueElm.textContent = percentage;
        console.log(this.valueElm.textContent = percentage)
    }
}

const pb1 = new ProgressBar(document.querySelector(".progress-bar"), 75);