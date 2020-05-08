import { Component, OnInit } from '@angular/core';
import { UserListInterface } from '../interfaces/user.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  userList: UserListInterface;
  constructor() { }

  ngOnInit(): void {
  }
  getUserList(userList: UserListInterface) {
    this.userList = userList;
  }
}
