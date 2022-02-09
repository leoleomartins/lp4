import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/enum/cliente.models';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes!: Cliente [];
  mensagemSucesso = '';

  constructor() { }

  ngOnInit(): void {
    this.clientes = [
      {
      'id':1,
      'nome':'leo',
      'cpf':'123'
      },
      {
        'id':2,
        'nome':'aline',
        'cpf':'1234'
      },
      {
        'id':3,
        'nome':'pureza',
        'cpf':'1235'
      },
      {
        'id':4,
        'nome':'marco',
        'cpf':'1236'
      },
      {
        'id':5,
        'nome':'mario',
        'cpf':'1237'
      },
      {
        'id':6,
        'nome':'naruto',
        'cpf':'1238'
      }, 
  ]
  }

  excluir(index: number){
    
      this.clientes.splice(index,1);
      this.mensagemSucesso = 'Cliente Removido'
      setTimeout(() => { this.mensagemSucesso=''}, 2000)
      console.log(this.clientes)
  }

}
