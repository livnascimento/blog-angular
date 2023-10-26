import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.css']
})

export class ArticleHeaderComponent implements OnInit {

  constructor() { }

  @Input() imgSource: string = '';
  @Input() subject: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() cover_credits: string = '';
  @Input() cover_link: string = '';

  ngOnInit(): void { }
}
