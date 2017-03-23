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
import { IRotatorWebPartProps } from './IRotatorWebPartProps';

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
    if(this.renderedOnce) { return; }

    const element = (
      <Provider store={this.store}>
        <DefaultContainer />
      </Provider>
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected get disableReactivePropertyChanges() {
    return true;
  }

  protected onPropertyChanged(propertyPath, oldValue, newValue) {    
    if (!this.disableReactivePropertyChanges) {    
      this.store.dispatch(updateProperty(propertyPath, newValue));
      this.store.dispatch(loadItems(this.properties.contentType)); 
    }
  }

  protected onInit() {
    this.store.dispatch(loadItems());    
    this.store.dispatch(applyProperties(this.properties));

    return Promise.resolve(undefined);
  }

  protected onAfterPropertyPaneChangesApplied() {   
    this.store.dispatch(applyProperties(this.properties));
    this.store.dispatch(loadItems(this.properties.contentType)); 
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
