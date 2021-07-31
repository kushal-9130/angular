import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';


@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  constructor(private service: NewsapiserviceService) { }

  techNewsData:any=[];

  ngOnInit(): void {

    this.service.tcTechnews().subscribe(result =>{

      console.log(result.articles);
      this.techNewsData = result.articles;
    })


  }

}
