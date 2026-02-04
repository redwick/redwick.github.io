import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Engine} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import {NgParticlesService, NgxParticlesModule} from "@tsparticles/angular";
import {HttpClient} from '@angular/common/http';
import {PauseParticlesDirective} from '../pause-particles.directive';
import { NgStyle} from '@angular/common';
import {Skill} from '../classes/skill';
import {SkillsComponent} from '../pages/skills/skills.component';
import {ParallaxComponent} from '../components/parallax/parallax.component';
import {PortfolioComponent} from '../pages/portfolio/portfolio.component';
import {ContactsComponent} from '../pages/contacts/contacts.component';
import {MarqueeComponent} from '../components/marquee/marquee.component';
import {StatsComponent} from '../components/stats/stats.component';
import {LangService} from './lang.service';

@Component({
  selector: 'app-root',
  imports: [NgxParticlesModule, PauseParticlesDirective, NgStyle, SkillsComponent, PortfolioComponent, ContactsComponent, MarqueeComponent, StatsComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, AfterViewInit{

  particlesOptions: any | undefined;
  engine: Engine | undefined;

  linksColor = '#1a8df1';
  circlesColor = '#04f5f8';

  personal = 'Исаев Богдан';
  personalEng = 'Isaev Bogdan';
  centerText = '';
  words = [
    this.personal,
    'Frontend Developer',
    'Backend Developer',
    'DevOps Engineer',
    'Mobile Developer',
  ];
  word = this.words[0];
  blinkStick = {
    opacity: 1,
    transition: '0.2s'
  };
  aboutMe = '';
  aboutMeEng = '';
  skills: Skill[] = [

    new Skill('HTML / CSS', 80, 'basic', 'images'),
    new Skill('JavaScript / TypeScript', 80, 'basic', 'images'),
    new Skill('Bootstrap / SASS / SCSS', 75, 'basic', 'images'),
    new Skill('Angular', 80, 'basic', 'images'),
    new Skill('Scala / Java', 75, 'basic', 'images'),
    new Skill('Rust', 80, 'basic', 'images'),
    new Skill('NestJS', 65, 'basic', 'images'),
    new Skill('PostgreSQL / MySQL / Oracle', 75, 'basic', 'images'),
    new Skill('Ionic', 60, 'basic', 'images'),
    new Skill('Flutter', 40, 'basic', 'images'),
    new Skill('Golang', 30, 'basic', 'images'),
    new Skill('GitHub / GitLab', 70, 'basic', 'images'),
    new Skill('Soft Skills', 95, 'basic', 'images'),


    new Skill('Docker / Docker Compose / Dockerfile', 75, 'devops', 'images'),
    new Skill('Kubernetes', 75, 'devops', 'images'),
    new Skill('Selectel Cloud / Reg.Ru Cloud', 90, 'devops', 'images'),
    new Skill('Nginx / Apache2', 95, 'devops', 'images'),
    new Skill('Proxy / SSL / Lets Encrypt', 95, 'devops', 'images'),
    new Skill('Prometheus', 40, 'devops', 'images'),
    new Skill('GitHub Actions', 50, 'devops', 'images'),
    new Skill('Networking / Security / VPN / Firewall', 85, 'devops', 'images'),
    new Skill('Linux Bash / Windows PowerShell', 85, 'devops', 'images'),
    new Skill('Ubuntu Server / Linux KVM', 90, 'devops', 'images'),


    new Skill('KeyCloak SSO / OIDC', 95, 'other', 'images'),
    new Skill('Matrix Synapse / Element', 90, 'other', 'images'),
    new Skill('Rocket.Chat', 95, 'other', 'images'),
    new Skill('Jitsi Meet', 95, 'other', 'images'),
    new Skill('iRedMail', 90, 'other', 'images'),
    new Skill('MinIO', 80, 'other', 'images'),
    new Skill('Amazon S3', 90, 'other', 'images'),
    new Skill('GitLab', 75, 'other', 'images'),
    new Skill('Linux Samba / AD-DC', 85, 'other', 'images'),
    new Skill('Redmine / OpenProject', 65, 'other', 'images'),
    new Skill('WordPress / Wiki / BookStack', 75, 'other', 'images'),
    new Skill('Windows / Linux', 95, 'other', 'images'),
    new Skill('Adobe Premier', 70, 'other', 'images'),
    new Skill('Adobe Photoshop', 50, 'other', 'images'),


  ];
  progressEnter = false;
  mobileMenu = false;


  constructor(private readonly ngParticlesService: NgParticlesService, private http: HttpClient, public l: LangService) {

  }

  @ViewChild('skillsPage') skillsPage!: ElementRef;
  @ViewChild('centerTextDiv') centerTextDiv!: ElementRef<HTMLDivElement>;


  ngOnInit(): void {
    this.http.get<any>("particles.json").subscribe((data) => {
      this.particlesOptions = data;
      this.particlesOptions.particles.color.value = this.circlesColor;
      this.particlesOptions.particles.links.color.value = this.linksColor;
      this.ngParticlesService.init(async (engine: Engine) => {
        this.engine = engine;
        await loadSlim(engine);
      });
    });
    this.http.get("about_me.txt", {responseType: 'text'}).subscribe((data => {
      this.aboutMe = data;
    }));
    this.http.get("about_me_eng.txt", {responseType: 'text'}).subscribe((data => {
      this.aboutMeEng = data;
    }));
    this.typeTextAnimation();
    this.typeTextBlinkAnimation();

  }
  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        this.progressEnter = entries[0].isIntersecting;
      },
      { threshold: 0.2 }
    );

    observer.observe(this.skillsPage.nativeElement);
    document.addEventListener('mousemove', this.handleMouseMove);
  }

  private handleMouseMove = (event: MouseEvent): void => {


  };

  typeTextBlinkAnimation(){
    this.blinkStick.opacity = this.blinkStick.opacity === 1 ? 0 : 1;
    setTimeout(() => {
      this.typeTextBlinkAnimation();
    }, 500);
  }
  typeTextAnimation(){
    this.centerText = this.word.slice(0, this.centerText.length + 1);
    if (this.centerText.length === this.word.length) {
      setTimeout(() => {
        this.typeTextClear();
      }, 2000);
    }
    else{
      setTimeout(() => {
        this.typeTextAnimation();
      }, 100);
    }
  }
  typeTextClear(){
    if (this.centerText.length > 0) {
      this.centerText = this.centerText.slice(0, this.centerText.length - 1);
      setTimeout(() => {
        this.typeTextClear();
      }, 20);
    }
    else{
      setTimeout(() => {
        if (this.words.indexOf(this.word) === this.words.length - 1) {
          this.word = this.words[0];
        }
        else {
          this.word = this.words[this.words.indexOf(this.word) + 1];
        }
        this.typeTextAnimation();
      }, 500);

    }
  }

  fixedMenu() {
    return window.scrollY >= window.innerHeight ? {
      position: 'fixed',
      background: 'var(--background-color-primary)',
      margin: '0',
    } : {
      position: 'absolute',
      'margin-top': '1rem'
    };
  }

  fixedMenuNoBackground() {
    return {};
    // return window.scrollY > window.innerHeight ? {
    //   background: 'none',
    // } : {};
  }

  onMouseMove(event: MouseEvent, div: HTMLDivElement) {
    console.log(div.offsetTop);
    let x = event.offsetX;
    let y = event.offsetY;
    div.style.setProperty('--x', x + 'px');
    div.style.setProperty('--y', y + 'px');
  }

  getMobileMenu() {
    return {
      transform: this.mobileMenu ? 'translateX(0)' : 'translateX(100%)'
    };
  }

  protected openResume() {
    if (this.l.lang == 'ru'){
      window.open('/Исаев_Богдан.pdf','_blank');
    }
    else {
      window.open('/Isaev_Bogdan.pdf','_blank');
    }
  }
}
