
import { html, css, LitElement } from 'lit'

export class NavDesktopHorizontalBasic01 extends LitElement {
  static properties = {}

  /*
    constructor () {
      super()
    }
 */

  render () {
    return html`
        <nav class="nav">
            <div class="nav__t">
                 <h4 class="nav__t-text">EXERCISES CALCULATOR - LIT</h4>
            </div>

            <div class="nav__m">
                <ul class='nav__m-ul'><a href="../../../index.html" class='nav__m-a'> Home </a></ul>
                <ul class='nav__m-ul'><a href='../../../pages/developers.html' class='nav__m-a' >Developers</a></ul>
            </div>
        </nav>
    `
  }

  static styles = css`
    :host {
        display: block;
    }

    a {
        text-decoration: none;
    }

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .5rem;
        background-color: #BDBDBD;
        box-shadow: 1px 2px 1px 1px rgba(0, 0, 0, 0.1);
    }

    .nav__t {
        color: #1E88E5;
    }

    .nav__m {
        font-size: .9rem;
        display: flex;
        align-items: center;
        color: #424242;
    }

    .nav__m-ul {
        padding: .4rem .8rem;
        margin: 0 .5rem;
        cursor: pointer;
        transition: .3s;
    }

    .nav__m-ul:hover {
        background-color: #2196F3;
        border-color: #646cff;
        filter: drop-shadow(0 0 2em #325cffaa);
        border-radius: .2rem;
    }

    .nav__m-ul:hover .nav__m-a {
        color: #E0E0E0;
    }

    .nav__m-ul:focus,
    .nav__m-ul:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
 `
}

customElements.define('nav-desktop-horizontal-basic-01', NavDesktopHorizontalBasic01)
