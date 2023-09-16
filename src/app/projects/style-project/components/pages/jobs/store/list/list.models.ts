import { Job as DBJob } from '../../../../../models/backend/job';

export interface Job extends DBJob{
    id: string;
}

export type JobCreateRequest = DBJob;