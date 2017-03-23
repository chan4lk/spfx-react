import * as React from 'react';
import * as Slider from 'react-slick';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Rotator.module.scss';
import { IRotatorProps } from './IRotatorProps';

export default class Rotator extends React.Component<IRotatorProps, void> {
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
      <div className={styles.container}>
        {this.props.items.length &&
          <Slider {...settings}>

            {this.props.items.map((item) => {
              return (
                <div key={item.id} className={styles.listItem}>
                  <div>{escape(item.title)}</div>
                  <img src={item.imagePath} onClick={() => this.props.navigate(item.imagePath)} title={item.tooltip} />
                </div>
              );
            })}

          </Slider>
        }
        <span>{escape(this.props.caption)}</span>
      </div>
    );
  }
}
