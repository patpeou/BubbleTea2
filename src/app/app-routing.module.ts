import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RostersComponent } from './main/rosters/rosters.component';
import { ScheduleComponent } from './main/schedule/schedule.component';
import { LoginComponent } from './main/login/login.component'
import { ProfileComponent } from './main/profile/profile.component';
import { NewsComponent } from './main/posts/news/news.component';
import { ScoresComponent } from "./main/scores/scores.component";

const routes: Routes = [
  {
    path: 'schedule',
    component: ScheduleComponent
  },
  {
    path: 'scores',
    component: ScoresComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'rosters',
    component: RostersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'news',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
