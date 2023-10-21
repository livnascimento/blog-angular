import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home.component';

import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { TitleComponent } from '../../components/title/title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { EmailFormComponent } from '../../components/email-form/email-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuBarComponent,
    TitleComponent,
    BigCardComponent,
    SmallCardComponent,
    FooterComponent,
    EmailFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
