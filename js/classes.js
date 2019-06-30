class Class {
    constructor(domElement) {
      this.domElement = domElement; // ".article"
      this.expandButton = this.domElement.querySelector('.expandButton');
      this.expandButton.innerText = 'expand';
      // ES6 
      this.expandButton.addEventListener('click', () => { this.expandArticle() });
      // ES5 
      // this.expandButton.addEventListener("click", this.expandArticle.bind(this));
    }
  
    expandArticle() {
      this.domElement.classList.toggle('className-open');
    }
  }
  
  let articles = document.querySelectorAll('.className').forEach( className => {
    new Class(className);
  });