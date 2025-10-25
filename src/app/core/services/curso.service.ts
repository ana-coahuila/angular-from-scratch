import { Injectable } from '@angular/core';
import { Curso } from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private cursos: Curso[] = [];

  getCursos(): Curso[] {
    return [...this.cursos]; // devolver copia
  }

  agregarCurso(curso: Omit<Curso, 'id'>) {
    const nuevoCurso: Curso = { id: Date.now(), ...curso };
    this.cursos.push(nuevoCurso);
  }

  actualizarCurso(curso: Curso) {
    const index = this.cursos.findIndex(c => c.id === curso.id);
    if (index !== -1) this.cursos[index] = curso;
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(c => c.id !== id);
  }
}
