import { Component, OnInit, Output } from '@angular/core';
import { CandidatosService } from '../candidatos.service';
import { Candidatos } from '../candidatos';

@Component({
  selector: 'app-candidatos-list',
  standalone: false,
  templateUrl: './candidatos-list.component.html',
  styleUrl: './candidatos-list.component.css'
})
export class CandidatosListComponent implements OnInit {

  @Output() candidatoSeleccionado = null
  seleccionado = false;
  candidatos: Array<Candidatos> = [];

  seleccionarCandidato(candidato: any) {
    this.candidatoSeleccionado = candidato;
    console.log(this.candidatoSeleccionado);
    this.seleccionado = true;
  }

  constructor(private candidatosServicio: CandidatosService) { }

  getCandidatos(){
    this.candidatosServicio.getCandidatos().subscribe(apiData => {
    this.candidatos = apiData;
  });
  }

  ngOnInit(): void {
      this.getCandidatos();
  }
}
