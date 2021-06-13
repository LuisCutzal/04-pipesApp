import { Pipe, PipeTransform } from "@angular/core";

@Pipe({//este nombre es el que se utilizara en la aplicacion
    name: 'color'
})

export class ColorPipe implements PipeTransform{
    transform(value:number):string{
        //resive un argumento se tipo boolean, resive el argumento que estamos manejando en ordenar.components.html que seria: heroe.vuela
        if (value==0) {
            return "rojo";
        }else if(value==1){
            return "negro";
        }else if(value==2){
            return "azul";

        }else if(value==3){
            return "verde";

        }else if(value==4){
            return "amarillo";

        }else{
            return "otro";
        }
    }
}
