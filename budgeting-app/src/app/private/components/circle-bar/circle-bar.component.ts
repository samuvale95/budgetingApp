import { NgFor } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

interface CircleBarInfo {
  leftSideText:string;
  rightSideText: string;
}

@Component({
  selector: 'app-circle-bars',
  standalone: true,
  imports: [NgFor],
  templateUrl: './circle-bar.component.html',
  styleUrl: './circle-bar.component.scss'
})
export class CircleBarComponent {
  @Input() @HostBinding('style.--degree') degree = '0deg';
  @Input() @HostBinding('style.--fill-color') fillColor = '#325288';
  @Input() @HostBinding('style.--bg-color') bgColor = '#A8CAEA';
  @Input() public title: string | undefined;
  @Input() public circleTitle: string | undefined;
  @Input() public circleSubtitle: string | undefined;
  @Input() public dataList: CircleBarInfo[] | undefined;
}
