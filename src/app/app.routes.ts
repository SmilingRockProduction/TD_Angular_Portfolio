import { provideRouter, Routes } from '@angular/router';
import { homepage } from '../homepage/homepage';
import { resume } from '../resume/resume';
import { showroom } from '../showroom/showroom';
import { portfolio_header } from '../header/portfolio_header';
import { ApplicationConfig, bootstrapApplication } from '@angular/platform-browser';
import { App } from './app';

export const routes: Routes = [
    {path: '', redirectTo: '/homepage', pathMatch: 'full'},
    {path: '#', component: homepage},
    {path: 'homepage', component: homepage},
    {path: 'resume', component: resume},
    {path: 'showroom', component: showroom},
];

export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)]
};