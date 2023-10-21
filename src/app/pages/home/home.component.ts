import { Component, OnInit } from '@angular/core';
import axiosInstance from '../../services/axios-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  data: any;

  newerImageStyle = {
    'height': '450px !important'
  }

  moreImageStyle = {
    'height': '300px !important'
  }

  async ngOnInit() {
    try {
      const response = await axiosInstance.get('/article');
      this.data = response.data;
      console.log(this.data);
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }
}
