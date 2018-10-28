import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { AlertsService } from './alert-service/alerts.service';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'user-form', component: UserFormComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(), // normal progress bar
    NgProgressHttpModule, // progress bar to load http requests
    RouterModule.forRoot(routes)

  ],
  providers: [AlertsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
