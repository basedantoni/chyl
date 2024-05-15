export interface Video {
  title?: string;
  url: string;
  thumbnail?: Thumbnail;
  assetCollection?: { items: Array<Asset> };
}

export interface Visual {
  title?: string;
  videoAsset: { url: string };
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

export interface AlbumItem {
  album_group: string;
  album_type: string;
  artists: Array<any>;
  available_markets: Array<any>;
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Array<any>;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Asset extends Thumbnail {}
