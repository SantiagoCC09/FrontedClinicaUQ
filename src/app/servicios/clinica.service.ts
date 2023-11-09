import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClinicaService {
  private clinicaURL = "http://localhost:8081/api/clinicauq";
  constructor(private http: HttpClient) { }
  public listarCiudades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-ciudades`);
  }
  public listarEspecialidades(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-especialidades`);
  }
  public listarTipoSangre(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-tipo-sangre`);
  }
  public listarEPS(): Observable<MensajeDTO> {
    return this.http.get<MensajeDTO>(`${this.clinicaURL}/lista-eps`);
  }
}