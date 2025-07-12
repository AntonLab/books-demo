export type Authors = {
  id: string
  fullName: string
}

export type IdName = {
  id: string
  name: string
}

export type Book = {
  id: string
  name: string
  status: string
  picture: string
  authors: Authors[]
  series: IdName
  size: number
  lastUpdate: string
  tags: string[]
  views: number
  likes: number
  comments: number
  review: number
  chapters: IdName[]
}
