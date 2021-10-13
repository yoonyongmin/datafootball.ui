import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foot } from '../../model/foot';
import { Position } from '../../model/position';
import { Stat } from '../../model/stat';
import { UploadFile } from '../../model/uploadFile';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  user: User = {
    id: 0,
    name: "",
    height: null,
    weight: null,
    backNumber: null,
    stat: new Stat,
    position: new Position,
    foot: new Foot,
    uploadFile: new UploadFile
  }

  stat: Stat = {
    id: 0,
    goal: 0,
    shoot: 0,
    assist: 0,
    pass: 0,
    tackle: 0,
    intercept: 0,
  }

  position: Position = {
    id: 0,
    name: ""
  }

  users: User[];

  positions: Position[];

  foots: Foot[];

  formData = new FormData();

  @ViewChild("fileUpload", {static: false}) fileUpload: ElementRef;files  = []; 

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  onChange(event) {
    this.formData = new FormData();
    // 내가 input event로 입력한 배열의 0번째
    console.log(event.target.files[0])
    this.formData.append("file", event.target.files[0]);
  }

  userList() {
    this.userService.userList().subscribe(Response => this.users = Response);
  }

  userUpdate() {
    this.userService.userUpdate(this.user).subscribe(Response => this.router.navigate(['user']));
  }

  userDetail(id: string) {
    this.userService.userDetail(id).subscribe(Response => this.user = Response);
  }

  positionList() {
    this.userService.positionList().subscribe(Response => this.positions = Response);
  }

  footList() {
    this.userService.footList().subscribe(Response => this.foots = Response);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userList();
    this.userDetail(id);
    this.positionList();
    this.footList();
  }

}
