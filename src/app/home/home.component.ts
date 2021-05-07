import { Component, OnInit } from '@angular/core';
import { Carteira } from './carteira';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  carteiras = []
  carteira: Carteira = new Carteira
  valores: Carteira[] = []

  ngOnInit(): void {
    this.getLocalStorage()

    setInterval(() => {
      this.getLocalStorage()
    }, 5000)

  }

  salvarValor() {
    if (this.carteira.id == null || this.carteira.id == undefined) {
      this.carteira.id = new Date().getTime()
      this.carteiras.push(this.carteira)
    } else {
      for (let indiceCarteira in this.carteiras) {
        if (this.carteiras[indiceCarteira].id == this.carteira.id) {
          this.carteiras[indiceCarteira].descricao = this.carteira.descricao
          this.carteiras[indiceCarteira].valor = this.carteira.valor
          this.carteiras[indiceCarteira].caixa = this.carteira.caixa
          this.carteiras[indiceCarteira].data_valor = this.carteira.data_valor
        }
      }

    }
    this.salvaLocalStorage()

    this.limparTela()

    this.getLocalStorage()
  }

  editarRegistro(idRegistro) {
    if (localStorage.hasOwnProperty("carteira")) {
      this.carteiras = JSON.parse(localStorage.getItem("carteira"))
    }

    for (let carteira in this.carteiras) {
      if (this.carteiras[carteira].id == idRegistro) {
        this.carteira.id = this.carteiras[carteira].id
        this.carteira.descricao = this.carteiras[carteira].descricao
        this.carteira.valor = this.carteiras[carteira].valor
        this.carteira.caixa = this.carteiras[carteira].caixa
        this.carteira.data_valor = this.carteiras[carteira].data_valor
      }
    }

  }

  deletaRegistro(carteira: Carteira) {
    let index = this.carteiras.findIndex(c => c.id === carteira.id)
    this.carteiras.splice(index, 1)
    this.salvaLocalStorage()
  }

  getLocalStorage() {
    if (localStorage.hasOwnProperty("carteira")) {

      let objectArray: Carteira[] = JSON.parse(localStorage.getItem("carteira"))

      let sortedArray: Carteira[] = objectArray.sort((n1, n2) => {
        if (n1.data_valor > n2.data_valor) {
          return -1;
        }
        if (n1.data_valor < n2.data_valor) {
          return 1;
        }

        return 0;
      });

      this.carteiras = sortedArray
    }
  }

  salvaLocalStorage() {
    localStorage.setItem("carteira", JSON.stringify(this.carteiras))
    this.getLocalStorage()

  }

  limparTela() {
    this.carteira = new Carteira
  }
}
