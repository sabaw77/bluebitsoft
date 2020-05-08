import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { UserListInterface } from '../interfaces/user.interface';
import { FilterInterface } from '../interfaces/filter.interface';
import { PageChangedEvent } from 'ngx-bootstrap/pagination/ngx-bootstrap-pagination';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnChanges {

  constructor(private communicationS: CommunicationService) { }

  userList: UserListInterface;
  @Input() inputUserList: UserListInterface;
  filter: FilterInterface = {
    limit: 15,
    page: 1,
    search: ''
  }
  ngOnInit(): void {
    this.communicationS.filter = this.filter;
    this.getUsers();
  }
  ngOnChanges(): void {
    if (this.inputUserList) {
      this.userList = this.inputUserList;
    }
  }
  getUsers() {
    this.communicationS.getList().then((response: UserListInterface) => {
      this.userList = response;
    })
  }

  pageChanged(event: PageChangedEvent): void {
    this.userList = this.communicationS.pageChanged(event);
  }

  deleteUser(user) {
    this.userList = this.communicationS.delete(user);
  }
}
