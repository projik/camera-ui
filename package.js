Package.describe({
    name: 'supaseca:camera-ui',
    version: '0.0.54',
    summary: 'Updated for Meteor 1.4. Take photos with UI on desktop and mobile with camera or photo roll.',
    git: 'https://github.com/projik/camera-ui',
    documentation: 'README.md'
});

Cordova.depends({
    "cordova-plugin-actionsheet": "2.3.1",
    "org.apache.cordova.device": "1.1.3"
});

Package.onUse(function(api) {
    api.versionsFrom('1.3');
    api.export('MeteorCameraUI');
    api.use('supaseca:camera@1.4.3');
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