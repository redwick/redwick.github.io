import { Component } from '@angular/core';
import {NgxMarqueeComponent} from '@omnedia/ngx-marquee';
import {Marquee} from '../../classes/marquee';

@Component({
  selector: 'app-marquee',
  imports: [
    NgxMarqueeComponent
  ],
  templateUrl: './marquee.component.html',
  standalone: true,
  styleUrl: './marquee.component.css'
})
export class MarqueeComponent {
  path = '/logo/';
  marquees: Marquee[] = [
    new Marquee(this.path + 'angular.png', 'Angular'),
    new Marquee(this.path + 'bootstrap.png', 'Bootstrap'),
    new Marquee(this.path + 'html5.png', 'HTML'),
    new Marquee(this.path + 'css3.png', 'CSS'),
    new Marquee(this.path + 'javascript.png', 'JavaScript'),
    new Marquee(this.path + 'docker.png', 'Docker'),
    new Marquee(this.path + 'java.png', 'Java'),
    new Marquee(this.path + 'scala.png', 'Scala'),
    new Marquee(this.path + 'kubernetes.png', 'Kubernetes'),
    new Marquee(this.path + 'mongodb.png', 'MongoDB'),
    new Marquee(this.path + 'nestjs.png', 'NestJS'),
    new Marquee(this.path + 'nginx.png', 'Nginx'),
    new Marquee(this.path + 'nodejs.png', 'NodeJS'),
    new Marquee(this.path + 'postgresql.png', 'PostgreSQL'),
    new Marquee(this.path + 'rust.png', 'Rust'),
    new Marquee(this.path + 'git.png', 'Git'),
  ];

  getDuration() {
    return this.marquees.length * 2 + 's';
  }
}
