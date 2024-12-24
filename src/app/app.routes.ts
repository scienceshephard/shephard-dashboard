import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { OrderComponent } from './pages/order/order.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: "dashboard"},
    { path: "dashboard", component: HomeComponent },
    { path: "account", component: AccountComponent },
    { path: "settings", component: SettingsComponent },
    { path: "chat", component: ChatComponent },
    { path: "order", component: OrderComponent },
    { path: "leaderboard", component: LeaderboardComponent },
    { path: "sales", component: SalesComponent },
    { path: "product", component: ProductComponent },
];
