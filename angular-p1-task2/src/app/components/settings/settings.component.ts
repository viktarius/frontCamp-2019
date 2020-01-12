import {Component, OnInit} from '@angular/core';
import {SettingsService} from '../../helpers/settings.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor(private settingsService: SettingsService) {
  }

  ngOnInit() {
  }

  changeSource(event) {
    if(!this.settingsService.onlyMine){
      this.settingsService.sourceName = event.target.value;
    }
  }

  toggleCheckbox() {
    this.settingsService.onlyMine = !this.settingsService.onlyMine;
    this.settingsService.sourceName = 'My articles';
  }

  addArticle() {
    console.log('add')
  }

}
