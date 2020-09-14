import { Component, OnInit } from '@angular/core';
import { IcfesModule } from 'src/app/models/module.model';
import { QuestionsService } from '../../services/question.service'

@Component({
  selector: 'app-modules-test-list',
  templateUrl: './modules-test-list.component.html',
  styleUrls: ['./modules-test-list.component.css']
})
export class ModulesTestListComponent implements OnInit {
  private endPoint = 'modulos';
  panelOpenState = false;
  modules = [];

  constructor(private questionServices: QuestionsService) {}


  ngOnInit(): void {
    this.listarModulos();
  }

  public listarModulos(){
    this.questionServices.get(this.endPoint).subscribe((res: any) => {
      this.modules = res;
      console.log(res);
    });
  }

}
