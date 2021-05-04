import { Component } from '@angular/core';

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

}
