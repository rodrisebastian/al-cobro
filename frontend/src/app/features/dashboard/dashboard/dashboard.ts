import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Auth } from '../../../core/auth/auth';

@Component({
  selector: 'app-dashboard',
  imports: [MatButtonModule, MatToolbarModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private authService = inject(Auth);
  private router = inject(Router);

  usuario = this.authService.usuarioActual;

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
