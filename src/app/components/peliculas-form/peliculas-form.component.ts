import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-peliculas-form',
  templateUrl: './peliculas-form.component.html',
  styleUrls: ['./peliculas-form.component.scss']
})
export class PeliculasFormComponent implements OnInit {

  peliculaForm = new FormGroup({
    nombre: new FormControl(null, [Validators.required, Validators.maxLength(80)]),
    genero: new FormControl(null, [Validators.required]),
    fechaLanzamiento: new FormControl(null, [Validators.required]),
    calificacion: new FormControl(1),
    urlPortada: new FormControl(null),
    urlTrailer: new FormControl(null),
    descripcion: new FormControl(null, [Validators.maxLength(280)])
  });

  generos = ['Acción', 'Aventura', 'Drama', 'Comedia', 'Familiar'];

  constructor() { }

  ngOnInit(): void {
  }

  guardarPelicula() {

    if(this.peliculaForm.valid){

      let pelicula: Pelicula = this.peliculaForm.value;

      console.log(pelicula);

    } else {

      /************************************************************************************************************************************************
        Si el formulario es inválido al presionar el botón de submit, recorro todos los controladores y cambio la  propiedad touched y dirty a true
        para que aparezcan los mensajes de error si no se realizo focus o click en los inputs anteriormente.
      **************************************************************************************************************************************************/

      Object.keys(this.peliculaForm.controls).forEach(controlName => {
        this.peliculaForm.get(controlName)?.markAsTouched({onlySelf: true});
        this.peliculaForm.get(controlName)?.markAsDirty({onlySelf: true});
      });
    }
  }

  validarInput(control: string): boolean {
    return (this.peliculaForm.controls[control].invalid && (this.peliculaForm.controls[control].dirty || this.peliculaForm.controls[control].touched))
  }
}
