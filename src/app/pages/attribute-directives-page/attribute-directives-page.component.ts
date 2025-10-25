import { NgClass, NgComponentOutlet, NgStyle } from '@angular/common';
import { Component, computed, NgModule, signal } from '@angular/core';

@Component({
  selector: 'app-attribute-directives-page',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute-directives-page.component.html',
})
export class AttributeDirectivesPageComponent {
  title = 'Atribute Directives';
  state = signal<'active' | 'error' | 'neutral'>('neutral');

  message = computed(() => {
    switch (this.state()) {
      case 'active':
        return 'The currrent state is active';
      case 'error':
        return 'The current state is error';
      case 'neutral':
        return 'The current state is neutral';
    }
  });

  setActive() {
    this.state.set('active');
  }

  setError() {
    this.state.set('error');
  }

  setNeutral() {
    this.state.set('neutral');
  }

}
