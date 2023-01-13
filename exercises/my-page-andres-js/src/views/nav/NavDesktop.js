
import { LitElement, html, css } from 'lit'

import Logo from '/img/logo.jpeg'

export class NavDesktop extends LitElement {

    render() {
        return html`
            <nav class='nav'>
                <div class='nav__logo'>
                    <img class='nav__logo-img' src=${Logo} />
                    <h4 class='nav__logo-title'>Andres Giraldo</h4>
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
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Tecnolgies</a></li></ul>
                    <ul class='nav__menu-ul'><li class='nav__menu-li'><a class='nav__menu-a'>Projects</a></li></ul>
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
            background-color: #616161;
            padding: .5rem;
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
        }

        .nav__logo-title {
            color: #FFFFFF;
            margin-left: 1rem;
        }
    `
}

customElements.define('nav-desktop', NavDesktop)