import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SettingsService } from "./settings.service";

@Injectable({
  providedIn: 'root'
})

export class RequestService {
  URL: String = 'https://newsapi.org/v2';
  API_KEY: String = '1968688066da4d8faab8feaf8c6d6f20';

  constructor(private http: HttpClient,
              private settingsService: SettingsService) {
  }

  getAllArticles() {
    return this.http.get(`${this.URL}/top-headlines?country=us&pageSize=5&page=${this.settingsService.page}&apiKey=${this.API_KEY}`)
  }

  getSourceArticles() {
    return this.http.get(`${this.URL}/top-headlines?sources=${this.settingsService.sourceId}&pageSize=5&page=${this.settingsService.page}&apiKey=${this.API_KEY}`)
  }

  getAllSources() {
    return this.http.get(`${this.URL}/sources?apiKey=${this.API_KEY}`)
  }

}
