import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Router } from '@vaadin/router';
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
                    <title>view-dashboard</title>
                    <path
                      d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
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
      justify-content: center;
      align-items: center;
      gap: 0.2rem;
    }

    .menu__body-nav-item {
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
