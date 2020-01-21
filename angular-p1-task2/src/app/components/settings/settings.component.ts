import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../helpers/settings.service'
import { RequestService } from "../../helpers/request.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sources;

  constructor(private settingsService: SettingsService,
              private requestService: RequestService) {
  }

  ngOnInit() {
    this.requestService.getAllSources().subscribe((res: ISourceResponse) => this.sources = res.sources )
  }

  changeSource(event) {
    if (!this.settingsService.localArticles) {
      this.settingsService.sourceName = event.target.options[event.target.options.selectedIndex].text;
      this.settingsService.changeSourceId(event.target.value);
    }
  }

  toggleCheckbox() {
    this.settingsService.toggleArticles(!this.settingsService.localArticles);
    this.settingsService.sourceName = 'My articles';
  }

  filterArticle(){
    console.log('articles was filtered');
  }

}
