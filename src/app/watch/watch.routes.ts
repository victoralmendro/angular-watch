import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WatchComponent } from './components/watch/watch.component';
import { CommonModule } from '@angular/common';
import { WatchMenuComponent } from './components/watch-menu/watch-menu.component';

const routes: Routes = [
    {path: '', component: WatchMenuComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule]
})
export class WatchRouterModule { }
