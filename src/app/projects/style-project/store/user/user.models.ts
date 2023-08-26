export { User, Recruiter, Employee } from "../../models/backend/user";

// Requests models

export interface EmailPasswordCredentials {
    email: string;
    password: string;
}