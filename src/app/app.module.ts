import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { TimerComponent } from './components/timer/timer.component';
import { CounterComponent } from './components/timer/counter/counter.component';
import { TimerInputComponent } from './components/timer/timer-input/timer-input.component';
import { TimeStampsComponent } from './components/timer/time-stamps/time-stamps.component';
import { LogCountComponent } from './components/timer/log-count/log-count.component';
import { AccountComponent } from './components/account/account.component';
import { SortDirectiveDirective } from './sort-directive.directive';

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent
  },{
    path: 'products', component: CategoryPageComponent
  },{
    path: 'timer', component: TimerComponent
  }, {
    path: 'users', component: UsersComponent
  }, {
    path: 'scroll', component: AccountComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    HeaderComponent,
    CategoryPageComponent,
    TimerComponent,
    CounterComponent,
    TimerInputComponent,
    TimeStampsComponent,
    LogCountComponent,
    AccountComponent,
    SortDirectiveDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

