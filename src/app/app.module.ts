import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { ContentModule } from './pages/content/content.module';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { FooterComponent } from './components/footer/footer.component';

import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MenuBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
