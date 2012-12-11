KISSY.use("ua,event,node,overlay,button,component/plugin/drag", function (S, UA, Event, Node, O, B, DragPlugin) {
    var dialog = new O.Dialog({
        width: 424,
        elCls: 'my',
        elStyle: {
            position: UA.ie == 6 ? "absolute" : "fixed"
        },
        bodyContent: '<img '
            + 'width="424" '
            + 'height="282" '
            + 'src="http://img02.taobaocdn.com/tps/i2/T10J9bXnlgXXXXXXXX-424-282.jpg?noq=y" />',
        mask: true,
        plugins: [
            new DragPlugin({
                handlers: ['.ks-stdmod-header']
            })
        ],
        align: {
            points: ['cc', 'cc']
        },
        closeAction: "destroy"
    });

    var b1 = new B({
        content: "我在可视区域的正中间，点击关闭销毁",

        render: "#button-wrap"
    });
    b1.render();

    dialog.on("destroy", function () {
        b1.detach("click", show);
        Event.detach(window, "scroll", center);
    });

    b1.on('click', show);

    function show() {
        dialog.show();
    }

    function center() {
        S.log("ie center");
        if (dialog.get("visible")) {
            dialog.center();
        }
    }

    if (UA.ie == 6) {
        Event.on(window, "scroll", center);
    }
});
