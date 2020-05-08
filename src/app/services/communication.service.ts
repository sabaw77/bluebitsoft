import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';
import { FilterInterface } from '../interfaces/filter.interface';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private url: string = 'assets/users.json';
  cloneList: UserInterface[] = [];
  list = [];
  returnObject = { list: [], length: 0 };
  filter: FilterInterface;

  constructor(private http: HttpClient) { }

  getList(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url).subscribe((res: UserInterface[]) => {
        this.cloneList = res;
        this.getClone();
        this.returnObject = { list: this.list.slice(0, this.filter.limit), length: this.list.length };
        resolve(this.returnObject);
      });

    })

  }
  getClone() {
    this.list = [...this.cloneList];
  }

  pageChanged(event): any {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    return this.returnObject = { list: this.list.slice(startItem, endItem), length: this.list.length };
  }

  search(text) {
    this.getClone();
    this.list = this.list.filter(item => item.name.search(new RegExp(text, 'i')) > -1 || item._id.search(new RegExp(text, 'i')) > -1)

    return this.returnObject = { list: this.list.slice(0, this.filter.limit), length: this.list.length };
  }


  delete(user) {
    this.cloneList.splice(this.cloneList.indexOf(user), 1);
    return this.returnObject = { list: this.cloneList.slice(0, this.filter.limit), length: this.cloneList.length };
  }
}
