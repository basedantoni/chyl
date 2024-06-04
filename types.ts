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


// YOUTUBE
export interface PlaylistResponse {
  kind: string
  etag: string
  pageInfo: PageInfo
  items: Item[]
}

export interface PageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface Item {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
}

export interface PlaylistItemResponse {
  kind: string
  etag: string
  id: string
  snippet: Snippet
  contentDetails: ContentDetails
  items: Array<Item>
}

export interface Snippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: Thumbnails
  channelTitle: string
  playlistId: string
  position: number
  resourceId: ResourceId
  videoOwnerChannelTitle: string
  videoOwnerChannelId: string
}

export interface Thumbnails {
  default: Default
  medium: Medium
  high: High
  standard: Standard
  maxres: Maxres
}

export interface Default {
  url: string
  width: number
  height: number
}

export interface Medium {
  url: string
  width: number
  height: number
}

export interface High {
  url: string
  width: number
  height: number
}

export interface Standard {
  url: string
  width: number
  height: number
}

export interface Maxres {
  url: string
  width: number
  height: number
}

export interface ResourceId {
  kind: string
  videoId: string
}

export interface ContentDetails {
  videoId: string
  videoPublishedAt: string
}


