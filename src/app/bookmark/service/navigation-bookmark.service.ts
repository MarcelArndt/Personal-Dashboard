import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationBookmarkService {

  constructor() { }

  path:string = '';
  latestPath:string = '';

  goToPath(path:string = 'start'){
    this.latestPath = this.path;
    this.path = path;
  }
  goPathBack(){
    let stroragePath = this.path;
    this.path = this.latestPath;
    this.latestPath = stroragePath;
  }

}
