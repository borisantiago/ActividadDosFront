import { Component } from '@angular/core';
import { TiendaServiceService } from 'src/app/services/tienda-service';
declare var iziToast:any;


@Component({
  selector: 'app-index-productos',
  templateUrl: './index-productos.component.html',
  styleUrls: ['./index-productos.component.css']
})
export class IndexProductosComponent {

  public categoria : any = {};
  public filterCategoria = '';
  public filter_producto = '';
  public producto : Array<any> = [];


  constructor(
    private _tiendaService: TiendaServiceService
  ){
    //listar categorias sin peticion, llega a pantalla
    this._tiendaService.listar_categorias().subscribe(
      response=>{
        this.categoria = response.data;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );

    //listar productos sin petición, llega a pantalla
    this._tiendaService.listar_productos().subscribe(
      response=>{
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit():void{

  }

  // buscarCategoria(){
  //   console.log(this.filterCategoria);
  //   if(this.filterCategoria){
  //     var search = new RegExp(this.filterCategoria, 'i');
  //     this.categoria.desc_cat = this.categoria.desc_cat.filter(
  //       item => search.test(item.titulo)
  //     );
  //   }else{
  //     this._tiendaService.listar_categorias().subscribe(
  //       response=>{
  //         this.categoria = response.data;
  //         console.log(response);
  //       },
  //       error => {
  //         console.log(error);
  //       }
  //     );
  //   }
    
    
  // }

  buscarProducto(){
    this._tiendaService.listar_producto_especifico(this.filter_producto).subscribe(
      response=>{
        this.producto = response.data;
      });
  }

}
