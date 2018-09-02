import { Component, OnInit } from '@angular/core';
import { Adress } from '../../shared/models/Adress.model';
import { BookStoreService } from '../../shared/services/book-store.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public userService:UserService) { }
adressStore:Adress
  ngOnInit() {
    this.adressStore=this.userService.adressStore;
  }

}
