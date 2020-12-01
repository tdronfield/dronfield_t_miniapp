import { fetchData } from "./components/TheDataMiner.js";
import CarCard from "./components/TheCarCard.js";

(() => {
   
    let vue_vm = new Vue({
        // link to an element in HTML
        // el: "#app",

        data: {
            message: "Hello from Vue",
            removeAformat: true,
            showBioData: false,
            collection: [],
            currentItemData: {},

        
            // collection: [
            //     { name: "Justin", role:"coordinator", nickname: "nitsuj"},
            //     { name: "Joe", role:"prof", nickname: "Teddy"},
            //     { name: "Pan", role:"code ninja", nickname: "Spiderpan"},
            // ]
        },

        // "mounted" is a vue lifecycle hook. When vue is done creating itself,
        //it attaches to the "app" (main) element on the page.
        mounted: function() {
            console.log("Vue is mounted, trying to fetch for initial data");

            // fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(item => this.collection.push(item));
                    
                })
                .catch(err => console.error(err));


        },

        // "Updated" is it's own lifecycle Hook.
        // run a method when we change our view (update the DOM)
        updated: function() {
            console.log("Vue updated the DOM");
        },

        methods: {
            logClicked() {
                console.log("Clicks a thing");
            },

            clickHeader(){
                console.log("Clicked the header");
            },

            showProfData(target){
                console.log("Clicked to view Car info", target, target.name);
                //the this keyword inside a vue instance REFERS to the vue instance itself by default

                // toggle the property between true and false using a ternary statement
                this.showBioData = this.showBioData ? false: true;

                // make the selected profs data visible
                this.currentItemData = target;

            },

            removeProf(target){
                console.log('Clicked to remove Car', target, target.name);
                // THIS keyword refers to VUE

                // make the selected prof's data be removed from the array
                // POP the last obj out of the array, then return the rest of the remaining objects 
                // SPLICE method
                this.collection.splice(this.collection.indexOf(target), 1);

                // delete method, not working for me
                //this.$delete(this.collection, target);
            }
        },

        components: {
            "car-card": CarCard
        } 
    }).$mount("#app"); // also connects Vue to your wrapper in HTML

})();