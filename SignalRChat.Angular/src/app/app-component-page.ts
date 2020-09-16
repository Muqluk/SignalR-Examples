import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: "app-root",
  styleUrls: ["app-component-page.scss"],
  encapsulation: ViewEncapsulation.None,
  templateUrl: "app-component-page.html",
})
export class AppComponent {
  public title = "ProOptimizer Portal";
}
