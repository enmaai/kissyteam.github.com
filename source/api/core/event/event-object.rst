﻿.. currentmodule:: event

Object
=================================

Module
-----------------------------------------------

  :mod:`event`

Class
-----------------------------------------------

  * :class:`Object`


Properties
-----------------------------------------------

    * :attr:`currentTarget`
    * :attr:`pageX`
    * :attr:`pageY`
    * :attr:`relatedTarget`
    * :attr:`target`
    * :attr:`type`
    * :attr:`which`


Methods
-----------------------------------------------

  * :meth:`preventDefault`
  * :meth:`halt`
  * :meth:`stopImmediatePropagation`
  * :meth:`stopPropagation`
  * :meth:`isImmediatePropagationStopped`
  * :meth:`isDefaultPrevented`
  * :meth:`isPropagationStopped`

Class Detail
-----------------------------------------------

.. class:: Object

    | **Object** ( event )
    | 对 dom 原生事件进行兼容性处理,
    | API 基本遵循 `DOM-Level-3-Events  <http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html>`_ 规范.
    | 该类用于 event 模块内部调用, 实例传入绑定的事件处理器作为第一个参数.
    
    :param HTMLEvent event: dom 原生事件.
    

Properties Detail
---------------------------

    下面的列表都是该类实例的属性, 虽然有些随着不同的事件类别值会是 undefined :

    .. admonition:: 事件属性

        altKey, attrChange, attrName, bubbles, button, cancelable,
        charCode, clientX, clientY, ctrlKey, currentTarget, data, detail, eventPhase,
        fromElement, handler, keyCode, layerX, layerY, metaKey, newValue, offsetX, offsetY,
        originalTarget, pageX, pageY, prevValue, relatedNode, relatedTarget,
        screenX, screenY, shiftKey, srcElement, target, toElement, view, wheelDelta, which


    KISSY 对下列属性做了兼容性处理

    * target
    * relatedTarget
    * pageX
    * pageY
    * which
    * metaKey

.. attribute:: currentTarget

    {Object} - 返回 :class:`Event.Object<event.Object>`,  当前事件处理器的 dom 节点或对象, 通常和 this 相同.

    .. note::

        如果你在 :meth:`~event.on` 中指定了 this , 则 currentTarget 和 this 不相同.


    .. code-block:: javascript

        var $=KISSY.Node.all;
        $("p").on('click',function(event) {
          alert( event.currentTarget === this ); // true
        });

.. attribute:: pageX

    {Number} - 鼠标当前位置相对文档左边界的距离

.. attribute:: pageY

    {Number} - 鼠标当前位置相对文档上边界的距离


    显示当前鼠标位置相对于 iframe 文档的距离:

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/pageX.html"></iframe>

    .. literalinclude:: /raw/api/core/event/pageX.html
       :language: html


.. attribute:: relatedTarget

    {HTMLElement} - 和当前事件对象关联的 dom 节点.

    .. hint::

        对于 `mouseout/leave` 事件为将要进入的节点. 对于 `mouseover/enter` 为将要离开的节点.

    当鼠标移出链接时, alert 将要进入的元素节点名称

    .. code-block:: javascript

        var $=KISSY.Node.all;
        $("a").mouseout(function(event) {
          alert(event.relatedTarget.nodeName); // "DIV"
        });


.. attribute:: target

    {HTMLElement} - target 属性可以是绑定事件的元素的子孙节点. 常被用来和 this 比较来确定是否这个事件是冒泡过来的. 这个属性在委托情况下非常有用, 可以得到事件的真正触发源.


    显示点击事件触发源的节点名称

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/target.html"></iframe>

    .. literalinclude:: /raw/api/core/event/target.html
       :language: html

    简单的委托实现, 点击处理器被绑定到 ul 上面,  点击 li 会使得该 li 下的子 ul 菜单显示与隐藏.

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/target_2.html"></iframe>

    .. literalinclude:: /raw/api/core/event/target_2.html
       :language: html

.. attribute:: type

    {String} - 描述当前事件的类型


    .. code-block:: javascript

        var $=KISSY.Node.all;
        $("a").on('click',function(event) {
          alert(event.type); // "click"
        });



.. attribute:: which

    {String} - 对于键盘和鼠标按键, 这个属性代表键盘或鼠标按键的代码. which 对 charCode 和 keyCode 以及 button 进行了兼容. 推荐使用 which 来代替这些属性.


    显示当前按键信息

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/which.html"></iframe>

    .. literalinclude:: /raw/api/core/event/which.html
       :language: html


Methods Detail
-------------------------------------

.. method:: preventDefault

    | **preventDefault** ()
    | 阻止默认行为的发生.例如点击链接不会使浏览器跳转到新的地址. 我们可以使用 :meth:`~event.isDefaultPrevented` 来判断是否某个事件处理器里调用了这个方法.


    阻止链接的跳转

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/preventDefault.html"></iframe>

    .. literalinclude:: /raw/api/core/event/preventDefault.html
       :language: html



.. method:: stopImmediatePropagation

    | **stopImmediatePropagation** ()
    | 停止当前事件冒泡. 不光停止冒泡到下一个事件目标, 当前目标上的任何后续监听函数, 也马上取消执行.
    | 用 :meth:`~event.isImmediatePropagationStopped` 来判断是否调用了该方法.


    阻止其他的事件处理器执行

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/stopImmediatePropagation.html"></iframe>


    .. literalinclude:: /raw/api/core/event/stopImmediatePropagation.html
       :language: html



.. method:: stopPropagation

    | **stopPropagation** ()
    | 停止事件沿 dom 树向上冒泡, 组织祖先节点的所有事件处理器执行.我们可以使用 :meth:`~event.isPropagationStopped` 来判断当前方法是否执行过.
    | 该方法在 :func:`~event.fire` 中也起作用.

    .. note::

        调用该方法不会组织该节点其他事件处理器的运行, 如果要需要调用 :meth:`~event.stopImmediatePropagation`


    阻止 click 事件的冒泡

    .. code-block:: javascript

        var $=KISSY.Node.all;
        $("p").on('click',function(event){
          event.stopPropagation();
          // do something
        });

.. method:: halt

    | **halt** (stopImmediatePropagation)
    | 如果 stopImmediatePropagation==true 则相当于调用 stopImmediatePropagation + preventDefault
    | 否则相当于调用 stopPropagation + preventDefault

    :param boolean stopImmediatePropagation: 是否立即停止冒泡


.. method:: isImmediatePropagationStopped

    | **isImmediatePropagationStopped** ()
    | 是否停止了该事件的后续所有事件处理器执行, 通过调用 :meth:`~event.stopImmediatePropagation` 设置状态.
    | 检查是否 ``stopImmediatePropagation()`` 被调用了

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/isImmediatePropagationStopped.html"></iframe>

    .. literalinclude:: /raw/api/core/event/isImmediatePropagationStopped.html
       :language: html

.. method:: isDefaultPrevented

    | **isDefaultPrevented** ()
    | 判断 :meth:`~event.preventDefault` 是否被调用了.

    .. code-block:: javascript

        $("a").click(function(event){
          alert( event.isDefaultPrevented() ); // false
          event.preventDefault();
          alert( event.isDefaultPrevented() ); // true
        });


.. method:: isPropagationStopped

    | **isPropagationStopped** ()
    | 判断 :meth:`~event.stopPropagation` 是否被调用了.
    | 判断 stopPropagation 是否被调用

    .. raw:: html

        <iframe width="100%" height="135" class="iframe-demo" src="../../../../../source/raw/api/core/event/isPropagationStopped.html"></iframe>


    .. literalinclude:: /raw/api/core/event/isPropagationStopped.html
       :language: html