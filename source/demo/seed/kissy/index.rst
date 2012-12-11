﻿.. currentmodule:: seed

.. _seed-lang:

KISSY 使用示例
==================================================

    .. raw:: html

        <iframe class="iframe-demo" width="100%" height="235" src="../../../../../source/raw/api/seed/lang/demo.html"></iframe>

    .. code-block:: html

        <div id="t1">
	    选择某个类型做测试：
		    <select id="J_input">
			    <option selected> </option>
			    <option value="{}">EmptyObject -> {}</option>
			    <option value="function(){return 1+2;}">Function -> function(){return 1+2;}</option>
			    <option value="null">Null</option>
			    <option value="123">Number -> 123</option>
			    <option value="new Object()">Object -> new Object()</option>
			    <option value=" { x:1, y:2, radius:2 }">PlainObject ->  { x:1, y:2, radius:2 }</option>
			    <option value="/^[0-9]+/g">RegExp -> /^[0-9]+/g</option>
			    <option value="new String('abc')">String -> new String('abc')</option>
			    <option value="">Undefined</option>
			    <option value="[1,2,3]">Array -> [1,2,3]</option>
			    <option value="true">Boolean -> true</option>
			    <option value="new Date()">Date -> new Date()</option>
		    </select>
		    <ul>
			    <li><button>isEmptyObject</button></li>
			    <li><button>isFunction</button></li>
			    <li><button>isNull</button></li>
			    <li><button>isNumber</button></li>
			    <li><button>isObject</button></li>
			    <li><button>isPlainObject</button></li>
			    <li><button>isRegExp</button></li>
			    <li><button>isString</button></li>
			    <li><button>isUndefined</button></li>
			    <li><button>isArray</button></li>
			    <li><button>isBoolean</button></li>
			    <li><button>isDate</button></li>
		    </ul>
		    <div id="J_rst"></div>
	    </div>
		
	    <script>
	    KISSY.ready(function(S){
		    var DOM = S.DOM,Event = S.Event;	
		    Event.on('button','click',function(e){
			    var v = DOM.val("#J_input");
			    var fc = 'KISSY.'+DOM.text(this)+'('+v+');';
			    var result = DOM.text(this)+' -> '+eval(fc);
			    DOM.text('#J_rst',result);
		    });
	    });
	    </script>

