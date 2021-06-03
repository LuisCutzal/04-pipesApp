import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //el genero tiene que hacer match con la invitacionMapa, si es masculino mostrara invitarlo, si es femenino mostrara invitarla
  //i18nSelect
  nombre:string="Luis";
  genero:string="masculino";

  invitacionMapa={
    "masculino":"invitarlo",
    "femenino":"invitarla"
  };

  //i18nPlural
  clientes : string[] = ['Maria','Pedro','Juan',"Susana","Kevin","Fernando"]; //arreglo de clientes
  clientesMap={ //se tiene que pensar en las diversas opciones que puede tener
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 clinete esperando.',
    '=2':'tenemos 2 clientes esperando.',
    'other':'tenemos # clientes esperando'
  }


  //tarea
  Cambiar(){
    this.nombre="Maria";
    this.genero="femenino";
  }

  borrarCliente()
  {
    this.clientes.pop();
  }

}
