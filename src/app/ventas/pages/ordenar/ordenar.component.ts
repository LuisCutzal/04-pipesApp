import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas:boolean=true;

  ordenarPor:string="";
  heroes:Heroe[]=[
    {
      nombre:"SuperMan",
      vuela:true,
      color:Color.azul
    },
    {
      nombre:"Batman",
      vuela:false,
      color:Color.negro
    },
    {
      nombre:"Robin",
      vuela:false,
      color:Color.verde
    },
    {
      nombre:"Daredevil",
      vuela:false,
      color:Color.rojo
    },
    {
      nombre:"Centry",
      vuela:true,
      color:Color.amarillo
    }
  ]
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

  cambiarOrden(valor:string){
    this.ordenarPor=valor;
    
  }
}
