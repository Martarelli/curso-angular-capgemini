import { LoggerService } from './../logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {

  nome: string = "";

  constructor(private logger: LoggerService){}

  adicionarNome():void {
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }

}
