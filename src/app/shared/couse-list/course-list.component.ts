import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Curso } from '../../core/interfaces/curso';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  cursos: Curso[] = [];
  cursoEditando: Curso | null = null;

  // Formulario para agregar curso
  nuevoCurso: Omit<Curso, 'id'> = {
    name: '',
    duration: 0,
    nivel: 'Básico',
    cuatrimestre: 1
  };

  ngOnInit(): void {}

  // Guardar curso desde el formulario
  agregarCurso() {
    if (!this.nuevoCurso.name || this.nuevoCurso.duration <= 0) return;

    const curso: Curso = {
      id: Date.now(),
      ...this.nuevoCurso
    };

    this.cursos.push(curso);

    // Limpiar formulario
    this.nuevoCurso = {
      name: '',
      duration: 0,
      nivel: 'Básico',
      cuatrimestre: 1
    };
  }

  // Editar curso
  editarCurso(curso: Curso) {
    this.cursoEditando = { ...curso };
  }

  // Guardar edición
  guardarCurso() {
    if (this.cursoEditando) {
      const index = this.cursos.findIndex(c => c.id === this.cursoEditando!.id);
      if (index > -1) this.cursos[index] = this.cursoEditando;
      this.cursoEditando = null;
    }
  }

  cancelarEdicion() {
    this.cursoEditando = null;
  }

  eliminarCurso(id: number) {
    this.cursos = this.cursos.filter(c => c.id !== id);
  }
}
