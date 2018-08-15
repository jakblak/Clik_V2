import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from '../ui/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [MenuComponent],
  exports: [MenuComponent]
})
export class CoreModule { }
