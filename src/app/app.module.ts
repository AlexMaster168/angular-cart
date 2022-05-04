import {NgModule} from '@angular/core';
import {registerLocaleData} from "@angular/common";
import localeRu from "@angular/common/locales/ru"
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {FormComponent} from './form/form.component';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FormComponent,
  ],
     imports: [
          ReactiveFormsModule,
          BrowserModule
     ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
