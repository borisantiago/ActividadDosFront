import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-update-categoria',
  templateUrl: './update-categoria.component.html',
  styleUrls: ['./update-categoria.component.css']
})
export class UpdateCategoriaComponent {
  public categoria : any = {};
  public id:any;
  public url:any;

  constructor(
    private _adminService : AdminService,
    private _route : ActivatedRoute,
    private _router : Router
  ){
    this.url=GLOBAL.url;

  }

  init_data(){
    this._route.params.subscribe(
      params=>{
        this.id =  params['id'];
        
        this._adminService.listar_categoria_admin(this.id).subscribe(
          response=>{
            if(response.data == undefined){
              this.categoria = undefined;
            }else{
              this.categoria = response.data;              
            }
            
          },error=>{
            console.log(error);
            
          }
        )
      }
    );
  }

  actualizar(registroForm:any){
    if(registroForm.valid){
      var data: any ={};
    
      data.titulo = this.categoria.titulo;

      this._adminService.actualizar_categoria_admin(this.id, data).subscribe(
        response=>{
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se actualizó correctamente la categoria.'
          });

          this._router.navigate(['/admin/categorias']);
          
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

      this.init_data();
    }

  }



}
