import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiserviceService {

  constructor(private http:HttpClient) { }


   topHeadlineNews = "https://newsapi.org/v2/top-headlines?country=in&apiKey=b7f77b9e9a954bbf846a731aa470f00d"

   techNews="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=b7f77b9e9a954bbf846a731aa470f00d"

   businessApi="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b7f77b9e9a954bbf846a731aa470f00d"
  

   tcBuznews():Observable<any>{
    return this.http.get(this.businessApi)
  }


   tcTechnews():Observable<any>{
    return this.http.get(this.techNews)
  }



  tcHeadLines():Observable<any>{
    return this.http.get(this.topHeadlineNews)
  }



}
