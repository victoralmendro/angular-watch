import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchRouterModule } from './watch.routes';
import { WatchComponent } from './components/watch/watch.component';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { WatchMenuComponent } from './components/watch-menu/watch-menu.component';
import { StopWatchComponent } from './components/stop-watch/stop-watch.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  declarations: [
    WatchMenuComponent,
    WatchComponent,
    StopWatchComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    WatchRouterModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports:[]
})
export class WatchModule { }
