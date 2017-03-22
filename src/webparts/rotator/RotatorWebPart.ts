import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { SPComponentLoader } from '@microsoft/sp-loader';


import * as strings from 'rotatorStrings';
import Rotator from './components/Rotator';
import { IRotatorProps } from './components/IRotatorProps';
import { IRotatorWebPartProps } from './IRotatorWebPartProps';
import { IRotatorItem } from './IRotatorItem';

export default class RotatorWebPartWebPart extends BaseClientSideWebPart<IRotatorWebPartProps> {

  public constructor() {
    super();

    SPComponentLoader.loadCss('//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
    SPComponentLoader.loadCss('//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
  }

  public render(): void {
    const items:ReadonlyArray<IRotatorItem> = [];
    const element: React.ReactElement<IRotatorProps > = React.createElement(
      Rotator,
      {
        caption: this.properties.caption,
        items:items
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('contentType', {
                  label: strings.ContentTypeFieldLabel
                }),
                PropertyPaneTextField('caption', {
                  label: strings.CaptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
