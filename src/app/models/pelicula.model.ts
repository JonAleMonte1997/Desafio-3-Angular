export interface Pelicula{
  nombre: string;
  genero: string;
  fechaLanzamiento: Date;
  calificacion: number;
  urlPortada?: string;
  urlTrailer?: string;
  descripcion?: string;
}
