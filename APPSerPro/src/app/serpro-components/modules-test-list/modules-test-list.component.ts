import { Component, OnInit } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';

@Component({
  selector: 'app-modules-test-list',
  templateUrl: './modules-test-list.component.html',
  styleUrls: ['./modules-test-list.component.css']
})
export class ModulesTestListComponent implements OnInit {

  modules: IcfesModule [];

  constructor() { 

    

  }

  ngOnInit(): void {
  }

}
