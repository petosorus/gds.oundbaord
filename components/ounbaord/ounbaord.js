'use strict';

(function () {
    customElements.define(
        "s-ounbaord",
        class extends HTMLElement {
            jouant = false;

            constructor() {
                super();
                const template = document.getElementById(
                    "m-ounbaord",
                ).content;
                
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(template.cloneNode(true));
            }

            connectedCallback() {
                setTimeout(() => {
                    const button = this.shadowRoot.querySelectorAll(".playButton")[0];
                    button.addEventListener("click", () => {
                        if (!this.jouant) {
                            this.jouerSon();
                        }
                    });
                    document.addEventListener('jouant', () => { 
                        this.jouant = true 
                    });
                    document.addEventListener('stoppey', () => {
                        this.jouant = false
                    });
                });
            }

            jouerSon() {
                const sonAttribut = this.getAttribute("sound");
                const son = new Audio(sonAttribut);
                document.dispatchEvent(new Event('jouant'));
                son.play()
                son.onended = () => document.dispatchEvent(new Event('stoppey'));
            }
        },
    );
})();