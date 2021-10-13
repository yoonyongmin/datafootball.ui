import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foot } from '../model/foot';
import { Paging } from '../model/paging';
import { Position } from '../model/position';
import { Stat } from '../model/stat';
import { UploadFile } from '../model/uploadFile';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:8222/api"

  constructor(private http: HttpClient) { }

  // Oauth2
  public login() {
    return this.http.get(this.url+"/login");
  }

  // FileUpload
  public upload(formData) {
    return this.http.post<any>(this.url+"/fileUpload", formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  // UserService
  userList(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/userList");
  }

  userSearch(searchKeyword, currentPage): Observable<any> {
    return this.http.get<any>(this.url+"/search/?searchKeyword="+searchKeyword+"&&"+"page="+currentPage);
  }

  userPaging(pageAble: any, search: string): Observable<any> {
    return this.http.get<any>(this.url+"/paging?page="+pageAble.pageNumber+
    "&size="+pageAble.pageSize+
    "&sortItem="+pageAble.sortKeyword+
    "&sortOrder="+pageAble.sortOrder+
    "&search="+search).pipe(map(res => res));
  }
  
  topPosition(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topPosition", param).pipe(map(res => res));
  }

  topGoal(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topGoal", param).pipe(map(res => res));
  }
  
  topShoot(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topShoot", param).pipe(map(res => res));
  }
  
  topAssist(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topAssist", param).pipe(map(res => res));
  }
  
  topPass(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topPass", param).pipe(map(res => res));
  }
  
  topTackle(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topTackle", param).pipe(map(res => res));
  }
  
  topIntercept(currentPage): Observable<any> {
    const param = new FormData;
    param.append("page", currentPage);
    return this.http.post<any>(this.url+"/topIntercept", param).pipe(map(res => res));
  }

  userDetail(id: string): Observable<any> {
    return this.http.get(this.url+"/selectOne/?id="+id);
  }

  userInsert(user: User, stat: Stat, formData: FormData): Observable<any> {
    const param = formData;
    param.append("id", user.id.toString());
    param.append("name", user.name);
    param.append("height", user.height.toString());
    param.append("weight", user.weight.toString());
    param.append("backNumber", user.backNumber.toString());
    param.append("position_id", user.position.id.toString());
    param.append("foot_id", user.foot.id.toString());
    param.append("goal", stat.goal.toString());
    param.append("shoot", stat.shoot.toString());
    param.append("assist", stat.assist.toString());
    param.append("pass", stat.pass.toString());
    param.append("tackle", stat.tackle.toString());
    param.append("intercept", stat.intercept.toString());
    return this.http.post(this.url+"/userInsert", param);
  }

  userUpdate(user: User): Observable<any> {
    const param = new FormData
    param.append("id", user.id.toString());
    param.append("name", user.name);
    param.append("height", user.height.toString());
    param.append("weight", user.weight.toString());
    param.append("backNumber", user.backNumber.toString());
    param.append("position_id", user.position.id.toString());
    param.append("foot_id", user.foot.id.toString());
    return this.http.put(this.url+"/userUpdate", param);
  }

  userDelete(id: string): Observable<any> {
    return this.http.delete<any>(this.url+"/userDelete/?id="+id);
  }

  // StatService
  statList(): Observable<Stat[]> {
    return this.http.get<Stat[]>(this.url+"/statList");
  }

  statDetail(id: string): Observable<any> {
    return this.http.get(this.url+"/selectStat/?id="+id);
  }

  fwMvp(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/fwMvp");
  }

  mfMvp(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/mfMvp");
  }

  dfMvp(): Observable<User[]> {
    return this.http.get<User[]>(this.url+"/dfMvp");
  }

  goalUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal+point).toString());
    param.append("shoot", (user.stat.shoot+point).toString());
    param.append("assist", (user.stat.assist).toString());
    param.append("pass", (user.stat.pass).toString());
    param.append("tackle", (user.stat.tackle).toString());
    param.append("intercept", (user.stat.intercept).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/goalUpdate", param);
  }

  shootUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal).toString());
    param.append("shoot", (user.stat.shoot+point).toString());
    param.append("assist", (user.stat.assist).toString());
    param.append("pass", (user.stat.pass).toString());
    param.append("tackle", (user.stat.tackle).toString());
    param.append("intercept", (user.stat.intercept).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/shootUpdate", param);
  }

  assistUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal).toString());
    param.append("shoot", (user.stat.shoot).toString());
    param.append("assist", (user.stat.assist+point).toString());
    param.append("pass", (user.stat.pass+point).toString());
    param.append("tackle", (user.stat.tackle).toString());
    param.append("intercept", (user.stat.intercept).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/assistUpdate", param);
  }
  
  passUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal).toString());
    param.append("shoot", (user.stat.shoot).toString());
    param.append("assist", (user.stat.assist).toString());
    param.append("pass", (user.stat.pass+point).toString());
    param.append("tackle", (user.stat.tackle).toString());
    param.append("intercept", (user.stat.intercept).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/passUpdate", param);
  }

  tackleUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal).toString());
    param.append("shoot", (user.stat.shoot).toString());
    param.append("assist", (user.stat.assist).toString());
    param.append("pass", (user.stat.pass).toString());
    param.append("tackle", (user.stat.tackle+point).toString());
    param.append("intercept", (user.stat.intercept+point).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/tackleUpdate", param);
  }

  interceptUpdate(user: User): Observable<any> {
    const param = new FormData();
    const point = 1;
    param.append("id", user.stat.id.toString());
    param.append("goal", (user.stat.goal).toString());
    param.append("shoot", (user.stat.shoot).toString());
    param.append("assist", (user.stat.assist).toString());
    param.append("pass", (user.stat.pass).toString());
    param.append("tackle", (user.stat.tackle).toString());
    param.append("intercept", (user.stat.intercept+point).toString());
    param.append("user_id", user.id.toString());
    return this.http.put(this.url+"/interceptUpdate", param);
  }

  // PositionService
  positionList(): Observable<Position[]> {
    return this.http.get<Position[]>(this.url+"/positionList");
  }

  // FootService
  footList(): Observable<Foot[]> {
    return this.http.get<Foot[]>(this.url+"/footList");
  }

  // UploadFileService
  fileList(): Observable<UploadFile[]> {
    return this.http.get<UploadFile[]>(this.url+"/fileList");
  }

}
