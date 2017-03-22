import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'rotatorWebPartStrings';
import RotatorWebPart from './components/RotatorWebPart';
import { IRotatorWebPartProps } from './components/IRotatorWebPartProps';
import { IRotatorWebPartWebPartProps } from './IRotatorWebPartWebPartProps';

export default class RotatorWebPartWebPart extends BaseClientSideWebPart<IRotatorWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IRotatorWebPartProps > = React.createElement(
      RotatorWebPart,
      {
        description: this.properties.description
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
