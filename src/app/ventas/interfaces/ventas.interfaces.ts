export enum Color{ //trabajar con valores numericos solo que con palabras, internamente el rojo tendra un indice 0, negro indice 1, etc
    rojo,negro,azul,verde,amarillo
}


export interface Heroe{
    nombre:string;
    vuela:boolean;
    color:Color;
}