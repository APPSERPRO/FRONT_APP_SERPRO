import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { IcfesTest } from 'src/app/models/test.model';
import { QuestionsService } from '../../../services/question.service';

@Component({
  selector: 'app-icfes-test',
  templateUrl: './icfes-test.component.html',
  styleUrls: ['./icfes-test.component.css']
})
export class IcfesTestComponent implements OnInit {

  currentQuestion: Question;
  currentTest: IcfesTest;
  questionCount: number;
  progressIncrement: number;
  testEnded: boolean;
  endPoint = 'question'
  constructor(private questionsService:QuestionsService) {

    this.questionCount = -1;
    this.loadCurrentTest ();

  }

  /**
   * TODO: Must be replaced by a service call or an input component variable
   */
  loadCurrentTest () {
    this.currentTest = new IcfesTest ();
    this.currentTest.progress = 0;
    this.listarQuestions();
  }

  calculateProgressIncrement () {
    this.progressIncrement = 100/this.currentTest.questions.length;
  }

  ngOnInit(): void {
  }
  listarQuestions(){
    this.questionsService.getId(this.endPoint,1).subscribe((res:any )=> {


      for(let item of res){
        this.currentTest.questions.push(new Question(item.Enunciado,item.Opciones,"multiple", item.Imagen, item.Respuesta,item.Justificacion));
      }
      console.log("Esto que es?  ",this.currentTest.questions)

      this.calculateProgressIncrement ();
      this.nextAction ();
      console.log("Consulta de DB  -->",res);
    }, err => {
    })
  }
  nextAction  () {
    if (this.questionCount < this.currentTest.questions.length-1){
    this.currentTest.progress += this.progressIncrement;
    this.currentQuestion = this.currentTest.questions [++this.questionCount];
    console.log("CurrenQuestion",this.currentQuestion)
    }
    else{

      this.currentTest.calculateQtyCorrectQuestions();
      this.testEnded = true;

    }
  }

  previousAction () {
    this.currentTest.progress -= this.progressIncrement;
    this.currentQuestion = this.currentTest.questions [--this.questionCount];
  }

}
