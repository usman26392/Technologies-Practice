
// practical example
class elementClassToggler {
    constructor(elementId, className) {
      this.element = document.getElementById(elementId);
      this.className = className;
      this.element.addEventListener('click', this.toggleClass.bind(this) );
    }
  
    toggleClass() {
      this.element.classList.toggle(this.className);
    }
  }
  
  const maintitle = new elementClassToggler('main-title', 'red-text');
  const maintitle2 = new elementClassToggler('main-title2', 'red-text');