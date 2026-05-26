import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Project, ProjectService } from '../project.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { boxCodeAlt, boxMobileAlt, boxGitPullRequest } from '@ng-icons/boxicons/regular';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({ boxCodeAlt, boxMobileAlt, boxGitPullRequest })
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  intervalId: any;

  constructor(private projectService: ProjectService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.projects = this.projectService.getProjects().slice(0, 3);
  }

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    if (isPlatformBrowser(this.platformId) && !this.intervalId) {
      // Automatically shuffle the carousel every 7 seconds only on the browser
      this.intervalId = setInterval(() => {
        this.rotateCarousel();
      }, 7000);
    }
  }

  stopCarousel() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  rotateCarousel() {
    if (this.projects.length > 1) {
      const first = this.projects.shift();
      if (first) {
        this.projects.push(first);
      }
    }
  }

  trackByName(index: number, project: Project) {
    return project.name;
  }

  getCardClasses(index: number): string {
    const base = 'absolute inset-0 bg-neutral-950 border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl overflow-hidden ';
    
    if (index === 0) {
      return base + 'z-30 transform translate-y-0 scale-100 border-white/20 hover:-translate-y-4 hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]';
    } else if (index === 1) {
      return base + 'z-20 transform translate-y-8 scale-95 border-white/10 brightness-75';
    } else {
      return base + 'z-10 transform translate-y-16 scale-90 border-white/5 brightness-50';
    }
  }
}
