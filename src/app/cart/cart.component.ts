import {Component, Input, OnInit} from '@angular/core';

interface personInterface {
     readonly name: string,
     info: infoInterface
}

interface infoInterface {
     readonly age: number,
     readonly work?: string
}

@Component({
     selector: 'app-cart',
     templateUrl: './cart.component.html',
     styleUrls: ['./cart.component.scss'],
     interpolation: ['{{', '}}']
})


export class CartComponent implements OnInit {
     @Input() userValue: string = ''
     @Input() userText: string = ''
     @Input() userImage: string = ''
     number: number = 42
     date: number = Date.now()
     disableButton: boolean = false
     person: personInterface = {name: "AlexMaster", info: {age: 18, work: 'FullStackDeveloper'}}

     changeImage(): string {
          return this.userImage = "https://angular.io/generated/images/marketing/home/joyful-development.svg"
     }

     changeText() {
          this.userText = 'Title'
          this.disableButton = true
     }

     constructor() {}

     ngOnInit(): void {
       setInterval(() => {
            this.date = Date.now()
       }, 1000)
     }


}
