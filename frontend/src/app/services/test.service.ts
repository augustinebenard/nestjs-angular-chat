import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  baseUrl:string= environment.backendApiUrl;

  constructor(private http:HttpClient) { }

  getHello(){
    return this.http.get(this.baseUrl);
  }
}
