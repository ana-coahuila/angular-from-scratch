import { Component } from '@angular/core';
import { CourseFormComponent } from '../../shared/course-form/course-form.component';
import { CourseListComponent } from '../../shared/couse-list/course-list.component';

@Component({
  selector: 'app-cursos-page',
  standalone: true,                   // 👈 Agregar si es standalone
  imports: [CourseFormComponent, CourseListComponent], // 👈 Importar los componentes que usas
  templateUrl: './cursos-page.html',
  styleUrls: ['./cursos-page.css']    // 👈 Corregir 'styleUrl' a 'styleUrls'
})
export class CursosPage {}
