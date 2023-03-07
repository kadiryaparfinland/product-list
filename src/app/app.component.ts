import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  URL = '../assets/data/phones.json';
  productList: any = [];

  constructor(private httpClient: HttpClient, private router: Router) { 

  }
  ngOnInit(): void {

    this.httpClient.get(this.URL).subscribe((list) => {

      this.productList = list;
      
    });

  }

  goToMovieDetails(id: number){
    this.router.navigate(['phone-details', id]);
  }

 
}
