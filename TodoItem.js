// TodoItem.js

const style = `
    <style>                
        input[type=checkbox] {
            transform: scale(1.25);
            vertical-align: baseline;
            margin: 0;
            padding: 0;
            margin-right: 1.5em;
            accent-color: var(--secondary-color);
        }

        .description {
            vertical-align: sub;
            color var(--text-color-light);
            font-size: 0.75em;
            font-weight: 300;
            float: right;
        }
    </style>
`;

const html = `
    <input type="checkbox" class="TodoItem" id="todo-1">
        <label for="todo-1" data-checkbox-label>
            <slot/>
        </label>
        <span class="description">
            <slot name="description"></slot>
        </span>

    </input>
`;

const template = document.createElement("template");
template.innerHTML = style + html; 

class TodoItem extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.append(template.content.cloneNode(true));
        this.checkbox = shadow.querySelector("input[type=checkbox]");

    }
    static get observedAttributes() {
        return["checked"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log("Attribute changed", name, oldValue, newValue);
        if (name === "checked") { this.updateChecked(newValue); }
    }

    connectedCallback() {
        console.log("connected");
    }

    disconnectedCallback() {
        console.log("disconnected");
    }
    
    updateChecked(value) {
        if (value == null) {
            this.checkbox.checked = false; 
        }

        if (value == "true" || value == true) {
            this.checkbox.checked = false;
        }

        if (value == "false" || value == false) {
            this.checkbox.checked = true;
        }
    }
}

customElements.define("todo-item", TodoItem);