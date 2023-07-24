import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from "./components/tienda/inicio/inicio.component";
import { NavComponent } from "./components/tienda/nav/nav.component";
import { LoginAdminComponent } from "./components/admin/login-admin/login-admin.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { IndexProductosComponent } from "./components/tienda/productos/index-productos/index-productos.component";
import { ShowProductoComponent } from "./components/tienda/productos/show-producto/show-producto.component";
import { CreateCategoriaComponent } from "./components/admin/categorias/create-categoria/create-categoria.component";
import { IndexCategoriaComponent } from "./components/admin/categorias/index-categoria/index-categoria.component";
import { UpdateCategoriaComponent } from "./components/admin/categorias/update-categoria/update-categoria.component";
import { AdminIndexProductoComponent } from "./components/admin/productos/admin-index-producto/admin-index-producto.component";
import { CreateProductoComponent } from "./components/admin/productos/create-producto/create-producto.component";
import { UpdateProductoComponent } from "./components/admin/productos/update-producto/update-producto.component";
import { CarritoComponent } from "./components/tienda/carrito/carrito.component";

const appRoutes: Routes = [
    //vision general tienda
    { path: '', component: InicioComponent},
    { path: 'productos', component: IndexProductosComponent},
    { path: 'producto/:id', component: ShowProductoComponent},
    { path: 'carrito', component: CarritoComponent},


    //vision general admin
    { path: 'admin', component: LoginAdminComponent},
    { path: 'admin/dashboard', component: DashboardComponent},

    { path: 'admin/categorias', component: IndexCategoriaComponent},
    { path: 'admin/categoria/registro', component: CreateCategoriaComponent},
    { path: 'admin/categoria/:id', component: UpdateCategoriaComponent},

    { path: 'admin/productos', component: AdminIndexProductoComponent},
    { path: 'admin/producto/registro', component: CreateProductoComponent},
    { path: 'admin/producto/:id', component: UpdateProductoComponent},



    


    
] 

export const routing: ModuleWithProviders<Object> = RouterModule.forRoot(appRoutes); 