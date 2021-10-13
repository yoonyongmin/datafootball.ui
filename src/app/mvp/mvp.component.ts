import { Component, OnInit } from '@angular/core';
import { Foot } from '../model/foot';
import { Position } from '../model/position';
import { UploadFile } from '../model/uploadFile';
import { User } from '../model/user';
import { Stat } from '../model/stat';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-mvp',
  templateUrl: './mvp.component.html',
  styleUrls: ['./mvp.component.css']
})


export class MvpComponent implements OnInit {

  fws: User[];
  fw: User = {
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

  mfs: User[];
  mf: User = {
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
  
  dfs: User[];
  df: User = {
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


  constructor(private userService: UserService) { }

  fwMvp() {
    this.userService.fwMvp().subscribe(Response => this.fws = Response);
  }

  mfMvp() {
    this.userService.mfMvp().subscribe(Response => this.mfs = Response);
  }

  dfMvp() {
    this.userService.dfMvp().subscribe(Response => this.dfs = Response);
  }

  ngOnInit(): void {
    this.fwMvp();
    this.mfMvp();
    this.dfMvp();
  }

}
