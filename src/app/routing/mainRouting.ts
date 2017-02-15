import { SlideLayoutComponent } from './../components/layouts/slide-layout/slide-layout.component';
import { TestLayoutComponent } from './../components/layouts/test-layout/test-layout.component';
import { Article2Component } from './../second/article2/article2.component';
import { Article1Component } from './../second/article1/article1.component';
import { LoginLayoutComponent } from './../components/layouts/login-layout/login-layout.component';
import { MainLayoutComponent } from './../components/layouts/main-layout/main-layout.component';
import { HomeDetailComponent } from './../home/home-detail/home-detail.component';
import { SecondComponent } from '../second/second.component';
import { HomeComponent } from '../home/home.component';
import { Home2Component } from '../home/home2/home2.component';
import { Home1Component } from '../home/home1/home1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';


export const mainRouting: Routes = [
    {
        path: 'main',
        component: MainLayoutComponent,
        children: [
            {
                path: '', redirectTo: '/main/home', pathMatch: 'full'
            },
            {
                path: 'home', component: HomeComponent, children: [
                    { path: '', component: Home1Component },
                    { path: 'home1', component: Home1Component },
                    { path: 'home2', component: Home2Component },
                    { path: ':id/:name', component: HomeDetailComponent },
                    { path: 'article1', component: Article1Component, outlet: 'route1' },
                    { path: 'article2', component: Article2Component, outlet: 'route2' }
                ]
            }
        ]
    },
    {
        path: 'login', component: LoginLayoutComponent
    },
    {
        path: 'test', component: TestLayoutComponent
    },
    {
        path: 'slide', component: SlideLayoutComponent
    },
    {
        path: 'second', component: SecondComponent, children: [
            { path: 'article1', component: Article1Component, outlet: 'route1' },
            { path: 'article2', component: Article2Component, outlet: 'route2' }
        ]
    },
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: '**', component: Home1Component },
]