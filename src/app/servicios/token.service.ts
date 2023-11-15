import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Buffer } from "buffer";
import { TokenDTO } from '../modelo/token-dto';

const TOKEN_KEY = "AuthToken";
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor(private router: Router) { }
  public setToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogged(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
  public login(tokenDTO: TokenDTO) {
    this.setToken(tokenDTO.token);
    if (tokenDTO.tipoUsuario === 'paciente') {
      this.router.navigate(['/paciente']);
    } else if (tokenDTO.tipoUsuario === 'medico') {
      this.router.navigate(['/medico']);
    }
  }
  public logout() {
    window.sessionStorage.clear();
    this.router.navigate(["/inicio"]);
  }
  private decodePayload(token: string): any {
    const payload = token!.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    return values;
  }
}