import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {
        path: "",
        title: "App home page",
        component: HomeComponent
    },
    {
        path: "user",
        title: "App User page",
        component: UserComponent
    },

];


