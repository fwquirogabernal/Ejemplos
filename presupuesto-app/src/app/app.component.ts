import { Component } from '@angular/core';
import { Gasto } from './modelo/gasto';
import { GastosService } from './services/gastos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Array<Gasto>;
  egresos: Array<Gasto>;

  /**
   *
   */
  constructor(private gastosServices: GastosService) {
    this.ingresos = this.gastosServices.ingresos;
    this.egresos = this.gastosServices.egresos;
  }

  getIngresoTotal(): number {
    return this.ingresos.reduce((ingresoTotal, gasto) => ingresoTotal + gasto.monto, 0);
  }

  getEgresoTotal(): number {
    return this.egresos.reduce((ingresoTotal, gasto) => ingresoTotal + gasto.monto, 0);
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
