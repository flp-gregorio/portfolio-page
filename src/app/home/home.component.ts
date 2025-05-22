import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { RouterModule } from '@angular/router';
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
} from '@ng-icons/boxicons/logos';

@Component({
  selector: 'app-home',
  imports: [NgIcon, RouterModule],
  standalone: true,
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
    }),
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home';playVideo(event: MouseEvent): void {
    const video = event.target as HTMLVideoElement;
    video.play();
  }

  pauseVideo(event: MouseEvent): void {
    const video = event.target as HTMLVideoElement;
    video.pause();
  }
}
