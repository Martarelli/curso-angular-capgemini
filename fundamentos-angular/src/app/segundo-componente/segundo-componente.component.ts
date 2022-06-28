import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {

  nome: string = "renan";
  dataNascimento: string = "1990-01-01";
  urlImagem: string = "../../assets/gatinho.jpg";

  mostrarDataNascimento(){
    alert(`A data de nascimento é ${this.dataNascimento}`)
  }

}
