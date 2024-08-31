import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  phoneNumbers: string[] = [''];
  constructor(private router: Router) {}

  addPhoneNumber() {
    this.phoneNumbers.push('');
  }

  removePhoneNumber(index: number) {
    this.phoneNumbers.splice(index, 1);
  }

  register() {
    this.router.navigate(['/login']);
  }

}
