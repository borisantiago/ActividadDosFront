import { Component, ElementRef } from '@angular/core';
import { TiendaServiceService } from 'src/app/services/tienda-service';
declare var iziToast:any;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {

  public carrito_arr: any;
  public idcliente : any;
  public dventa : Array<any> = []; 
  public subtotal = 0;
  public total_pagar : any = 0;


  constructor(
    private _tiendaService: TiendaServiceService
  ){

  }

  init_data(){
    this._tiendaService.obtener_carrito_cliente(this.idcliente).subscribe(
      response=>{
        this.carrito_arr = response.data;

     
        
        this.calcular_carrito();
      }
    );
  }


  eliminar_item(id: any){
    this._tiendaService.eliminar_carrito_cliente(id).subscribe(
      response=>{
        iziToast.show({
          title:'SUCCESS',
          titleColor:'#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position:'topRight',
          message:'Se quitó el producto del carrito'
        });
        
        this.init_data()
      }
    )
  }

  calcular_carrito(){
  
      
  }

}
