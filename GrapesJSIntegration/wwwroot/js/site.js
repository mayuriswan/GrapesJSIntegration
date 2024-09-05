window.initializeGrapesJS = function () {
    const editor = grapesjs.init({
        container: '#gjs',
        components: '<div class="txt-red">Hello world!</div>',
        style: '.txt-red{color: red}',
        // Add other configurations
    });
}
