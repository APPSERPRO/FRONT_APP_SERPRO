export class Question {

    statement: string;
    type: string;
    answers: string [];
    
    constructor (statement: string, answers: string [], type: string){
        this.statement = statement;
        this.answers = answers;
        this.type = type;
    }
    
}