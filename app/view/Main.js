Ext.define('KayleighsApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    alias: 'widget.main',
    requires: [
        'KayleighsApp.view.TabPanel',
        'KayleighsApp.view.TitleBar'
    ],

    config: {

        items: [
        {
            xtype: 'apptitlebar',
        },
        {
            xtype: 'tabpanel'
        }]
    }
});
