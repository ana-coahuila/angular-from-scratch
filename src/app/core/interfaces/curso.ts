export interface Curso {
  id: number;         
  name: string;
  duration: number;
  nivel: 'Básico' | 'Intermedio' | 'Avanzado';
  cuatrimestre: number;
}
