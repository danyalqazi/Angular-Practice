import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    //path:'home', loadChildren:'app/home/home.module#HomeModule'
    path:'home', loadChildren:()=>import('./home/home.module')
    .then(mod=>mod.HomeModule)
  },
  {
   // path:'about', loadChildren:'app/about/about.module#AboutModule'
   path:'about', loadChildren:()=>import('./about/about.module')
   .then(mod=>mod.AboutModule)
  },
  {
   // path:'services', loadChildren:'app/services/services.module#ServicesModule'
   path:'services', loadChildren:()=>import('./services/services.module')
   .then(mod=>mod.ServicesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
