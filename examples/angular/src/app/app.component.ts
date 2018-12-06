import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('elm') ref;

  title = 'angular';

  public userId = 'calmery';
  public value = '';
  public disabled = false;

  ngAfterViewInit() {
    const elm = this.ref.nativeElement;

    elm.addEventListener('load', this._onLoad.bind(this));
    elm.addEventListener('error', this._onError.bind(this));
  }

  public onChange(event) {
    this.value = event.target.value;
  }

  public onClick() {
    if (this.value === '') {
      return;
    }

    this.userId = this.value;
    this.value = '';
    this.disabled = true;
  }

  private _onLoad() {
    this.disabled = false;
  }

  private _onError() {
    this.disabled = false;
  }
}
