import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RedirectComponent } from './redirect.component';

import { OwlModule } from 'ng2-owl-carousel';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "redir", component: RedirectComponent }
];
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    OwlModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
