import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/civil/project/project.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UpdateContentComponent } from './components/marketing/update-content/update-content.component';
import { ContentStatusComponent } from './components/marketing/content-status/content-status.component';
import { ViewGoalComponent } from './components/marketing/add-contents/view-goal/view-goal.component';
import { AddContentsComponent } from './components/marketing/add-contents/add-contents.component';
import { ActualTaskComponent } from './components/marketing/update-content/actual-task/actual-task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectMarketingComponent } from './components/marketing/project-marketing/project-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    DashboardComponent,
    ProjectComponent,
    UpdateContentComponent,
    ContentStatusComponent,
    ViewGoalComponent,
    AddContentsComponent,
    ActualTaskComponent,
    ProjectsComponent,
    ProjectMarketingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    MatGridListModule,
    MatCardModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
