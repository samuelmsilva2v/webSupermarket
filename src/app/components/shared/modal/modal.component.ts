import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnChanges, OnDestroy {

  @Input() open: boolean = false;
  @Input() title: string = '';
  @Input() closeOnBackdropClick: boolean = true;

  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscapeKey() {
    if (this.open) {
      this.close();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open']) {
      document.body.style.overflow = this.open ? 'hidden' : '';
    }
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  onBackdropClick() {
    if (this.closeOnBackdropClick) {
      this.close();
    }
  }

  close() {
    this.closed.emit();
  }
}
