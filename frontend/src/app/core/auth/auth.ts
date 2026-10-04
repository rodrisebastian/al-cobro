import { Injectable, signal } from '@angular/core';

interface Usuario {
  email: string;
  password: string;
  rol: 'admin' | 'agente';
}

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private usarDatosMock = true;

  private usuariosMock: Usuario[] = [
    { email: 'admin@alcobro.com', password: '123456', rol: 'admin' },
    { email: 'agente@alcobro.com', password: '123456', rol: 'agente' },
  ];

  // estado reactivo global: cualquier componente puede leer quién está logueado
  usuarioActual = signal<Usuario | null>(null);

  login(email: string, password: string): Usuario | null {
    let usuario: Usuario | null = null;

    if (this.usarDatosMock) {
      usuario = this.usuariosMock.find((u) => u.email === email && u.password === password) ?? null;
    } else {
      // ddbb_login: acá va la llamada real con HttpClient cuando esté el backend
    }

    this.usuarioActual.set(usuario);
    return usuario;
  }

  logout(): void {
    this.usuarioActual.set(null);
  }

  estaLogueado(): boolean {
    return this.usuarioActual() !== null;
  }
}
