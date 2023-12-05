import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  // declarations: [AppComponent, HelloWorldComponent],
  imports: [CommonModule, BrowserModule],
  // bootstrap: [AppComponent],
})
export class AppModule {}
