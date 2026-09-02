import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { ContactList } from './pages/contact-list/contact-list';

export const routes: Routes = [
    {
        path:"login",
        component:Login
    },
    {
        path:"register",
        component:Register
    },
    {
        path: "contacts",
        component: ContactList
    },
    {
        path: "",
        redirectTo: "contacts",
        pathMatch: "full"
    }
];
