import { FieldValue } from 'firebase/firestore';

export interface Job {
    title: string;
    salary: number;
    created: FieldValue;
    updated?: FieldValue;
}