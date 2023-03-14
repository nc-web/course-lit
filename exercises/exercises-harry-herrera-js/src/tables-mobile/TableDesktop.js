import { LitElement, html, css } from "lit"

export class TableDesktop extends LitElement {
    render() {
        return html`
            <div>
                <table class="table">
                    <thead class="table__header">
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Fecha</th>
                            <th>Nivel</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr>
                            <td>Harry</td>
                            <td>Herrera</td>
                            <td>Harrinson@gmail</td>
                            <td>Admin</td>
                            <td>02-12-2001</td>
                            <td>
                                <a href="#">editar</a>
                                <a href="#">borrar</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Jenny</td>
                            <td>Gomez</td>
                            <td>jenny@gmail</td>
                            <td>Admin</td>
                            <td>02-12-2001</td>
                            <td>
                                <a href="#">editar</a>
                                <a href="#">borrar</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Andres</td>
                            <td>Giraldo</td>
                            <td>Andres@gmail</td>
                            <td>Admin</td>
                            <td>02-12-2001</td>
                            <td>
                                <a href="#">editar</a>
                                <a href="#">borrar</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `
    }

    static styles = css`
    :host {
        margin: 0;
        padding: 0;
    }

    .table {
        border-collapse: collapse;
        background-color: green;
    }

    .th, td {
        padding: 7px;
    }
    `
}

customElements.define('table-desktop', TableDesktop)

