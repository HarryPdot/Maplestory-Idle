template.innerHTML = `
    <style>

    </style>

    <img draggable= "false"/>

`
class Equipment extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(template.content.cloneNode(true));
        shadow.querySelector('img').src = this.getAttribute('equipSrc')
    }
}

window.customElements.define('ms-equip', Equipment)