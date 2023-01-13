
import { LitElement, html, css } from 'lit'

//Logo
import LogoNC from '/img/logo.png'

export class NavDesktop extends LitElement {
    render() {
        return html`
            <nav class='nav'>


                <div class='nav__logo'>
                    <img class='nav__logo-img' src=${LogoNC} />
                    <h4 class='nav__logo-title'> Jenny Gómez </h4>
                </div>

                <div>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>1</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>2</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>3</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>4</a></li></ul>
                </div>

                <div class='nav__menu'>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Home</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Studies</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Tecnologies</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Project</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Contact Us</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Footer</a></li></ul>
                </div>
            </nav>
        `
    }

    static styles = css`
        :host {
            display: block;
            margin: 0; 
            padding: 0;
        }

        .nav {
            display: flex;
            justify-content: space-between;
            padding: 1.5rem;
            background-color: #616161;
        }

        .nav__logo {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .nav__logo-img {
            border-radius: 50%;
            width: 3rem;
            height: 3rem;
            background-color: #3e126966;
        }

        .nav__logo-title {
            color: #FFFFFF;
            margin-left: 1rem;
        }
    `
}

customElements.define('nav-desktop', NavDesktop)