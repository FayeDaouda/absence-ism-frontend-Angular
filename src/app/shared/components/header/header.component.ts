import { Component, inject } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/impl/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true, 
  imports:[CommonModule]
})
export class HeaderComponent {
  authService = inject(AuthService);

  get user(): User | null {
    return this.authService.currentUserSignal();
  }
}
