import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { IcfesTest } from 'src/app/models/test.model';
import { QuestionsService } from '../../../services/question.service';

@Component({
  selector: 'app-icfes-test',
  templateUrl: './icfes-test.component.html',
  styleUrls: ['./icfes-test.component.css'],
})
export class IcfesTestComponent implements OnInit {
  currentQuestion: Question;
  currentTest: IcfesTest;
  questionCount: number;
  progressIncrement: number;
  testEnded: boolean;
  endPoint = 'question';
  nextAndSend: string;
  

  constructor(
    private questionsService: QuestionsService,
    private route: ActivatedRoute,
  ) {
    this.questionCount = -1;
    this.loadCurrentTest();
    this.nextAndSend = 'Siguiente';
  }

  /**
   * TODO: Must be replaced by a service call or an input component variable
   */
  async loadCurrentTest() {
    const testId = await this.route.snapshot.params.testId;
    const moduleId = await this.route.snapshot.params.moduleId;
    this.currentTest = new IcfesTest();
    this.currentTest.progress = 0;
    this.listarQuestions(testId,moduleId);
  }

  calculateProgressIncrement() {
    this.progressIncrement = 100 / this.currentTest.questions.length;
  }

  ngOnInit(): void {}

  listarQuestions(testId, moduleId) {
    let request = null;
    if (testId !== 'random') {
      request = this.questionsService.getTestById (testId);  
    } else {
      request = this.questionsService.getRandomQuestionsByModuleId(moduleId); 
    }     
    request.subscribe(
      (res: any) => {
        console.log(res);
        for (let item of res.questions) {
          console.log ('item: ', item);
          const objTmp = new Question(
            item.statement,
            item.answers,
            item.questionType,
            item.feedback
          );
          console.log ('objtmp: ',objTmp , item);
          this.currentTest.questions.push(
            objTmp  
          );
        }        
        this.calculateProgressIncrement();
        this.nextAction();        
      },
      (err) => {},
    );
  }
  nextAction() {
    if (this.questionCount == this.currentTest.questions.length - 2) {
      this.nextAndSend = 'ENVIAR';
    }
    if (this.questionCount < this.currentTest.questions.length - 1) {
      this.currentTest.progress += this.progressIncrement;
      this.currentQuestion = this.currentTest.questions[++this.questionCount];
      console.log('CurrenQuestion', this.currentQuestion);
    } else {
      this.currentTest.calculateQtyCorrectQuestions();
      this.testEnded = true;
    }
  }

  previousAction() {
    this.currentTest.progress -= this.progressIncrement;
    this.currentQuestion = this.currentTest.questions[--this.questionCount];
  }
}
