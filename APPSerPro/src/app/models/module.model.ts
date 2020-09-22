import { IcfesTest } from './test.model';

export class IcfesModule {
    // moduleId: number;
    _id: string;
    knowledgeArea: string;
    description: string;
    evaluationSubject: string;
    testsList: IcfesTest [];
}