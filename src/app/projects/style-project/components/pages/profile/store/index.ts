import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";

export interface ProfileState {
    form: any;
}

export const reducers: ActionReducerMap<ProfileState> = {
    form: undefined
};

export const effects: any[] = [

];

export const getProfileState = createFeatureSelector<ProfileState>('profile');