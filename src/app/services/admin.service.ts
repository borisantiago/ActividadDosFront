import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from "rxjs";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public url:any;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
   }

   login_Admin(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content.Type', 'application/json');
    return this._http.post(this.url+ '/111', data,{headers:headers});
   }

   obtener_categoria():Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'obtener_categoria_admin', {headers:headers});
  }

   listar_categoria_admin(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'listar_categorias_admin/'+ id, {headers:headers});
  }

   registro_categoria_admin(data: any, file:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    const fd = new FormData();
    
    fd.append('titulo', data.titulo);
    fd.append('imagen', file);
    
    return this._http.post(this.url+'registro_categoria_admin', fd, {headers:headers});
  }

  actualizar_categoria_admin(id:any, data:any):Observable<any>{
      let headers = new HttpHeaders({'Content-type': 'application/json'});
      return this._http.put(this.url+'actualizar_categoria_admin/'+id, data, {headers:headers});
  }

   eliminar_categoria_admin(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.delete(this.url+'eliminar_categoria_admin/'+id, {headers:headers});
  }

  obtener_producto_admin(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'obtener_producto_admin/'+id, {headers:headers});
  }

  listar_productos_admin(filtro:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'listar_productos_admin/'+filtro, {headers:headers});
  }

  registro_producto_admin(data: any, file:any):Observable<any>{
    let headers = new HttpHeaders({});

    const fd = new FormData();
    
    fd.append('titulo', data.titulo);
    fd.append('stock', data.stock);
    fd.append('precio', data.precio);
    fd.append('descripcion', data.descripcion);
    fd.append('contenido', data.contenido);
    fd.append('categoria', data.categoria);
    
   
    return this._http.post(this.url+'registro_producto_admin', fd, {headers:headers});
  }

  actualizar_producto_admin(data: any, id:any):Observable<any>{
    if(data.portada){
      let headers = new HttpHeaders({});

      const fd = new FormData();
      
      fd.append('titulo', data.titulo);
      fd.append('stock', data.stock);
      fd.append('precio', data.precio);
      fd.append('descripcion', data.descripcion);
      fd.append('contenido', data.contenido);
      fd.append('categoria', data.categoria);
      fd.append('portada', data.portada);
      
    
      return this._http.put(this.url+'actualizar_producto_admin/'+id, fd, {headers:headers});
    }else{
      let headers = new HttpHeaders({'Content-type': 'application/json'});
      return this._http.put(this.url+'actualizar_producto_admin/'+id, data, {headers:headers});
    }
  }

  eliminar_producto_admin(id:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.delete(this.url+'eliminar_producto_admin/'+id, {headers:headers});
  }


}
