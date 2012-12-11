.. currentmodule:: seed

unique
===============================



Methods
-----------------------------------------------

.. function:: KISSY.unique

    | Array **KISSY.unique** (arr[,keepLast=false])
    | 返回一个新数组, 仅包含 arr 去重后的值
    
    :param Array arr: 包含重复元素的数组
    :param boolean keepLast: 遇到重复值是保留第一次出现还是保留最后一次出现的元素
    :returns: 包含 arr 去重后的数组
    :rtype: Array
    
    例如

    .. code-block:: javascript

        KISSY.unique([a, b, a],true) => [b, a]

        KISSY.unique([a, b, a]) => [a, b]