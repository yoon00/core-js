class MyElement extends HTMLElement{

    count = 0;

    constructor(){
        super();
    }

    connectedCallback(){
        console.log('mount');
    }

    disconnetedCallback(){
        console.log('unmount');
    }

    static get observedAttributes(){
        return ['data-value']
    }

    attributeChangedCallback(name, oldValue, newValue){
        if(name == 'data-value'){
            this.render();
        }
        console.log(name, oldValue, newValue);
    }

    attachEvent(){
        this.addEventListener('click', this.handleClick);
    }

    render(){
        console.log(this);
        this.innerHTML = ++this.count; 
    }
}

customElements.define('my-element', MyElement);

// const element = document.querySelector('my-element');
// document.body.append(element)

class HelloButton extends HTMLButtonElement{
    constructor(){
        super()
    }
}

customElements.define('hello-button', HelloButton, { extends : 'button'})