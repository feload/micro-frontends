const langs = {
    en: 'Click me!',
    sp: 'Pícale aquí!',
    du: 'Klick hier!'
}

class BlueButton extends HTMLElement {

    static get observedAttributes () {
        return ['lang'];
    }

    constructor() {
        super();
    }

    render () {
        const lang = this.getAttribute('lang') || 'en';
        const quote = langs[lang];
        this.innerHTML = `<button type="button">${quote}</button>`;

        this.addEvents();
    }

    addEvents () {
        this.firstChild.addEventListener('click', this.click)
    }

    click () {
        console.log('click')
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        this.render();
    }

    connectedCallback() {
        this.render();
    }
}

window.customElements.define('blue-button', BlueButton);