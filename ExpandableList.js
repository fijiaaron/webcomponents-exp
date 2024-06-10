class ExapandableList extends HTMLUListElement {
    constructor() {
        super();
        this.style.position = "relative";
        
        this.toggleButton = document.createElement("button");
        this.toggleButton.style.position = "absolute";
        this.toggleButton.style.border = "none";
        this.toggleButton.style.background = "none";
        this.toggleButton.style.padding = 0;
        this.toggleButton.style.top = 0;
        this.toggleButton.style.left = "5px";
        this.toggleButton.style.cursor = "pointer";
        this.toggleButton.style.color = "tomato";
        this.toggleButton.innerText = "^";
        this.toggleButton.style.transform = "rotate(90deg)";

        this.appendChild(this.toggleButton);
    }

    connectedCallback() {
        console.log("connected: " +  this.className);
    }
}

customElements.define("expandable-list", ExapandableList, { extends: "ul"});