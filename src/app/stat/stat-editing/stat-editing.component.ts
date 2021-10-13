import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFile } from '../../model/uploadFile';
import { Foot } from '../../model/foot';
import { Position } from '../../model/position';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';
import { Stat } from 'src/app/model/stat';

@Component({
  selector: 'app-stat-editing',
  templateUrl: './stat-editing.component.html',
  styleUrls: ['./stat-editing.component.css']
})
export class StatEditingComponent implements OnInit {

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

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  userList() {
    this.userService.userList().subscribe(Response => this.users = Response);
  }

  userDetail(id: string) {
    this.userService.userDetail(id).subscribe(Response => this.user = Response);
  }

  goalUpdate() {
    this.userService.goalUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  shootUpdate() {
    this.userService.shootUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  assistUpdate() {
   this.userService.assistUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  passUpdate() {
    this.userService.passUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  tackleUpdate() {
    this.userService.tackleUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  interceptUpdate() {
    this.userService.interceptUpdate(this.user).subscribe(Response => this.router.navigate(['board']));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userDetail(id);
    this.userList();
  }

}
