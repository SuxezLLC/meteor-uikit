Package.describe({
    name: 'suxez:uikit',
    version: '2.24.3',
    // Brief, one-line summary of the package.
    summary: 'Meteor wrapper for UIkit.',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/SuxezLLC/meteor-uikit',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.use(['fortawesome:fontawesome@4.5.0']);

    api.imply(['fortawesome:fontawesome@4.5.0']);

    // Add assets
    api.addFiles([
        'uikit/css/uikit.css',
        'uikit/css/components/accordion.css',
        'uikit/css/components/autocomplete.css',
        'uikit/css/components/datepicker.css',
        'uikit/css/components/dotnav.css',
        'uikit/css/components/form-advanced.css',
        'uikit/css/components/form-file.css',
        'uikit/css/components/form-password.css',
        'uikit/css/components/form-select.css',
        'uikit/css/components/htmleditor.css',
        'uikit/css/components/nestable.css',
        'uikit/css/components/notify.css',
        'uikit/css/components/placeholder.css',
        'uikit/css/components/progress.css',
        'uikit/css/components/search.css',
        'uikit/css/components/slidenav.css',
        'uikit/css/components/slider.css',
        'uikit/css/components/slideshow.css',
        'uikit/css/components/sortable.css',
        'uikit/css/components/sticky.css',
        'uikit/css/components/tooltip.css',
        'uikit/css/components/upload.css',
        'uikit/js/uikit.js',
        'uikit/js/components/accordion.js',
        'uikit/js/components/autocomplete.js',
        'uikit/js/components/datepicker.js',
        'uikit/js/components/form-password.js',
        'uikit/js/components/form-select.js',
        'uikit/js/components/grid.js',
        'uikit/js/components/htmleditor.js',
        'uikit/js/components/lightbox.js',
        'uikit/js/components/nestable.js',
        'uikit/js/components/notify.js',
        'uikit/js/components/pagination.js',
        'uikit/js/components/parallax.js',
        'uikit/js/components/search.js',
        'uikit/js/components/slider.js',
        'uikit/js/components/slideset.js',
        'uikit/js/components/slideshow-fx.js',
        'uikit/js/components/slideshow.js',
        'uikit/js/components/sortable.js',
        'uikit/js/components/sticky.js',
        'uikit/js/components/timepicker.js',
        'uikit/js/components/tooltip.js',
        'uikit/js/components/upload.js'
    ], ['client']);
});

Package.onTest(function (api) {
});
