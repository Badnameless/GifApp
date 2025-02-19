import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GiftsModule } from '../gifts/gifts.module';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    GiftsModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
