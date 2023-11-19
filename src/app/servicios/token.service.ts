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
  public login(token:string){
    
    this.setToken(token);
    this.router.navigate(["/"+this.extractSpecificValue(token,"rol")]);
    console.log(this.decodePayload(token));
    }




public extractSpecificValue(token: string, propertyName: string): any | null {
  try {
    const payload = token?.split(".")[1];
    const payloadDecoded = Buffer.from(payload, 'base64').toString('ascii');
    const values = JSON.parse(payloadDecoded);
    
    // Verifica si la propiedad existe en el objeto JSON antes de intentar acceder a ella
    if (values && propertyName && values.hasOwnProperty(propertyName)) {
      return values[propertyName];
    } else {
      console.error(`La propiedad '${propertyName}' no existe en el payload.`);
      return null;
    }
  } catch (error) {
    console.error('Error al extraer el valor del payload:', error);
    return null;
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