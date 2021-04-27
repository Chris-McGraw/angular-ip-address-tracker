import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Repos {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular IP Address Tracker';
  ipSearchLoading:boolean = false;
  ipInfoReady:boolean = false;

  repos: Repos[];

  constructor(private http: HttpClient) {
    this.repos = [];
  }

  ngOnInit() {
    // this.getRepos();
  }

  public getRepos() {
    return this.http.get<Repos[]>("/api/v1?apiKey=at_X1Ezn8mUNtuyM9PAe9IGUKObF9iI4&ipAddress=")
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received');
          console.log(response);
          this.repos = response;
        },
        (error) => {                              //Error callback
          console.error('Request failed with error');
          console.log(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed');
          console.log(this.repos);

          // this.ipSearchLoading = false;
      })
  }

  startEmitTestHandler(ipSearchLoading: boolean) {
    this.ipSearchLoading = ipSearchLoading;
  }

  ipInfoReadyStatusChangeHandler(ipInfoReady: boolean) {
    this.ipInfoReady = ipInfoReady;
  }
}
