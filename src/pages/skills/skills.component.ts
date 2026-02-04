import {Component, inject, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Skill} from '../../classes/skill';
import {NgbProgressbar} from '@ng-bootstrap/ng-bootstrap';
import {LangService} from '../../app/lang.service';

@Component({
  selector: 'app-skills',
  imports: [
    NgbProgressbar
  ],
  templateUrl: './skills.component.html',
  standalone: true,
  styleUrl: './skills.component.css'
})

export class SkillsComponent implements OnInit, OnChanges{

  @Input({required: true}) skills: Skill[] | undefined;
  @Input() startAnimation: boolean | undefined;
  progress: number[] = [];
  animationSpeed = 8;
  animationTimeout = 50;
  animationBreak = false;
  l = inject(LangService);

  skillTypes = [
    'basic',
    'devops',
    'other',
  ];
  selectedType = this.skillTypes[0];



  ngOnInit() {
    this.fillProgress();
  }
  fillProgress() {
    this.progress = [];
    this.getSkills(this.selectedType)?.forEach(skill => {
      this.progress.push(0);
    });
  }
  animate(){
    let skills = this.getSkills(this.selectedType);
    if (skills) {
      let completed = true;
      for (let i = 0; i < skills.length; i++) {
        if (this.progress[i] <  skills[i].level){
          this.progress[i] += 1;
          completed = false;
        }
      }
      if (!completed && !this.animationBreak) {
        setTimeout(() => {
          this.animate();
        }, this.animationSpeed);
      }
    }

  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.startAnimation) {
      this.animate();
    }
    else{
      this.fillProgress();
    }
  }


  getSkills(type: string) {
    return this.skills?.filter(x => x.type == type);
  }
  formatSkill(type: string) {
    switch (type) {
      case 'basic':
        return 'Базовые';
      case 'devops':
        return 'DevOps';
      case 'other':
        return 'Другие';
      default: return type;
    }
  }

  selectType(type: string) {
    this.selectedType = type;
    this.animationBreak = true;
    setTimeout(() => {
      this.animationBreak = false;
      this.fillProgress();
      this.animate();
    }, this.animationTimeout);
  }
}
