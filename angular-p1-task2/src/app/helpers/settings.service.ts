import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  onlyMine: boolean = false;
  sourceName: String = 'My articles';

  constructor() { }
}
