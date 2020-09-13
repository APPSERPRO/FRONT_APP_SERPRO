import {Question} from  './question.model';
export class IcfesTest {

    constructor () {
        this.questions = new Array <Question>();
        this.qtyCorrectQuestions = 0;
    }

    progress: number;
    module: number;
    questions: Question[];
    qtyCorrectQuestions : number;


    calculateQtyCorrectQuestions() {
      this.qtyCorrectQuestions = 0;
      this.questions.forEach(
        (question) => {
          if(question.checkAnswer()){
            this.qtyCorrectQuestions +=1;
            console.log("Calculate -->" ,this.qtyCorrectQuestions)
          }
        }
      )
    }


}
