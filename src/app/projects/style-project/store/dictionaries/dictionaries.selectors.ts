import { createSelector, createFeatureSelector } from "@ngrx/store";

import { DictoinariesState } from "./dictionaries.reducer";

export const getDictionariesState = createFeatureSelector<DictoinariesState>('dictionaries');

export const getDictionaries = createSelector(
    getDictionariesState,
    (state) => state.entities
);

export const getLoading = createSelector(
    getDictionariesState,
    (state) => state.loading
);

export const getIsReady = createSelector(
    getDictionariesState,
    (state) => state.entities && !state.loading
);

export const getRoles = createSelector(
    getDictionaries,
    (state) => state.roles
);

export const getQualification = createSelector(
    getDictionaries,
    (state) => state.qualification
);

export const getSpecializations = createSelector(
    getDictionaries,
    (state) => state.specializations
);

export const getSkills = createSelector(
    getDictionaries,
    (state) => state.skills
);