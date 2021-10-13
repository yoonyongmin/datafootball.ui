import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Foot } from '../../model/foot';
import { Position } from '../../model/position';
import { Stat } from '../../model/stat';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';


// FileUpload
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';  
import { catchError, map } from 'rxjs/operators';  
import { UploadFile } from '../../model/uploadFile';

@Component({
  selector: 'app-user-editing',
  templateUrl: './user-editing.component.html',
  styleUrls: ['./user-editing.component.css']
})
export class UserEditingComponent implements OnInit {

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

  constructor(private userService: UserService, private router: Router) { }

  onChange(event) {
    this.formData = new FormData();
    // 내가 input event로 입력한 배열의 0번째
    console.log(event.target.files[0])
    this.formData.append("file", event.target.files[0]);
  }

  userInsert() : void {
    this.userService.userInsert(this.user, this.stat, this.formData).subscribe(Response => this.router.navigate(['user']));
  }

  userList() {
    this.userService.userList().subscribe(Response => this.users = Response);
  }

  positionList() {
    this.userService.positionList().subscribe(Response => this.positions = Response);
  }

  footList() {
    this.userService.footList().subscribe(Response => this.foots = Response);
  }

  ngOnInit(): void {
    this.positionList();
    this.footList();
  }

  //   // FileUpload
  // uploadFile(file) {  
  //   const formData = new FormData();  
  //   formData.append('file', file.data);
  //   file.inProgress = true;  
  //   this.userService.upload(formData).pipe(  
  //     map(event => {  
  //       switch (event.type) {  
  //         case HttpEventType.UploadProgress:  
  //           file.progress = Math.round(event.loaded * 100 / event.total);  
  //           break;  
  //         case HttpEventType.Response:  
  //           return event;  
  //       }  
  //     }),  
  //     catchError((error: HttpErrorResponse) => {  
  //       file.inProgress = false;  
  //       return of(`${file.data.name} upload failed.`);  
  //     })).subscribe((event: any) => {  
  //       if (typeof (event) === 'object') {  
  //         console.log(event.body);  
  //       }  
  //     });  
  // }

  // // 여러 이미지 upload
  // private uploadFiles() {  
  //   this.fileUpload.nativeElement.value = '';  
  //   this.files.forEach(file => {  
  //     this.uploadFile(file);  
  //   });  
  // }

  // onClick() {  
  //   const fileUpload = this.fileUpload.nativeElement;fileUpload.onchange = () => {  
  //   for (let index = 0; index < fileUpload.files.length; index++)  
  //   {  
  //    const file = fileUpload.files[index];  
  //    this.files.push({ data: file, inProgress: false, progress: 0});  
  //   }  
  //     this.uploadFiles();  
  //   };  
  //   fileUpload.click();  
  // }

}
