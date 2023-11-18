import { Component } from '@angular/core';
import { TokenService } from './servicios/token.service'; // Asegúrate de importar correctamente tu servicio

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontedClinica';

  constructor(private tokenService: TokenService) {}

  isLogged(): boolean {
    return this.tokenService.isLogged();
  }

  logout(): void {
    this.tokenService.logout();
  }
}
