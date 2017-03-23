/// <reference types="mocha" />
import * as React from 'react';
import { expect } from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';

import Rotator from '../components/Rotator';
import { IRotatorProps } from '../components/IRotatorProps';
import { IRotatorItem } from '../IRotatorItem';

chai.use(chaiEnzyme()); // Note the invocation at the end

describe('Rotator container', () => {
  it('should render slides', () => {
 
    const items: ReadonlyArray<IRotatorItem> = [
      {
        id: 1,
        title: 'Image 1',
        imagePath: '/images/news1.jpg',
        tooltip: 'Image 1\'s tool tip'
      },
      {
        id: 2,
        title: 'Image 2',
        imagePath: '/images/news2.jpg',
        tooltip: 'Image 2\'s tool tip'
      }
    ];

    const element: React.ReactElement<IRotatorProps> = React.createElement(
      Rotator,
      {
        caption: 'The test rotator',
        items: items,
        navigate: () => {}
      }
    );

    const wrapper = mount(element);
    expect(wrapper.html()).to.contain('Image 1');
  });
});
