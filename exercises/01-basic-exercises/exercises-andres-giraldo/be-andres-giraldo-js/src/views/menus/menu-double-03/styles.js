import { css } from 'lit'

export const menuStyles = css`
    :host {
        --menu-bg: rgba(255, 255, 255, 0.9);
        --menu-hover: rgba(255, 255, 255, 0.95);
        --text-color: #333;
        --accent-color: #4a90e2;
        --shadow-color: rgba(0, 0, 0, 0.1);
        --transition-speed: 0.3s;
        display: block;
    }

    .menu-container {
        padding: 1rem;
        background: var(--menu-bg);
        backdrop-filter: blur(10px);
        box-shadow: 0 4px 6px var(--shadow-color);
    }

    .menu {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1rem;
        transition: all var(--transition-speed) ease;
    }

    .menu-item {
        position: relative;
    }

    .menu-button, .menu-item a {
        color: var(--text-color);
        text-decoration: none;
        padding: 0.75rem 1rem;
        display: block;
        font-size: 1rem;
        border: none;
        background: none;
        cursor: pointer;
        transition: all var(--transition-speed) ease;
    }

    .menu-button:hover, .menu-item a:hover {
        background: var(--menu-hover);
        color: var(--accent-color);
        transform: translateY(-2px);
    }

    .submenu {
        position: absolute;
        top: 100%;
        left: 0;
        background: var(--menu-bg);
        min-width: 200px;
        list-style: none;
        padding: 0.5rem 0;
        margin: 0;
        box-shadow: 0 4px 6px var(--shadow-color);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all var(--transition-speed) ease;
        backdrop-filter: blur(10px);
        border-radius: 4px;
    }

    .submenu.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }

    .hamburger {
        display: none;
        flex-direction: column;
        gap: 4px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 1rem;
    }

    .hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background: var(--text-color);
        transition: all var(--transition-speed) ease;
    }

    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }

        .menu {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--menu-bg);
            padding: 1rem;
        }

        .menu.open {
            display: flex;
        }

        .submenu {
            position: static;
            box-shadow: none;
            padding-left: 1rem;
            transform: none;
        }

        .menu-item {
            width: 100%;
        }

        .submenu.open {
            display: block;
            margin-left: 1rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`
