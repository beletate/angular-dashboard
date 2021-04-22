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
    this.iniciarTabela()

    setInterval(() => {
      this.iniciarTabela()
    }, 5000)

    //Pego tudo que esta no localStorage ao iniciar a aplicação
    this.getLocalStorage()
  }

  iniciarTabela() {
    this.tabela = JSON.parse(localStorage.getItem("carteira"))
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
    this.iniciarTabela()
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
  deletaRegistro(carteira){

    let indiceParadeletar = -1;
    let naoEncontrado = -1
    let cont = 0
    
    //refatora depois usando o indexOf
    for(let indice in this.carteiras){
      if(this.carteiras[indice].id == carteira.id){
        indiceParadeletar = cont;
      }
      cont++
    }

    console.log("indicce a ser deletado",indiceParadeletar)
    if(indiceParadeletar != naoEncontrado){

      this.carteiras.splice(indiceParadeletar,1)
    
      this.salvaLocalStorage()
  
    }
    
  }

  getLocalStorage(){

    if (localStorage.hasOwnProperty("carteira")) {
      this.carteiras = JSON.parse(localStorage.getItem("carteira"))  
    }
  }

  salvaLocalStorage(){
    if (localStorage.hasOwnProperty("carteira")) {

      localStorage.setItem("carteira", JSON.stringify(this.carteiras))
      this.getLocalStorage()
    } else {
      console.log("localStorage carteira nao existe")
    }
  }

  limparTela(){
    this.carteira = new Carteira 
  }
}
