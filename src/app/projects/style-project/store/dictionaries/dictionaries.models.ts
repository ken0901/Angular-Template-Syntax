import { ControlItem, Item, Icon } from '../../models/frontend';
export { ControlItem, Item } from '../../models/frontend';

export interface Dictionaries {
    roles: Dictionary;
    specializations: Dictionary;
    qualification: Dictionary;
    skills: Dictionary;
    countries: Dictionary;
}

export interface Dictionary {
    items: Item[];
    controlItems: ControlItem[];
}

