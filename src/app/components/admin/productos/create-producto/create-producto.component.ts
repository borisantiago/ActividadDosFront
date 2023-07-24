import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.css']
})
export class CreateProductoComponent {

  public producto : any = {};
  public categorias : any = {};
  public filtro:any;
  public file: File | undefined;
  public imgSelect : any | ArrayBuffer = 'assets/admin/img/image-not-found.png';

  constructor(
    private _adminService: AdminService,
    private _router: Router
  ){

  }

  ngOnInit(): void {
    this.obtener_categorias();
  }

  obtener_categorias(){
    this._adminService.obtener_categoria().subscribe(
      response=>{
        this.categorias=response.data;
        
      }
    )
  }

  registro(registroForm: {valid:any}){
    console.log(registroForm);
    
    if(registroForm.valid){
     if(this.file == undefined){
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Debe subir una portada para registrar'
      });
     }else{
      console.log(this.producto);
      console.log(this.file);
      this._adminService.registro_producto_admin(this.producto, this.file).subscribe(
        response =>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registro correctamente el nuevo producto.'
          });

          this._router.navigate(['/panel/productos']);
          
        }, error=>{
          console.log(error);
        }
      );
     }

    }else{
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message: 'Los datos del formulario no son validos'
      });
            this.imgSelect = 'assets/img/01.jpg'
            this.file = undefined;
    }
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

}
