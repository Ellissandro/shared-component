import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  private _color: string;

  @Input() set color(value: string) {
    this._color = value;
  }

  get color() {
    return this._color;
  }
}
