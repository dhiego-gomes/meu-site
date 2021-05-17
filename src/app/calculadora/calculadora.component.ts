import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tempoEmMinutos: number = 0
  paragrafos: number = 0
  minutos: number = 0
  segundos: number = 0
  calculo: number = 0

  getTempoEmMinutos(valor: any) {
    this.tempoEmMinutos = valor
  }

  getParagrafos(valor: any) {
    this.paragrafos = valor
  }
  
  calculaTempo() {
      this.calculo = this.tempoEmMinutos / this.paragrafos
      this.calculo = this.calculo * 60

      while (this.calculo >= 60) {
        this.calculo = this.calculo - 60
        this.minutos = this.minutos + 1
      }
      
      while (this.calculo > 0) {
        this.calculo = this.calculo - 1
        this.segundos = this.segundos + 1
      }

      return this.minutos, this.segundos 
  }

}
