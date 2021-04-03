import { Component, OnInit } from '@angular/core';
import { Carteira } from './carteira';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carteira: Carteira = new Carteira
  valores: Carteira[] = []
  tabela: [] = []

  ngOnInit(): void {
    this.iniciarTabela()

    setInterval(() => {
      this.iniciarTabela()
    }, 5000)
  }

  iniciarTabela() {
    this.tabela = JSON.parse(localStorage.getItem("carteira"))
  }

  salvarValor(carteiraForm) {
    let carteira = new Array()

    if (localStorage.hasOwnProperty("carteira")) {
      carteira = JSON.parse(localStorage.getItem("carteira"))
    }

    carteira.push({
      id: carteira.length + 1,
      valor: parseInt(carteiraForm.value.valor),
      caixa: carteiraForm.value.caixa,
      descricao: carteiraForm.value.descricao,
      data_valor: carteiraForm.value.data_valor
    })

    localStorage.setItem("carteira", JSON.stringify(carteira))

    carteiraForm.resetForm()
    this.iniciarTabela()
  }


}
