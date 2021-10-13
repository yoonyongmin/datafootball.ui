import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Foot } from '../../model/foot';
import { Position } from '../../model/position';
import { Stat } from '../../model/stat';
import { User } from '../../model/user';
import { UploadFile } from '../../model/uploadFile';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

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

  foots: Foot[];

  foot: Foot = {
    id: 0,
    name: ""
  }


  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }
  
  userDetail(id: string) {
    this.userService.userDetail(id).subscribe(Response => this.user = Response);
  }
  
  userDelete() {
    this.userService.userDelete(this.user.id.toString()).subscribe(Response => this.router.navigate(['user']));
  }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userDetail(id);
  }

}
