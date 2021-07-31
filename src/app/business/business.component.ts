import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {

  constructor(private news:NewsapiserviceService) { }

buzData: any = [];

  ngOnInit(): void {

    this.news.tcBuznews().subscribe(result =>{

      console.log(result.articles);
      this.buzData = result.articles;
    })
    

    
  }

}
