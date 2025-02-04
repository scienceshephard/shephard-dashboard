import { Routes } from '@angular/router';
import { MessagesComponent } from './pages/messages.component';
import { SettingsComponent } from './pages/settings.component';
import { SignoutComponent } from './pages/signout.component';
import { AccountComponent } from './pages/account.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "dashboard"},
    {path: "dashboard", component: HomeComponent},
    {path: "chat", component: MessagesComponent},
    {path: "settings", component: SettingsComponent},
    {path: "logout", component: SignoutComponent},
    {path: "account", component: AccountComponent}
];
