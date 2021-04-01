<template>
    <div>
        <b-row class="mb-5 d-flex flex-column">
            <b-col cols="10" class="mx-auto">
                <b-form-input
                    v-model="searchInput"
                    @input="handleInput"
                    @keydown.down="onArrowDown"
                    @keydown.up="onArrowUp"
                    @keydown.enter="onEnter"
                    placeholder="Start typing country name..."
                ></b-form-input>
            </b-col>
            <b-col cols="10" class="mx-auto">
                <b-list-group v-show="flags.resultsList && searchInput !== ''">
                    <b-list-group-item
                        v-for="(result, index) in searchFilteredResults"
                        :key="result.name"
                        @click="setResult(result.name)"
                        :variant="index === arrowCounter ? 'primary' : ''"
                        button
                        class="d-flex justify-content-start"
                    >
                        <b-card-img left width="24" :src="result.flag" alt="Country flag" class="mr-5"></b-card-img>
                        {{ result.name }}</b-list-group-item
                    >
                </b-list-group>
            </b-col>
        </b-row>
        <b-row no-gutters v-if="flags.resultSummary">
            <b-col class="d-flex justify-content-center">
                <b-card no-body class="overflow-hidden" border-variant="info">
                    <b-row no-gutters>
                        <b-col cols="12" md="4">
                            <b-card-img :src="tableResults.flag" alt="Country flag" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col cols="12" md="8">
                            <b-card-body title-tag="h2" :title="tableResults.name">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="table-primary" scope="col">Code</th>
                                            <th class="table-success" scope="col">Capital</th>
                                            <th class="table-primary" scope="col">Region</th>
                                            <th class="table-success" scope="col">Area</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{ tableResults.alpha3Code }}</td>
                                            <td>{{ tableResults.capital }}</td>
                                            <td>{{ tableResults.region }}</td>
                                            <td>{{ tableResults.subregion }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: "SearchBox",
    props: {
        countries: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            searchInput: "",
            searchFilteredResults: [],
            tableResults: [],
            flags: {
                resultsList: false,
                resultSummary: false,
            },
            arrowCounter: -1,
        };
    },
    methods: {
        filterInputByName() {
            this.searchFilteredResults = this.countries.filter(country => {
                return country.name.toLowerCase().startsWith(this.searchInput.toLowerCase());
            });
        },
        handleInput() {
            this.filterInputByName();
            this.flags.resultSummary = false;
            this.flags.resultsList = true;
        },
        setResult(countryName) {
            this.searchInput = countryName;
            this.flags.resultsList = false;
            this.flags.resultSummary = true;
            this.getSelectedCountry(countryName);
        },
        onArrowDown() {
            if (this.arrowCounter < this.searchFilteredResults.length) {
                this.arrowCounter = this.arrowCounter + 1;
            }
        },
        onArrowUp() {
            if (this.arrowCounter > 0) {
                this.arrowCounter = this.arrowCounter - 1;
            }
        },
        onEnter() {
            this.searchInput = this.searchFilteredResults[this.arrowCounter].name;
            this.arrowarrowCounter = -1;
            this.flags.resultsList = false;
            this.flags.resultSummary = true;
        },
        getSelectedCountry(country) {
            this.tableResults = this.searchFilteredResults.find(filteredCountry => {
                if (filteredCountry.name === country) {
                    return filteredCountry;
                }
            });
        },
    },
};
</script>

<style></style>
