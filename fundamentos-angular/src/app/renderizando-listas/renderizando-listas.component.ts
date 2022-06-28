import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {

  celulares: Celular[] = [
    {id: 1, nome: "Celular XL", descricao: "Celular Grande", esgotado:false},
    {id: 2, nome: "Celular", esgotado:false},
    {id: 1, nome: "Celular Mini", descricao: "Celular Pequeno", esgotado:true},
  ]

}
