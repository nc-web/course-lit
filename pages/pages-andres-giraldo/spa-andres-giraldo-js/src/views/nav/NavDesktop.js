
import { LitElement, html, css } from 'lit';

// Images
const Logo = new URL('../../../assets/img/logo128.png', import.meta.url).href;

export class NavDesktop extends LitElement {
  render() {
    return html`
      <nav class="nav">
        <div class="nav__logo">
          <img class="nav__logo-img" src=${Logo} alt="Logo" />
          <h4 class="nav__logo-title">Andres Giraldo</h4>
        </div>
        <div>
          <div class="nav__menu-top">
            <ul class="nav__menu-top-ul">
              <li class="nav__menu-top-li">
                <a class="nav__menu-top-a" href="#">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <ul class="nav__menu-top-ul">
              <li class="nav__menu-top-li">
                <a class="nav__menu-top-a" href="#">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <ul class="nav__menu-top-ul">
              <li class="nav__menu-top-li">
                <a class="nav__menu-top-a" href="#">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <ul class="nav__menu-top-ul">
              <li class="nav__menu-top-li">
                <a class="nav__menu-top-a" href="#">
                  <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="nav__menu-bottom">
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#section-header">Home</a>
              </li>
            </ul>
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#section-studies"
                  >Studies</a
                >
              </li>
            </ul>
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#">Tecnolgies</a>
              </li>
            </ul>
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#">Projects</a>
              </li>
            </ul>
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#">Contact Us</a>
              </li>
            </ul>
            <ul class="nav__menu-bottom-ul">
              <li class="nav__menu-bottom-li">
                <a class="nav__menu-bottom-a" href="#">Footer</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
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
      background: linear-gradient(180deg, #9e9e9e, 30%, #616161);
      padding: 0.5rem;
      box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
    }

    .nav__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 0.5rem;
    }

    .nav__logo-img {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
    }

    .nav__logo-title {
      color: #ffffff;
      margin-left: 1rem;
    }

    .nav__menu-top {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin: 0.5rem 0;
    }

    .nav__menu-top-ul {
      list-style: none;
      padding: 0.5rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
    }

    .nav__menu-top-ul:hover {
      background: linear-gradient(135deg, #f48fb1, #ec407a);
      filter: drop-shadow(0 0 1rem #325cffaa);
    }

    .nav__menu-top-a {
      text-align: center;
      color: #ffffff;
    }

    .nav__menu-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0.5rem 0;
    }

    .nav__menu-bottom-ul {
      list-style: none;
      padding: 0.5rem;
      margin: 0 0.5rem;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
    }

    .nav__menu-bottom-ul:hover {
      background: linear-gradient(135deg, #64b5f6, #1e88e5);
      filter: drop-shadow(0 0 1rem #ec407a);
    }

    .nav__menu-bottom-a {
      text-align: center;
      color: #ffffff;
    }
  `;
}

customElements.define('nav-desktop', NavDesktop);
