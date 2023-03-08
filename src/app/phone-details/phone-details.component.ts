import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  productId: string = '';
  URL = '../assets/data/';
  productList: any = [];
  mainTitle: string = '';
  mainDescription: string = '';
  imageUrl: string = '';
  imageUrls: string[] = [];

  availability: string[] = [];

  battery: any = [];
  standbyTime: any = '';
  talkTime: string = '';
  type: string = '';

  storage: any = [];
  flash: string = '';
  ram: string = '';

  connectivity: any = [];
  bluetooth: string = '';
  cell: string = '';
  gps: string = '';
  infrared: string = '';
  wifi: string = '';



  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { 

  }

  ngOnInit(): void {

    this.productId = this.route.snapshot.params['id'];
    this.URL = this.URL + this.productId + '.json';
    
    this.httpClient.get(this.URL).subscribe((list) => {

      this.productList = list;
      this.mainTitle = this.productList.id;
      this.mainDescription = this.productList.description;
      this.imageUrls = this.productList.images;
      this.imageUrl = '../assets/'+this.imageUrls[0];
      this.availability = this.productList.availability;
      this.battery = this.productList.battery;
      this.standbyTime = this.battery["standbyTime"];
      this.talkTime = this.battery["talkTime"];
      this.type = this.battery["type"];

      this.storage = this.productList.storage;
      this.flash = this.storage["flash"];
      this.ram = this.storage["ram"];

      this.connectivity = this.productList.connectivity;
      this.bluetooth = this.connectivity["bluetooth"];
      this.cell = this.connectivity["cell"];
      this.gps = this.connectivity["gps"];
      this.infrared = this.connectivity["infrared"];
      this.wifi = this.connectivity["wifi"];
      
    });

  }

  changeImage(imageUrl: string) {
    this.imageUrl = '../assets/'+imageUrl;
  }

}
