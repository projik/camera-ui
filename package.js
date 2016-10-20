Package.describe({
    name: 'supaseca:camera-ui',
    version: '0.0.52',
    summary: 'Updated for Meteor 1.4. Take photos with UI on desktop and mobile with camera or photo roll.',
    git: 'https://github.com/projik/camera-ui',
    documentation: 'README.md'
});

Cordova.depends({
    "nl.x-services.plugins.actionsheet": "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet/tarball/df5e89e54d5142c964c1139db6fe813a01125825",
    "org.apache.cordova.device": "1.1.3"
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');
    api.export('MeteorCameraUI');
    api.use('supaseca:camera@1.4.2');
    api.addFiles('camera-ui.js');
    api.addFiles('camera-ui-client.js', ['web.browser', 'web.cordova']);
    api.addFiles('camera-ui-browser.js', ['web.browser']);
    api.addFiles('camera-ui-cordova.js', ['web.cordova']);

});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('okland:camera-ui');
    api.addFiles('camera-ui-tests.js');
});