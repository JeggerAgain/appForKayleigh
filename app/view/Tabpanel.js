Ext.define('KayleighsApp.view.TabPanel', {
    extend: 'Ext.TabPanel',
    alias: 'widget.tabpanel',
    xtype: 'tabpanel',
    id: 'tabpanel',
    tabBarPosition: 'top',
    fullscreen: true,
    styleHtmlContent: true,
    scroll: 'vertical',
    style: 'height: 1500px', 
    config: {
        activeItem: 1,
        items: [
            {
                title: 'Instagram',
                iconCls: 'info',
                html: 'Instagram',
                layout: 'fit',
                scroll: 'vertical'
            },
            {
                title: 'Twitter',
                iconCls: 'info',
                html: '<div id="example1"></div>',
                layout: 'fit',
                scroll: 'vertical',
                listeners: {
                    tap: {
                        fn: function() {
                            console.log('this', this.parent);
                            this.parent.fireEvent('ontap', this);
                        },
                        element: 'element'
                    }
                }
            },
            {
                title: 'News',
                iconCls: 'info',
                html: 'News',
                layout: 'fit',
                scroll: 'vertical'
            }
        ]
    }
});