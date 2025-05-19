import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-project-card',
    imports: [CommonModule, RouterModule],
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() projectLink: string = '';
  @Input() technologies: { name: string, color: string, icon: string }[] = [];
  palette: [number, number, number][] | null = null;
  
  // Make window available in the template
  get window(): Window {
    return window;
  }
}