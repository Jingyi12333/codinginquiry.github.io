const { createApp,ref } = Vue;
const { createVuetify } = Vuetify;
const vuetify = createVuetify();


const App = {
    setup() {
        const projects = [
      {
        title: "Tea Card Collection",
        description: "A card gallery featuring different teas, their tastes, smells, and short descriptions.",
        whatILearned: "In this lab I practiced using JavaScript objects, arrays, and Vuetify cards to display a collection with images and text.",
        image: "images/project1.png",
        url: "https://jingyi12333.github.io/codinginquiryproject1.github.io/"
      },
      {
        title: "Pet Grooming Game",
        description: "An interactive point-and-click game where the player completes grooming actions in the correct order.",
        whatILearned: "I learned about functions, conditional logic, and reactivity to handle changes in the user interface and validate user choices.",
        image: "images/project2.png",
        url: "https://jingyi12333.github.io/codinginquiryproject2.github.io/"
      },
      {
        title: "Canada Immigration Dashboard",
        description: "A data dashboard visualizing immigration trends and policy information using charts and tables.",
        whatILearned: "I practiced using Vuetify components like Sparkline, Stepper, and Data Table to transform complex datasets into an interactive experience.",
        image: "images/project3.png",
        url: "https://jingyi12333.github.io/codinginquiryproject3.github.io/"
      }
    ];

    const openDrawer = ref(false);

    function toggleDrawer() {
      openDrawer.value = !openDrawer.value;
    }


        const collection = [

            {
                name: "Jasmine Tea",
                taste: "tastes like green tea because people usually mix it with green tea",
                smell: "literally best smell ever very floral and fragrant",
                bio: "my life peaked when i saw the little flower bloom in my cup",
                image: "images/jasmine.png"
            },

            {
                name: "Osmanthus Tea",
                taste: "just like normal oolong or black or green or red tea because that's what it's usually mixed with",
                smell: "amazing smell like honey very fragrant",
                bio: "insert genshin impact meme",
                image: "images/osmanthus.png"
            },

            {
                name: "silver needle white tea",
                taste: "very mild",
                smell: "mild smell",
                bio: "tea with a cool origin story of being high up in a mountain. there's white spots all over that looks like mold but apparently its the amino acids leaking out",
                image: "images/silver needle.png"
            },

            {
                name: "buckwheat tea",
                taste: "like buckwheat, so warm bread",
                smell: "like rice",
                bio: "tea for people who wants to drink flavoured water at 10pm ",
                image: "images/buckwheat.png"
            },

            {
                name: "pu er tea",
                taste: "bitter",
                smell: "pungent like it's punching you",
                bio: "tea if we made tea like it's cheese. it gets fermented and pressed into a wheel",
                image: "images/pu er.png"
            },

            {
                name: "guava tea",
                taste: "mild guava taste",
                smell: "mild guava smell",
                bio: "another flavoured water tea. apparently it lowers blood sugar?",
                image: "images/guava.png"
            }
        ]

        return {
            collection,
            projects,
            openDrawer,
            toggleDrawer


        }
    }
}
createApp(App).use(vuetify).mount('#app');

