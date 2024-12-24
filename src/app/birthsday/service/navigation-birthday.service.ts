import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationBirthdayService {

  constructor() { }

  path: string = 'start';
  latestPath: string = '';

  goToPath(path: string = 'start') {
    this.latestPath = this.path;
    this.path = path;
  }
  goPathBack() {
    let stroragePath = this.path;
    this.path = this.latestPath;
    this.latestPath = stroragePath;
  }

}
