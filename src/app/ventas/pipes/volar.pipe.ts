import { Pipe, PipeTransform } from "@angular/core";

@Pipe({//este nombre es el que se utilizara en la aplicacion
    name: 'volar'
})

export class VuelaPipe implements PipeTransform{
    transform(value:boolean):string{
        //resive un argumento se tipo boolean, resive el argumento que estamos manejando en ordenar.components.html que seria: heroe.vuela
        if (value) {
            return "si vuela";
        }else{
            return "no vuela";
        }
    }
}