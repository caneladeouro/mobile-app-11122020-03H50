import { Component, OnInit } from '@angular/core';

import api from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor() {}

  ngOnInit(): void {}

  async register() {
    const data = {
      nm_user: this.name,
      nm_email: this.email,
      ds_password: this.password,
    };

    await api.post('/create', data);
    alert(this.name + this.email + this.password);
  }
}
