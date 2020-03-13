import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    // this.objetoTeste.forEach(objeto => {
    // console.log("AppComponent -> ngOnInit -> objeto", objeto.periodo)
    //   objeto.produtos.forEach(produtos => {
    //     console.log("AppComponent -> ngOnInit -> produtos", produtos.produto);
    //       produtos.colunas.forEach(colunas => {
    //         console.log("AppComponent -> ngOnInit -> colunas.nome", colunas.nome);
    //         console.log("AppComponent -> ngOnInit -> colunas.valor", colunas.valor);
    //       });
    //   });
    // });
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
    },
    {
      "periodo" : "Trimestral",
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
