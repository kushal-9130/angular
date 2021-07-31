import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent implements OnInit {


   topHeadlineData: any =[];

// userData$: Observable<any>;
  constructor(private service: NewsapiserviceService) { 
 
    this.service.tcHeadLines().subscribe(result =>{

      console.log(result.articles);
      this.topHeadlineData = result.articles;
    })

  }

  ngOnInit(): void {

// this.service.topHeading().subscribe((result) =>{
//   console.log(result);
// })

  }

}
