export interface Video {
  title?: string;
  url?: string | null;
  thumbnail?: Thumbnail;
  assetCollection?: { items: Array<Asset> };
}

export interface Thumbnail {
  title: string;
  description: string | null;
  contentType: string;
  fileName: string;
  size: number;
  url: string;
  width: number;
  height: number;
}

export interface Asset extends Thumbnail {}
