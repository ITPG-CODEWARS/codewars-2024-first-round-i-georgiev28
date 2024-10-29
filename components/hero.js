let hero = document.createElement('template');
hero.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');

    header {
        position:relative;
        overflow:hidden;
        display:flex;
        flex-wrap: wrap;
        align-content: flex-end;
        height:50vw;
        min-height:400px;
        max-height:550px;
        min-width:300px;
        color:#eee;
        &::before {
            content:"";
            width:100%;
            height:200%;
            position:absolute;
            top:0;
            left:0;
            -webkit-backface-visibility: hidden;
            -webkit-transform: translateZ(0); 
            backface-visibility: hidden;
            transform: translateZ(0) translateY(-400px);
            background-size: cover;
            background-attachment:fixed;
            animation: grow 180s linear 10ms infinite both;
            transition:all 0.4s ease-in-out;
            z-index:-2
        }
        &::after {
            content:"";
            width:100%;
            height:100%;
            position:absolute;
            bottom:0;
            left:0;
            z-index:-1;
            background: linear-gradient(to bottom, rgba(0,0,0,0.12) 40%,rgba(27,32,48,1) 100%);
        }
    }
    section {
        width:100%;
        padding:0 0 clamp(2px, 5%, 10px) 0;
        text-align:center;
        text-shadow:0 2px 3px rgba(0,0,0,0.2);
    }
    figure {
        font-size: 0.7em;
    }
    img {
        display:inline-block;
        width:50px;
        height: auto;
        padding: 5px 0;

        /* Znam che tova izglejda kato magiq, zashtoto e magiq  */
        /* https://codepen.io/sosuke/pen/Pjoqqp */
        filter: invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%);
    }
    @keyframes grow{
        50% { transform: scale(1.2) translateY(0px)}
        100% { transform: scale(1.2) translateY(130px); }
    }
</style>
<header>
    <section>
        <h1><slot></slot></h1>
        <figure>
            <img src="./static/logo.svg"/>
            <figcaption>
                <i>- Снимка от интернет -</i>
            </figcaption>
        </figure>
    </section>
</header>
`;


class HeroSection extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.append(hero.content.cloneNode(true));
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

        let backgroundStyle = document.createElement('style');
        backgroundStyle.textContent = /* css */`
        header::before {
            background:#1B2030 url(${imageUrl}) 50% 25% no-repeat;
            background-size: cover;
        }`;
        this.shadowRoot.appendChild(backgroundStyle);
    }
}

customElements.define('hero-section', HeroSection);
