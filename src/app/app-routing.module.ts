import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path:'',component:IndexComponent},
  { path:'proyectos',component:ProyectosComponent},
  { path:'dashboard',component: DashboardComponent},
  { path:'**',component:Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
