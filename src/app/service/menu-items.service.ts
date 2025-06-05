import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../model/menuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }
  menuItems =signal<MenuItem[]> ([
    {
        icon: 'dashboard',
        label: 'Dashboard',
        route: '/dashboard'
    },
    {
        icon: 'account_circle',
        label: 'Account',
        route: '/account'
    },
    {
        icon: 'settings',
        label: 'Settings',
        route: '/settings'
    },
    {
        icon: 'help',
        label: 'Help',
        route: '/help'
    }
  ])
}
