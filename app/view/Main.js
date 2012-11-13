Ext.define('SmartPillCase.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
			{
				xtype: 'listPanel'
			},
			{
				xtype: 'homePanel'
			},
			{
				xtype: 'setupPanel'
			}
        ]
    }
});
