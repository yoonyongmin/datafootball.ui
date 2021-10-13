import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Foot } from './model/foot';
import { Position } from './model/position';
import { Stat } from './model/stat';
import { User } from './model/user';
import { UploadFile } from './model/uploadFile';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'datafooball-project';

  userList: User[];

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


  constructor(private userService: UserService, private router: Router) { }

  reloadData() {
    this.userService.userList().subscribe(Response => this.userList = Response);
  }

  ngOnInit() {
    // this.reloadData();
  }

}
