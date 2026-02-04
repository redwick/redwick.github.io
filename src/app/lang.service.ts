import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  lang = '';
  private readonly LANG_KEY = 'lang';

  constructor() {
    let savedLang = localStorage.getItem(this.LANG_KEY);
    if (savedLang) {
      this.lang = savedLang;
    } else {
      const browserLang = navigator.language.toLowerCase();
      this.lang = browserLang.startsWith('ru') ? 'ru' : 'en';
    }
  }
  setLanguage(newLang: 'ru' | 'en') {
    this.lang = newLang;
    localStorage.setItem(this.LANG_KEY, newLang);
  }
  tr(input: string){
    if (this.lang == 'ru'){
      return input;
    }
    else{
      switch (input){
        case 'Обо мне': return 'About Me';
        case 'Навыки': return 'Skills';
        case 'Портфолио': return 'Portfolio';
        case 'Контакты': return 'Contacts';

        case 'Мои навыки': return 'My Skills';
        case 'Мои контакты': return 'Get in Touch';
        case 'Скачать резюме': return 'Download CV';
        case 'Город': return 'Location';
        case 'Телефон': return 'Phone';
        case 'Базовые': return 'Basic';
        case 'Другие': return 'Other';

        case 'НЕТ ВИДЕО': return 'NO VIDEO';
        case 'ОПИСАНИЕ': return 'DESCRIPTION';

        case 'Организации':
          return 'Companies';

        case 'Сотрудничество с организациями в разработке за 3 года':
          return 'Collaborations with organizations over the past 3 years';

        case 'Репозитории':
          return 'Repositories';

        case 'Количество репозиториев с моим участием':
          return 'Total number of repositories I have contributed to';

        case 'Коммиты':
          return 'Commits';

        case 'Количество коммитов по всем репозиториям за 2025 год':
          return 'Total commits across all repositories in 2025';

        default: return input;
      }
    }
  }
}
