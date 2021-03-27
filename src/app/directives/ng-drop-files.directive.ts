import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() public files: FileItem[] = [];
  @Output() private mouseOver: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter(event: any): void {
    this.mouseOver.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  public onDragLeave(event: any): void {
    this.mouseOver.emit(false);
  }

  // Validation
  private fileCanBeLoaded(file: File): boolean {
    if (!this.fileHasAlreadyBeenDragged(file.name) && this.isImage(file.type)) {
      return true;
    }
    else {
      return false;
    }
  }

  private preventAndStop(event: any): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private fileHasAlreadyBeenDragged(fileName: string): boolean {
    for(const file of this.files) {
      if (file.fileName == fileName) {
        console.log('El archivo' + fileName + ' ya esta agregado');
        return true;
      }
    }
    return false;
  }

  private isImage(typeFile: string): boolean {
    return (typeFile === '' || typeFile === undefined) ? false : typeFile.startsWith('image');
  }

}
