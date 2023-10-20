import { Component, OnInit } from '@angular/core';
import axiosInstance from '../../services/axios-config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;

  constructor() { }

  async ngOnInit() {
    try {
      const response = await axiosInstance.get('/article');
      this.data = response.data;
    } catch (error) {
      console.error('Erro ao obter dados da API:', error);
    }
  }
}
