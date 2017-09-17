import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {appRouterModule} from "./app.routes";
import {AppComponent} from "./app.component";
import {ReviewComponent} from "./review/review.component";
import {ComponentsComponent} from "./components/components.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {BenefitsComponent} from "./benefits/benefits.component";
import {OrderByPipe} from "./components/orderby.pipe";
import {FilterPipe} from "./components/myfilter.pipe";
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ReviewComponent,
    ComponentsComponent,
    WelcomeComponent,
    BenefitsComponent,
    OrderByPipe,
    FilterPipe,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouterModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
