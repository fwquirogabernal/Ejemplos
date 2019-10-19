import { Component, OnInit } from '@angular/core';
import { Gasto } from '../modelo/gasto';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos: Array<Gasto>;
  constructor(private gastosService: GastosService) {
    this.ingresos = this.gastosService.ingresos;
  }

  ngOnInit() {
  }

  eliminarIngreso(ingreso: Gasto) {
    this.gastosService.eliminarIngreso(ingreso);
  }

}
