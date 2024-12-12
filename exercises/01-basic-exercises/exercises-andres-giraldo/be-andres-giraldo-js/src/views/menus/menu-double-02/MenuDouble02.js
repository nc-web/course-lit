import { LitElement, html } from 'lit'
import { styles } from './styles.js'

export class NavMenu extends LitElement {
  static styles = styles

  static properties = {
    isOpen: { type: Boolean },
    activeItem: { type: String }
  }

  constructor() {
    super()
    this.isOpen = false
    this.activeItem = null
  }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  toggleSubmenu(item) {
    this.activeItem = this.activeItem === item ? null : item
  }

  render() {
    return html`
    <div class="menu-container">
        <div class="hamburger" @click=${this.toggleMenu}>☰</div>
        <ul class="menu ${this.isOpen ? 'open' : ''}">
        <li class="menu-item">
            <span>Home</span>
        </li>
        
        <li class="menu-item ${this.activeItem === 'products' ? 'active' : ''}"
            @click=${() => this.toggleSubmenu('products')}>
            <span>Products</span>
            <ul class="submenu">
            <li class="submenu-item">Electronics</li>
            <li class="submenu-item">Clothing</li>
            <li class="submenu-item">Books</li>
            <li class="submenu-item">Accessories</li>
            </ul>
        </li>
        
        <li class="menu-item ${this.activeItem === 'services' ? 'active' : ''}"
            @click=${() => this.toggleSubmenu('services')}>
            <span>Services</span>
            <ul class="submenu">
            <li class="submenu-item">Consulting</li>
            <li class="submenu-item">Development</li>
            <li class="submenu-item">Support</li>
            <li class="submenu-item">Training</li>
            </ul>
        </li>
        
        <li class="menu-item">
            <span>About</span>
        </li>
        
        <li class="menu-item">
            <span>Contact</span>
        </li>
        </ul>
    </div>
    `
  }
}

customElements.define('nav-menu', NavMenu)
