import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SkiResortComponent } from './ski-resort/ski-resort.component';
import { ResortDescriptionComponent } from './ski-resort/resort-description/resort-description.component';
import { ResortTabsComponent } from './ski-resort/resort-tabs/resort-tabs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TracksComponent } from './ski-resort/tracks/tracks.component';
import { WeatherComponent } from './ski-resort/weather/weather.component';
import { SkiPassComponent } from './ski-resort/ski-pass/ski-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    SkiResortComponent,
    ResortDescriptionComponent,
    ResortTabsComponent,
    TracksComponent,
    WeatherComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
