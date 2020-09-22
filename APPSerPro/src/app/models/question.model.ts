import { Answer } from './answer.model';

export class Question {
    module: number;
    statement: string;
    questionType: string;
    answers: Answer [];
    selectedAnswer: Answer;
    feedback : string;
    

    constructor (statement: string, answers: Answer [], questionType: string, feedback:string){
        this.statement = statement;
        this.answers = answers;
        this.questionType = questionType;
        this.selectedAnswer = null;
        this.feedback = feedback;
    }

    checkAnswer(): boolean{
        // TODO: Implementar el chequeo del valor
        return false;
    }


}
