import { Injectable } from '@angular/core';
import { GLOBAL } from './GLOBAL';
import { Observable } from "rxjs";
import { HttpClient, HttpClientModule, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TiendaServiceService {
  public url:any;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
   }

   listar_categorias():Observable<any>{
    let headers = new HttpHeaders().set('Content.Type', 'application/json');
    return this._http.get(this.url+ '111',{headers:headers});
   }

   listar_productos():Observable<any>{
    let headers = new HttpHeaders().set('Content.Type', 'application/json');
    return this._http.get(this.url+ '111',{headers:headers});
   }

   listar_compras():Observable<any>{
    let headers = new HttpHeaders().set('Content.Type', 'application/json');
    return this._http.get(this.url+ '111',{headers:headers});
   }

   listar_producto_especifico(filtro:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url+'11111/'+filtro, {headers:headers});
   }



   obtener_productos_id(id: any):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.get(this.url+'111111/'+id, {headers:headers});
  }


   //cliente
  registro_cliente(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-type', 'application/json');
    return this._http.post(this.url+'11111',data, {headers:headers});
  }

  obtener_cliente(id: any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'11111/'+id, {headers:headers});
  }

  actualizar_perfil_cliente(id:any, data:any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.put(this.url+'11111/'+id ,data, {headers:headers});
  }

   //carrito

  agregar_carrito_cliente(data: any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.post(this.url+'11111', data, {headers:headers});
  }

  obtener_carrito_cliente(id: any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.get(this.url+'11111/'+id, {headers:headers});
  }

  eliminar_carrito_cliente(id: any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.delete(this.url+'11111/'+id, {headers:headers});
  }

  registro_compra_cliente(data: any):Observable<any>{
    let headers = new HttpHeaders({'Content-type': 'application/json'});
    return this._http.post(this.url+'11111', data, {headers:headers});
  }

  }