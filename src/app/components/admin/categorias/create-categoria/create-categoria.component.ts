import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-create-categoria',
  templateUrl: './create-categoria.component.html',
  styleUrls: ['./create-categoria.component.css']
})
export class CreateCategoriaComponent {

  public categoria : any = {};
  public imgSelect : any | ArrayBuffer = 'assets/img/01.jpg';
  public file: File | undefined;

  constructor(
    private _adminService: AdminService,
    private _router: Router,
  ) {
    
   }

  ngOnInit(): void {
  }

  init_data(){
    this._adminService.obtener_categoria().subscribe(
      response=>{
        this.categoria = response.data;
               
      });
  }

  registro(registroForm: {valid:any}){
    if(registroForm.valid){
        console.log(this.categoria);
        
        // this._adminService.registro_categoria_admin(this.categoria, this.file).subscribe(
        //   response =>{
        //     console.log(this.categoria);
             
            
        //     iziToast.show({
        //       title: 'SUCCESS',
        //       titleColor: '#1DC74C',
        //       color: '#FFF',
        //       class: 'text-success',
        //       position: 'topRight',
        //       message: 'Se registro correctamente el nuevo categoria.'
        //     });
  
        //     this._router.navigate(['/admin/categorias']);
            
        //   }, error=>{
        //   }
        // );
 
     }else{
       iziToast.show({
         title: 'ERROR',
         titleColor: '#FF0000',
         color: '#FFF',
         class: 'text-danger',
         position: 'topRight',
         message: 'Los datos del formulario no son validos'
       });
            //  $('#input-portada').text('Seleccionar imagen');
     }
  }



}
