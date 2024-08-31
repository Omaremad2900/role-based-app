import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './Gaurds/admin.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ { path: '', component: HomepageComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'post/:id', component: PostDetailsComponent, canActivate: [AuthGuard] },
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard] },
{ path: 'unauthorized', component: UnauthorizedComponent },
{ path: '**', redirectTo: '' }];
