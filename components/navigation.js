let navbar = document.createElement('template');
navbar.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');
    nav {
        position: absolute;
        width: 100%;
        z-index: 1001;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 11px 0 6px 0;
        font-size: 2.5vmin;
        background-color: #ededed;
    }

    hr {
        position: absolute;
        width: 100%;
        height: 5px;
        z-index: 1001;
        background: var(--primary-color);
        top: 0;
    }
    img {
        height: 2.5vmin;
        width: auto;
        margin: 0 1em;
        align-self: center;
        justify-content: center;
        justify-self: start;
        padding: 0;
    }
    section {
        flex: 0 0 auto;
    }
</style>
<nav>
    <hr />
    <img src="./static/logo.svg" alt="БДЖ">
    <section>
        <slot></slot>
    </section>
</nav>
`;


class Navigation extends HTMLElement {
    constructor() {
        super();
        const root = this.attachShadow({ mode: 'open' });


        root.append(navbar.content.cloneNode(true));
      }

      connectedCallback() {
      }
}







let navlink = document.createElement('template');
navlink.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');

    /* Ako tozi element e markiran kato aktiven highlight + otkaji klikove */
    :host([active]) a {
        color: var(--primary-color) !important;
        pointer-events: none;
    }

    a  {
        border-left: 2px solid var(--primary-color);
        padding: 0 clamp(3em, 20px, 2.5vmin);
        position: relative;
        text-align: center;
        font-weight: 600;
        color: black;
        &:hover {
            color: var(--primary-color);
            cursor: pointer;
        }              
    }
</style>
<a href="#">
    <slot></slot>
</a>
`;



class Navlink extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.append(navlink.content.cloneNode(true));
      }

    static get observedAttributes() {
        return ['link'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'link') {
          this.updateLink(newValue);
        }
    }

      updateLink(link) {
        this.shadowRoot.querySelector('a').setAttribute('href', link);
      }
}

customElements.define('nav-bar', Navigation);
customElements.define('nav-link', Navlink);