import { Component } from '@angular/core';
import { UserI, UserService } from '../../services/user.service';

@Component({
  selector: 'app-server-users',
  standalone: true,
  imports: [],
  templateUrl: './server-users.component.html',
  styleUrl: './server-users.component.scss'
})
export class ServerUsersComponent {
  constructor(private userService: UserService) { }

  users: UserI[] = [];

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        console.log("users loaded:", this.users);
      },
      error: (error) => {
        console.log("Error loading users", error);
      }
    })
  }
}
