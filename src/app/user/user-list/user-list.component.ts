import { Component } from '@angular/core';
import {User} from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: User[] = []

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }
}
