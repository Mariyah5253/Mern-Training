import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  data: Object | undefined;
  loading: boolean = false;
  data1: Object | undefined;
  errorMsg: string = '';
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  makeRequest(): void {
    this.loading = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe( data => {
        this.data1 = data;
        this.loading = false;
      })
  }

}
