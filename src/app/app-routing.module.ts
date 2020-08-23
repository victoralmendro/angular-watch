import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/watch', pathMatch: 'full'},    
  { path: 'watch', 
    loadChildren: () => import('./watch/watch.module').then(m => m.WatchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
