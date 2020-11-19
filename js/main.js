(() => {
    let vue_vm = new Vue({

        data: {
            message: "This is my miniapp",
        },

        methods: {
            logClicked() {
                console.log("Clicked");
            }
        }

    }).$mount("#app");
})();