import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../project.service';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-minor-project-card',
  imports: [CommonModule, NgIcon],
  standalone: true,
  templateUrl: './minor-project-card.component.html',
})
export class MinorProjectCardComponent {
  @Input() project!: Project;
  @Output() cardClick = new EventEmitter<Project>();

  handleCardClick(event: MouseEvent) {
    if (!this.project.link) {
      this.cardClick.emit(this.project);
    }
  }
}
