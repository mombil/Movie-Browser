import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    people: [],
    personDetails: [],
    error: false,
    searchPeopleValue: "",
    isLoading: true,
    cast: [],
    crew: [],
    personId: false,
    peoplePage: 1,
    total_pages: 1,
  },
  reducers: {
    fetchPeople: state => {
      state.isLoading = true;
      state.error = false;
    },
    fetchPeopleSucces: (state, { payload: people }) => {
      state.people = people;
      state.isLoading = false;
    },
    fetchPeopleError: (state, { payload: error }) => {
      state.error = true;
      state.isLoading = false;
      console.error(error);
    },
    changeSearchPeopleValue: (state, { payload: searchPeopleValue }) => {
      state.isLoading = true;
      state.searchPeopleValue = searchPeopleValue;
      state.peoplePage = 1;
      state.error = false;
    },
    nextPeoplePage: state => {
      state.peoplePage = state.peoplePage + 1;
    },
    previousPeoplePage: state => {
      state.peoplePage = state.peoplePage - 1;
    },
    goToLastPeoplePage: state => {
      state.peoplePage =
        state.people.total_pages > 500 ? 500 : state.people.total_pages;
    },
    goToFirstPeoplePage: state => {
      state.peoplePage = 1;
    },
    fetchPersonDetails: state => {
      state.isLoading = true;
    },
    fetchPersonDetailsSucces: (state, { payload: personDetails }) => {
      state.personDetails = personDetails;
      state.isLoading = false;
    },
    fetchPersonDetailsError: (state, { payload: error }) => {
      state.isLoading = false;
      state.error = true;
      console.error(error);
    },
    fetchMoviesForPerson: (state, { payload: moviesForPerson }) => {
      state.cast = moviesForPerson.cast;
      state.crew = moviesForPerson.crew;
    },
    updatePersonId: (state, { payload: id }) => {
      state.personId = id;
    },
    updatePeoplePage: (state, { payload: page }) => {
      state.peoplePage = page;
    },
  },
});

export const {
  fetchPeople,
  fetchPeopleSucces,
  fetchPeopleError,
  changeSearchPeopleValue,
  fetchPersonDetails,
  fetchPersonDetailsSucces,
  fetchPersonDetailsError,
  fetchMoviesForPerson,
  updatePersonId,
  goToLastPeoplePage,
  nextPeoplePage,
  previousPeoplePage,
  goToFirstPeoplePage,
  updatePeoplePage,
} = peopleSlice.actions;
const selectPeopleState = state => state.people;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPeopleError = state => selectPeopleState(state).error;
export const selectSearchPeopleValue = state =>
  selectPeopleState(state).searchPeopleValue;
export const selectPeopleIsLoading = state =>
  selectPeopleState(state).isLoading;
export const selectPersonDetails = state =>
  selectPeopleState(state).personDetails;
export const selectPersonId = state => selectPeopleState(state).personId;
export const selectTotalPeoplePages = state => selectPeople(state).total_pages;
export const selectPeoplePage = state => selectPeopleState(state).peoplePage;
export const selectCrew = state => selectPeopleState(state).crew;
export const selectCast = state => selectPeopleState(state).cast;

export default peopleSlice.reducer;
