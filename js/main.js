import { fetchData } from "./components/TheDataMiner.js";
import TheCarCard from "./components/TheCarCard.js";

(() => {
   
    let vue_vm = new Vue({
        // link to an element in HTML
        // el: "#app",

        data: {
            
            showBioData: false,
            collection: [],
            currentItemData: {},

        
        },

        mounted: function() {
            console.log("Vue is mounted, trying to fetch for initial data");

            // fetchData("./includes/index.php").then(data => console.log(data)).catch(err => console.error(err));
            fetchData("./includes/index.php")
                .then(data => {
                    data.forEach(item => this.collection.push(item));
                    
                })
                .catch(err => console.error(err));
        },

   
        updated: function() {
            console.log("Vue updated the DOM");
        },

        methods: {
            showbio(target){
                debugger;
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
            "car-card": TheCarCard
        } 
    }).$mount("#app"); // also connects Vue to your wrapper in HTML

})();