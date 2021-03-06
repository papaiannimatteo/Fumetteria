import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'autore',
    loadChildren: () => import('./pages/autore/autore.module').then( m => m.AutorePageModule)
  },
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then( m => m.CategoriaPageModule)
  },
  {
    path: 'fumetto',
    loadChildren: () => import('./pages/fumetto/fumetto.module').then( m => m.FumettoPageModule)
  },
  {
    path: 'utente',
    loadChildren: () => import('./pages/utente/utente.module').then( m => m.UtentePageModule)
  },
  /*
  {
    path: 'super-mario',
    loadChildren: () => import('./pages/super-mario/super-mario.module').then( m => m.SuperMarioPageModule)
  },
  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
