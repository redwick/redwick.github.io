import {Component, inject} from '@angular/core';
import {LangService} from '../../app/lang.service';

@Component({
  selector: 'app-stats',
  imports: [],
  templateUrl: './stats.component.html',
  standalone: true,
  styleUrl: './stats.component.css'
})
export class StatsComponent {
  l = inject(LangService);
}
