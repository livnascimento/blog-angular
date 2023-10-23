import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  constructor() { }

  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgSource: string = '';
  @Input() publicationDate: string = '';
  @Input() type: string = '';
  @Input() subject: string = '';
  @Input() imageHeight: string = 'auto';
  @Input() fontSize: string = 'auto';
  @Input() id: number = 0;

  ngOnInit(): void {
  }

}
