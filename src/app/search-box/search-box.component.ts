import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { FilterInterface } from '../interfaces/filter.interface';
import { UserListInterface } from '../interfaces/user.interface';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  filter: FilterInterface = {
    limit: 15,
    page: 1,
    search: ''
  }
  timeout: any = null;
  @Output() userList = new EventEmitter<UserListInterface>();
  constructor(private communicationS: CommunicationService) { }

  ngOnInit(): void {
  }

  keyup() {
    clearTimeout(this.timeout);
    let $this = this;
    this.timeout = setTimeout(function () {
      if ($this.filter.search?.length > 2 || $this.filter.search?.length == 0) {
        $this.search();
      }
    }, 1000);

  }
  search() {
    this.userList.emit(this.communicationS.search(this.filter.search))
  }

}
