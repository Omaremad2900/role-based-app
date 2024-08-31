import { Component, Input } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { SearchServiceService } from '../Services/search-service.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule], // Include HttpClientModule
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class HomepageComponent {
  posts: any[] = [];
  filteredPosts: any[] = [];
  
  constructor(private postsService: PostsService,private searchService:SearchServiceService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.filteredPosts = posts;
    });
    this.searchService.searchQuery$.subscribe(query => {
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
      );
    });
  
  }

  
}
