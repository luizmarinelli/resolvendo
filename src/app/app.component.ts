import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.tamanho1 = this.objetoTeste[0].produtos[0].colunas.length;
    this.tamanho2 = this.objetoTeste[0].produtos.length;
    console.log("AppComponent -> ngOnInit -> this.tamanho2", this.tamanho2)
    console.log("AppComponent -> ngOnInit -> this.tamanho1", this.tamanho1)
  }
  title = 'tabela-do-cao';

  tamanho1 = 0;
  tamanho2 = 0;
  
  objetoTeste = [
    {
      "periodo" : "Mensal",
        "produtos" : [
          {
            "produto": "Conquista",
              "colunas" : [
                { "nome": "Pla. Mensal", "valor": 80 },
                { "nome": "Meta", "valor": 30 },
                { "nome": "Meta", "valor": 30 },
                { "nome": "Ptos. Infor.", "valor": 35 }
              ]
          },{
            "produto": "Conquista2",
              "colunas" : [
                { "nome": "Pla. Mensal", "valor": 90 },
                { "nome": "Meta", "valor": 31 },
                { "nome": "Meta", "valor": 31 },
                { "nome": "Ptos. Infor.", "valor": 45 }
              ]
            }
        ] 
    }
  ]
}
