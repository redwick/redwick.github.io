export class Project {
  video: string;
  title: string;
  details: string;
  detailsEng: string;
  technologies: string;
  controls = false;

  constructor(video: string, title: string, details: string, detailsEng: string, technologies: string) {
    this.video = video;
    this.title = title;
    this.details = details;
    this.detailsEng = detailsEng;
    this.technologies = technologies;
  }
}
