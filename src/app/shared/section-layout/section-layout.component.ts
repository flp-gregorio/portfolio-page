import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-layout',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './section-layout.component.html',
})
export class SectionLayoutComponent {
  @Input() sectionNumber!: string;
  @Input() sectionTitle!: string;
}
