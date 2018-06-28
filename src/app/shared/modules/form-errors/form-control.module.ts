import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';

@NgModule({
  id: 'form-control',
  imports: [
    CommonModule,
  ],
  declarations: [
    FormControlComponent,
  ],
  exports: [
    FormControlComponent,
  ],
  providers: [],
})

export class FormControlModule {
}

