Ext.define('KayleighsApp.view.TabPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.tabpanel',
    xtype: 'tabpanel',
    tabBarPosition: 'top',
    fullscreen: true,
    styleHtmlContent: true,
    config: {
        activeItem: 2,
        items: [
            {
                title: 'Instagram',
                iconCls: 'info',
                html: 'Instagram'
            },
            {
                title: 'Twitter',
                iconCls: 'info',
                html: 'Twitter'
            },
            {
                title: 'News',
                iconCls: 'info',
                html: 'News'
            }
        ]
    }
});