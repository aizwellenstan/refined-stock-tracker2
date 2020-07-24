
      export interface IntrospectionResultData {
        __schema: {
          types: {
            kind: string;
            name: string;
            possibleTypes: {
              name: string;
            }[];
          }[];
        };
      }
      const result: IntrospectionResultData = {
  "__schema": {
    "types": [
      {
        "kind": "INTERFACE",
        "name": "SocialAccount",
        "possibleTypes": [
          {
            "name": "YoutubeAccount"
          },
          {
            "name": "TwitterAccount"
          }
        ]
      }
    ]
  }
};
      export default result;
    