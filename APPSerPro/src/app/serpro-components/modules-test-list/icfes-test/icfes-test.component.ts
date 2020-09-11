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

  constructor(private questionsService:QuestionsService) {


  }

  /**
   * TODO: Must be replaced by a service call or an input component variable
   */
  loadCurrentTest () {
    this.currentTest = new IcfesTest ();
    this.currentTest.progress = 0;
    //this.currentTest.questions.push(new Question ('1.The Abstract Class defines a template method that contains a skeleton of some algorithm', ['Hola', 'Chao', 'Adios'], 'multiple'));
    //this.currentTest.questions.push(new Question ('2.The Abstract Class defines a template method that contains a skeleton of some algorithm', ['Hola', 'Chao', 'Adios'], 'multiple'));

  }

  calculateProgressIncrement () {
    this.progressIncrement = 100/this.currentTest.questions.length;
  }

  ngOnInit(): void {
    this.listarQuestions();
  }
  listarQuestions(){
    this.questionsService.getQuestionListByModule(1).subscribe((res:any )=> {

      this.currentTest = new IcfesTest ();
      this.currentTest.progress = 0;
      for(let item of res){
        this.currentTest.questions.push(new Question(item.Enunciado,item.Opciones,"multiple", item.Imagen));
      }
      console.log(this.currentTest.questions)
      this.questionCount = -1;
      //this.loadCurrentTest ();
      this.calculateProgressIncrement ();
      this.nextAction ();
      console.log(res);
    }, err => {
    })
  }
  nextAction  () {
    this.currentTest.progress += this.progressIncrement;
    this.currentQuestion = this.currentTest.questions [++this.questionCount];
  }

  previousAction () {
    this.currentTest.progress -= this.progressIncrement;
    this.currentQuestion = this.currentTest.questions [--this.questionCount];
  }

}
