import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users: any[] = [
    {
      "id": "4",
      "name": "John Doe",
      "class": "4",      
      "age": "15",
      "section": "A"
    }, {
      "id": "1",
      "name": "Leo",
      "class": "3",
      "age": "12",
      "section": "D"
    }, {
      "id": "2",
      "name": "Lina Heady",
      "class": "1",
      "age": "43",
      "section": "B"
    }, {
      "id": "5",
      "name": "John Cena",
      "class": "3",
      "section": "C",
      "age": "50"
    }, {
      "id": "3",
      "name": "Emilly Clarke",
      "class": "2",
      "age": "10",
      "section": "A"
    },{
      "id": "6",
      "name": "UnderTaker",
      "class": "4",
      "age": "13",
      "section": "E"
    }];

  usersData: any[] = [...this.users];

  sortedData(value) {
    this.usersData = [...value];
  }
}
