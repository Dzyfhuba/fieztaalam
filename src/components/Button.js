class Button extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <button>
                TEST
            </button>
        `;
    }
}

customElements.define('button-component', Button);
export default Button;