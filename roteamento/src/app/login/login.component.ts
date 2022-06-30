import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if (this.auth.login(this.email, this.senha)){
      this.router.navigate(["pagina-protegida"]);
      return;
    }
    alert("Login ou senha inválido");
    this.email = "";
    this.senha = "";
  }
}
