import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  { path: 'dashboard', component: UserDashboardComponent, canActivate: [AuthGuard] },
  { path: '', component:HomeComponent },

  { path: 'aboutus', component: AboutUsComponent },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'gallery', component:GalleryComponent, canActivate: [AuthGuard] },

  { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
