import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-update-producto',
  templateUrl: './update-producto.component.html',
  styleUrls: ['./update-producto.component.css']
})
export class UpdateProductoComponent {

  public producto : any = {};
  public categorias : any = {};
  public imgSelect : any | ArrayBuffer;
  public id:any;

  public file: File | undefined;
  public url:any;

  constructor(
    private _adminService: AdminService,
    private _route: ActivatedRoute,
    private _router: Router

  ){
    this.url = GLOBAL.url;
    
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        console.log(this.id);

        this._adminService.obtener_producto_admin(this.id).subscribe(
          response=>{
            if(response.data == undefined){
              this.producto = undefined;
            }else{
              this.producto = response.data;
              this.imgSelect = this.url+'obtener_portada/'+this.producto.portada;
            }
            
          },
          error =>{
            console.log(error);
            
          });
      });

      this.obtener_categorias();
  }

  obtener_categorias(){
    this._adminService.obtener_categoria().subscribe(
      response=>{
        this.categorias=response.data;
        
      }
    )
  }

  fileChangeEvent(event:any): void{
    var file;
    if(event.target.files && event.target.files[0]){
      file = <File>event.target.files[0];
     
    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'No hay una imagen de envio'
      });
            this.imgSelect = 'assets/img/01.jpg'
            this.file = undefined;
    }


      if( file?.type == 'image/png' || file?.type == 'image/webp' || file?.type == 'image/jpg' || file?.type == 'image/gif' || file?.type == 'image/jpeg'){

          if( file?.size <= 4000000){

            const reader = new FileReader();
            reader.onload = e => this.imgSelect = reader.result;
            console.log(this.imgSelect);
            reader.readAsDataURL(file);


            this.file = file;

          }else{
            iziToast.show({
              title: 'ERROR',
              titleColor: '#FF0000',
              color: '#FFF',
              class: 'text-danger',
              position: 'topRight',
              message: 'La imagen no puede superar los 4MB'
            });
            this.imgSelect = 'assets/img/01.jpg'
            this.file = undefined;
          }
      } else{
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'El archivo debe ser una imagen'
        });
          this.imgSelect = 'assets/img/01.jpg'
          this.file = undefined;
      }
   
  }

  actualizar(actualizarForm: any){
    if(actualizarForm.valid){
      console.log(this.producto);
      console.log(this.file);

      var data :any = {};
      if(this.file != undefined){
        data.portada = this.file;
      }

      data.titulo = this.producto.titulo;
      data.stock = this.producto.stock;
      data.precio = this.producto.precio;
      data.categoria = this.producto.categoria;
      data.descripcion = this.producto.descripcion;
      data.contenido = this.producto.contenido;

    
      this._adminService.actualizar_producto_admin(data, this.id).subscribe(
        response=>{
          console.log(response);
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se actualizo correctamente el producto.'
          });

          this._router.navigate(['/panel/productos']);
          
        },
        error=>{
          console.log(error);
        }

        
      )
      
    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
      
    }
  }


}
