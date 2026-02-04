import {Component, inject} from '@angular/core';
import {Project} from '../../classes/project';
import {LangService} from '../../app/lang.service';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  standalone: true,
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  l = inject(LangService);
  s3url = 'https://s3.regru.cloud/monetka/';
  projects: Project[] = [
    new Project(this.s3url + 'deepsea.mp4', 'DeepSea',
      'CRM и ERP инженерного конструкторского бюро',
      'CRM and ERP system for an engineering design bureau',
    'Angular, Scala, NestJS, Camunda, PostgreSQL, MongoDB'),

    new Project(this.s3url + 'bitlab.mp4', 'BitLab',
      'Сайт организации, мобильная версия, форма обратной связи',
      'Corporate website, mobile version, and contact feedback form',
      'Angular, NestJS'),

    new Project(this.s3url + 'nautic_rus.mp4', 'NauticRus',
      'Сайт организации, мобильная версия, форма обратной связи',
      'Corporate website, mobile version, and contact feedback form',
      'Angular, NestJS'),

    new Project(this.s3url + 'fest.mp4', 'NauticFest',
      'Платформа для проведения спортивных мероприятий',
      'Platform for organizing and managing sports events',
      'Angular, Scala'),

    new Project(this.s3url + 'eurasian.mp4', 'The Eurasian',
      'Сайт компании, магазин журналов, мобильное приложение',
      'Company website, digital magazine store, and mobile application',
      'Angular, Scala, Ionic, Android, iOS'),

    new Project(this.s3url + 'eu24.mp4', 'Eurasian24',
      'Сайт компании, потоковое видео вещание, мобильное приложение',
      'Company website, video streaming services, and mobile application',
      'Angular, Scala, Ionic, Android, iOS'),

    new Project(this.s3url + 'autocad.mp4', 'Autocad',
      'Библиотека для Autocad приложения',
      'Library and plugin for AutoCAD application',
      'C# Net Framework, WPF'),

    new Project(this.s3url + 'spysee.mp4', 'SpySee',
      'Приложение для отслеживания рабочих столов',
      'Desktop monitoring and screen tracking application',
      '.NET Core, Angular, Electron'),
  ];


  startPlay(player: HTMLVideoElement, project: Project) {
    player.play();
    project.controls = true;
  }

  stopPlay(player: HTMLVideoElement, project: Project) {
    //player.pause();
    project.controls = false;
  }
}
