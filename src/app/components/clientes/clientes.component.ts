import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {


  mensagemSucesso = '';
  
  public compraForm = new FormGroup({
    sexo: new FormControl(null),
    valor: new FormControl(null)    
  });

  constructor() { }

  ngOnInit(): void {
   
  }

  comprar(){
    if(this.compraForm.value.sexo=='' || this.compraForm.value.valor ==''){
      this.mensagemSucesso = 'Os campos de sexo e valor são obrigatórios'
      return;
    }
    if(this.compraForm.value.sexo == "Masculino"){
      if(this.compraForm.value.valor < 400){
          this.mensagemSucesso = "O senhor ganhou 100 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 1000){
          this.mensagemSucesso = "O senhor ganhou 200 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 1500){
          this.mensagemSucesso = "O senhor ganhou 300 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 2000){
          this.mensagemSucesso = "O senhor ganhou 500 pontos no seu plano de fidelidade";
      }else{
          this.mensagemSucesso = "O senhor ganhou 1000 pontos no seu plano de fidelidade";
      }
  }else{
      if(this.compraForm.value.valor < 400){
          this.mensagemSucesso = "A senhora ganhou 100 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 1000){
          this.mensagemSucesso = "A senhora ganhou 200 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 1500){
          this.mensagemSucesso = "A senhora ganhou 300 pontos no seu plano de fidelidade";
      }else if(this.compraForm.value.valor < 2000){
          this.mensagemSucesso = "A senhora ganhou 500 pontos no seu plano de fidelidade";
      }else{
          this.mensagemSucesso = "A senhora ganhou 1000 pontos no seu plano de fidelidade";
      }
  }
  }

}
