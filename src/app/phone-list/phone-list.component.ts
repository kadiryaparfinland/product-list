import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent  implements OnInit {

  URL = '../assets/data/phones.json';
  productList: any = [];
  searchList: any = [];
  sortList: any = [];
  options: any = [];
  option: boolean = false;
  searchText: string = '';
  selectedOption: string = '';


  onKey(event: any) { // without type info
    this.searchText = event.target.value;
    this.productList = this.searchList.filter((item: any) => {
      return item.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
    
  }

  onSelected(value:string): void {
		this.selectedOption = value;
    if(this.selectedOption === 'Alphabetical'){
      this.option = true;
      //console.log(this.option);
      this.productList = this.sortList.sort((a: any, b: any) => {
        return a.name.localeCompare(b.name);
      });
    }
    else{
      this.option = false;
      //console.log(this.option);
      this.productList = this.sortList.sort((a: any, b: any) => {
        return a.age - b.age;
      }); 
      
    }
	}

  constructor(private httpClient: HttpClient, private router: Router) { 

  }
  ngOnInit(): void {

    this.options = [{name:'Newest'}, {name:'Alphabetical'}];
    this.httpClient.get(this.URL).subscribe((list) => {

      this.productList = list;
      this.searchList = this.productList;
      this.sortList = this.productList;
    });

  }

  goToMovieDetails(id: number){
    this.router.navigate(['phone-details', id]);
  }

 

}
