import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main/header/header.component';
import { LoginComponent } from './main/login/login.component';
import { NewsComponent } from './main/posts/news/news.component';
import { ProfileComponent } from './main/profile/profile.component';
import { RostersComponent } from './main/rosters/rosters.component';
import { ScheduleComponent } from './main/schedule/schedule.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ScoresComponent } from './main/scores/scores.component';
import { PostsComponent } from './main/posts/posts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NewsComponent,
    ProfileComponent,
    RostersComponent,
    ScheduleComponent,
    ScoresComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
