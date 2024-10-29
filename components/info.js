let info = document.createElement('template');
info.innerHTML = /* html */ `
<style>
  @import url('./css/util/normalize.util.css');
  @import url('./css/util/reset.util.css');
  main {
    width: 100%;
    display: block;
    padding: clamp(25px, 1em, 10%) 0;
  }

  main span {
    display: flex;
    width: 100%;
    text-decoration: none;
    font-size: 1.4em;
    text-transform: uppercase;
  }

  main span svg {
    width: 14px;
    display: block;
    margin: 10px auto;
  }
  main > div {
    align-items: center;
  }
  main article {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    main > div {
      display: flex;
      flex-wrap: wrap;
    }
  
    main > div {
      flex-basis: 50%;
    }
  }
  
  img {
    align-self: center;
    width: 1280px;
    height: auto;
    object-fit: cover;
  }
  
  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2.5rem;
  }
  
  slot[name="title"] {
    text-align: center;
    align-self: center;
    font-size: 1.5em;
    font-weight: 600;
    letter-spacing: 0.175rem;
    text-wrap: pretty;
  }
  
  slot[name="text"]{
    text-wrap: pretty;
    text-align: center;
    line-height: 1.6;
  }
</style>
<main>
    <div>
        <article>
            <img src="./static/greenmini.png" alt="image">
        </article>
        <div>
            <article>
            <slot name="title"></slot>
            <slot name="text"></slot>
                <span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 35" style="enable-background:new 0 0 22 35;" xml:space="preserve">
                  <polygon style="fill:#000000;" points="20.58,11.584 12.004,20.158 12.004,0 9.996,0 9.996,20.158 1.42,11.584 0,13.004 11,24 22,13.004"></polygon>
                </svg>
                </span>
            </article>
        </div>
    </div>
</main>
`;


class InfoSection extends HTMLElement {
  constructor() {
      super();
      
      const root = this.attachShadow({ mode: 'open' });
      root.append(info.content.cloneNode(true));
  } 
  static get observedAttributes() {
    return ['img'];
  } 
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'img') {
      this.updateBackgroundImage(newValue);
    }
  }
  updateBackgroundImage(imageUrl) {
    this.shadowRoot.querySelector('img').setAttribute('src', imageUrl);
  }
}





customElements.define('info-section', InfoSection);
