import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  template: `<div class="p-inline-message p-inline-message-error " style="position:absolute" [class.hide]="_hide">
    <span class="p-inline-message-text">{{ _text }}</span>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
        .hide {
            display: none;
        }
    `,
  ],
})
export class ControlErrorComponent implements OnInit {
  public _text!: string;
  public _hide = true;

  constructor(private readonly cdr: ChangeDetectorRef) {
  }

  @Input()
  public set text(value: string) {
    if (value !== this._text) {
      this._text = value;
      this._hide = !value;
      this.cdr.detectChanges();
    }
  }

  public ngOnInit(): void {
  }
}
