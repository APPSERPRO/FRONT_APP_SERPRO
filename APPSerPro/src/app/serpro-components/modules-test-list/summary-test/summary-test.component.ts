import {Component, Input, OnInit} from '@angular/core';
import {IcfesTest} from "../../../models/test.model";

@Component({
  selector: 'app-summary-test',
  templateUrl: './summary-test.component.html',
  styleUrls: ['./summary-test.component.css']
})
export class SummaryTestComponent implements OnInit {
  @Input()
  icfesTest: IcfesTest;

  constructor() {
  }

  ngOnInit(): void {
    this.icfesTest.calculateQtyCorrectQuestions();
    console.log("Icfes test: -->",this.icfesTest);
  }

}
