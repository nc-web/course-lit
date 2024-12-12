import { LitElement, html } from 'lit'
import { menuStyles } from './styles.js'

export class MenuComponent extends LitElement {
  static styles = menuStyles

  static properties = {
    isOpen: { type: Boolean, state: true },
    activeSubmenu: { type: String, state: true },
    menuItems: { type: Array }
  }

  constructor() {
    super()
    this.isOpen = false
    this.activeSubmenu = null
    this.menuItems = [
      { name: 'Home', link: '#' },
      {
        name: 'Products',
        items: [
          { name: 'Electronics', link: '#electronics' },
          { name: 'Clothing', link: '#clothing' },
          { name: 'Accessories', link: '#accessories' }
        ]
      },
      {
        name: 'Services',
        items: [
          { name: 'Consulting', link: '#consulting' },
          { name: 'Development', link: '#development' },
          { name: 'Support', link: '#support' }
        ]
      },
      {
        name: 'About',
        items: [
          { name: 'Company', link: '#company' },
          { name: 'Team', link: '#team' },
          { name: 'Mission', link: '#mission' }
        ]
      },
      { name: 'Contact', link: '#contact' }
    ]
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  toggleSubmenu(item) {
    this.activeSubmenu = this.activeSubmenu === item ? null : item
  }

  render() {
    return html`
            <nav class="menu-container" role="navigation">
                <button class="hamburger" @click=${this.toggleMenu} aria-label="Toggle menu">
                    <span></span><span></span><span></span>
                </button>
                
                <ul class="menu ${this.isOpen ? 'open' : ''}" role="menubar">
                    ${this.menuItems.map(item => html`
                        <li class="menu-item" role="none">
                            ${item.items ? html`
                                <button @click=${() => this.toggleSubmenu(item.name)}
                                        class="menu-button ${this.activeSubmenu === item.name ? 'active' : ''}"
                                        aria-haspopup="true"
                                        aria-expanded=${this.activeSubmenu === item.name}
                                        role="menuitem">
                                    ${item.name}
                                </button>
                                <ul class="submenu ${this.activeSubmenu === item.name ? 'open' : ''}" role="menu">
                                    ${item.items.map(subItem => html`
                                        <li role="none">
                                            <a href=${subItem.link} role="menuitem">${subItem.name}</a>
                                        </li>
                                    `)}
                                </ul>
                            ` : html`
                                <a href=${item.link} role="menuitem">${item.name}</a>
                            `}
                        </li>
                    `)}
                </ul>
            </nav>
        `
  }
}

customElements.define('menu-component', MenuComponent)
