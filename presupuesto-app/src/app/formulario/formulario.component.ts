import { Component, OnInit } from '@angular/core';
import { GastosService } from '../services/gastos.service';
import { Gasto } from '../modelo/gasto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo: string = "ingreso";
  description: string;
  valor: number;
  constructor(private gastoService: GastosService) { }

  ngOnInit() {
  }

  tipoOperacion(event) {
    this.tipo = event.target.value;
    console.log(this.tipo);
  }

  agregarValor() {
    if (this.tipo === "ingreso") {
      this.gastoService.ingresos.push(new Gasto(this.description, this.valor));
    } else {
      this.gastoService.egresos.push(new Gasto(this.description, this.valor));
    }
  }

}
