import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabsComponent } from './material/tabs/tabs.component';
import { CardComponent } from './material/card/card.component';

import { MatchComponent } from './match/match.component';

import { StatComponent } from './stat/stat-list/stat.component';

import { TeamComponent } from './team/team.component';
import { MvpComponent } from './mvp/mvp.component';

import { StatEditingComponent } from './stat/stat-editing/stat-editing.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditingComponent } from './user/user-editing/user-editing.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

import { LoginComponent } from './sign/login/login.component';
import { SignUpComponent } from './sign/sign-up/sign-up.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TabsComponent,

    MatchComponent,

    StatComponent,
    StatEditingComponent,

    UserListComponent,
    UserDetailComponent,
    UserEditingComponent,
    UserUpdateComponent,

    TeamComponent,
    MvpComponent,

    LoginComponent,
    SignUpComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
