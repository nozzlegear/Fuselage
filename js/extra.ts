declare const responsiveNav: any;

const nav = responsiveNav("#collapsible", {
    animate: false,
    label: "Menu", // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "toggler", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to <html> element
    init: function () { }, // Function: Init callback
    open: function () { }, // Function: Open callback
    close: function () { } // Function: Close callback
});

//Ensure the browser supports background-blend-mode. If so, blend the blog's header image.
if ('CSS' in window && 'supports' in window['CSS']) {
    let support = window['CSS'].supports('background-blend-mode', 'soft-light');

    if (support) {
        document.body.classList.add("supports-background-blend-mode")
    }
}