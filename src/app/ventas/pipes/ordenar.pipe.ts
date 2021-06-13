import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes:Heroe[], ordenarPor:string="sin valor"): Heroe[] {


    switch (ordenarPor) {
      case "nombre":

        return heroes.sort((a,b)=>(a.nombre> b.nombre)? 1:-1);
        /*el sort pide una funcion comparativa, siempre, el primero con el segundo, el segundo con el tercero, el tercero con el cuarto, etc...
        regresamos un 1 si necesito cambiar de lugar y el -1 para el cambio inverso
        a.nombre es mayor a b.nombre entonces regreso 1 para que haga el cambio, caso contrario no
        documentacion
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
        */
        
      case "vuela":
        return heroes.sort((a,b)=>(a.vuela> b.vuela)? 1:-1);

      case "color":
        return heroes.sort((a,b)=>(a.color> b.color)? 1:-1);
      default:
        return heroes;
    }

/*
    if(ordenarPor==="sin valor"){
      return heroes
    }else{
    
  }
   return heroes;
    */
}

}
