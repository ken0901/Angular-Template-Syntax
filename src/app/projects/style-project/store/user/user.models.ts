import { User } from "../../models/backend/user";

export { User, Recruiter, Employee } from "../../models/backend/user";

// Requests models

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}

export type UserCreateRequest = Omit<User, 'uid' | 'email' | 'create'>;