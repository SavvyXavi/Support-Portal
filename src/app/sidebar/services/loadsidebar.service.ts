import { Sidebar } from '../model/sidebar';
import { AuthenticationService } from '../../login/services/authentication.service';
import { HttpClient } from '@angular/common/http';


export class SidebarService {

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) { }

  public linkToDash() {
    return this.http.get(`/${this.authenticationService.currentUserValue.partner}`);
  }
}

export const Sidebars: Sidebar[] = [
  {id: 1, name: 'Dashboard', visible: true, link: '/${SidebarService.linkToDash}', menu: 'main', mainmenu: 'dash'},
  {id: 2, name: 'Manage Assets', visible: true, link: '/manageassets', menu: 'mainsub-a', mainmenu: 'assets'},
  {id: 2.1, name: 'Lists', visible: false, link: '/manageassets/lists', menu: 'sub-A', mainmenu: 'assets'},
  {id: 2.2, name: 'Assets', visible: false, link: '/manageassets/assets', menu: 'sub-A', mainmenu: 'assets'},
  {id: 2.3, name: 'Tickets', visible: false, link: '/manageassets/tickets', menu: 'sub-A', mainmenu: 'assets'},
  {id: 2.4, name: 'Contracts', visible: false, link: '/manageassets/contracts', menu: 'usub-A', mainmenu: 'assets'},
  {id: 2.5, name: 'Assets', visible: false, link: 'manageassets/assets', menu: 'usub-A', mainmenu: 'assets'},
  {id: 2.6, name: 'Tickets', visible: false, link: 'manageassets/tickets', menu: 'usub-A', mainmenu: 'assets'},
  {id: 4, name: 'Admin', visible: true, link: '/admin', menu: 'mainsub-b', mainmenu: 'admin'},
  {id: 4.1, name: 'Accounts', visible: false, link: '/admin/accounts', menu: 'sub-B', mainmenu: 'admin'},
  {id: 4.2, name: 'Support', visible: false, link: '/admin/support', menu: 'sub-B', mainmenu: 'admin'},
  {id: 4.3, name: 'OEM', visible: false, link: '/admin/oem', menu: 'sub-B', mainmenu: 'admin'},
  {id: 4.4, name: 'Users', visible: false, link: 'admin/users', menu: 'usub-B', mainmenu: 'admin'},
  {id: 4.5, name: 'Asset Locations', visible: false, link: 'admin/locations', menu: 'usub-B', mainmenu: 'admin'}
];

