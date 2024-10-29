let gallery = document.createElement("template");
gallery.innerHTML = /* html */ `
<style>
  @import url("./css/util/normalize.util.css");
  @import url("./css/util/reset.util.css");

  section {
    flex-direction: row;
    min-height: 100vh;
    overflow: hidden;
    display: flex;

    & > * {
      flex: 1 auto;
      flex-basis: 1;
      flex-grow: 1; 
      display: flex;
    }
  }

  @media only screen and (max-width: 900px) {
    section {
      flex-direction: column;
    }
  }
</style>

<!-- TODO: Modularize -->
<section>
  <gallery-element img="../static/green.jpg" link="vlak1.html">Class 37</gallery-element>
  <gallery-element img="../static/blue.jpg" link="vlak2.html">CSX AC6000CW</gallery-element>
  <gallery-element img="../static/red.jpg" link="vlak3.html">GE/Wabtec ET44AC</gallery-element>
</section>
`;


class ImageGallery extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: "open" });
        root.append(gallery.content.cloneNode(true));
      }
}







let photo = document.createElement("template");
photo.innerHTML = /* html */ `
<style>
    @import url("./css/util/normalize.util.css");
    @import url("./css/util/reset.util.css");
    
    article {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;


      background: #00529B;
      background-size: cover;
      background-position: center;
      background-position: 30%;

      box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
      transition: font-size 0.4s ease-in, flex 0.4s ease-in, background 0.2s, opacity 0.2s, filter linear 0.2s;

      -webkit-filter: brightness(63%) grayscale(43%) hue-rotate(25deg) saturate(74%);
      filter: brightness(63%) grayscale(43%) hue-rotate(25deg) saturate(74%);

      cursor: pointer;
      color: white;
      font-size: 20px;


      & > * {
        margin: 0;
        width: 100%;
        transition: all 0.5s;
        padding: 25px 0;
        flex: 0 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &.open {
        filter: brightness(63%);
        font-size: 40px;
        flex: 5;

        & a {
          transform: translateY(25%);
          opacity: 1;
          pointer-events: all !important;
        }

        & p {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
  
    p {
      text-transform: uppercase;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
      font-size: 2em;
      pointer-events: none;
      word-break: break-word;
      transform: translateY(-100%);
      opacity: 0;
    }
    
    a {
      width: auto;
      border: 1px solid white;
      display: inline-block;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      letter-spacing: 0.7px;
      padding: 10px 25px;
      cursor: pointer;
      pointer-events: none;
      transform: translateY(100%);
      opacity: 0;

      &:hover {
        box-shadow: inset 0 -100px 0 #696161;
      }
      &:focus-visible {
        outline: 2px solid white;
        border: 1px solid white;
        background: #fff;
      }
    }
</style>

<article>
  <p>
    <slot></slot>
  </p>
  <a href="#">ВИЖ ПОВЕЧЕ</a>
</article>
`;




class GalleryElement extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: "open" });
    root.append(photo.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ['img', 'link'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'img') {
      this.updateBackgroundImage(newValue);
    }
    if (name === 'link') {
      this.updateLink(newValue);
    }
  }

  connectedCallback() {
    this.shadowRoot.querySelector('article').addEventListener('click', function() {
      this.classList.toggle('open');
    });
  }

  updateBackgroundImage(imageUrl) {
    this.shadowRoot.querySelector('article').style.backgroundImage = `url(${imageUrl})`;
  }
  updateLink(link) {
    this.shadowRoot.querySelector('a').setAttribute('href', link);
  }

}



customElements.define("image-gallery", ImageGallery);
customElements.define("gallery-element", GalleryElement);
