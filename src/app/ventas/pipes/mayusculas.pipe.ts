import { Pipe, PipeTransform } from "@angular/core";

@Pipe({//este nombre es el que se utilizara en la aplicacion
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform{ //siempre se tiene que colocar el implements PipeTransform

    transform(value: string): string {//este transform siempre tiene que retornar algo
        return 'HOLA MUNDO';
    }
}