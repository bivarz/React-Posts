export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
}

export interface DataFetcherProps {
  initialPage: number;
}
