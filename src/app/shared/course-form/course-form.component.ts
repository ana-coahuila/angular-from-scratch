import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../core/services/curso.service';
import { Curso } from '../../core/interfaces/curso';

@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  curso: Omit<Curso, 'id'> = {
    name: '',
    duration: 0,
    nivel: 'Básico',
    cuatrimestre: 1
  };

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {}

  guardarCurso() {
    if (!this.curso.name || this.curso.duration <= 0) return;

    this.cursoService.agregarCurso(this.curso); // ✅ guardar en el servicio

    // limpiar formulario
    this.curso = { name: '', duration: 0, nivel: 'Básico', cuatrimestre: 1 };
  }
}
