import { Component } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { AdminService } from 'src/app/services/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-index-categoria',
  templateUrl: './index-categoria.component.html',
  styleUrls: ['./index-categoria.component.css']
})
export class IndexCategoriaComponent {
  public categorias : Array<any> = []; 
  public filtro = '';
  public url;
 


  constructor(
    private _adminService: AdminService
  ) {
   
    this.url = GLOBAL.url;
   }



   eliminar(id:any){
    this._adminService.eliminar_categoria_admin(id).subscribe(
      response=>{
        iziToast.show({
          title: 'SUCCESS',
          titleColor: '#1DC74C',
          color: '#FFF',
          class: 'text-success',
          position: 'topRight',
          message: 'Se elimino correctamente la categoria'
        });
        
      
      }
    );


  }


}
