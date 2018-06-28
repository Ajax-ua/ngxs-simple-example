import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IterablePipe } from './pipes/iterable/iterable.pipe';
import { PathFromApiPipe } from './pipes/path-from-api/path-from-api.pipe';
import * as directives from './directives';
import { SHARE_MODULES } from './modules';

const pipesArr = [
  IterablePipe,
  PathFromApiPipe,
];

const directivesArr = [
  directives.EqualValidatorDirective,
  directives.FileDropDirective,
  directives.TextareaAutosizeDirective,
];

const primeModules = [
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    ...directivesArr,
    ...pipesArr,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  
    SHARE_MODULES,

    ...directivesArr,
    ...pipesArr,
    ...primeModules,
  ],
  providers: [
    ...pipesArr,
  ],
  entryComponents: [
  ],
})
export class AppSharedModule {
}
