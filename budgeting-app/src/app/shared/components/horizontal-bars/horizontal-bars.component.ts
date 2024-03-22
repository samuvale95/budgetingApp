import { Component, Input } from '@angular/core';
import { NgFor, NgStyle } from '@angular/common';

interface HorizontalBarInfo{
  leftText: string;
  rightText: string;
  bottomText: string;
  percentage: number;
  color: string;
}

@Component({
  selector: 'app-horizontal-bars',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './horizontal-bars.component.html',
  styleUrl: './horizontal-bars.component.scss'
})
export class HorizontalBarsComponent{

  @Input()
  public title: string | undefined;
  @Input()
  public dataList: HorizontalBarInfo[] | undefined;

  constructor(){}
}
