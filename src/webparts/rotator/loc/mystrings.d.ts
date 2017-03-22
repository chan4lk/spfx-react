declare interface IRotatorStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  CaptionFieldLabel: string;
  ContentTypeFieldLabel: string;
}

declare module 'rotatorStrings' {
  const strings: IRotatorStrings;
  export = strings;
}
