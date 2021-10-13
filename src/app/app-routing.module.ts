import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatchComponent } from './match/match.component';

import { MvpComponent } from './mvp/mvp.component';
import { TeamComponent } from './team/team.component';

import { StatComponent } from './stat/stat-list/stat.component';
import { StatEditingComponent } from './stat/stat-editing/stat-editing.component';

import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditingComponent } from './user/user-editing/user-editing.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { LoginComponent } from './sign/login/login.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', redirectTo: 'login-page', pathMatch: 'full'},
  {path: 'login-page', component: LoginComponent},
  {path: 'mvp', component: MvpComponent},
  {path: 'board', component: MatchComponent},
  {path: 'team', component: TeamComponent},
  {path: 'user', component: UserListComponent},
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'user-editing', component: UserEditingComponent},
  {path: 'user-update/:id', component: UserUpdateComponent},
  {path: 'stat', component: StatComponent},
  {path: 'stat-editing/:id', component: StatEditingComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
