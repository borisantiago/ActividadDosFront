import { Component } from '@angular/core';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { TiendaServiceService } from 'src/app/services/tienda-service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public descuento_activo : any = undefined;
  public url: any;
  public new_producto : Array<any> = [];
  public mas_vendidos : Array<any> = [];

  public categorias: Array<any> = [];

  constructor(
    private _tiendaService: TiendaServiceService,
  ) {
    this.url = GLOBAL.url;

   }

  ngOnInit(): void {


  }

}
