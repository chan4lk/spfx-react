import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Store } from 'redux';
import { Provider } from 'react-redux';

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

import { createStore, IState } from './store';
import { applyProperties, updateProperty, loadItems } from './actions';
import DefaultContainer from './containers/DefaultContainer';

export default class RotatorWebPartWebPart extends BaseClientSideWebPart<IRotatorWebPartProps> {
  private store: Store<IState>;

  public constructor() {
    super();
    
    SPComponentLoader.loadCss('//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css');
    SPComponentLoader.loadCss('//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css');
  
    this.store = createStore();
}

  public render(): void {
    if(this.renderdOnce) { return; }

    const element = (
      <Provider store={this.store}>
        <DefaultContainer />
      </Provider>
    )

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges() {
    return false;
  }

  protected onPropertyChanged(propertyPath, oldValue, newValue) {
    if (!this.disableReactivePropertyChanges) {
      this.store.dispatch(updateProperty(propertyPath, newValue));
    }
  }

  protected onInit() {
    this.store.dispatch(loadItems(this.properties.contentType));    
    this.store.dispatch(applyProperties(this.properties));

    return Promise.resolve(undefined);
  }

  protected onAfterPropertyPaneChangesApplied() {
    this.store.dispatch(applyProperties(this.properties));
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
