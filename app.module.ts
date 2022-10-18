import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MainComponent as Page_A_Main } from './components/a/main/main.component';
import { MainComponent as Page_B_Main } from './components/b/main/main.component';
import { MainComponent as Page_C_Main } from './components/c/main/main.component';

@NgModule({
  declarations: [
    AppComponent,

    Page_A_Main,
    Page_B_Main,
    Page_C_Main
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
