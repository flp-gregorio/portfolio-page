import { Component, OnInit } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import {
  boxAngularLogo,
  boxReactLogo,
  boxTypescriptLogo,
  boxJavascriptLogo,
  boxHtml5Logo,
  boxTailwindCssLogo,
  boxNodejsLogo,
  boxUnityLogo,
  boxJavaLogo,
  boxPythonLogo,
  boxPostgresqlLogo,
  boxGitLogo,
  boxVuejsLogo,
  boxCPlusPlusLogo,
} from '@ng-icons/boxicons/logos';
import { boxMoon } from '@ng-icons/boxicons/regular';
import { boxCodeAlt } from '@ng-icons/boxicons/regular';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Project, ProjectService } from '../project.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, NgIcon, NavbarComponent],
  providers: [
    provideIcons({
      boxAngularLogo,
      boxReactLogo,
      boxTypescriptLogo,
      boxJavascriptLogo,
      boxHtml5Logo,
      boxTailwindCssLogo,
      boxNodejsLogo,
      boxUnityLogo,
      boxJavaLogo,
      boxPythonLogo,
      boxPostgresqlLogo,
      boxGitLogo,
      boxVuejsLogo,
      boxCPlusPlusLogo,
      boxMoon,
      boxCodeAlt,
    }),
  ],
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  minorProjects: Project[] = [];
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService, private scroller: ViewportScroller) {
    this.projects = this.projectService.getProjects();
    this.minorProjects = this.projectService.getMinorProjects();
  }

  selectProject(project: Project): void {
    this.selectedProject = project;
  }

  closeProject(): void {
    this.selectedProject = null;
  }

  ngOnInit(): void {
    this.scroller.scrollToPosition([0, 0]);
  }
}

