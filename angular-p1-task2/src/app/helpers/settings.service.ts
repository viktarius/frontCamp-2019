import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  onlyMine: boolean = false;
  sourceName: String = 'My articles';
  sourceId: String = '';
  sourceIdChange: Subject<String> = new Subject<String>();
  page: number = 1;

  constructor() {
  }

  changeSourceId(sourceId){
    this.sourceId = sourceId;
    this.sourceIdChange.next(this.sourceId);
  }
}
