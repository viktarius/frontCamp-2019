import { Article } from './data';

export interface IArticleResponse {
  articles: Array<Article>,
  status: string,
  totalResults: number
}

export interface ISourceResponse {
  sources: Array<any>,
  status: string,
  totalResults: number
}
