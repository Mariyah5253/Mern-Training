import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-httpdemo',
  templateUrl: './httpdemo.component.html',
  styleUrls: ['./httpdemo.component.css']
})
export class HttpdemoComponent implements OnInit {
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
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe( data => {
        this.data = data;
        this.loading = false;
      })
  }



  handleError(): void {
    this.loading = true;
    this.http
    .get('https://jsonplaceholder.typicode.com/invalid-url')
      .subscribe({
        next: data => {
          this.data = data;
          this.loading = false;
        },
        error: error => {
          this.errorMsg = error.message;
          console.error('ERROR!', error);
        }
      });
  }

}
