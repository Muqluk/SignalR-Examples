import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app-component-page";
import { Chat } from "./chat-component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    Chat
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ]
})
export class AppModule { }
