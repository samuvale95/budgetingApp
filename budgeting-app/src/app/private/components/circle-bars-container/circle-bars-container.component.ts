import { Component, Input } from '@angular/core';
import { CircleBarComponent, CircleBarInfo } from '../circle-bar/circle-bar.component';
import { CommonModule, NgFor } from '@angular/common';

interface CircleBarContainerInfo {
  title: string;
  circleTitle: string;
  circleSubtitle: string;
  percentage: number;
  infoList: CircleBarInfo[];
}

@Component({
  selector: 'app-circle-bars-container',
  standalone: true,
  imports: [CircleBarComponent, NgFor],
  templateUrl: './circle-bars-container.component.html',
  styleUrl: './circle-bars-container.component.scss'
})
export class CircleBarsContainerComponent {
  @Input()
  public title: string | undefined;
  @Input()
  public dataList: CircleBarContainerInfo[] | undefined;

  constructor(){
    this.title = "I tuoi budget";
    this.dataList = [
      {
        title: "Mensile",
        circleTitle: "320,50€",
        circleSubtitle: "RIMASTI",
        percentage: 80,
        infoList: [
          {
            leftSideText:"Risparmi 30%",
            rightSideText: "288€"
          },
          {
            leftSideText:"Spese 25%",
            rightSideText: "240€"
          },
          {
            leftSideText:"Svago 15%",
            rightSideText: "144€"
          },
          {
            leftSideText:"Casa 30%",
            rightSideText: "288€"
          }
        ]
      },
      {
        title: "Casa",
        circleTitle: "280,70€",
        circleSubtitle: "RIMASTI",
        percentage: 60,
        infoList: [
          {
            leftSideText:"Affitto 30%",
            rightSideText: "288€"
          },
          {
            leftSideText:"Bollette 25%",
            rightSideText: "240€"
          },
          {
            leftSideText:"Internet 15%",
            rightSideText: "144€"
          },
          {
            leftSideText:"Altro 30%",
            rightSideText: "288€"
          }
        ]
      }
    ];
  }
}
