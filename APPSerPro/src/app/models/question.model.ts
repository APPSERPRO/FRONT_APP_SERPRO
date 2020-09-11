export class Question {

    statement: string;
    type: string;
    answers: string [];
    images: any;
    constructor (statement: string, answers: string [], type: string, images: any){
        this.statement = statement;
        this.answers = answers;
        this.type = type;
        this.images = images;
    }

}
