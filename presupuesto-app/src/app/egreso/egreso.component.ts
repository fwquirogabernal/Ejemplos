import { Component, OnInit, Input } from '@angular/core';
import { Gasto } from '../modelo/gasto';
import { GastosService } from '../services/gastos.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number;
  egresos: Array<Gasto>;

  constructor(private gastosService: GastosService) {
    this.egresos = this.gastosService.egresos;
   }

  ngOnInit() {
  }

  eleminarEgreso(egreso: Gasto){
    this.gastosService.eliminarEgreso(egreso);
  }

  porcentajeParcial(egreso: Gasto): number {
    return egreso.monto / this.ingresoTotal;
  }
}
