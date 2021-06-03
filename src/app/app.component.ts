import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="LuiS aNtoNio";
  valor:number=100000000;

  MostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  constructor(private primengConfig: PrimeNGConfig){}//tenemos que hacer una inyeccion

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
