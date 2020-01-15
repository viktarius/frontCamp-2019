import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SettingsService {
  localArticles: boolean = false;
  localArticlesChange: Subject<boolean> = new Subject<boolean>();
  sourceName: String = 'My articles';
  sourceId: String = '';
  sourceIdChange: Subject<String> = new Subject<String>();
  page: number = 1;

  toggleArticles(type: boolean): void{
    this.localArticles = type;
    this.localArticlesChange.next(this.localArticles);
  }

  changeSourceId(sourceId: string) : void{
    this.sourceId = sourceId;
    this.sourceIdChange.next(this.sourceId);
  }
}
