import { Component, OnInit } from '@angular/core';

import { UserService } from './../../services/services.index';
import { User } from '../../models/user.model';

@Component({
  selector: 'main-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  user: User;

  constructor( public _userService: UserService) { }

  ngOnInit() {
    this.user = this._userService.user;
  }

}
