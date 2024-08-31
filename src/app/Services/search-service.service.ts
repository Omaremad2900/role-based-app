import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {

  private searchQuery = new BehaviorSubject<string>('');
  
  // Observable for the search query
  searchQuery$ = this.searchQuery.asObservable();

  // Method to update the search query
  updateSearchQuery(query: string): void {
    this.searchQuery.next(query);
  }
}
