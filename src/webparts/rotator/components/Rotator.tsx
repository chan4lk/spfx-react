import * as React from 'react';
import * as Slider from 'react-slick';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './Rotator.module.scss';
import { IRotatorProps } from './IRotatorProps';

export default class Rotator extends React.Component<IRotatorProps, void> {

  public constructor(props){
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  private onButtonClick(url:string) {
    this.props.navigate(url);    
    window.open(url, '_blank');
  }
  
  public render(): React.ReactElement<IRotatorProps> {
    const buttonText = 'Open in New Tab';
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    return (
      <div className={styles.rotator}>
      <div className={styles.container}>
        {this.props.items.length &&
          <Slider {...settings}>

            {this.props.items.map((item) => {
              return (
                <div key={item.id} className={styles.rotatorItem}>
                  <div>{escape(item.title)}</div>
                  <img src={item.imagePath}  title={item.tooltip} />
                  <button className={styles.button} name={'button_' + item.id } onClick={() => this.onButtonClick(item.imagePath)}>
                    <label className={styles.label}>{buttonText}</label>
                  </button>
                </div>
              );
            })}

          </Slider>
        }
        <span>{escape(this.props.caption)}</span>
      </div>
      </div>
    );
  }
}
