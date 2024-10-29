let contact = document.createElement('template');
contact.innerHTML = /* html */ `
<style>
    @import url('./css/util/normalize.util.css');
    @import url('./css/util/reset.util.css');
    
    section {
        max-width: 100%;
        margin: 50px auto 0px;
        border-bottom: 3px solid #ccc;

        & > * {
            margin: 0 0 1em 0;
        }
    }

    figure {
        position: relative;
        width: 100vw;
        height: auto;   
        padding: 1.5em 2.5em;
        background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp9508285.jpg&f=1&nofb=1&ipt=20ff9a70165ce5f7907a57d2bfada610665b6346e18e642e9c5ce427294468d5&ipo=images) left -80px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        color: white;
  
        & figcaption {
            font-weight: 300;
            display: inline-block;
            font-weight: 100;
            font-size: 2.8125em;
            border-bottom: 1px solid rgba(255, 255, 255, 0.3);
            margin: 0 0 0.1em 0;
            padding: 0 0 0.4em 0;
        }
    }

    form {
        padding: .5em 2.5em 1em;
        max-width: 100%;
        display: block;

        & > * {
            margin: 0 0 0.25em 0;
            clear: both;
            display: inline-block;
            width: 100%;
        }
    }

    hr {
        margin: 0.5em 0;
        border: 0;
        height: 1px;
        background-color: var(--primary-color);
    }

    label {
        display: block;
        margin: 0 0 0.5em 0;
        color: var(--primary-color);
        font-size: 1em;
    }

    input, textarea {
        width: 100%;
        margin: 0 0 0.5em 0;
        border: 1px solid #ccc;
        padding: 6px 10px;
        font-size: 1em;

        &[type="submit"] {
            font-size: 1.0625em;
            display: inline-block;
            padding: 0.74em 1.5em;
            margin: 1.5em 0 0;
            color: #fff;
            text-transform: uppercase;
            background-color: var(--primary-color);
            font-weight: 300;
            cursor: pointer;
            &:hover {
                /* background-color: #5f7db6; */
                filter: grayscale(0.3);
            }
        }

        &:focus {
            border-color: black;
        }
    }
</style>

<section>
    <figure>
        <figcaption>Свържете се с нас</figcaption>
    </figure>
    <form>
        <article>
            <label for="ime">Име</label>
            <input type="text" name="ime" placeholder="Иван" />
        </article>
        <article>
            <label for="familiq">Фамилия</label>
            <input type="text" name="familiq" placeholder="Георгиев" />      
        </article>
        <hr />
        <article>
            <label for="feedback">Отзив:</label>
            <textarea rows="3" name="feedback"></textarea>
        </article>
        <article>
            <input class="btn btn-submit" type="submit" value="Submit" />
        </article>
    </form>  
</section>
`;


class ContactSection extends HTMLElement {
    constructor() {
        super();

        const root = this.attachShadow({ mode: 'open' });
        root.append(contact.content.cloneNode(true));
    }
}






customElements.define('contact-section', ContactSection);
