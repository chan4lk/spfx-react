import {IRotatorItem} from '../IRotatorItem';

export interface IRotatorProps {
  caption: string;
  items: ReadonlyArray<IRotatorItem>;
  navigate:(url:string)=>void;
}
