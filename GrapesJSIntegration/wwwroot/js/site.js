window.initializeGrapesJS = function () {
    const editor = grapesjs.init({
        container: '#gjs',
        components: '<div class="txt-red">Hello world!</div>',
        style: '.txt-red{color: red}',
        plugins: ['grapesjs-preset-webpage'],
        pluginsOpts: {
            'grapesjs-preset-webpage': {
                blocks: ['link-block', 'quote', 'text-basic'], // Add these blocks
                modalImportTitle: 'Custom Import Title',       // Set custom title for the import modal
                modalImportButton: 'Custom Import',            // Set custom button text for the import modal
                textCleanCanvas: 'Do you really want to clear the canvas?', // Custom text for cleaning the canvas
                useCustomTheme: true,   
            }
        }
        // Add other configurations
    });
}
