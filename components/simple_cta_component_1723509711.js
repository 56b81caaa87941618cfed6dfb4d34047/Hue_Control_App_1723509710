/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1723509711", {
    template: `
    <section id="cta-component" class="min-h-350px bg-gradient-to-br from-pink-400 to-purple-800 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl mx-auto lg:py-16 lg:px-6">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white">Unleash Your Creative Hues</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-200 md:text-lg">Explore, mix and customize colors effortlessly</p>
                </div>
                
                <div id="cta-button-container" class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-purple-600 bg-opacity-70 hover:bg-opacity-100 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Start Coloring</a>
                    <a href="#" class="flex-1 text-white bg-pink-500 bg-opacity-70 hover:bg-opacity-100 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 transition duration-300 ease-in-out transform hover:scale-105">Good Morning</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
