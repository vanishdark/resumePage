import {Component, Input, OnInit} from '@angular/core';
import {ProgressBarUtil} from '../../utils/progress-bar.util';
import {getValueInRange} from '../../utils/utils.util';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() max: number;

  @Input() animated: boolean;

  @Input() striped: boolean;

  @Input() showValue: boolean;

  @Input() type: string;

  @Input() value = 0;

  @Input() height: string;

  constructor(config: ProgressBarUtil) {
    this.max = config.max;
    this.animated = config.animated;
    this.striped = config.striped;
    this.type = config.type;
    this.showValue = config.showValue;
    this.height = config.height;
  }

  ngOnInit() {
  }


  getValue() {
    return getValueInRange(this.value, this.max);
  }

  getPercentValue() {
    return 100 * this.getValue() / this.max;
  }
}

