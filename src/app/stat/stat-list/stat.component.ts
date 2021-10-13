import { Component, OnInit, NgZone } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Foot } from '../../model/foot';
import { Paging } from '../../model/paging';
import { Position } from '../../model/position';
import { Stat } from '../../model/stat';
import { UploadFile } from '../../model/uploadFile';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})

export class StatComponent implements OnInit {

  dataSource;
  displayedColumns: string[] = [
    'name',
    'position',
    'goal',
    'shoot',
    'assist',
    'pass',
    'tackle',
    'intercept'
  ]

  pageAble = {
    sortKeyword : "name",
    sortOrder : "asc",
    pageNumber : 0,
    pageSize : 2,
  }

  search: string = '';

  currentPage:number = 0;
  totalCount: number;
  searchKeyword: string = null;
  prevKeyword: string = null;

  element;
  totalPage;

  constructor(private userService: UserService) { }
    
  ngOnInit(): void {
    this.paging();
  }

  public paging() {
    this.userService.userPaging(this.pageAble, this.search).subscribe(res => {
      this.element = res;
      this.pageAble.pageNumber = res.pageable.pageNumber;
      this.totalPage = res.totalPages;
      this.dataSource = res.content;
    });
  }

  public doSort(sortItem : string) {
    if(this.pageAble.sortKeyword == sortItem) {
      if(this.pageAble.sortOrder == 'desc') {
        this.pageAble.sortOrder = 'asc' as SortDirection;
      } else {
        this.pageAble.sortOrder = 'desc' as SortDirection;
      }
    } else {
      this.pageAble.sortKeyword = sortItem;
      this.pageAble.sortOrder = 'asc' as SortDirection;
    }
    this.paging();
  }
  
  public goSearch(searchKeyword) {
    if(this.searchKeyword == null) {
      alert("검색 키워드를 입력하세요");
      return;
    }
    this.userService.userSearch(this.searchKeyword, this.currentPage).subscribe(res => {this.dataSource = res.searchKeyword; this.totalPage = res.totalPage-1});
  }

  public goPage(pageNumber: number) {
    if(pageNumber < 0) {
      alert('첫 페이지 입니다.')
      return;
    } else if(pageNumber > this.totalPage) {
      alert('마지막 페이지 입니다.')
      return;
    } else {
      this.pageAble.pageNumber = pageNumber;
    }
    this.paging();
  }
  
  // goPage(pageNumber: number) {
  //   if(pageNumber < 0) {
  //     alert("첫 페이지 입니다");
  //     return;
  //   } else if(pageNumber > this.totalPage) {
  //     alert("마지막 페이지 입니다");
  //     return;
  //   } else {
  //     this.currentPage = pageNumber;
      
  //     if (this.searchKeyword != null) {
  //       this.goSearch(this.searchKeyword);
  //     } else if(this.pagingCount != 0) {
  //       this.paging();
  //     } else if(this.positionCount != 0) {
  //       this.topPosition();
  //     } else if(this.goalCount != 0) {
  //       this.topGoal();
  //     } else if(this.shootCount != 0) {
  //       this.topShoot();
  //     } else if(this.assistCount != 0) {
  //       this.topAssist();
  //     } else if(this.passCount != 0) {
  //       this.topPass();
  //     } else if(this.tackleCount != 0) {
  //       this.topTackle();
  //     } else if(this.interceptCount != 0) {
  //       this.topShoot();
  //     }
  //   }
  // }
    
  // topPosition(): void {
  //   this.pagingCount = 0;
  //   this.positionCount++;
  //   this.goalCount = 0;
  //   this.shootCount = 0;
  //   this.assistCount = 0;
  //   this.passCount = 0;
  //   this.tackleCount = 0;
  //   this.interceptCount = 0;
  //   this.userService.topPosition(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
  
  // topGoal(): void {
  //   this.pagingCount = 0;
  //   this.positionCount = 0;
  //   this.goalCount++;
  //   this.shootCount = 0;
  //   this.assistCount = 0;
  //   this.passCount = 0;
  //   this.tackleCount = 0;
  //   this.interceptCount = 0;
  //   this.userService.topGoal(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }

  // topShoot() {
  //   this.pagingCount = 0;
  //   this.goalCount = 0;
  //   this.shootCount++;
  //   this.assistCount = 0;
  //   this.passCount = 0;
  //   this.tackleCount = 0;
  //   this.interceptCount = 0;
  //   this.userService.topShoot(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
  
  // topAssist() {
  //   this.pagingCount = 0;
  //   this.positionCount = 0;
  //   this.goalCount = 0;
  //   this.shootCount = 0;
  //   this.assistCount++;
  //   this.passCount = 0;
  //   this.tackleCount = 0;
  //   this.interceptCount = 0;
  //   this.userService.topAssist(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
  
  // topPass() {
  //   this.pagingCount = 0;
  //   this.positionCount = 0;
  //   this.goalCount = 0;
  //   this.shootCount = 0;
  //   this.assistCount = 0;
  //   this.passCount++;
  //   this.tackleCount = 0;
  //   this.interceptCount = 0;
  //   this.userService.topPass(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
  
  // topTackle() {
  //   this.pagingCount = 0;
  //   this.positionCount = 0;
  //   this.goalCount = 0;
  //   this.shootCount = 0;
  //   this.assistCount = 0;
  //   this.passCount = 0;
  //   this.tackleCount++;
  //   this.interceptCount = 0;
  //   this.userService.topTackle(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
  
  // topIntercept() {
  //   this.pagingCount = 0;
  //   this.positionCount = 0;
  //   this.goalCount = 0;
  //   this.shootCount = 0;
  //   this.assistCount = 0;
  //   this.passCount = 0;
  //   this.tackleCount = 0;
  //   this.interceptCount++;
  //   this.userService.topIntercept(this.currentPage).subscribe(Response => {this.pagings = Response.list; this.totalPage = Response.totalPage-1});
  // }
}
