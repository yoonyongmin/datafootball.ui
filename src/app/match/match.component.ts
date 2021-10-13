import { Component, OnInit } from '@angular/core';
import { UploadFile } from '../model/uploadFile';
import { Foot } from '../model/foot';
import { Position } from '../model/position';
import { Stat } from '../model/stat';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-board',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  users: User[];

  user: User = {
    id: 0,
    name: "",
    height: 0,
    weight: 0,
    backNumber: 0,
    stat: new Stat,
    position: new Position,
    foot: new Foot,
    uploadFile: new UploadFile
  }

  stats: Stat[];

  stat: Stat = {
    id: 0,
    goal: 0,
    shoot: 0,
    assist: 0,
    pass: 0,
    tackle: 0,
    intercept: 0,
  }

  constructor(private userService: UserService) { }

  userList() {
    this.userService.userList().subscribe(Response => this.users = Response);
  }

  statList() {
    this.userService.statList().subscribe(Response => this.stats = Response);
  }

  ngOnInit(): void {
    this.userList();
    this.statList();
  }

}
