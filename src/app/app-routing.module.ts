import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules  } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';
import { ProfilePage } from './profile/profile.page';  // Asegúrate de tener estas páginas
import { SettingsPage } from './settings/settings.page';
import { SearchPage } from './search/search.page';
const routes: Routes = [  
  {
    path: '', 
    redirectTo: 'login', // Redirige al login al cargar la app
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), // Lazy load para login
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule), // Lazy load para registro
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule), // Lazy load para home
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule), // Lazy load para perfil
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule), // Lazy load para configuración
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule), // Lazy load para búsqueda
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then(m => m.CamaraPageModule), // Lazy load para cámara
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then(m => m.UbicacionPageModule), // Lazy load para ubicación
  },
  {
    path: 'sensores',
    loadChildren: () => import('./pages/sensores/sensores.module').then(m => m.SensoresPageModule), // Lazy load para sensores
  },
  {
    path: 'radio-streaming',
    loadChildren: () => import('./pages/radio-streaming/radio-streaming.module').then(m => m.RadioStreamingPageModule), // Lazy load para radio
  },
  {
    path: 'video-streaming',
    loadChildren: () => import('./video-streaming/video-streaming.module').then(m => m.VideoStreamingPageModule) // Lazy load para video streaming
  },
  
  {
    path: '**',
    redirectTo: 'login', // Redirige a login si no se encuentra la ruta
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), // Precarga todos los módulos
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}