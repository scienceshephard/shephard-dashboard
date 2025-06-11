import { Routes } from '@angular/router';
import { SettingsComponent } from './pages/settings.component';
import { AccountComponent } from './pages/account.component';
import { HomeComponent } from './pages/home/home.component';
import { HelpComponent } from './pages/help.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "dashboard"},
    {path: "dashboard", component: HomeComponent},
    {path: "help", component: HelpComponent},
    {path: "settings", component: SettingsComponent},
    {path: "account", component: AccountComponent}
];
