import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']


  
})



export class LoginComponent {

  constructor(private router: Router) {}

  email: string = "";
  password: string = "";
  iniciarSesion (email: String, password: String ){

    if (email == "a" &&  password == "a"){

      this.router.navigate(['/paciente']);

    }else{

      if (email == "b" &&  password == "b"){

        this.router.navigate(['/medico']);

      }
    }



  }



}
