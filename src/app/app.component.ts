import {Component} from '@angular/core';

export interface Card {
     title: string
     text: string,
     image: string,
     id: number
}

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.scss']
})
export class AppComponent {
     isOpen: boolean = false
     cards: Card[] = [
          {
               title: "React",
               text: "This is React library",
               image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
               id: 0
          },
          {
               title: "Vue",
               text: "This is Vue framework",
               image: "https://icons-for-free.com/iconfiles/png/512/super+tiny+icons+vue-1324450793910827375.png",
               id: 1
          },
          {
               title: "Angular",
               text: "This is Angular framework",
               image: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
               id: 2
          }
     ]
}
