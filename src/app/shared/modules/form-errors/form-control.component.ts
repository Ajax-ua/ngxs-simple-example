import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-control',
  templateUrl: 'form-control.component.html',
  styleUrls: ['form-control.component.scss'],
})
export class FormControlComponent {
  private _classes: string;
  
  @Input() control;
  @Input() markAsDirty;
  @Input() errors;
  
  @Input('classes')
  set classes(value: string) {
    this._classes = value;
  }
  
  get classes() {
    return this._classes || 'validate-error';
  }
  
  hasError(error) {
    if (error.parent && this.control.parent) {
      return this.control.parent.hasError(error.name);
    }
    
    return this.control.hasError(error.name);
  }
}
