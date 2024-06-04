import { PlaylistItemResponse, PlaylistResponse } from "@/types";
import { cookies } from "next/headers";

const POST_GRAPHQL_FIELDS = `
  title
`;

async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  ).then((response) => response.json());
}

function extractVideoEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.videoCollection?.items;
}

export async function getAllVideos(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      videoCollection {
        items {
          ${POST_GRAPHQL_FIELDS}
          url
          assetCollection {
            items {
              title
              description
              contentType
              fileName
              size
              url
              width
              height
            }
          }
          thumbnail {
            title
            description
            contentType
            fileName
            size
            url
            width
            height
          }
        }
      }
    }`
  );
  return extractVideoEntries(entries);
}

export async function fetchSpotifyToken(): Promise<any> {
  return fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
  }).then((response) => response.json());
}

export async function fetchArtist(
  artistId: string,
  token: string
): Promise<any> {
  return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
}

export async function fetchArtistAlbums(token: string): Promise<any> {
  return fetch(
    `https://api.spotify.com/v1/artists/${process.env.CHYL_SPOTIFY_ARTIST_ID}/albums?include_groups=single,album&limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((response) => response.json());
}

function extractVisuals(fetchResponse: any): any[] {
  return fetchResponse?.data?.landingPageVisualsCollection?.items;
}

export async function getAllLandingVisuals(): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      landingPageVisualsCollection {
        items {
          title
          videoAsset {
            url
          }
        }
      }
    }`
  );
  return extractVisuals(entries);
}

export async function getYoutubePlaylists(): Promise<PlaylistResponse> {
  return fetch(
    `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UCZT4Bmn1sti02ccbZxttJXA&maxResults=25&key=${process.env.GOOGLE_API_KEY}`,
    {
      method: "GET"
    }
  ).then((response) => response.json())
}

export async function getPlaylistItems(id: string): Promise<PlaylistItemResponse> {
  return fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.GOOGLE_API_KEY}&maxResults=25&part=snippet%2CcontentDetails&playlistId=${id}`,
    {
      method: "GET"
    }
  ).then((response) => response.json())
}