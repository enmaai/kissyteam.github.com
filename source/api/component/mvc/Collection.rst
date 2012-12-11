.. currentmodule:: mvc

mvc.Collection
===============================

|  集合类.

.. code-block:: javascript

    KISSY.use('mvc',function(S,mvc){
        // use mvc.Collection
    });

Class
---------------------------------

    * :class:`Collection`
    
    
Configs
-----------------------------------------------

    * :data:`~Collection.config.model`
    * :data:`~Collection.config.models`
    * :data:`~Collection.config.url`
    * :data:`~Collection.config.comparator`
    * :data:`~Collection.config.sync`
    * :data:`~Collection.config.parse`

    
Attributes
----------------------------------------

    * :attr:`~Collection.prototype.models`
    
    
    
Methods
-----------------------------------------------

    * :meth:`~Collection.prototype.sort`
    * :meth:`~Collection.prototype.toJSON`
    * :meth:`~Collection.Events.add`
    * :meth:`~Collection.Events.remove`
    * :meth:`~Collection.prototype.at`
    * :meth:`~Collection.prototype.load`
    * :meth:`~Collection.prototype.create`
    * :meth:`~Collection.prototype.getById`
    * :meth:`~Collection.prototype.getByCid`
    
    
Events
-----------------------------------------------------

    * :func:`~Collection.Events.add`    
    * :func:`~Collection.Events.remove`    
    * :func:`~Collection.Events.afterModelsChange`    
    * :func:`~Collection.Events.*Change`
    
Class Detail
--------------------------

.. class:: Collection

    | **Collection** (config)
    
    * 继承自 :class:`~base.Base` , 包含其全部配置,属性,方法,事件.
    * 集合代表 :class:`Model` 的集合，并具备自动和服务器同步的一些功能
    
    :param Object config: 配置项.详细见下方 **Configs Detail** .
    
Configs Detail
-----------------------------------------------

.. data:: Collection.config.model

    {Model} - 可选，默认 :class:`Model` . 自定义模型的构造器
    
.. data:: Collection.config.models

    {Array} - 可选，模型对象的数组
    
.. data:: Collection.config.url

    {function} - 可选，调用该函数从而得到集合中所有模型对象的根地址
    
.. function:: Collection.config.comparator

    {funciton} - 可选，用于集合中模型对象排序以及插入时的比较函数        
    
    :param Model model: 模型对象
    :returns: 可以用来比较大小的一个数值
    :rtype: Number
    
.. data:: Collection.config.sync

    {function} - 可选，默认调用 :func:`mvc.sync` 。集合同步数据时调用的方法 
       
    
.. method:: Collection.config.parse

    {function} - 可选，默认为对等函数。设置如何从服务器返回结果得到集合对象json数据数组
    
    :param * resp: 服务器返回对象
    :returns: 集合对象的 json 数据数组 
    
    
Attributes Detail
--------------------------------------------------

.. attribute:: Collection.prototype.models

    {Array<Model>} - 模型对象列表     
    
    
Methods Detail
-----------------------------------------------  

.. method:: Collection.prototype.sort

    | **sort ( )**
    | 对模型对象数组进行排序        
    
    
.. method:: Collection.Events.add

    | **add ( model [ ,opts ] )**
    | 将json数据或模型插入到集合对象 
    
    :param Object|Model|Array model: 模型对象(数组)或json数据   
    :param Object opts: 控制选项，包括
    
        .. attribute:: Model.prototype.add.opts.silent
        
            {boolean} - 默认 false。是否不触发 add 事件
    
.. method:: Collection.Events.remove

    | **remove ( model [ ,opts ] )**
    | 将json数据或模型从集合对象中删除 
    
    :param Object|Model|Array model: 模型对象(数组)或json数据   
    :param Object opts: 控制选项，包括
    
        .. attribute:: Model.prototype.add.opts.silent
        
            {boolean} - 默认 false。是否不触发 remove 事件
            
.. method:: Collection.prototype.at

    | **at ( index )**
    | 获取集合中下标为 index 的模型对象
    
    :param number index: 模型对象下标             

           
.. method:: Collection.prototype.load

    | **load ( [opts] )**
    | 从服务器载入数据设置集合数据
    
    :param Object opts: 加载的一些选项，包括
    
        .. attribute:: Model.prototype.load.opts.silent
            
            {boolean} - 默认 false。是否触发 afterModelsChange 事件
    
        .. attribute:: Model.prototype.load.opts.success
        
            {function} - 加载成功的回调
            
        .. attribute:: Model.prototype.load.opts.error
        
            {function} - 加载失败的回调
            
        .. attribute:: Model.prototype.load.opts.complete
        
            {function} - 加载结束的回调（无论成功或失败）
            
.. method:: Collection.prototype.create

    | **create ( json [ ,opts ] )**
    | 根据 json 数据新建一个模型对象添加到集合中并和服务器端进行同步
    
    :param Object opts: 添加的一些选项，包括
    
        .. attribute:: Model.prototype.create.opts.silent
        
            {boolean} - 默认 false. 是否在集合对象触发 add 事件
    
        .. attribute:: Model.prototype.create.opts.success
        
            {function} - 添加成功的回调
            
        .. attribute:: Model.prototype.create.opts.error
        
            {function} - 添加失败的回调
            
        .. attribute:: Model.prototype.create.opts.complete
        
            {function} - 添加结束的回调（无论成功或失败）  
            
.. method:: Collection.prototype.toJSON

    | **toJSON ( )**
    | 返回集合对象当前包含的数据对象数组
    
        :rtype: Array<Object>    
        
.. method:: Collection.prototype.getById

    | **getById ( id )**
    | 返回集合对象中指定服务器端唯一标志的模型对象
    
    :param * id: 服务器端唯一标识
    :rtype: Model
        
        
.. method:: Collection.prototype.getByCid

    | **getByCid ( id )**
    | 返回集合对象中指定客户端唯一标志的模型对象
    
    :param * id: 客户端唯一标识
    :rtype: Model
    


Events Detail
---------------------------------------------------------------------

.. function:: Collection.Events.add

    | **add** (e)
    | 当一个模型对象新加入时触发的事件
    
    :param * e.model: 新加入的模型对象    
    
    
.. function:: Collection.Events.remove

    | **add** (e)
    | 当一个模型对象从集合中删除时触发的事件
    
    :param * e.model: 删除的模型对象   
    
.. function:: Collection.Events.afterModelsChange

    | **add** ()
    | 当集合整体设置 models （模型对象数组）后出发
    
.. js:function:: Collection.Events.*Change

    | ***Change** (e)
    | 当集合整体设置 models （模型对象数组）后或集合内模型发生改变时触发
    
    :param {Model|Collection} e.target: 触发来源，为集合自身或是集合中的某个模型对象     