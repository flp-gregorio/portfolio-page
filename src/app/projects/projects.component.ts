import { Component } from '@angular/core';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { boxGame } from '@ng-icons/boxicons/regular';
import { NgIcon, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgIcon],
  providers: [provideIcons({ boxGame })],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {}
