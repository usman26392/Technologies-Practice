import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true,
})
export class HighlightCompletedTodoDirective {
  iscompleted = input(false);
  el = inject(ElementRef) as ElementRef<HTMLElement>;

  stylesEffect = effect(() => {
    if (this.iscompleted()) {
      this.el.nativeElement.style.textDecoration = 'line-through';
      this.el.nativeElement.style.backgroundColor = 'lightgray';
      this.el.nativeElement.style.color = 'gray';
    } else {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.backgroundColor = '#fff';
      this.el.nativeElement.style.color = '#000';
    }
  });
}
