import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { HomeDetailComponent } from './home/home-detail/home-detail.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { LoginLayoutComponent } from './components/layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout.component';
import { Article1Component } from './second/article1/article1.component';
import { Article2Component } from './second/article2/article2.component';
import { CardComponent } from './components/utils/card/card.component';
import { TestLayoutComponent } from './components/layouts/test-layout/test-layout.component';
import { SlideLayoutComponent } from './components/layouts/slide-layout/slide-layout.component';
import { ShowListComponent } from './components/pages/show-list/show-list.component';
import { ListComponent } from './components/utils/list/list.component';
import { TableComponent } from './components/utils/table/table.component';
import { LoginComponent } from './components/utils/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    Home1Component,
    Home2Component,
    HomeDetailComponent,
    NavbarComponent,
    LoginLayoutComponent,
    MainLayoutComponent,
    Article1Component,
    Article2Component,
    CardComponent,
    TestLayoutComponent,
    SlideLayoutComponent,
    ShowListComponent,
    ListComponent,
    TableComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
