import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { HomePage } from '../home/home.page';
//import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';

const routes: Routes = [
    {
      path: '', // Cuando la ruta sea '/register', cargará RegisterPage
      component: RegisterPage,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class RegisterPageRoutingModule {}
