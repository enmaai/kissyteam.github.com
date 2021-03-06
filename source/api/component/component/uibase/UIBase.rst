.. currentmodule:: component

Component.UIBase
===============================

|  组件基类，仅用于 KISSY 内部组件继承，目前不建议外部使用，欢迎 review

Class
---------------------------------

    * :class:`~component.UIBase`


Configs
------------------------------------

    * :data:`~UIBase.config.listeners`
    * :data:`~UIBase.config.plugins`
    * :data:`~UIBase.config.srcNode`
    
    
Methods
-----------------------------------------------

    * :meth:`~UIBase.prototype.render`    
    * :meth:`~UIBase.prototype.destroy`


Events
-----------------------------------------------

  * :func:`~UIBase.Events.afterRenderUI`

Class Detail
--------------------------

.. class:: UIBase

    | **UIBase** (config)
    
    扩充自 :class:`event.Target` ，
    具备 :meth:`~event.Target.fire` , :meth:`~event.Target.on` , :meth:`~event.Target.detach` 等方法.
    
    :param Object config: 配置项


Configs Detail
------------------------------------------------

    .. data:: UIBase.config.srcNode

        {KISSY.Node} - 当前组件在 dom 树中已经存在的节点.


    .. data:: UIBase.config.listeners

        {Object} - 配置组件的事件绑定. 例如

        .. code-block:: javascript

            {
                listeners:{
                    customEvent:function(e){
                        alert(e.type); // => "customEvent"
                    }
                }
            }

            or

            {
                listeners:{
                    customEvent:{
                        fn:function(e){
                            // e.type // => customEvent
                            // this.xx => 1
                        },
                        scope:{xx:1}
                    }
                }
            }


    .. data:: UIBase.config.plugins

        {Function[]|Object[]} - 插件构造器数组或插件对象数组. 例如

        .. code-block:: javascript

            {
                plugins: [ Plugin1,Plugin2 ]
            }

            or

            {
                plugins: [new Plugin1(cfg),new Plugin2(cfg)]
            }



Methods Detail
-----------------------------------------------    

.. method:: UIBase.prototype.render()

    | **render ( )**

    渲染该组件到配置的容器 ( :data:`~Box.config.render` ) 或指定节点 ( :data:`~Box.config.elBefore` ) 前.
    
.. method:: UIBase.prototype.destroy()

    | **destroy ( )**

    销毁该组件（删除节点以及去除事件绑定）.

Events Detail
-----------------------------------------------

.. function:: UIBase.Events.afterRenderUI

    | **afterRenderUI** ()
    | 当组件被渲染 dom 时触发

    
