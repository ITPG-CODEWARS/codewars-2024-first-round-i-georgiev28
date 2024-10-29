let testimonial = document.createElement('template');
testimonial.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');
    section {
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 5em 0;
        background-color: white;
    }

    article {
        font-size: 1rem;
        width: 1100px;
        max-width: 70%;
    }

    div {
        display: block;
        margin: 0;
        float: left;
        height: 280px;        
    }

    slot[name="title"] {
        margin-top: 0;
        font-size: 40px;
        line-height: 50px;
        font-weight: 300;
        color: var(--primary-color);
        text-align: center;
    }

    @media only screen and (min-width: 650px) {
        div {
            float: left;
            width: 50%;
            height: 200px;
        }
    }
    @media only screen and (min-width: 1000px) {
        div {
            width: 33.3333333333%;
            height: 280px;
        }
    }

</style>

<section>
    <article>
        <div>
                <slot name="title"></slot>
        </div>
        <slot></slot>
      </article>
</section>



`;

class TestimonialSection extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.append(testimonial.content.cloneNode(true));
    }
}


let quote = document.createElement('template');
quote.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');

    blockquote {
        display: block;
        margin: 0;
        color: #fff;
        float: left;
        height: 280px;
        background-color: var(--primary-color);
        &:nth-child(n+2) {
            padding: 1.5em;
        }
    }

    p {
        margin: 0;
        font-size: 16px;
        line-height: 28px;
        font-weight: 300;

        &::before, &::after {
            content: "“"
        }
    }
    cite {
        display: block;
        margin-top: 2em;
        font-size: 14px;
        font-weight: 600;
        font-style: normal;
    }


    @media only screen and (min-width: 650px) {
        blockquote {
            float: left;
            width: 50%;
            height: 200px;
        }
    }
    @media only screen and (min-width: 1000px) {
        blockquote {
            width: 33.3333333333%;
            height: 280px;
        }
    }

</style>

<blockquote>
    <p><slot></slot></p>  
    <cite>ChatGPT</cite>
</blockquote>
`;



class TestimonialQuote extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.append(quote.content.cloneNode(true));
    }
}









customElements.define('testimonial-section', TestimonialSection);
customElements.define('testimonial-quote', TestimonialQuote);
