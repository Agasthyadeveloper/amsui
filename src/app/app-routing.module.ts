import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/civil/project/project.component';
import { AddContentsComponent } from './components/marketing/add-contents/add-contents.component';
import { UpdateContentComponent } from './components/marketing/update-content/update-content.component';
import { ContentStatusComponent } from './components/marketing/content-status/content-status.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'add-contents', component: AddContentsComponent },
  { path: 'Update-contents', component: UpdateContentComponent },
  { path: 'content-status', component: ContentStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
