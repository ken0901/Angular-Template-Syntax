import { User as DBUser, Employee } from '../../../../../models/backend/user';

export interface User extends DBUser {
    role: Employee;
}