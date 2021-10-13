import { Component, OnInit } from '@angular/core';
import { Position } from '../../model/position';
import { Stat } from '../../model/stat';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  
  stats: Stat[];

  positions: Position[];

  displayedColumns: string[] = [
    'backNumber',
    'name',
    'position',
    'foot'
  ]

  constructor(private userService: UserService) { }

  userList() {
    this.userService.userList().subscribe(Response => this.users = Response);
  }

  statList() {
    this.userService.statList().subscribe(Response => this.stats = Response);
  }

  positionList() {
    this.userService.positionList().subscribe(Response => this.positions = Response);
  }

  ngOnInit(): void {
    this.userList();
    this.statList();
    this.positionList();
  }

}
