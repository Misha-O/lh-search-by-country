const search = {
    state: {
        searchInput: "",
        searchFilteredResults: [],
        tableResults: [],
        arrowCounter: -1,
    },
    mutations: {
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
    actions: {},
};

export default search;
