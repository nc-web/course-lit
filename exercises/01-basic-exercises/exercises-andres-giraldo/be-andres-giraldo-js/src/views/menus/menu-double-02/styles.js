import { css } from 'lit'

export const styles = css`
:host {
    --menu-bg: rgba(255, 255, 255, 0.1);
    --menu-hover: rgba(255, 255, 255, 0.2);
    --menu-text: #ffffff;
    --menu-border: rgba(255, 255, 255, 0.18);
    --submenu-bg: rgba(255, 255, 255, 0.15);
    --transition-speed: 0.3s;
    --border-radius: 12px;
    display: block;
    position: fixed;
    width: 100%;
    z-index: 1000;
}

.menu-container {
    backdrop-filter: blur(12px);
    background: var(--menu-bg);
    border: 1px solid var(--menu-border);
    padding: 1rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.menu {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.menu-item {
    position: relative;
    color: var(--menu-text);
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: all var(--transition-speed) ease;
}

.menu-item:hover {
    background: var(--menu-hover);
}

.submenu {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 200px;
    background: var(--submenu-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--menu-border);
    border-radius: var(--border-radius);
    padding: 0.5rem;
    margin-top: 0.5rem;
    opacity: 0;
    transform: translateY(-10px);
    pointer-events: none;
    transition: all var(--transition-speed) ease;
}

.menu-item:hover .submenu {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
}

.submenu-item {
    padding: 0.5rem 1rem;
    color: var(--menu-text);
    border-radius: var(--border-radius);
    transition: background var(--transition-speed) ease;
}

.submenu-item:hover {
    background: var(--menu-hover);
}

.hamburger {
    display: none;
    color: var(--menu-text);
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .hamburger {
    display: block;
    }

    .menu {
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
    }

    .menu.open {
    display: flex;
    }

    .submenu {
    position: static;
    opacity: 1;
    transform: none;
    pointer-events: all;
    margin-top: 0.5rem;
    display: none;
    }

    .menu-item.active .submenu {
    display: block;
    }
}
`
