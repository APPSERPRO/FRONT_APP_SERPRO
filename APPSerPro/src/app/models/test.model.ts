import {Question } from  './question.model';
export class IcfesTest {

    constructor () {
        this.questions = new Array <Question>();
    }
    progress: number;
    module: string;
    questions: Question[];
}