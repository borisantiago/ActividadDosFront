import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TiendaServiceService } from 'src/app/services/tienda-service';
declare var iziToast: any;

@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.css']
})
export class ShowProductoComponent {
  public producto : any = {};
  public id : any;
  public url: any;
  public btn_cart = false;

  public carrito_data : any = {
    variedad: '',
    cantidad: 1
  };

  constructor(
    private _route : ActivatedRoute,
    private _tiendeService: TiendaServiceService
  ){
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        
        this._tiendeService.obtener_productos_id(this.id).subscribe(
        response =>{
          this.producto = response.data;
          console.log(this.producto);
        });
      });
 
      }


      agregar_producto(){
        if(this.carrito_data.variedad){
          if(this.carrito_data.cantidad <= this.producto.stock){
            let data = {
              producto : this.producto._id,
              cliente: localStorage.getItem('_id'),
              cantidad: this.carrito_data.cantidad,
              variedad: this.carrito_data.variedad,
            }
    
            this.btn_cart = true;
    
            this._tiendeService.agregar_carrito_cliente(data).subscribe(
              response=>{
                
                if(response.data == undefined){
                  iziToast.show({
                    title: 'ERROR',
                    titleColor: '#FF0000',
                    color: '#FFF',
                    class: 'text-danger',
                    position: 'topRight',
                    message: 'el producto ya existe en el carrito',
                  });
                  this.btn_cart = false;
                }else{
                  iziToast.show({
                    title:'SUCCESS',
                    titleColor:'#1DC74C',
                    color: '#FFF',
                    class: 'text-success',
                    position:'topRight',
                    message:'Se agrego el producto al carrito',
                  });
                  this.btn_cart = false;
                }
                
              }, 
            )
    
          }else{
            iziToast.show({
              title: 'ERROR',
              titleColor: '#FF0000',
              color: '#FFF',
              class: 'text-danger',
              position: 'topRight',
              message: 'La maxima cantidad disponible es: ' + this.producto.stock
            });
          }
        }else{
          iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: 'Seleccione una variedad de producto'
          });
        
        }
      }

}
