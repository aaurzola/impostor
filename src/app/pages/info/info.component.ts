import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent {

  //icons
  backIcon = faLeftLong;

  constructor(private _location: Location) {

  }

  back(): void {
    this._location.back();
  }

}
