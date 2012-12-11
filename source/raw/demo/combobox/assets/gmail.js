KISSY.use("combobox", function (S, ComboBox) {


    var data = [
        '"a123456" <a123456@gmail.com>',
        '"b12345" <b12345@gmail.com>',
        'c3464356@gmail.com',
        '"d23434" <d23434@gmail.com>'
    ];

    var basicComboBox = new ComboBox({
        render:'#container',
        multiple:true,
        width:500,
        hasTrigger:false,
        input:S.all('<textarea ' +
            'style="width: 100%;height:18px;" ' +
            'class="ks-combobox-input">' +
            '</textarea>'),
        updateInputOnDownUp:false,
        format:function (query, data) {
            var ret = [];
            for (var i = 0; i < data.length; i++) {
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
            return ret;
        },
        dataSource:new ComboBox.LocalDataSource({
            data:data,
            parse:function (query, data) {
                var ret = [];
                S.each(data, function (d) {
                    if (d.replace(/@gmail\.com/, "").indexOf(query) != -1) {
                        ret.push(d);
                    }
                });
                return ret;
            }
        })
    });

    basicComboBox.render();

    var basicComboBoxEl = basicComboBox.get("input");

    basicComboBoxEl.on("keyup", function () {
        // scrollHeight will always grow in chrome
        basicComboBoxEl.css("height", 0);
        basicComboBoxEl.css("height", basicComboBoxEl[0].scrollHeight);
    });

    basicComboBox.on("click", function (e) {
        var item = e.target;
        S.log(item.get("value") + "\n" + item.get("content") +
            "\n" + item.get("textContent"));
    });

});