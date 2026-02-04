export class Skill {
  name: string;
  level: number;
  type: string;
  image: string;
  view: string;

  constructor(name: string, level: number, type: string, image: string, view: string = '') {
    this.name = name;
    this.level = level;
    this.type = type;
    this.image = image;
    this.view = view;
  }
  get levelText(): string {
    if (this.level >= 85) return 'Expert';
    if (this.level >= 70) return 'Advanced';
    if (this.level >= 50) return 'Intermediate';
    return 'Basic';
  }
}
