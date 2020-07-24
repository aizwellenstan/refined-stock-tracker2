declare module '*.gql';
declare module '*.json';
declare module '*.yml';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.ttf';
declare module '*.otf';
declare module '*.eot';
declare module '*.svg';
declare module '*.woff';
declare module '*.woff2';

declare module '@ril/schema' {
  const typeDefs: string;
  export default typeDefs;
}

declare module 'apollo-storybook-react' {
  const apolloStorybookDecorator: (...args: any[]) => any;
  export default apolloStorybookDecorator;
}
