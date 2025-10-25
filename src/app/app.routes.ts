import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { StructuralDirectivesPageComponent } from './pages/structural-directives-page/structural-directives-page.component';
import { AttributeDirectivesPageComponent } from './pages/attribute-directives-page/attribute-directives-page.component';
import { DataBindingPageComponent } from './pages/data-binding-page/data-binding-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { CursosPage } from './pages/cursos-page/cursos-page';
import { Component, computed } from '@angular/core';
import { PipesPageComponent } from './pages/pipes-page/pipes-page.component';


export const routes: Routes = [
  { path: 'home', component: HomePageComponent },{ 
    path: 'counter', component: CounterPageComponent 
  },{
     path: 'structural-directives', component: StructuralDirectivesPageComponent
 },{ 
    path: 'attribute-directives', component: AttributeDirectivesPageComponent 
  },{ 
    path: 'data-binding', component: DataBindingPageComponent
  },{  
     path: 'service', component: ServicePageComponent
  },{

    path: 'pipes',  component: PipesPageComponent
   },

  {
    path: 'Cursos', component: CursosPage
  },
   
  { path: '', redirectTo: 'cursos', pathMatch: 'full' },
  
  {

    path: '**', redirectTo: 'home', pathMatch: 'full'
   }
];  