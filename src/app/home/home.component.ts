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
  tabela: [] = []

  ngOnInit(): void {
    this.getLocalStorage()

    setInterval(() => {
      this.getLocalStorage()
    }, 5000)

  }


  salvarValor() {

      
    // verificando se o id ja é existente 
    if(this.carteira.id == null || this.carteira.id == undefined){
      this.carteira.id = this.carteiras.length + 1
      this.carteiras.push(this.carteira)

    }else {

       //Procurando id para alteração e atualizado/aletrando as informações no Array.
     for( let indiceCarteira in this.carteiras ){
      
        if( this.carteiras[indiceCarteira].id == this.carteira.id ){
          
          this.carteiras[indiceCarteira].descricao = this.carteira.descricao
          this.carteiras[indiceCarteira].valor = this.carteira.valor
          this.carteiras[indiceCarteira].caixa = this.carteira.caixa
          this.carteiras[indiceCarteira].data_valor = this.carteira.data_valor
        }
      }

    }

      this.salvaLocalStorage()
    
      this.limparTela()
    //carteiraForm.resetForm()
    this.getLocalStorage()
  }

  //Editar
  editarRegistro(idRegistro){
        
    //Pega Todo o conteudo do localStorage e colocando no array carteira.
    if (localStorage.hasOwnProperty("carteira")) {
      this.carteiras = JSON.parse(localStorage.getItem("carteira"))
    }
    
    //Procurando id para alteração e atualizado/aletrando as informações no Array.
    for( let carteira in this.carteiras ){
      
      if( this.carteiras[carteira].id == idRegistro ){
        
        this.carteira.id = this.carteiras[carteira].id
        this.carteira.descricao =  this.carteiras[carteira].descricao
        this.carteira.valor =  this.carteiras[carteira].valor
        this.carteira.caixa =  this.carteiras[carteira].caixa
        this.carteira.data_valor =  this.carteiras[carteira].data_valor

       
      }
    }

  }
  deletaRegistro(carteira: Carteira){

    let index = this.carteiras.findIndex(c => c.id === carteira.id)
    this.carteiras.splice(index, 1)
    this.salvaLocalStorage()        
  }

  getLocalStorage(){
    if (localStorage.hasOwnProperty("carteira")) {
      this.carteiras = JSON.parse(localStorage.getItem("carteira"))  
      this.tabela = JSON.parse(localStorage.getItem("carteira"))
    }
  }

  salvaLocalStorage(){
    localStorage.setItem("carteira", JSON.stringify(this.carteiras))
    this.getLocalStorage()
    
  }

  limparTela(){
    this.carteira = new Carteira 
  }
}
