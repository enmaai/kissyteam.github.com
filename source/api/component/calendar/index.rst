.. module:: calendar


Calendar
===============================================

|  这是一个交互清爽、功能实用的日历控件.
|  支持基本的日期选择、时间选择、嵌入/弹出、范围选择、日期格式化输出等常用功能, 能够满足多数的应用场景, 非常方便用户调用.


.. code-block:: javascript

    KISSY.use('calendar',function(S,Calendar){
        // use Calendar
    });

Class
-----------------------------------------------

  * :class:`Calendar`

Configs
-----------------------------------------------

  * :data:`date`
  * :data:`selected`
  * :data:`startDay`
  * :data:`pages`
  * :data:`closable`
  * :data:`rangeSelect`
  * :data:`range`
  * :data:`minDate`
  * :data:`maxDate`
  * :data:`multiSelect`
  * :data:`navigator`
  * :data:`popup`
  * :data:`showTime`
  * :data:`triggerType`
  * :data:`disabled`
  * :data:`align`
  * :data:`notLimited`
  * :data:`rangLinkage`
  
Attributes
-----------------------------------------------


Methods
-----------------------------------------------

  * :meth:`toggle`
  * :meth:`render`
  * :meth:`hide`
  * :meth:`show`

Events
-----------------------------------------------

  * :func:`select`
  * :func:`monthChange`
  * :func:`rangeSelect`
  * :func:`timeSelect`


Class Detail
-----------------------------------------------

.. class:: Calendar
    
    | **Calendar** (trigger,config)
    
    :param String|HTMLDOMNode|KISSY.Node trigger: 配置项, 触点/容器id .
    :param Object config: 配置项, 详细见下方 **Configs Detail** .

Configs Detail
-----------------------------------------------
    
.. data:: date

    {Date} - 可选, 该日期所在月份, 默认为当天

.. data:: selected

    {Date} - 可选, 当前选中的日期

.. data:: startDay

    {Number} - 可选, 日历显示星期x为起始日期, 取值范围为0到6, 默认为0,从星期日开始,若取值为1, 则从星期一开始, 若取值为7, 则从周日开始

.. data:: pages

    {Number} - 可选, 日历的页数, 默认为1, 包含一页日历

.. data:: closable

    {Boolean} - 可选, 在弹出情况下, 点选日期后是否关闭日历, 默认为false

.. data:: rangeSelect

    {Boolean} - 可选, 是否支持时间段选择，只有开启时候才会触发rangeSelect事件
	
.. data:: range

    {Object} - 可选, 默认显示的选择范围, 格式为：{start:s,end:n}
	
.. data:: minDate

    {Date} - 可选, 日历可选择的最小日期, 默认不开启

.. data:: maxDate

    {Date} - 可选, 日历可选择的最大, 默认不开启

.. data:: multiSelect

    {Boolean} - 可选, 是否支持多选, 默认不开启，只有开启时候才会触发multiSelect事件

.. data:: navigator

    {Boolean} - 可选, 是否可以通过点击导航输入日期, 默认开启

.. data:: popup

    {Boolean} - 可选, 日历是否为弹出,默认为false, 不开启

.. data:: showTime

    {Boolean} - 可选, 是否显示时间的选择,默认为false, 不开启

.. data:: triggerType

    {Array | String} - 可选, 弹出状态下, 触发弹出日历的事件, 例如：['click','focus'],也可以直接传入'focus', 默认为['click']

.. data:: disabled

    {Array} - 可选, 禁止点击的日期数组[new Date(),new Date(2011,11,26)]

.. data:: align

    {Object} - 可选, 日历和trigger对齐方式，默认{points:['bl','tl'],offset:[0,0]}

.. data:: notLimited

    {Boolean} - 可选, 是否出现不限的按钮，默认为false不开启，开启后点击触发select事件

.. data:: rangLinkage

    {Boolean} - 可选, 是多个日历是否联动,默认为true, 开启


Methods Detail
-----------------------------------------------

.. method:: toggle

    | **toggle** ()
    | 切换日历的状态, 从显示到隐藏和从隐藏到显示

.. method:: render

    | **render** (config)
    | 通过render可以带入如上任意参数并重新渲染日历

    :param Object config: 配置项, 详细见上方 **Configs Detail**

    .. code-block:: javascript

        KISSY.use('calendar',function(S,Calendar) {
	        c = new Calendar('#J_WithTime');
	        c.render({maxDate:new Date()});
        });

.. method:: destroy

    | **destroy** ()
    | 销毁日历

.. method:: hide

    | **hide** ()
    | 如果日历是弹出形式, 隐藏日历

.. method:: show

    | **show** ()
    | 显示日历
    

Events Detail
-----------------------------------------------

.. function:: select
    
    | **select** ()
    | 选中一个日期事件,通过e.date来获得选中的日期,如果开启notLimited参数，则e.date=null

.. function:: monthChange

    | **monthChange** ()
    | 切换月份事件,通过e.date来获取切换到的日期, 通过e.date.getMonth() + 1 来获得切换至的月份

    .. code-block:: javascript

        KISSY.use('calendar',function(S,Calendar) {
            //月份切换事件
            new Calendar('J_AllEvents').on('switch',function(e){
                alert('切换事件,月份切换到'+(e.date.getMonth()+1));
            });
        });

.. function:: rangeSelect

    | **rangeSelect** (e)
    | 范围选择事件,通过e.start和e.end来获得开始和结束日期

    :param Object e: 默认对象

    .. code-block:: javascript

        KISSY.use('calendar',function(S,Calendar) {
            //选择范围,并绑定范围回调
            new Calendar('J_Range',{
                multi_page:2,
                rangeSelect:true
            }).on('rangeselect',function(e){
                alert(e.start+' '+e.end);
            });
        });

.. function:: multiSelect

    | **multiSelect** (e)
    | 多选触发的事件，通过e.multi来获取选中的日期数组

	:param Object e: 默认对象

    .. code-block:: javascript
	
		KISSY.use('calendar',function(S,Calendar) {
			new Calendar('#J_Popup23', {
				popup:true,
				triggerType:['click'],
				pages:2,
				multiSelect:true,
				rangeLinkage:false
			}).on('multiSelect', function(e) {
				alert(e.multi);
			});
		});

.. function:: timeSelect

    | **timeSelect** (e)
    | 确定选中时间事件,通过e.date来获得日期时间

