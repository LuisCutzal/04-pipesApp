import { Component} from '@angular/core';
import { interval } from 'rxjs';

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

  //KeyValue Pipe
  personas={ //esto no es un arreglo, es un objeto, el clientesMap si es un arreglo
    nombre:'Luis',
    edad:24,
    direccion:'San Juan Comalapa, Chimaltenango'
  }

  //Json Pipe
  heroes=[//esto es un arreglo
    {
      nombre:'Super-Man',
      vuela:true
    },
    {
      nombre:'Ironr-Man',
      vuela:true
    },
    {
      nombre:'Hulk',
      vuela:false
    },
    {
      nombre:'Bat-man',
      vuela:false
    },
    {
      nombre:'Green lanter',
      vuela:true
    }
  ]

  //Async Pipe
  miObservable=interval(1000);//muestra 0,1,2,3,4....

  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos datos de la promesa')
    },3500);
  });
}
