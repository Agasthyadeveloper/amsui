import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectComponent } from './components/civil/project/project.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sidebar', component:SidebarComponent },
  { path: 'header', component:HeaderComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'civil/property', component: DashboardComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'civil/employees', component: DashboardComponent },
  { path: 'marketing/digital', component: DashboardComponent },
  { path: 'marketing/leads', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
