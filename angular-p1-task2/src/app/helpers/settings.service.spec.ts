import { SettingsService } from "./settings.service";

describe('SettingService', ()=>{
  let settingsService: SettingsService;

  beforeEach(() => {
    settingsService = new SettingsService();
  });

  it('should change type image', () => {
    settingsService.toggleArticles(true);

    expect(settingsService.localArticles).toBeTruthy();
  });

  it('should change source id', () => {
    settingsService.changeSourceId('22');

    expect(settingsService.sourceId).toBe('22');
  });

  it('should change subject image type', () => {
    let articleSubject;
    settingsService.localArticlesChange.subscribe(aSub => articleSubject = aSub);

    settingsService.toggleArticles(true);

    expect(articleSubject).toBeTruthy();
  });
});
