import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsHmrLifeCycle, NgxsHmrSnapshot as Snapshot } from "@ngxs/hmr-plugin";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsModule, StateContext } from "@ngxs/store";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";

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
    FormsModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule,
  ]
})
export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
  public hmrNgxsStoreOnInit(ctx: StateContext<Snapshot>, snapshot: Partial<Snapshot>) {
    ctx.patchState(snapshot);
  }

  public hmrNgxsStoreBeforeOnDestroy(ctx: StateContext<Snapshot>): Partial<Snapshot> {
    return ctx.getState();
  }
}
