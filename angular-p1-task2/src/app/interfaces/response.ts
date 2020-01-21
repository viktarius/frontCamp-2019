interface IArticleResponse {
  articles: Array<Article>,
  status: string,
  totalResults: number
}

interface ISourceResponse {
  sources: Array<any>,
  status: string,
  totalResults: number
}
