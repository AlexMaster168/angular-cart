import {Component, Input, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
     selector: 'app-form',
     templateUrl: './form.component.html',
     styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
     @Input() userValue: string = ''
     @Input() userText: string = ''
     @Input() index: number = 0
     @Input() image: string = ''
     FormControl = new FormControl()

     changeHandler() {
          console.log(this.userValue)
     }

     constructor() {
     }

     // inputHandler(event: any) {
     //   this.userValue = event.target.value
     // }

     ngOnInit(): void {
     }

}
