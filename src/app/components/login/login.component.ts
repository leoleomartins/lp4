import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro= ''

  public userForm = new FormGroup({
    cpf: new FormControl(null),
    senha: new FormControl(null)    
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  entrar(){
    if(this.userForm.value.cpf == '123' && this.userForm.value.senha == '123'){
      this.router.navigate(['clientes']);
    }else{
      this.mensagemErro = 'CPF ou senha Inválidos'
    }
  }

}
