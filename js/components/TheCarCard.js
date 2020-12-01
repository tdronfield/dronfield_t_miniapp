export default {
    name:"TheCarCard",

    props: ["item"],

    // data needs to be a function inside a component
    data: function(){
        return {
            myName: this.item.name,
            myColour: this.item.colour,
            myInfo: this.item.info
        }
    },

    template: 
        `<div>
            <h3>Name: {{ item.name }}</h3>
            <h3>Color: {{ item.colour }}</h3>
            <p> {{ item.info }} </p>
            <img :src="'images/' + item.avatar" alt="Mini Cooper Car" @click="logClicked">

            <a href="" class="remove-prof" @click.prevent="showProfData(item)" >Show {{ item.name }} info</a>

            <a href="" class="remove-prof" @click.prevent="removeProf(item)" >Remove {{ item.name }}</a>
        </div>`,

    created: function() {
        console.log('Loaded a Car card');
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
            //this.collection.splice(this.collection.indexOf(target), 1);

            // delete method, not working for me
            this.$delete(this.collection, target);
        }
    },

    
}