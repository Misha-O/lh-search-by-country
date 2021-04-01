<template>
    <div id="app">
        <b-container v-if="countries.length">
            <h1 class="display-5 text-capitalize mb-4">country information search tool <b-icon class="ml-2" variant="success" icon="flag" font-scale="1"></b-icon></h1>
            <search-box :countries="countries" />
        </b-container>
        <div v-else class="d-flex justify-content-center mb-3">
            <b-spinner variant="primary" label="Loading..."></b-spinner>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import SearchBox from "./components/SearchBox.vue";
export default {
    name: "App",
    components: { SearchBox },
    data() {
        return {
            // countries: [],
        };
    },
    computed: {
        ...mapState({
            countries: state => state.countries,
        }),
    },
    methods: {
        ...mapActions(["GetCountries"]),
    },
    created() {
        this.GetCountries();
    },
    // async created() {
    //     try {
    //         const response = await axios.get("https://restcountries.eu/rest/v2/all?fields=name;flag;alpha3Code;capital;region;subregion;");
    //         if (response.status === 200) {
    //             console.log("response countries:", response.data);
    //             return (this.countries = response.data);
    //         } else return null;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap");
#app {
    font-family: Roboto, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
