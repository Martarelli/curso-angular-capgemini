import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensagens: string[] = [];

  logar(mensagem:string): void{
    console.log(mensagem);
    this.mensagens.push(mensagem)
  }

  exibeTodosOsLogs(): void{
    console.log(this.mensagens)
  }

}
