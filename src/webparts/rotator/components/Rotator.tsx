import * as React from 'react';
import * as Slider from 'react-slick';

import { IRotatorItem } from '../IRotatorItem';
import styles from './Rotator.module.scss';
import { IRotatorProps } from './IRotatorProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class RotatorWebPart extends React.Component<IRotatorProps, void> {
  public render(): React.ReactElement<IRotatorProps> {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.items.map((item) => {
            return (
              <div key={item.id} className="rotatorItem">
                <div>{item.title}</div>
                <img src={item.imagePath}  title={item.tooltip}/>
              </div>
            );
          })}
        </Slider>
        <span>{this.props.caption}</span>
      </div>
    );
  }
}
