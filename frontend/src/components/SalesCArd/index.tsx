import { registerLocale, setDefaultLocale } from "react-datepicker";
import pt from 'date-fns/locale/pt';
registerLocale('pt-BR', pt);

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificationButton from '../NotificationButton';
import './style.css';
import { useState } from "react";

function SalesCard() {

  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState (min);
  const [maxDate, setMaxDate] = useState (new Date());//pega data atual do sistema
  //também poderia ser assim:  const max = new Date(); ....useState (max);


  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="pt-BR"
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="pt-BR"
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#001</td>
              <td className="show576">01/10/2022</td>
              <td>Thima</td>
              <td className="show992">30</td>
              <td className="show992">15</td>
              <td>R$ 6800.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#002</td>
              <td className="show576">09/09/2022</td>
              <td>Gabriel Barbosa (Gabigol)</td>
              <td className="show992">10</td>
              <td className="show992">09</td>
              <td>R$ 9022.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#003</td>
              <td className="show576">14/01/2022</td>
              <td>Arrascaeta</td>
              <td className="show992">14</td>
              <td className="show992">10</td>
              <td>R$ 1414.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>

        </table>
      </div>

    </div>

  )
}

export default SalesCard;