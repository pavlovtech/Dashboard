import { GridsterItem } from 'angular-gridster2';
import * as uuid from 'uuid/v1';

export class DashboardCard implements GridsterItem {
  cardId?: string;
  component?: any;
  componentName?: string;
  componentInstance?: any;
  x: number;
  y: number;
  rows: number;
  cols: number;
  dragEnabled?: boolean;
  resizeEnabled?: boolean;
  compactEnabled?: boolean;
  maxItemRows?: number;
  minItemRows?: number;
  maxItemCols?: number;
  minItemCols?: number;
  minItemArea?: number;
  maxItemArea?: number;

  constructor(card: DashboardCard) {
      this.componentName = this.component.name;

      if (!this.cardId) {
        this.cardId = uuid();
      }

      Object.assign(this, card);
  }
}
