import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { AuthGuard } from './Gaurds/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './Gaurds/admin.guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';

// Import the layout components
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  // Routes using MainLayoutComponent
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],  // Apply AuthGuard to all routes under this layout
    children: [
      { path: '', component: HomepageComponent },
      { path: 'post/:id', component: PostDetailsComponent },
      { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
    ]
  },
  // Routes using AuthLayoutComponent
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'unauthorized', component: UnauthorizedComponent },
    ]
  },
  // Wildcard route for handling 404 pages
  { path: '**', redirectTo: '' }
];


