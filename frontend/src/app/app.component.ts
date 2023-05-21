import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:any;

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getHello().subscribe((res:any) => {
      console.log(res);
      this.title = res["title"];
    })

  }


}
