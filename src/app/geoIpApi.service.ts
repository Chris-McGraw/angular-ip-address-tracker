import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IpSearchLoadingService } from './ipSearchLoading.service';
import { IpInfoService } from './ipInfo.service';

@Injectable({
  providedIn: 'root'
})

export class GeoIpApiService {
  repos: any[] = [];

  constructor(private http: HttpClient, private ipSearchLoadingService: IpSearchLoadingService, private ipInfoService: IpInfoService) {}

  public getApiResponse() {
    return this.http.get<any>("/api/v1?apiKey=at_X1Ezn8mUNtuyM9PAe9IGUKObF9iI4&ipAddress=")
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received');
          this.repos = response;

          console.log(this.repos);
        },
        (error) => {                              //Error callback
          console.error('Request failed with error');
          console.log(error);
        },
        () => {                                   //Complete callback
          console.log('Request completed');

          var data = JSON.parse(JSON.stringify(this.repos));

          this.ipSearchLoadingService.setStatusReady();
          this.ipInfoService.setNewIpInfo(data);
          this.ipInfoService.setStatusReady();
      })
  }
}
