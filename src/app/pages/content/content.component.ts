import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axiosInstance from '../../services/axios-config';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  data: any;
  id: number = 0;

  async ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
    });
    try {
      const response = await axiosInstance.get(`/article/${this.id}`);
      this.data = response.data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }
}
