import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
// import { Router } from '@vaadin/router';
import { routes } from '../../../router/routes.js';

// Router
export const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);

@customElement('menu-vertical-desktop')
export class MenuVerticalDesktop extends LitElement {
  render() {
    return html`
      <div class="menu">
        <div class="menu__header">
          <h5>Menu vertical</h5>
          <h6>Desktop</h6>
        </div>
        <div class="menu__body">
          <nav class="menu__body-nav">
            <a href="${router.urlForPath('/')}">
              <div class="menu__body-nav-item">
                <div>
                  <svg
                    class="menu_body-nav-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>view-dashboard</title>
                    <path
                      d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
                    />
                  </svg>
                </div>
                <div>
                  <small class="menu_body-nav-item-name">DESKTOP 1</small>
                </div>
              </div>
            </a>

            <a href="${router.urlForPath('/')}">
              <div class="menu__body-nav-item">
                <div>
                  <svg
                    class="menu_body-nav-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>view-dashboard</title>
                    <path
                      d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
                    />
                  </svg>
                </div>
                <div>
                  <small class="menu_body-nav-item-name">DESKTOP 2</small>
                </div>
              </div>
            </a>

            <a href="${router.urlForPath('/clients')}">
              <div class="menu__body-nav-item">
                <div>
                  <svg
                    class="menu_body-nav-item-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <title>account-star</title>
                    <path
                      d="M15,14C12.33,14 7,15.33 7,18V20H23V18C23,15.33 17.67,14 15,14M15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12M5,13.28L7.45,14.77L6.8,11.96L9,10.08L6.11,9.83L5,7.19L3.87,9.83L1,10.08L3.18,11.96L2.5,14.77L5,13.28Z"
                    />
                  </svg>
                </div>
                <div>
                  <small class="menu_body-nav-item-name">CLIENTS</small>
                </div>
              </div>
            </a>
          </nav>
        </div>
        <div class="menu__footer">
          <small>Version 0.1 Beta</small>
        </div>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
      margin: 0;
      padding: 0;
    }

    .menu {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      background-color: #1976d2;
    }

    .menu__header {
      text-align: center;
    }

    .menu__body-nav-item {
      display: flex;
      justify-content: left;
      align-items: center;
      gap: 0.2rem;
      cursor: pointer;
    }

    .menu_body-nav-item-icon {
      width: 1.5rem;
      fill: #ffffff;
    }

    .menu_body-nav-item-name {
      color: #ffffff;
    }
  `;
}
