'use strict';

(function () {
    class Sample extends HTMLElement {
        constructor() {
            // establish prototype chain
            super();

            // attaches shadow tree and returns shadow root reference
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/attachShadow
            const shadow = this.attachShadow({ mode: 'open' });

            // creating a container for the editable-list component
            const sampleContainer = document.createElement('div');

            // get attribute values from getters
            const title = this.title;

            // adding a class to our container for the sake of clarity
            sampleContainer.classList.add('sample-class');

            sampleContainer.innerHTML = `
                <h1>${title}</h1>
            `;

            shadow.appendChild(sampleContainer);
        }

        // fires after the element has been attached to the DOM
        connectedCallback() {
            
        }

        // gathering data from element attributes
        get title() {
            return this.getAttribute('title') || '';
        }
    }

    // let the browser know about the custom element
    customElements.define('sample-element', Sample);
})();