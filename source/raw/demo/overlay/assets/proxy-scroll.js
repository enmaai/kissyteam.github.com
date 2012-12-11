KISSY.use("node,overlay," +
    "component/plugin/drag," +
    "dd/plugin/scroll," +
    "dd/plugin/proxy,"+
    "button", function(S, Node, O,DragPlugin, ScrollPlugin, ProxyPlugin, B) {
    var dialog = new O.Dialog({
        width: 400,
        headerContent: '收藏',
        bodyContent: '<iframe scrolling="no" height="200" width="398" frameborder="0" name="popupIframe" src="http://favorite.taobao.com/popup/add_collection.htm?id=10166801469&amp;itemtype=1&amp;scjjc=1&amp;_tb_token_=3b38ed73a7775&amp;t=1305543755536"></iframe>',
        mask: true,
        align: {
            points: ['cc', 'cc']
        },
        plugins: [
            new DragPlugin({
                handlers: [function () {
                    return dialog.get('header');
                }],
                plugins: [
                    new ProxyPlugin({
                        hideNodeOnDrag: 1,
                        node: function () {
                            var el = dialog.get("el");
                            var node = new Node("<div class='ks-overlay-proxy'></div>");
                            node.height(el.height());
                            node.width(el.width());
                            return node;
                        },
                        destroyOnEnd: true
                    }),

                    new ScrollPlugin({
                        node: window
                    })
                ]
            })
        ]
    });

    var show = new B({
        content: "收藏",

        render: "#button-wrap"
    });
    show.render();
    show.on("click", function() {
        dialog.show();
    });

});
