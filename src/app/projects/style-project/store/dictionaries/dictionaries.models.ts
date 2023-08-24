import { ControlItem, Item } from "../../models/frontend";

export interface Dictionaries {
    roles: Dictionary;
    specializations: Dictionary;
    qualifications: Dictionary;
    skills: Dictionary;
}

export interface Dictionary {
    items: Item[];
    controlItems: ControlItem[];
}