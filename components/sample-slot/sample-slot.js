'use strict';

(function () {
    customElements.define(
        "sample-element-slots",
        class extends HTMLElement {
            constructor() {
                super();
                const template = document.getElementById(
                    "sample-element-slots-template",
                ).content;
                
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(template.cloneNode(true));
            }

            connectedCallback() {
                setTimeout(() => {
                    const button = this.shadowRoot.querySelectorAll(".playButton")[0];
                    button.addEventListener("click", () => {
                        console.log('prout');
                        this.playSound();
                    });
                });
            }

            playSound() {
                const sonAttribut = this.getAttribute("sound");
                const son = new Audio(sonAttribut);
                son.play();
            }
        },
    );
})();