import { Pipe, PipeTransform } from "@angular/core";
import { Validators } from "@angular/forms";

@Pipe({//este nombre es el que se utilizara en la aplicacion
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{ //siempre se tiene que colocar el implements PipeTransform

    transform(value: string, enMayusculas:boolean = true): string {//este transform siempre tiene que retornar algo
        //para hacer que el otro argumento pueda o no venir se le agrego en este caso el =true
        if (enMayusculas) {//se puede dejar de esta forma ya que  enMayusculas ya esta igualado a true
            return value.toUpperCase();
        }else{
            return value.toLowerCase();
        }

        /*     
        esta es otra forma de hacerlo utilizando un ternario    
        return( enMayusculas)? value.toUpperCase():value.toLowerCase();

        
        */
    }

}