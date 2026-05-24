import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../project.service';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-featured-project-card',
  imports: [CommonModule, NgIcon],
  standalone: true,
  templateUrl: './featured-project-card.component.html',
})
export class FeaturedProjectCardComponent {
  @Input() project!: Project;
  @Output() cardClick = new EventEmitter<Project>();
}
