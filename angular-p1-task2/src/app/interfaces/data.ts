export interface Article {
  id: number,
  source: Source
  author: String
  title: String
  description: String
  url: String
  urlToImage: String
  publishedAt: String
  content: String,
  localArticle: boolean
}

export interface Source {
  id: String,
  name: String
}
