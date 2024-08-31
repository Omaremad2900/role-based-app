import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { PostsService } from '../Services/posts.service';
import { SearchServiceService } from '../Services/search-service.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  postService: any;
  
  
  constructor(public authService: AuthService,private router:Router,public searchService:SearchServiceService) {}
  
  

  logout() {
    this.authService.logout();
  }
  login() {
  this.router.navigate(['/login']);
  }
  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchService.updateSearchQuery(inputElement.value);
  }
  }




