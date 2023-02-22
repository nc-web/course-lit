import { LitElement, html, css } from "lit"

export class TableMobile extends LitElement {
    render() {
        return html`
            <div>
                <table class="table">
                    <thead class="table__header">
                        <tr class="table__header-title">
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Rol</th>
                            <th>Fecha</th>
                            <th>Accion</th>
                        </tr>
                    </thead>
                    <tbody class="table__body">
                        <tr class="table__body-title">
                            <td data-titulo="nombre">Harry</td>
                            <td data-titulo="apellido">Herrera</td>
                            <td data-titulo="email">Harrinson@gmail</td>
                            <td data-titulo="rol">Admin</td>
                            <td data-titulo="fecha">02-12-2001</td>
                            <td>
                                <a href="#">editar</a>
                                <a href="#">borrar</a>
                            </td>
                        </tr>
                        <tr class="table__body-title">
                            <td data-titulo="nombre">Jenny</td>
                            <td data-titulo="apellido">Gomez</td>
                            <td data-titulo="email">jenny@gmail</td>
                            <td data-titulo="rol">Admin</td>
                            <td data-titulo="fecha">02-12-2001</td>
                            <td>
                                <a href="#">editar</a>
                                <a href="#">borrar</a>
                            </td>
                        </tr>
                        <tr class="table__body-title">
                            <td data-titulo="nombre">Andres</td>
                            <td data-titulo="apellido">Giraldo</td>
                            <td data-titulo="email">Andres@gmail</td>
                            <td data-titulo="rol">Admin</td>
                            <td data-titulo="fecha">02-12-2001</td>
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
      width: 100%;
    }

      th, td {
      padding: 7px;
    }

      td[data-titulo] {
        display: flex;
      }

      td[data-titulo]::before {
        content: attr( data-titulo );
        width: 5.6rem;
        color: red;
      }

      .table__header{
        display: none;
      }

      .table__header-title{
        display: flex;
        flex-direction: column;
        border: .063rem solid gray;
        padding: .063rem;
        margin-bottom: .35rem;
    }
      
      .table__body-title{
        display: flex;
        flex-direction: column;
        border: .063rem solid gray;
        padding: .063rem;
        margin-bottom: .35rem;
    }

    `
}

customElements.define('table-mobile', TableMobile)
