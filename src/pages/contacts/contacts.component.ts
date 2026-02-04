import {Component, inject} from '@angular/core';
import {NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import {LangService} from '../../app/lang.service';

@Component({
  selector: 'app-contacts',
  imports: [
    NgbTooltip
  ],
  templateUrl: './contacts.component.html',
  standalone: true,
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  geo: string = 'Санкт-Петербург, Россия';
  geoEng: string = 'Saint Petersburg, Russia';
  email: string = 'redwickel@gmail.com';
  github: string = 'redwick';
  telegram: string = 'redwick';
  emailCopied = 'E-mail скопирован в буфер обмена';
  phoneCopied = 'Телефон скопирован в буфер обмена';
  phone: string = '+7 (921)-611-81-65';
  phoneCopy: string = '+79216118165';
  l = inject(LangService);
  copyEmail() {
    navigator.clipboard.writeText(this.email);
  }

  openTelegram() {
    window.open('https://t.me/' + this.telegram, '_blank');
  }

  openCity() {
    window.open('https://g.co/kgs/JdAVsbC', '_blank');
  }

  openGitHub() {
    window.open('https://github.com/' + this.github, '_blank');
  }

  copyPhone() {
    navigator.clipboard.writeText(this.phoneCopy);
  }
}
