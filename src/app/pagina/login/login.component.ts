import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/modelo/login-dto';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']



})



export class LoginComponent {

  constructor(private router: Router, private authService:AuthService, private tokenService:TokenService) { }

  email: string = "";
  password: string = "";
  loginDTO=new LoginDTO();
  iniciarSesion(email: String, password: String) {

    if (email == "a" && password == "a") {

      this.router.navigate(['/paciente']);

    } else {

      if (email == "b" && password == "b") {

        this.router.navigate(['/medico']);

      }
    }
  }
  public login() {
    this.authService.login(this.loginDTO).subscribe({
      next: data => {
        this.tokenService.login(data.respuesta.token);
      },
      error: error => {
        this.alerta = { mensaje: error.error.respuesta, tipo: "danger" };
      }
    });
  }



}
