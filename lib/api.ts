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
    },
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
    }`,
  );
  return extractVideoEntries(entries);
}
