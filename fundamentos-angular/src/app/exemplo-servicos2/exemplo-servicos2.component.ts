import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos2',
  templateUrl: './exemplo-servicos2.component.html',
  styleUrls: ['./exemplo-servicos2.component.css']
})
export class ExemploServicos2Component {

  descricao: string = "";

  constructor(public logger: LoggerService){}

  adicionarDescricao(): void {
    this.logger.logar(`A descrição ${this.descricao} foi adicionada`)
  }

}
