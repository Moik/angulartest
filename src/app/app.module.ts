import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { RedirectComponent } from './redirect/redirect.component';

import { OwlModule } from 'ng2-owl-carousel';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { ImageService } from './services/image.service';

const appRoutes: Routes = [
  { path: "", component: SliderComponent },
  { path: "redir", component: RedirectComponent }
];
 
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OwlModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
