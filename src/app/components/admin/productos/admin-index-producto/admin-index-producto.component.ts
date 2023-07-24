import { Component } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-admin-index-producto',
  templateUrl: './admin-index-producto.component.html',
  styleUrls: ['./admin-index-producto.component.css']
})
export class AdminIndexProductoComponent {
  public productos : Array<any> = []; 
  public arr_productos : Array<any> = [];
  public filtro:any;
  public url;

  constructor(
    private _adminService : AdminService
  ){
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.init_data();
  }

  init_data(){
    
    this._adminService.listar_productos_admin(this.filtro).subscribe(
      response=>{
        
        this.productos = response.data;
      
        this.productos.forEach(element => {
          this.arr_productos.push({
            titulo: element.titulo,
            stock: element.stock,
            precio:element.precio,
            categoria:element.categoria,
            nventas:element.nventas
          })
        })
        //console.log(this.arr_productos);

      }, error =>{
        console.log(error);
      }
    )
  }

  filtrar(){
    if(this.filtro){
      //this.load_data = true;
      this._adminService.listar_productos_admin(this.filtro).subscribe(
        response=>{
          //console.log(response);
          this.productos = response.data;
            
        }, error =>{
          console.log(error);
        }
      )
    }else{
        this.init_data();
        this.arr_productos = [];

    }
  }

  eliminar(id : any){
    this._adminService.eliminar_producto_admin(id).subscribe(
      response=>{
        iziToast.show({
          title: 'SUCCESS',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: 'Se elimino correctamente el producto'
        });

        this.init_data();

      },
      error =>{

        iziToast.show({
          title: 'SUCCESS',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: 'Ocurrio un problema en el servidor'
        });

        console.log(error);
      }
    )
  }



}
