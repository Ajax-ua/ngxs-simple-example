import { Directive, EventEmitter, ElementRef, HostListener, Output } from '@angular/core';

@Directive({ selector: '[appFileDrop]' })

export class FileDropDirective {
  @Output() fileOver: EventEmitter<boolean> = new EventEmitter();
  @Output() fileDrop: EventEmitter<FileList> = new EventEmitter();
  
  private element: ElementRef;
  public files: FileList;
  
  public constructor(element: ElementRef) {
    this.element = element;
  }
  
  @HostListener('dragover', [
    '$event',
  ])
  public onDragOver(event: any): void {
    
    const transfer = this.getDataTransfer(event);
    
    if (!this.haveFiles(transfer.types)) {
      return;
    }
    
    transfer.dropEffect = 'copy';
    this.preventAndStop(event);
    this.fileOver.emit(true);
  }
  
  @HostListener('dragleave', [
    '$event',
  ])
  public onDragLeave(event: any): void {
    if (event.currentTarget === (this as any).element[0]) {
      return;
    }
    
    this.preventAndStop(event);
    this.fileOver.emit(false);
  }
  
  @HostListener('drop', [
    '$event',
  ])
  public onDrop(event: any): void {
    const transfer = this.getDataTransfer(event);
    
    if (!transfer) {
      return;
    }
    
    this.preventAndStop(event);
    this.fileOver.emit(false);
    this.files = transfer.files;
    this.fileDrop.emit(this.files);
  }
  
  private getDataTransfer(event: any | any): DataTransfer {
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
  }
  
  private preventAndStop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }
  
  private haveFiles(types: any): boolean {
    if (!types) {
      return false;
    }
    
    if (types.indexOf) {
      return types.indexOf('Files') !== -1;
    }
    
    if (types.contains) {
      return types.contains('Files');
    }
    
    return false;
  }
  
}
