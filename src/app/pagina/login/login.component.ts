import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Alerta } from 'src/app/modelo/alerta';
import { TokenDTO } from 'src/app/modelo/token-dto';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']



})

export class LoginComponent {
  alerta!: Alerta;
  
  constructor(private router: Router, private authService:AuthService, private tokenService:TokenService) { }

  email: string = "";
  password: string = "";
  loginDTO=new LoginDTO();
  

  
  public login(){
    this.authService.login(this.loginDTO).subscribe({
    next: data => {
    //llega vacío el tokebDTO.token
    this.tokenService.login(data.respuesta.token);
  },
  error: error => {
  this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
  }
  });
  }

}
