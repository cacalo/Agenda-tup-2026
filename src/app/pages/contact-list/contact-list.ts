import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact-list',
  styleUrl: './contact-list.scss',
  templateUrl: './contact-list.html',
})
export class ContactList {

  nombre = "Gonzalo";
  apellido = "Bechara";
  presente = false;
  alumnos = ['Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro','Juan', 'Maria','Pedro'];

  agregarAlumno(){
    const nuevaVariable = 10;
    if(this.alumnos.length < 6){
      this.alumnos.push('Alumno nuevo '+(this.alumnos.length+1))
      console.log(this.alumnos)
    }
  }


}
