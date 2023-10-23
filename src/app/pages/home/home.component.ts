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

  newerStyle = {
    'height': '450px !important',
    'font-size': '3rem'
  }

  moreStyle = {
    'height': '300px !important',
    'font-size': '2rem !important',
  }

  async ngOnInit() {
    try {
      const response = await axiosInstance.get('/article');
      this.data = response.data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }
}
