import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TitleService {
  setTitle(newTitle: string): void {
    document.title = newTitle;
  }

  constructor() { }
}
