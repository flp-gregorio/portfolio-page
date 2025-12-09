import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { boxGitLogo } from '@ng-icons/boxicons/logos';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { Project, ProjectService } from '../project.service';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgIcon, RouterModule],
  providers: [
    provideIcons({
      boxGitLogo,
    }),
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  projects: Project[] = [];
  isLoading = true;

  @ViewChild('mainWrapper') mainWrapper!: ElementRef;
  @ViewChild('heroTextContainer') heroTextContainer!: ElementRef;
  @ViewChild('felipeText') felipeText!: ElementRef;
  @ViewChild('gregorioText') gregorioText!: ElementRef;
  @ViewChild('sidebarContent') sidebarContent!: ElementRef;
  @ViewChild('projectsContent') projectsContent!: ElementRef;

  private mm: gsap.MatchMedia | null = null;
  private timeline: gsap.core.Timeline | null = null;
  private isBrowser: boolean;

  constructor(
    private projectService: ProjectService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.projects = this.projectService.getProjects().slice(0, 3);
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    gsap.registerPlugin(ScrollTrigger);
    this.mm = gsap.matchMedia();

    setTimeout(() => {
      this.initAnimations();
      this.isLoading = false;
    }, 500);
  }

  private initAnimations(): void {
    // Initial States
    gsap.set(this.sidebarContent.nativeElement, { opacity: 0, y: 50 });
    gsap.set(this.projectsContent.nativeElement, { opacity: 0, x: 50 });

    this.mm?.add(
      {
        isDesktop: '(min-width: 768px)',
        isMobile: '(max-width: 767px)',
      },
      (context) => {
        let { isMobile } = context.conditions as { isMobile: boolean };

        this.timeline = gsap.timeline({
          scrollTrigger: {
            trigger: this.mainWrapper.nativeElement,
            start: 'top top',
            end: '+=2000',
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        const targetFontSize = isMobile ? '3rem' : '6rem';
        const targetTop = isMobile ? '5%' : '2rem';
        const targetLeft = isMobile ? '5%' : '2rem';

        this.timeline
          .to(
            [this.felipeText.nativeElement, this.gregorioText.nativeElement],
            {
              fontSize: targetFontSize,
              duration: 2,
              ease: 'power2.inOut',
            },
            0
          )
          .to(
            this.heroTextContainer.nativeElement,
            {
              top: targetTop,
              left: targetLeft,
              xPercent: 0,
              yPercent: 0,
              x: 0,
              y: 0,
              duration: 2,
              ease: 'power2.inOut',
            },
            0
          )

          .to(
            this.sidebarContent.nativeElement,
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
            1
          )
          .to(
            this.projectsContent.nativeElement,
            { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' },
            1.2
          );
      }
    );
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.mm?.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  }
}
