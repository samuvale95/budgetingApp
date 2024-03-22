import { NgFor } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';

export interface CircleBarInfo {
  leftSideText:string;
  rightSideText: string;
}

@Component({
  selector: 'app-circle-bar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './circle-bar.component.html',
  styleUrl: './circle-bar.component.scss'
})
export class CircleBarComponent {
  @HostBinding('style.--degree')
  private _degree = '0deg';

  @Input()
  public get degree(): string {
    return this._degree;    
  }

  public set degree(value: number){
    this._degree = ((360*value)/100) + 'deg';
  }

  @Input() @HostBinding('style.--fill-color') fillColor = '#325288';
  @Input() @HostBinding('style.--bg-color') bgColor = '#A8CAEA';
  @Input() @HostBinding('style.--bg-circle-color') bgCircleColor = '#F1F5F9'
  @Input() public title: string | undefined;
  @Input() public circleTitle: string | undefined;
  @Input() public circleSubtitle: string | undefined;
  @Input() public infoList: CircleBarInfo[] | undefined;
}
