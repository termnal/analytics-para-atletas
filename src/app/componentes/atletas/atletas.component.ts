import { AtletaService } from './../../servicos/atleta.service';
import { Atleta } from './../../models/atleta';
import { AtletaDetalheComponent } from './../atleta-detalhe/atleta-detalhe.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atletas',
  templateUrl: './atletas.component.html',
  styleUrls: ['./atletas.component.css']
})
export class AtletasComponent implements OnInit {

  public sexo: string = 'todos'
  public esporte: string = 'natação'
  public atletas: Array<Atleta>
  public atletaSelecionado: Atleta

  //define construtor com o AtletaService injetavel
  constructor(private service: AtletaService) { }

  ngOnInit() {
    this.atualizar()
  }

  public atualizar() {
    //chama getAtletas passando o esporte
    this.service.getAtletas(this.esporte)
      //define o callback do getAtletas com o subscribe
      .subscribe(
      data => this.atletas = data,
      err => console.log('error', err)
      )
  }

  setSelecionado(atleta) {
    this.atletaSelecionado = atleta;
  }
}
