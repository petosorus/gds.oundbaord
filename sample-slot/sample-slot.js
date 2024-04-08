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
        },
    );
})();