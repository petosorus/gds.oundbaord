'use strict';

(function () {
    customElements.define(
        "s-oundbaord",
        class extends HTMLElement {
            jouant = false;
            playIcon
            stopIcon
            son

            constructor() {
                super();
                const template = document.getElementById(
                    "m-oundbaord",
                ).content;
                
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(template.cloneNode(true));

                this.playIcon = this.shadowRoot.querySelectorAll(".play")[0];
                this.stopIcon = this.shadowRoot.querySelectorAll(".stop")[0];
            }

            connectedCallback() {
                setTimeout(() => {

                    const button = this.shadowRoot.querySelectorAll(".boutton-lecture")[0];
                    
                    button.addEventListener("click", () => {
                        if (!this.jouant) {
                            this.stopIcon.style.display = 'block'
                            this.playIcon.style.display = 'none'

                            this.jouerSon();
                        } else {
                            this.son.pause()
                            this.son.currentTime = 0
                            this.apresArretSon()
                        }
                    });
                    document.addEventListener('jouant', () => {
                        if (!document.merdier) {
                            this.jouant = true 
                        }
                    });
                    document.addEventListener('stoppey', () => {
                        if (!document.merdier) {
                            this.jouant = false
                        }
                    });
                });
            }

            jouerSon() {
                const sonAttribut = this.getAttribute("cheminduson");
                this.son = new Audio(sonAttribut);
                this.son.playbackRate = document.querySelector('input[name="vitesse"]:checked').value;
                document.dispatchEvent(new Event('jouant'));
                this.son.play()
                this.son.onended = () => {
                    this.apresArretSon()
                }
            }

            apresArretSon() {
                this.playIcon.style.display = 'block'
                this.stopIcon.style.display = 'none'
                document.dispatchEvent(new Event('stoppey'));
            }
        },
    );
})();