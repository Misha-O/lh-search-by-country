import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        url: "https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;subregion;",
        countries: [],
        searchInput: "",
        searchFilteredResults: [],
        tableResults: [],
        arrowCounter: -1,
    },
    mutations: {
        getCountries(state, response) {
            return (state.countries = response);
        },
        filterInputByName(state) {
            state.searchFilteredResults = state.countries.filter(country => {
                return country.name.toLowerCase().startsWith(state.searchInput.toLowerCase());
            });
        },
        handleInput(state) {
            state.resultSummary = false;
            state.resultsList = true;
        },
    },
    actions: {
        async GetCountries({ commit, state }) {
            try {
                const response = await axios.get(state.url);
                if (response.status === 200) {
                    return commit("getCountries", response.data);
                } else return null;
            } catch (error) {
                console.error(error);
            }
        },
    },
});
