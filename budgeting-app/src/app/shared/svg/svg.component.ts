import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  standalone: true,
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent implements OnChanges {

  @Input()
  public name?: String;

  public svgIcon: any;

  constructor(
    private httpClient:HttpClient,
    private sanitizer: DomSanitizer
    ){

    }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.name){
      this.svgIcon = '';
      return;
    }

    this.httpClient
      .get("assets/icons/"+this.name+".svg", {responseType: 'text'})
      .subscribe(res => {
        this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(res);
      })
  }

}
