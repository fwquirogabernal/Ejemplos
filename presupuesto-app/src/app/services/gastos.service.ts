import { Injectable } from '@angular/core';
import { Gasto } from '../modelo/gasto';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  ingresos: Array<Gasto> = [new Gasto("Salario", 30000), new Gasto("Venta Auto", 200)];
  egresos: Array<Gasto> = [new Gasto("Tarjeta Santander", 2000), new Gasto("Tarjeta Frances", 20000)];

  constructor() { }

  eliminarIngreso(ingreso: Gasto) {
    const index = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }


  eliminarEgreso(egreso: Gasto) {
    const index = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }
}