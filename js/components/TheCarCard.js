export default {
    name:"CarCard",

    props: ["item"],

    // data needs to be a function inside a component
    data: function(){
        return {
            myName: this.item.name,
            myColour: this.item.colour,
            myInfo: this.item.info,

            currentItemData: {},
            showBioData: false
        }
    },

    template: 
        `<div class="cars">
            <h3>Name: {{ item.name }}</h3>
            <h3>Color: {{ item.colour }}</h3>
            <p :class="{'biodata' : showBioData}"> {{ item.info }} </p>
            <img :src="'images/' + item.avatar" alt="Mini Cooper Car">
            <br><br>
            <a href="" class="remove-prof" @click.prevent="showbio" >Toggle {{ item.name }} Info</a>

        </div>`,

        // <a href="" class="remove-prof" @click.prevent="removeProf(item)" >Remove {{ item.name }}</a>


    created: function() {
        console.log('Loaded a Car card');
    },

    methods: {
        showbio(target) {
            console.log(`Fired from inside ${this.item.name}'s component`);

            this.showBioData = this.showBioData ? false: true;
            this.currentItemData = target;
        }

        // showProfData(target){
        //     console.log("Clicked to view Car info", target, target.name);
        //     //the this keyword inside a vue instance REFERS to the vue instance itself by default

        //     // toggle the property between true and false using a ternary statement
        //     
        //     debugger;
            
        //     // make the selected profs data visible
        //     this.currentItemData = target;
            
        // }
    }
}