import { Sidebar } from '../model/sidebar';

export const Sidebars: Sidebar[] = [
  {id: 1, name: 'Dashboard', visible: true, link: '/dashboard', menu: 'main', mainmenu: 'dash'},
  {id: 2, name: 'Manage Assets', visible: true, link: '/manageassets', menu: 'mainsub-a', mainmenu: 'assets'},
  {id: 2.1, name: 'Lists', visible: false, link: '/manageassets/lists', menu: 'sub-A', mainmenu: 'assets'},
  {id: 2.2, name: 'Assets', visible: false, link: '/manageassets/assets', menu: 'sub-A', mainmenu: 'assets'},
  {id: 2.3, name: 'Tickets', visible: false, link: '/manageassets/tickets', menu: 'sub-A', mainmenu: 'assets'},
  {id: 3, name: 'Budget' , visible: true, link: '/budgets', menu:  'main', mainmenu: 'budget'},
  {id: 4, name: 'Admin', visible: true, link: '/admin', menu: 'mainsub-b', mainmenu: 'admin'},
  {id: 4.1, name: 'Accounts', visible: false, link: '/admin/accounts', menu: 'sub-B', mainmenu: 'admin'},
  {id: 4.2, name: 'Support', visible: false, link: '/admin/support', menu: 'sub-B', mainmenu: 'admin'},
  {id: 4.3, name: 'OEMAD', visible: false, link: '/admin/oem', menu: 'sub-B', mainmenu: 'admin'}
];
