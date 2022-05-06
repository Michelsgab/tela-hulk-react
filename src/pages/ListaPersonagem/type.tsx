export interface MarvelRequest {
    comics: string;
    description: string;
    events: string;
    id: number;
    name: string | undefined;
    series: {
      items: [{
        name: string;
      }]
    };
    stories: {
      items: [{
        name: string;
        resourceURI: string;
        type: string;
      }]
    };
    thumbnail: [path: string];
  }
  