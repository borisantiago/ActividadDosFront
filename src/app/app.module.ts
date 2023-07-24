import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { InicioComponent } from './components/tienda/inicio/inicio.component';
import { NavComponent } from './components/tienda/nav/nav.component';
import { FooterComponent } from './components/tienda/footer/footer.component';
import { LoginAdminComponent } from './components/admin/login-admin/login-admin.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { IndexProductosComponent } from './components/tienda/productos/index-productos/index-productos.component';
import { ShowProductoComponent } from './components/tienda/productos/show-producto/show-producto.component';
import { IndexCategoriaComponent } from './components/admin/categorias/index-categoria/index-categoria.component';
import { CreateCategoriaComponent } from './components/admin/categorias/create-categoria/create-categoria.component';
import { UpdateCategoriaComponent } from './components/admin/categorias/update-categoria/update-categoria.component';
import { CreateProductoComponent } from './components/admin/productos/create-producto/create-producto.component';
import { UpdateProductoComponent } from './components/admin/productos/update-producto/update-producto.component';
import { AdminIndexProductoComponent } from './components/admin/productos/admin-index-producto/admin-index-producto.component';
import { CarritoComponent } from './components/tienda/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavComponent,
    FooterComponent,
    LoginAdminComponent,
    DashboardComponent,
    SidebarComponent,
    IndexProductosComponent,
    ShowProductoComponent,
    IndexCategoriaComponent,
    CreateCategoriaComponent,
    UpdateCategoriaComponent,
    CreateProductoComponent,
    UpdateProductoComponent,
    AdminIndexProductoComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
