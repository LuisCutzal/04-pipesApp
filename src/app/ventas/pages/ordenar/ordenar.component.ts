import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas:boolean=true;
  
  /*
  esta forma es mucho mas facil de hacer ya que solo es en una linea y no se necesita del if

  cambiar(){
    this.enMayusculas=!this.enMayusculas;
    //enMayusculas sera igual al valor opuesto de enMayusulas
  }

  */
  hola(){
    if (this.enMayusculas==true) {
      this.enMayusculas=false;
    }
    else if(this.enMayusculas==false){
      this.enMayusculas=true;
    }
  }
}
