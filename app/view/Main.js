Ext.define('KayleighsApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    id: 'main',
    alias: 'widget.main',
    fullscreen: true,
    scroll: 'vertical',
    requires: [
        'KayleighsApp.view.TabPanel',
        'KayleighsApp.view.TitleBar'
    ],

    config: {

        items: [
        {
            xtype: 'apptitlebar'
        },
        {
            xtype: 'tabpanel'
        }]
    }
});
