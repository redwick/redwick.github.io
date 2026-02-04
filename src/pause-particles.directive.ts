import {Directive, HostListener, Input} from '@angular/core';
import {Engine} from '@tsparticles/engine';

@Directive({
  standalone: true,
  selector: '[pauseParticles]'
})
export class PauseParticlesDirective {

  @Input({required: true}) pauseParticles: Engine | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    if (this.pauseParticles){
      if (this.pauseParticles.domItem(0)) {
        this.pauseParticles!.domItem(0)!.options.interactivity.events.onHover.enable = false;
        this.pauseParticles!.domItem(0)?.updateActualOptions();
      }
    }
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.pauseParticles){
      if (this.pauseParticles.domItem(0)) {
        this.pauseParticles!.domItem(0)!.options.interactivity.events.onHover.enable = true;
        this.pauseParticles!.domItem(0)?.updateActualOptions();
      }
    }
  }
}
