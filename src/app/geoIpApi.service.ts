import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IpSearchLoadingService } from './ipSearchLoading.service';
import { IpInfoService } from './ipInfo.service';
import { IpErrorService } from './ipError.service';

@Injectable({
  providedIn: 'root'
})

export class GeoIpApiService {
  repos: any[] = [];

  constructor(private http: HttpClient,
  private ipSearchLoadingService: IpSearchLoadingService,
  private ipInfoService: IpInfoService,
  private ipErrorService: IpErrorService) {}

  public getApiResponse(input?:string, type?:string) {
    let apiKey:string = "at_X1Ezn8mUNtuyM9PAe9IGUKObF9iI4";
    let apiUrl:string = "";

    if(input && type === "ip") {
      apiUrl = "/api/v1?apiKey=" + apiKey + "&ipAddress=" + input;
    }
    else if(input && type === "domain") {
      apiUrl = "/api/v1?apiKey=" + apiKey + "&domain=" + input;
    }
    else {
      apiUrl = "/api/v1?apiKey=" + apiKey;
    }

    return this.http.get<any>(apiUrl)
      .subscribe(
        (response) => {                           //Next callback
          console.log('response received');
          this.repos = response;

          console.log(this.repos);
        },
        (error) => {                              //Error callback
          console.error('Request failed with error');
          // console.log(error);

          this.ipSearchLoadingService.setStatus(false);
          this.ipInfoService.setStatus(false);
          this.ipErrorService.setStatus(true);
          this.ipErrorService.setErrorMsg(error.status + " - " + error.statusText);
        },
        () => {                                   //Complete callback
          console.log('Request completed');

          var data = JSON.parse(JSON.stringify(this.repos));

          this.ipSearchLoadingService.setStatus(false);
          this.ipInfoService.setNewIpInfo(data);
          this.ipInfoService.setStatus(true);
      })
  }
}
