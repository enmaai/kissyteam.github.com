KISSY.use("combobox", function (S, ComboBox) {

    var data = [
        'yiminghe',
        'kissyteam',
        'lifesinger',
        'lizzie',
        'fool2fish'
    ];

    var basicComboBox = new ComboBox({
        render:'#container',
        multiple:true,
        width:500,
        hasTrigger:false,
        input:S.all('<textarea ' +
            'class="ks-combobox-input" ' +
            'style="width: 100%;height: 200px;"></textarea>'),
        autoHighlightFirst:true,
        separatorType:'prefix',
        separator:"@",
        alignWithCursor:true,
        updateInputOnDownUp:false,
        format:function (query, data) {
            var ret = [];
            for (var i = 1; i < data.length; i++) {
                var v = data[i] + "";
                if (query) {
                    ret[i] = {
                        content:S.escapeHTML(v)
                            .replace(new RegExp(S.escapeRegExp(query), "g"),
                            "<b>$&</b>")
                    };
                } else {
                    ret[i] = {
                        content:S.escapeHTML(v)
                    };
                }
            }
            ret[0] = {
                disabled:true
            };
            if (!query) {
                ret[0].content = "选择 kissyteam 成员或直接输入";
            } else {
                if (data.length) {
                    ret[0].content = "选择 kissyteam 成员或轻敲 enter 完成输入";
                } else {
                    ret[0].content = "轻敲空格完成输入";
                }
            }
            return ret;
        },
        dataSource:new ComboBox.LocalDataSource({
            data:data,
            parse:function (query, data) {
                // 提示伪值
                var ret = ["0"];
                // 空查询，返回空
                // 也可以返回全部数据
                if (!query) {
                    //return ret;
                    return ret.concat(data);
                }
                S.each(data, function (d) {
                    if (d.indexOf(query) != -1) {
                        ret.push(d);
                    }
                });
                return ret;
            }
        })
    });

    basicComboBox.render();

    basicComboBox.on("click", function (e) {
        var item = e.target;
        S.log(item.get("value") + "\n" + item.get("content") +
            "\n" + item.get("textContent"));
    });

});