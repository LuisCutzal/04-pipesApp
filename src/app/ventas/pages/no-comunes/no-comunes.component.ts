import { Component} from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre:string="Luis";
  genero:string="masculino";

  invitacionMapa={
    "masculino":"invitarlo",
    "femenino":"invitarla"
  }

  //el genero tiene que hacer match con la invitacionMapa, si es masculino mostrara invitarlo, si es femenino mostrara invitarla
}
