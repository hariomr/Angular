import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';
import { authGuard } from './guards/auth.guard';
import { authchildGuard } from './guards/authchild.guard';
import { FormsComponent } from './components/forms/forms.component';
import { canDeactivateGuard } from './guards/can-deactivate.guard';
import {CanLoadAuthGuard} from './guards/canload.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  // using canactivate
  { path: 'contact', component: ContactsComponent, canActivate:[authGuard]},
  // canactivatechild 
  {
    path:'dashboard', canActivateChild:[authchildGuard],children:[
      { path: 'about', component: AboutComponent }
    ]
  },
  // candeactive
  {path:'form',component:FormsComponent, canDeactivate:[canDeactivateGuard]},

  {
    path: 'dashboard-lazy',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canLoad: [CanLoadAuthGuard],  // Apply the guard here
  },
  { path: '**', redirectTo: 'home' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
