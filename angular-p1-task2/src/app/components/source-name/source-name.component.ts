import {Component} from '@angular/core';
import { SettingsService } from "../../helpers/settings.service";

@Component({
  selector: 'app-source-name',
  templateUrl: './source-name.component.html',
  styleUrls: ['./source-name.component.scss']
})
export class SourceNameComponent {
    constructor(private settingsService: SettingsService) {
    }
}
