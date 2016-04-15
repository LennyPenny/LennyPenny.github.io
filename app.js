!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", ["3", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toIObject = $__require('3');
  $__require('4')('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor) {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});

$__System.registerDynamic("5", ["6", "2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6');
  $__require('2');
  module.exports = function getOwnPropertyDescriptor(it, key) {
    return $.getDesc(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("7", ["5"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('5'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("8", ["7"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$getOwnPropertyDescriptor = $__require('7')["default"];
  exports["default"] = function get(_x, _x2, _x3) {
    var _again = true;
    _function: while (_again) {
      var object = _x,
          property = _x2,
          receiver = _x3;
      _again = false;
      if (object === null)
        object = Function.prototype;
      var desc = _Object$getOwnPropertyDescriptor(object, property);
      if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
          return undefined;
        } else {
          _x = parent;
          _x2 = property;
          _x3 = receiver;
          _again = true;
          desc = parent = undefined;
          continue _function;
        }
      } else if ("value" in desc) {
        return desc.value;
      } else {
        var getter = desc.get;
        if (getter === undefined) {
          return undefined;
        }
        return getter.call(receiver);
      }
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("9", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6');
  module.exports = function create(P, D) {
    return $.create(P, D);
  };
  return module.exports;
});

$__System.registerDynamic("a", ["9"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('9'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("b", ["c", "d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('c');
  $export($export.S, 'Object', {setPrototypeOf: $__require('d').set});
  return module.exports;
});

$__System.registerDynamic("e", ["b", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('b');
  module.exports = $__require('f').Object.setPrototypeOf;
  return module.exports;
});

$__System.registerDynamic("10", ["e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('e'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("11", ["a", "10"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$create = $__require('a')["default"];
  var _Object$setPrototypeOf = $__require('10')["default"];
  exports["default"] = function(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = _Object$create(superClass && superClass.prototype, {constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }});
    if (superClass)
      _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("4", ["c", "f", "12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $export = $__require('c'),
      core = $__require('f'),
      fails = $__require('12');
  module.exports = function(KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function() {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});

$__System.registerDynamic("13", ["14", "4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toObject = $__require('14');
  $__require('4')('keys', function($keys) {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});

$__System.registerDynamic("15", ["13", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('13');
  module.exports = $__require('f').Object.keys;
  return module.exports;
});

$__System.registerDynamic("16", ["15"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('15'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("17", ["18", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('18'),
      defined = $__require('19');
  module.exports = function(TO_STRING) {
    return function(that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l)
        return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});

$__System.registerDynamic("1a", ["17", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $at = $__require('17')(true);
  $__require('1b')(String, 'String', function(iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function() {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length)
      return {
        value: undefined,
        done: true
      };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});

$__System.registerDynamic("d", ["6", "1c", "1d", "1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var getDesc = $__require('6').getDesc,
      isObject = $__require('1c'),
      anObject = $__require('1d');
  var check = function(O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null)
      throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? function(test, buggy, set) {
      try {
        set = $__require('1e')(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy)
          O.__proto__ = proto;
        else
          set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});

$__System.registerDynamic("1f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});

$__System.registerDynamic("20", ["1d", "21", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('1d'),
      aFunction = $__require('21'),
      SPECIES = $__require('22')('species');
  module.exports = function(O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});

$__System.registerDynamic("23", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0:
        return un ? fn() : fn.call(that);
      case 1:
        return un ? fn(args[0]) : fn.call(that, args[0]);
      case 2:
        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
      case 3:
        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
      case 4:
        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
    }
    return fn.apply(that, args);
  };
  return module.exports;
});

$__System.registerDynamic("24", ["25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('25').document && document.documentElement;
  return module.exports;
});

$__System.registerDynamic("26", ["1c", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('1c'),
      document = $__require('25').document,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function(it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});

$__System.registerDynamic("27", ["1e", "23", "24", "26", "25", "28", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var ctx = $__require('1e'),
        invoke = $__require('23'),
        html = $__require('24'),
        cel = $__require('26'),
        global = $__require('25'),
        process = global.process,
        setTask = global.setImmediate,
        clearTask = global.clearImmediate,
        MessageChannel = global.MessageChannel,
        counter = 0,
        queue = {},
        ONREADYSTATECHANGE = 'onreadystatechange',
        defer,
        channel,
        port;
    var run = function() {
      var id = +this;
      if (queue.hasOwnProperty(id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
      }
    };
    var listner = function(event) {
      run.call(event.data);
    };
    if (!setTask || !clearTask) {
      setTask = function setImmediate(fn) {
        var args = [],
            i = 1;
        while (arguments.length > i)
          args.push(arguments[i++]);
        queue[++counter] = function() {
          invoke(typeof fn == 'function' ? fn : Function(fn), args);
        };
        defer(counter);
        return counter;
      };
      clearTask = function clearImmediate(id) {
        delete queue[id];
      };
      if ($__require('28')(process) == 'process') {
        defer = function(id) {
          process.nextTick(ctx(run, id, 1));
        };
      } else if (MessageChannel) {
        channel = new MessageChannel;
        port = channel.port2;
        channel.port1.onmessage = listner;
        defer = ctx(port.postMessage, port, 1);
      } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
        defer = function(id) {
          global.postMessage(id + '', '*');
        };
        global.addEventListener('message', listner, false);
      } else if (ONREADYSTATECHANGE in cel('script')) {
        defer = function(id) {
          html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run.call(id);
          };
        };
      } else {
        defer = function(id) {
          setTimeout(ctx(run, id, 1), 0);
        };
      }
    }
    module.exports = {
      set: setTask,
      clear: clearTask
    };
  })($__require('29'));
  return module.exports;
});

$__System.registerDynamic("2a", ["25", "27", "28", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    var global = $__require('25'),
        macrotask = $__require('27').set,
        Observer = global.MutationObserver || global.WebKitMutationObserver,
        process = global.process,
        Promise = global.Promise,
        isNode = $__require('28')(process) == 'process',
        head,
        last,
        notify;
    var flush = function() {
      var parent,
          domain,
          fn;
      if (isNode && (parent = process.domain)) {
        process.domain = null;
        parent.exit();
      }
      while (head) {
        domain = head.domain;
        fn = head.fn;
        if (domain)
          domain.enter();
        fn();
        if (domain)
          domain.exit();
        head = head.next;
      }
      last = undefined;
      if (parent)
        parent.enter();
    };
    if (isNode) {
      notify = function() {
        process.nextTick(flush);
      };
    } else if (Observer) {
      var toggle = 1,
          node = document.createTextNode('');
      new Observer(flush).observe(node, {characterData: true});
      notify = function() {
        node.data = toggle = -toggle;
      };
    } else if (Promise && Promise.resolve) {
      notify = function() {
        Promise.resolve().then(flush);
      };
    } else {
      notify = function() {
        macrotask.call(global, flush);
      };
    }
    module.exports = function asap(fn) {
      var task = {
        fn: fn,
        next: undefined,
        domain: isNode && process.domain
      };
      if (last)
        last.next = task;
      if (!head) {
        head = task;
        notify();
      }
      last = task;
    };
  })($__require('29'));
  return module.exports;
});

$__System.registerDynamic("2b", ["f", "6", "2c", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = $__require('f'),
      $ = $__require('6'),
      DESCRIPTORS = $__require('2c'),
      SPECIES = $__require('22')('species');
  module.exports = function(KEY) {
    var C = core[KEY];
    if (DESCRIPTORS && C && !C[SPECIES])
      $.setDesc(C, SPECIES, {
        configurable: true,
        get: function() {
          return this;
        }
      });
  };
  return module.exports;
});

$__System.registerDynamic("2d", ["22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ITERATOR = $__require('22')('iterator'),
      SAFE_CLOSING = false;
  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function() {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function() {
      throw 2;
    });
  } catch (e) {}
  module.exports = function(exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING)
      return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function() {
        safe = true;
      };
      arr[ITERATOR] = function() {
        return iter;
      };
      exec(arr);
    } catch (e) {}
    return safe;
  };
  return module.exports;
});

$__System.registerDynamic("2e", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var process = module.exports = {};
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while (len) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i = 1; i < arguments.length; i++) {
        args[i - 1] = arguments[i];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      setTimeout(drainQueue, 0);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = 'browser';
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = '';
  process.versions = {};
  function noop() {}
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.binding = function(name) {
    throw new Error('process.binding is not supported');
  };
  process.cwd = function() {
    return '/';
  };
  process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
  };
  process.umask = function() {
    return 0;
  };
  return module.exports;
});

$__System.registerDynamic("2f", ["2e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2e');
  return module.exports;
});

$__System.registerDynamic("30", ["2f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__System._nodeRequire ? process : $__require('2f');
  return module.exports;
});

$__System.registerDynamic("29", ["30"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('30');
  return module.exports;
});

$__System.registerDynamic("31", ["6", "32", "25", "1e", "33", "c", "1c", "1d", "21", "34", "35", "d", "1f", "22", "20", "2a", "2c", "36", "37", "2b", "f", "2d", "29"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  (function(process) {
    'use strict';
    var $ = $__require('6'),
        LIBRARY = $__require('32'),
        global = $__require('25'),
        ctx = $__require('1e'),
        classof = $__require('33'),
        $export = $__require('c'),
        isObject = $__require('1c'),
        anObject = $__require('1d'),
        aFunction = $__require('21'),
        strictNew = $__require('34'),
        forOf = $__require('35'),
        setProto = $__require('d').set,
        same = $__require('1f'),
        SPECIES = $__require('22')('species'),
        speciesConstructor = $__require('20'),
        asap = $__require('2a'),
        PROMISE = 'Promise',
        process = global.process,
        isNode = classof(process) == 'process',
        P = global[PROMISE],
        Wrapper;
    var testResolve = function(sub) {
      var test = new P(function() {});
      if (sub)
        test.constructor = Object;
      return P.resolve(test) === test;
    };
    var USE_NATIVE = function() {
      var works = false;
      function P2(x) {
        var self = new P(x);
        setProto(self, P2.prototype);
        return self;
      }
      try {
        works = P && P.resolve && testResolve();
        setProto(P2, P);
        P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
        if (!(P2.resolve(5).then(function() {}) instanceof P2)) {
          works = false;
        }
        if (works && $__require('2c')) {
          var thenableThenGotten = false;
          P.resolve($.setDesc({}, 'then', {get: function() {
              thenableThenGotten = true;
            }}));
          works = thenableThenGotten;
        }
      } catch (e) {
        works = false;
      }
      return works;
    }();
    var sameConstructor = function(a, b) {
      if (LIBRARY && a === P && b === Wrapper)
        return true;
      return same(a, b);
    };
    var getConstructor = function(C) {
      var S = anObject(C)[SPECIES];
      return S != undefined ? S : C;
    };
    var isThenable = function(it) {
      var then;
      return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
    };
    var PromiseCapability = function(C) {
      var resolve,
          reject;
      this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined)
          throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
      });
      this.resolve = aFunction(resolve), this.reject = aFunction(reject);
    };
    var perform = function(exec) {
      try {
        exec();
      } catch (e) {
        return {error: e};
      }
    };
    var notify = function(record, isReject) {
      if (record.n)
        return;
      record.n = true;
      var chain = record.c;
      asap(function() {
        var value = record.v,
            ok = record.s == 1,
            i = 0;
        var run = function(reaction) {
          var handler = ok ? reaction.ok : reaction.fail,
              resolve = reaction.resolve,
              reject = reaction.reject,
              result,
              then;
          try {
            if (handler) {
              if (!ok)
                record.h = true;
              result = handler === true ? value : handler(value);
              if (result === reaction.promise) {
                reject(TypeError('Promise-chain cycle'));
              } else if (then = isThenable(result)) {
                then.call(result, resolve, reject);
              } else
                resolve(result);
            } else
              reject(value);
          } catch (e) {
            reject(e);
          }
        };
        while (chain.length > i)
          run(chain[i++]);
        chain.length = 0;
        record.n = false;
        if (isReject)
          setTimeout(function() {
            var promise = record.p,
                handler,
                console;
            if (isUnhandled(promise)) {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({
                  promise: promise,
                  reason: value
                });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            }
            record.a = undefined;
          }, 1);
      });
    };
    var isUnhandled = function(promise) {
      var record = promise._d,
          chain = record.a || record.c,
          i = 0,
          reaction;
      if (record.h)
        return false;
      while (chain.length > i) {
        reaction = chain[i++];
        if (reaction.fail || !isUnhandled(reaction.promise))
          return false;
      }
      return true;
    };
    var $reject = function(value) {
      var record = this;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      record.v = value;
      record.s = 2;
      record.a = record.c.slice();
      notify(record, true);
    };
    var $resolve = function(value) {
      var record = this,
          then;
      if (record.d)
        return;
      record.d = true;
      record = record.r || record;
      try {
        if (record.p === value)
          throw TypeError("Promise can't be resolved itself");
        if (then = isThenable(value)) {
          asap(function() {
            var wrapper = {
              r: record,
              d: false
            };
            try {
              then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
            } catch (e) {
              $reject.call(wrapper, e);
            }
          });
        } else {
          record.v = value;
          record.s = 1;
          notify(record, false);
        }
      } catch (e) {
        $reject.call({
          r: record,
          d: false
        }, e);
      }
    };
    if (!USE_NATIVE) {
      P = function Promise(executor) {
        aFunction(executor);
        var record = this._d = {
          p: strictNew(this, P, PROMISE),
          c: [],
          a: undefined,
          s: 0,
          d: false,
          v: undefined,
          h: false,
          n: false
        };
        try {
          executor(ctx($resolve, record, 1), ctx($reject, record, 1));
        } catch (err) {
          $reject.call(record, err);
        }
      };
      $__require('36')(P.prototype, {
        then: function then(onFulfilled, onRejected) {
          var reaction = new PromiseCapability(speciesConstructor(this, P)),
              promise = reaction.promise,
              record = this._d;
          reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
          reaction.fail = typeof onRejected == 'function' && onRejected;
          record.c.push(reaction);
          if (record.a)
            record.a.push(reaction);
          if (record.s)
            notify(record, false);
          return promise;
        },
        'catch': function(onRejected) {
          return this.then(undefined, onRejected);
        }
      });
    }
    $export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
    $__require('37')(P, PROMISE);
    $__require('2b')(PROMISE);
    Wrapper = $__require('f')[PROMISE];
    $export($export.S + $export.F * !USE_NATIVE, PROMISE, {reject: function reject(r) {
        var capability = new PromiseCapability(this),
            $$reject = capability.reject;
        $$reject(r);
        return capability.promise;
      }});
    $export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {resolve: function resolve(x) {
        if (x instanceof P && sameConstructor(x.constructor, this))
          return x;
        var capability = new PromiseCapability(this),
            $$resolve = capability.resolve;
        $$resolve(x);
        return capability.promise;
      }});
    $export($export.S + $export.F * !(USE_NATIVE && $__require('2d')(function(iter) {
      P.all(iter)['catch'](function() {});
    })), PROMISE, {
      all: function all(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            resolve = capability.resolve,
            reject = capability.reject,
            values = [];
        var abrupt = perform(function() {
          forOf(iterable, false, values.push, values);
          var remaining = values.length,
              results = Array(remaining);
          if (remaining)
            $.each.call(values, function(promise, index) {
              var alreadyCalled = false;
              C.resolve(promise).then(function(value) {
                if (alreadyCalled)
                  return;
                alreadyCalled = true;
                results[index] = value;
                --remaining || resolve(results);
              }, reject);
            });
          else
            resolve(results);
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      },
      race: function race(iterable) {
        var C = getConstructor(this),
            capability = new PromiseCapability(C),
            reject = capability.reject;
        var abrupt = perform(function() {
          forOf(iterable, false, function(promise) {
            C.resolve(promise).then(capability.resolve, reject);
          });
        });
        if (abrupt)
          reject(abrupt.error);
        return capability.promise;
      }
    });
  })($__require('29'));
  return module.exports;
});

$__System.registerDynamic("38", ["39", "1a", "3a", "31", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('39');
  $__require('1a');
  $__require('3a');
  $__require('31');
  module.exports = $__require('f').Promise;
  return module.exports;
});

$__System.registerDynamic("3b", ["38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('38'),
    __esModule: true
  };
  return module.exports;
});

(function() {
var define = $__System.amdDefine;
(function(f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define("3c", [], f);
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }
    g.io = f();
  }
})(function() {
  var define,
      module,
      exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a)
            return a(o, !0);
          if (i)
            return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {exports: {}};
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)
      s(r[o]);
    return s;
  })({
    1: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./lib/');
    }, {"./lib/": 2}],
    2: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./socket');
      module.exports.parser = _dereq_('engine.io-parser');
    }, {
      "./socket": 3,
      "engine.io-parser": 19
    }],
    3: [function(_dereq_, module, exports) {
      (function(global) {
        var transports = _dereq_('./transports');
        var Emitter = _dereq_('component-emitter');
        var debug = _dereq_('debug')('engine.io-client:socket');
        var index = _dereq_('indexof');
        var parser = _dereq_('engine.io-parser');
        var parseuri = _dereq_('parseuri');
        var parsejson = _dereq_('parsejson');
        var parseqs = _dereq_('parseqs');
        module.exports = Socket;
        function noop() {}
        function Socket(uri, opts) {
          if (!(this instanceof Socket))
            return new Socket(uri, opts);
          opts = opts || {};
          if (uri && 'object' == typeof uri) {
            opts = uri;
            uri = null;
          }
          if (uri) {
            uri = parseuri(uri);
            opts.hostname = uri.host;
            opts.secure = uri.protocol == 'https' || uri.protocol == 'wss';
            opts.port = uri.port;
            if (uri.query)
              opts.query = uri.query;
          } else if (opts.host) {
            opts.hostname = parseuri(opts.host).host;
          }
          this.secure = null != opts.secure ? opts.secure : (global.location && 'https:' == location.protocol);
          if (opts.hostname && !opts.port) {
            opts.port = this.secure ? '443' : '80';
          }
          this.agent = opts.agent || false;
          this.hostname = opts.hostname || (global.location ? location.hostname : 'localhost');
          this.port = opts.port || (global.location && location.port ? location.port : (this.secure ? 443 : 80));
          this.query = opts.query || {};
          if ('string' == typeof this.query)
            this.query = parseqs.decode(this.query);
          this.upgrade = false !== opts.upgrade;
          this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
          this.forceJSONP = !!opts.forceJSONP;
          this.jsonp = false !== opts.jsonp;
          this.forceBase64 = !!opts.forceBase64;
          this.enablesXDR = !!opts.enablesXDR;
          this.timestampParam = opts.timestampParam || 't';
          this.timestampRequests = opts.timestampRequests;
          this.transports = opts.transports || ['polling', 'websocket'];
          this.readyState = '';
          this.writeBuffer = [];
          this.policyPort = opts.policyPort || 843;
          this.rememberUpgrade = opts.rememberUpgrade || false;
          this.binaryType = null;
          this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
          this.perMessageDeflate = false !== opts.perMessageDeflate ? (opts.perMessageDeflate || {}) : false;
          if (true === this.perMessageDeflate)
            this.perMessageDeflate = {};
          if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
            this.perMessageDeflate.threshold = 1024;
          }
          this.pfx = opts.pfx || null;
          this.key = opts.key || null;
          this.passphrase = opts.passphrase || null;
          this.cert = opts.cert || null;
          this.ca = opts.ca || null;
          this.ciphers = opts.ciphers || null;
          this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? null : opts.rejectUnauthorized;
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal) {
            if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
              this.extraHeaders = opts.extraHeaders;
            }
          }
          this.open();
        }
        Socket.priorWebsocketSuccess = false;
        Emitter(Socket.prototype);
        Socket.protocol = parser.protocol;
        Socket.Socket = Socket;
        Socket.Transport = _dereq_('./transport');
        Socket.transports = _dereq_('./transports');
        Socket.parser = _dereq_('engine.io-parser');
        Socket.prototype.createTransport = function(name) {
          debug('creating transport "%s"', name);
          var query = clone(this.query);
          query.EIO = parser.protocol;
          query.transport = name;
          if (this.id)
            query.sid = this.id;
          var transport = new transports[name]({
            agent: this.agent,
            hostname: this.hostname,
            port: this.port,
            secure: this.secure,
            path: this.path,
            query: query,
            forceJSONP: this.forceJSONP,
            jsonp: this.jsonp,
            forceBase64: this.forceBase64,
            enablesXDR: this.enablesXDR,
            timestampRequests: this.timestampRequests,
            timestampParam: this.timestampParam,
            policyPort: this.policyPort,
            socket: this,
            pfx: this.pfx,
            key: this.key,
            passphrase: this.passphrase,
            cert: this.cert,
            ca: this.ca,
            ciphers: this.ciphers,
            rejectUnauthorized: this.rejectUnauthorized,
            perMessageDeflate: this.perMessageDeflate,
            extraHeaders: this.extraHeaders
          });
          return transport;
        };
        function clone(obj) {
          var o = {};
          for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
              o[i] = obj[i];
            }
          }
          return o;
        }
        Socket.prototype.open = function() {
          var transport;
          if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') != -1) {
            transport = 'websocket';
          } else if (0 === this.transports.length) {
            var self = this;
            setTimeout(function() {
              self.emit('error', 'No transports available');
            }, 0);
            return;
          } else {
            transport = this.transports[0];
          }
          this.readyState = 'opening';
          try {
            transport = this.createTransport(transport);
          } catch (e) {
            this.transports.shift();
            this.open();
            return;
          }
          transport.open();
          this.setTransport(transport);
        };
        Socket.prototype.setTransport = function(transport) {
          debug('setting transport %s', transport.name);
          var self = this;
          if (this.transport) {
            debug('clearing existing transport %s', this.transport.name);
            this.transport.removeAllListeners();
          }
          this.transport = transport;
          transport.on('drain', function() {
            self.onDrain();
          }).on('packet', function(packet) {
            self.onPacket(packet);
          }).on('error', function(e) {
            self.onError(e);
          }).on('close', function() {
            self.onClose('transport close');
          });
        };
        Socket.prototype.probe = function(name) {
          debug('probing transport "%s"', name);
          var transport = this.createTransport(name, {probe: 1}),
              failed = false,
              self = this;
          Socket.priorWebsocketSuccess = false;
          function onTransportOpen() {
            if (self.onlyBinaryUpgrades) {
              var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
              failed = failed || upgradeLosesBinary;
            }
            if (failed)
              return;
            debug('probe transport "%s" opened', name);
            transport.send([{
              type: 'ping',
              data: 'probe'
            }]);
            transport.once('packet', function(msg) {
              if (failed)
                return;
              if ('pong' == msg.type && 'probe' == msg.data) {
                debug('probe transport "%s" pong', name);
                self.upgrading = true;
                self.emit('upgrading', transport);
                if (!transport)
                  return;
                Socket.priorWebsocketSuccess = 'websocket' == transport.name;
                debug('pausing current transport "%s"', self.transport.name);
                self.transport.pause(function() {
                  if (failed)
                    return;
                  if ('closed' == self.readyState)
                    return;
                  debug('changing transport and sending upgrade packet');
                  cleanup();
                  self.setTransport(transport);
                  transport.send([{type: 'upgrade'}]);
                  self.emit('upgrade', transport);
                  transport = null;
                  self.upgrading = false;
                  self.flush();
                });
              } else {
                debug('probe transport "%s" failed', name);
                var err = new Error('probe error');
                err.transport = transport.name;
                self.emit('upgradeError', err);
              }
            });
          }
          function freezeTransport() {
            if (failed)
              return;
            failed = true;
            cleanup();
            transport.close();
            transport = null;
          }
          function onerror(err) {
            var error = new Error('probe error: ' + err);
            error.transport = transport.name;
            freezeTransport();
            debug('probe transport "%s" failed because of error: %s', name, err);
            self.emit('upgradeError', error);
          }
          function onTransportClose() {
            onerror("transport closed");
          }
          function onclose() {
            onerror("socket closed");
          }
          function onupgrade(to) {
            if (transport && to.name != transport.name) {
              debug('"%s" works - aborting "%s"', to.name, transport.name);
              freezeTransport();
            }
          }
          function cleanup() {
            transport.removeListener('open', onTransportOpen);
            transport.removeListener('error', onerror);
            transport.removeListener('close', onTransportClose);
            self.removeListener('close', onclose);
            self.removeListener('upgrading', onupgrade);
          }
          transport.once('open', onTransportOpen);
          transport.once('error', onerror);
          transport.once('close', onTransportClose);
          this.once('close', onclose);
          this.once('upgrading', onupgrade);
          transport.open();
        };
        Socket.prototype.onOpen = function() {
          debug('socket open');
          this.readyState = 'open';
          Socket.priorWebsocketSuccess = 'websocket' == this.transport.name;
          this.emit('open');
          this.flush();
          if ('open' == this.readyState && this.upgrade && this.transport.pause) {
            debug('starting upgrade probes');
            for (var i = 0,
                l = this.upgrades.length; i < l; i++) {
              this.probe(this.upgrades[i]);
            }
          }
        };
        Socket.prototype.onPacket = function(packet) {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
            this.emit('packet', packet);
            this.emit('heartbeat');
            switch (packet.type) {
              case 'open':
                this.onHandshake(parsejson(packet.data));
                break;
              case 'pong':
                this.setPing();
                this.emit('pong');
                break;
              case 'error':
                var err = new Error('server error');
                err.code = packet.data;
                this.onError(err);
                break;
              case 'message':
                this.emit('data', packet.data);
                this.emit('message', packet.data);
                break;
            }
          } else {
            debug('packet received with socket readyState "%s"', this.readyState);
          }
        };
        Socket.prototype.onHandshake = function(data) {
          this.emit('handshake', data);
          this.id = data.sid;
          this.transport.query.sid = data.sid;
          this.upgrades = this.filterUpgrades(data.upgrades);
          this.pingInterval = data.pingInterval;
          this.pingTimeout = data.pingTimeout;
          this.onOpen();
          if ('closed' == this.readyState)
            return;
          this.setPing();
          this.removeListener('heartbeat', this.onHeartbeat);
          this.on('heartbeat', this.onHeartbeat);
        };
        Socket.prototype.onHeartbeat = function(timeout) {
          clearTimeout(this.pingTimeoutTimer);
          var self = this;
          self.pingTimeoutTimer = setTimeout(function() {
            if ('closed' == self.readyState)
              return;
            self.onClose('ping timeout');
          }, timeout || (self.pingInterval + self.pingTimeout));
        };
        Socket.prototype.setPing = function() {
          var self = this;
          clearTimeout(self.pingIntervalTimer);
          self.pingIntervalTimer = setTimeout(function() {
            debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
            self.ping();
            self.onHeartbeat(self.pingTimeout);
          }, self.pingInterval);
        };
        Socket.prototype.ping = function() {
          var self = this;
          this.sendPacket('ping', function() {
            self.emit('ping');
          });
        };
        Socket.prototype.onDrain = function() {
          this.writeBuffer.splice(0, this.prevBufferLen);
          this.prevBufferLen = 0;
          if (0 === this.writeBuffer.length) {
            this.emit('drain');
          } else {
            this.flush();
          }
        };
        Socket.prototype.flush = function() {
          if ('closed' != this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            debug('flushing %d packets in socket', this.writeBuffer.length);
            this.transport.send(this.writeBuffer);
            this.prevBufferLen = this.writeBuffer.length;
            this.emit('flush');
          }
        };
        Socket.prototype.write = Socket.prototype.send = function(msg, options, fn) {
          this.sendPacket('message', msg, options, fn);
          return this;
        };
        Socket.prototype.sendPacket = function(type, data, options, fn) {
          if ('function' == typeof data) {
            fn = data;
            data = undefined;
          }
          if ('function' == typeof options) {
            fn = options;
            options = null;
          }
          if ('closing' == this.readyState || 'closed' == this.readyState) {
            return;
          }
          options = options || {};
          options.compress = false !== options.compress;
          var packet = {
            type: type,
            data: data,
            options: options
          };
          this.emit('packetCreate', packet);
          this.writeBuffer.push(packet);
          if (fn)
            this.once('flush', fn);
          this.flush();
        };
        Socket.prototype.close = function() {
          if ('opening' == this.readyState || 'open' == this.readyState) {
            this.readyState = 'closing';
            var self = this;
            if (this.writeBuffer.length) {
              this.once('drain', function() {
                if (this.upgrading) {
                  waitForUpgrade();
                } else {
                  close();
                }
              });
            } else if (this.upgrading) {
              waitForUpgrade();
            } else {
              close();
            }
          }
          function close() {
            self.onClose('forced close');
            debug('socket closing - telling transport to close');
            self.transport.close();
          }
          function cleanupAndClose() {
            self.removeListener('upgrade', cleanupAndClose);
            self.removeListener('upgradeError', cleanupAndClose);
            close();
          }
          function waitForUpgrade() {
            self.once('upgrade', cleanupAndClose);
            self.once('upgradeError', cleanupAndClose);
          }
          return this;
        };
        Socket.prototype.onError = function(err) {
          debug('socket error %j', err);
          Socket.priorWebsocketSuccess = false;
          this.emit('error', err);
          this.onClose('transport error', err);
        };
        Socket.prototype.onClose = function(reason, desc) {
          if ('opening' == this.readyState || 'open' == this.readyState || 'closing' == this.readyState) {
            debug('socket close with reason: "%s"', reason);
            var self = this;
            clearTimeout(this.pingIntervalTimer);
            clearTimeout(this.pingTimeoutTimer);
            this.transport.removeAllListeners('close');
            this.transport.close();
            this.transport.removeAllListeners();
            this.readyState = 'closed';
            this.id = null;
            this.emit('close', reason, desc);
            self.writeBuffer = [];
            self.prevBufferLen = 0;
          }
        };
        Socket.prototype.filterUpgrades = function(upgrades) {
          var filteredUpgrades = [];
          for (var i = 0,
              j = upgrades.length; i < j; i++) {
            if (~index(this.transports, upgrades[i]))
              filteredUpgrades.push(upgrades[i]);
          }
          return filteredUpgrades;
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./transport": 4,
      "./transports": 5,
      "component-emitter": 15,
      "debug": 17,
      "engine.io-parser": 19,
      "indexof": 23,
      "parsejson": 26,
      "parseqs": 27,
      "parseuri": 28
    }],
    4: [function(_dereq_, module, exports) {
      var parser = _dereq_('engine.io-parser');
      var Emitter = _dereq_('component-emitter');
      module.exports = Transport;
      function Transport(opts) {
        this.path = opts.path;
        this.hostname = opts.hostname;
        this.port = opts.port;
        this.secure = opts.secure;
        this.query = opts.query;
        this.timestampParam = opts.timestampParam;
        this.timestampRequests = opts.timestampRequests;
        this.readyState = '';
        this.agent = opts.agent || false;
        this.socket = opts.socket;
        this.enablesXDR = opts.enablesXDR;
        this.pfx = opts.pfx;
        this.key = opts.key;
        this.passphrase = opts.passphrase;
        this.cert = opts.cert;
        this.ca = opts.ca;
        this.ciphers = opts.ciphers;
        this.rejectUnauthorized = opts.rejectUnauthorized;
        this.extraHeaders = opts.extraHeaders;
      }
      Emitter(Transport.prototype);
      Transport.prototype.onError = function(msg, desc) {
        var err = new Error(msg);
        err.type = 'TransportError';
        err.description = desc;
        this.emit('error', err);
        return this;
      };
      Transport.prototype.open = function() {
        if ('closed' == this.readyState || '' == this.readyState) {
          this.readyState = 'opening';
          this.doOpen();
        }
        return this;
      };
      Transport.prototype.close = function() {
        if ('opening' == this.readyState || 'open' == this.readyState) {
          this.doClose();
          this.onClose();
        }
        return this;
      };
      Transport.prototype.send = function(packets) {
        if ('open' == this.readyState) {
          this.write(packets);
        } else {
          throw new Error('Transport not open');
        }
      };
      Transport.prototype.onOpen = function() {
        this.readyState = 'open';
        this.writable = true;
        this.emit('open');
      };
      Transport.prototype.onData = function(data) {
        var packet = parser.decodePacket(data, this.socket.binaryType);
        this.onPacket(packet);
      };
      Transport.prototype.onPacket = function(packet) {
        this.emit('packet', packet);
      };
      Transport.prototype.onClose = function() {
        this.readyState = 'closed';
        this.emit('close');
      };
    }, {
      "component-emitter": 15,
      "engine.io-parser": 19
    }],
    5: [function(_dereq_, module, exports) {
      (function(global) {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var XHR = _dereq_('./polling-xhr');
        var JSONP = _dereq_('./polling-jsonp');
        var websocket = _dereq_('./websocket');
        exports.polling = polling;
        exports.websocket = websocket;
        function polling(opts) {
          var xhr;
          var xd = false;
          var xs = false;
          var jsonp = false !== opts.jsonp;
          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;
            if (!port) {
              port = isSSL ? 443 : 80;
            }
            xd = opts.hostname != location.hostname || port != opts.port;
            xs = opts.secure != isSSL;
          }
          opts.xdomain = xd;
          opts.xscheme = xs;
          xhr = new XMLHttpRequest(opts);
          if ('open' in xhr && !opts.forceJSONP) {
            return new XHR(opts);
          } else {
            if (!jsonp)
              throw new Error('JSONP disabled');
            return new JSONP(opts);
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling-jsonp": 6,
      "./polling-xhr": 7,
      "./websocket": 9,
      "xmlhttprequest-ssl": 10
    }],
    6: [function(_dereq_, module, exports) {
      (function(global) {
        var Polling = _dereq_('./polling');
        var inherit = _dereq_('component-inherit');
        module.exports = JSONPPolling;
        var rNewline = /\n/g;
        var rEscapedNewline = /\\n/g;
        var callbacks;
        var index = 0;
        function empty() {}
        function JSONPPolling(opts) {
          Polling.call(this, opts);
          this.query = this.query || {};
          if (!callbacks) {
            if (!global.___eio)
              global.___eio = [];
            callbacks = global.___eio;
          }
          this.index = callbacks.length;
          var self = this;
          callbacks.push(function(msg) {
            self.onData(msg);
          });
          this.query.j = this.index;
          if (global.document && global.addEventListener) {
            global.addEventListener('beforeunload', function() {
              if (self.script)
                self.script.onerror = empty;
            }, false);
          }
        }
        inherit(JSONPPolling, Polling);
        JSONPPolling.prototype.supportsBinary = false;
        JSONPPolling.prototype.doClose = function() {
          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }
          if (this.form) {
            this.form.parentNode.removeChild(this.form);
            this.form = null;
            this.iframe = null;
          }
          Polling.prototype.doClose.call(this);
        };
        JSONPPolling.prototype.doPoll = function() {
          var self = this;
          var script = document.createElement('script');
          if (this.script) {
            this.script.parentNode.removeChild(this.script);
            this.script = null;
          }
          script.async = true;
          script.src = this.uri();
          script.onerror = function(e) {
            self.onError('jsonp poll error', e);
          };
          var insertAt = document.getElementsByTagName('script')[0];
          if (insertAt) {
            insertAt.parentNode.insertBefore(script, insertAt);
          } else {
            (document.head || document.body).appendChild(script);
          }
          this.script = script;
          var isUAgecko = 'undefined' != typeof navigator && /gecko/i.test(navigator.userAgent);
          if (isUAgecko) {
            setTimeout(function() {
              var iframe = document.createElement('iframe');
              document.body.appendChild(iframe);
              document.body.removeChild(iframe);
            }, 100);
          }
        };
        JSONPPolling.prototype.doWrite = function(data, fn) {
          var self = this;
          if (!this.form) {
            var form = document.createElement('form');
            var area = document.createElement('textarea');
            var id = this.iframeId = 'eio_iframe_' + this.index;
            var iframe;
            form.className = 'socketio';
            form.style.position = 'absolute';
            form.style.top = '-1000px';
            form.style.left = '-1000px';
            form.target = id;
            form.method = 'POST';
            form.setAttribute('accept-charset', 'utf-8');
            area.name = 'd';
            form.appendChild(area);
            document.body.appendChild(form);
            this.form = form;
            this.area = area;
          }
          this.form.action = this.uri();
          function complete() {
            initIframe();
            fn();
          }
          function initIframe() {
            if (self.iframe) {
              try {
                self.form.removeChild(self.iframe);
              } catch (e) {
                self.onError('jsonp polling iframe removal error', e);
              }
            }
            try {
              var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
              iframe = document.createElement(html);
            } catch (e) {
              iframe = document.createElement('iframe');
              iframe.name = self.iframeId;
              iframe.src = 'javascript:0';
            }
            iframe.id = self.iframeId;
            self.form.appendChild(iframe);
            self.iframe = iframe;
          }
          initIframe();
          data = data.replace(rEscapedNewline, '\\\n');
          this.area.value = data.replace(rNewline, '\\n');
          try {
            this.form.submit();
          } catch (e) {}
          if (this.iframe.attachEvent) {
            this.iframe.onreadystatechange = function() {
              if (self.iframe.readyState == 'complete') {
                complete();
              }
            };
          } else {
            this.iframe.onload = complete;
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling": 8,
      "component-inherit": 16
    }],
    7: [function(_dereq_, module, exports) {
      (function(global) {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var Polling = _dereq_('./polling');
        var Emitter = _dereq_('component-emitter');
        var inherit = _dereq_('component-inherit');
        var debug = _dereq_('debug')('engine.io-client:polling-xhr');
        module.exports = XHR;
        module.exports.Request = Request;
        function empty() {}
        function XHR(opts) {
          Polling.call(this, opts);
          if (global.location) {
            var isSSL = 'https:' == location.protocol;
            var port = location.port;
            if (!port) {
              port = isSSL ? 443 : 80;
            }
            this.xd = opts.hostname != global.location.hostname || port != opts.port;
            this.xs = opts.secure != isSSL;
          } else {
            this.extraHeaders = opts.extraHeaders;
          }
        }
        inherit(XHR, Polling);
        XHR.prototype.supportsBinary = true;
        XHR.prototype.request = function(opts) {
          opts = opts || {};
          opts.uri = this.uri();
          opts.xd = this.xd;
          opts.xs = this.xs;
          opts.agent = this.agent || false;
          opts.supportsBinary = this.supportsBinary;
          opts.enablesXDR = this.enablesXDR;
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          opts.extraHeaders = this.extraHeaders;
          return new Request(opts);
        };
        XHR.prototype.doWrite = function(data, fn) {
          var isBinary = typeof data !== 'string' && data !== undefined;
          var req = this.request({
            method: 'POST',
            data: data,
            isBinary: isBinary
          });
          var self = this;
          req.on('success', fn);
          req.on('error', function(err) {
            self.onError('xhr post error', err);
          });
          this.sendXhr = req;
        };
        XHR.prototype.doPoll = function() {
          debug('xhr poll');
          var req = this.request();
          var self = this;
          req.on('data', function(data) {
            self.onData(data);
          });
          req.on('error', function(err) {
            self.onError('xhr poll error', err);
          });
          this.pollXhr = req;
        };
        function Request(opts) {
          this.method = opts.method || 'GET';
          this.uri = opts.uri;
          this.xd = !!opts.xd;
          this.xs = !!opts.xs;
          this.async = false !== opts.async;
          this.data = undefined != opts.data ? opts.data : null;
          this.agent = opts.agent;
          this.isBinary = opts.isBinary;
          this.supportsBinary = opts.supportsBinary;
          this.enablesXDR = opts.enablesXDR;
          this.pfx = opts.pfx;
          this.key = opts.key;
          this.passphrase = opts.passphrase;
          this.cert = opts.cert;
          this.ca = opts.ca;
          this.ciphers = opts.ciphers;
          this.rejectUnauthorized = opts.rejectUnauthorized;
          this.extraHeaders = opts.extraHeaders;
          this.create();
        }
        Emitter(Request.prototype);
        Request.prototype.create = function() {
          var opts = {
            agent: this.agent,
            xdomain: this.xd,
            xscheme: this.xs,
            enablesXDR: this.enablesXDR
          };
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          var xhr = this.xhr = new XMLHttpRequest(opts);
          var self = this;
          try {
            debug('xhr open %s: %s', this.method, this.uri);
            xhr.open(this.method, this.uri, this.async);
            try {
              if (this.extraHeaders) {
                xhr.setDisableHeaderCheck(true);
                for (var i in this.extraHeaders) {
                  if (this.extraHeaders.hasOwnProperty(i)) {
                    xhr.setRequestHeader(i, this.extraHeaders[i]);
                  }
                }
              }
            } catch (e) {}
            if (this.supportsBinary) {
              xhr.responseType = 'arraybuffer';
            }
            if ('POST' == this.method) {
              try {
                if (this.isBinary) {
                  xhr.setRequestHeader('Content-type', 'application/octet-stream');
                } else {
                  xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
                }
              } catch (e) {}
            }
            if ('withCredentials' in xhr) {
              xhr.withCredentials = true;
            }
            if (this.hasXDR()) {
              xhr.onload = function() {
                self.onLoad();
              };
              xhr.onerror = function() {
                self.onError(xhr.responseText);
              };
            } else {
              xhr.onreadystatechange = function() {
                if (4 != xhr.readyState)
                  return;
                if (200 == xhr.status || 1223 == xhr.status) {
                  self.onLoad();
                } else {
                  setTimeout(function() {
                    self.onError(xhr.status);
                  }, 0);
                }
              };
            }
            debug('xhr data %s', this.data);
            xhr.send(this.data);
          } catch (e) {
            setTimeout(function() {
              self.onError(e);
            }, 0);
            return;
          }
          if (global.document) {
            this.index = Request.requestsCount++;
            Request.requests[this.index] = this;
          }
        };
        Request.prototype.onSuccess = function() {
          this.emit('success');
          this.cleanup();
        };
        Request.prototype.onData = function(data) {
          this.emit('data', data);
          this.onSuccess();
        };
        Request.prototype.onError = function(err) {
          this.emit('error', err);
          this.cleanup(true);
        };
        Request.prototype.cleanup = function(fromError) {
          if ('undefined' == typeof this.xhr || null === this.xhr) {
            return;
          }
          if (this.hasXDR()) {
            this.xhr.onload = this.xhr.onerror = empty;
          } else {
            this.xhr.onreadystatechange = empty;
          }
          if (fromError) {
            try {
              this.xhr.abort();
            } catch (e) {}
          }
          if (global.document) {
            delete Request.requests[this.index];
          }
          this.xhr = null;
        };
        Request.prototype.onLoad = function() {
          var data;
          try {
            var contentType;
            try {
              contentType = this.xhr.getResponseHeader('Content-Type').split(';')[0];
            } catch (e) {}
            if (contentType === 'application/octet-stream') {
              data = this.xhr.response;
            } else {
              if (!this.supportsBinary) {
                data = this.xhr.responseText;
              } else {
                try {
                  data = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response));
                } catch (e) {
                  var ui8Arr = new Uint8Array(this.xhr.response);
                  var dataArray = [];
                  for (var idx = 0,
                      length = ui8Arr.length; idx < length; idx++) {
                    dataArray.push(ui8Arr[idx]);
                  }
                  data = String.fromCharCode.apply(null, dataArray);
                }
              }
            }
          } catch (e) {
            this.onError(e);
          }
          if (null != data) {
            this.onData(data);
          }
        };
        Request.prototype.hasXDR = function() {
          return 'undefined' !== typeof global.XDomainRequest && !this.xs && this.enablesXDR;
        };
        Request.prototype.abort = function() {
          this.cleanup();
        };
        if (global.document) {
          Request.requestsCount = 0;
          Request.requests = {};
          if (global.attachEvent) {
            global.attachEvent('onunload', unloadHandler);
          } else if (global.addEventListener) {
            global.addEventListener('beforeunload', unloadHandler, false);
          }
        }
        function unloadHandler() {
          for (var i in Request.requests) {
            if (Request.requests.hasOwnProperty(i)) {
              Request.requests[i].abort();
            }
          }
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./polling": 8,
      "component-emitter": 15,
      "component-inherit": 16,
      "debug": 17,
      "xmlhttprequest-ssl": 10
    }],
    8: [function(_dereq_, module, exports) {
      var Transport = _dereq_('../transport');
      var parseqs = _dereq_('parseqs');
      var parser = _dereq_('engine.io-parser');
      var inherit = _dereq_('component-inherit');
      var yeast = _dereq_('yeast');
      var debug = _dereq_('debug')('engine.io-client:polling');
      module.exports = Polling;
      var hasXHR2 = (function() {
        var XMLHttpRequest = _dereq_('xmlhttprequest-ssl');
        var xhr = new XMLHttpRequest({xdomain: false});
        return null != xhr.responseType;
      })();
      function Polling(opts) {
        var forceBase64 = (opts && opts.forceBase64);
        if (!hasXHR2 || forceBase64) {
          this.supportsBinary = false;
        }
        Transport.call(this, opts);
      }
      inherit(Polling, Transport);
      Polling.prototype.name = 'polling';
      Polling.prototype.doOpen = function() {
        this.poll();
      };
      Polling.prototype.pause = function(onPause) {
        var pending = 0;
        var self = this;
        this.readyState = 'pausing';
        function pause() {
          debug('paused');
          self.readyState = 'paused';
          onPause();
        }
        if (this.polling || !this.writable) {
          var total = 0;
          if (this.polling) {
            debug('we are currently polling - waiting to pause');
            total++;
            this.once('pollComplete', function() {
              debug('pre-pause polling complete');
              --total || pause();
            });
          }
          if (!this.writable) {
            debug('we are currently writing - waiting to pause');
            total++;
            this.once('drain', function() {
              debug('pre-pause writing complete');
              --total || pause();
            });
          }
        } else {
          pause();
        }
      };
      Polling.prototype.poll = function() {
        debug('polling');
        this.polling = true;
        this.doPoll();
        this.emit('poll');
      };
      Polling.prototype.onData = function(data) {
        var self = this;
        debug('polling got data %s', data);
        var callback = function(packet, index, total) {
          if ('opening' == self.readyState) {
            self.onOpen();
          }
          if ('close' == packet.type) {
            self.onClose();
            return false;
          }
          self.onPacket(packet);
        };
        parser.decodePayload(data, this.socket.binaryType, callback);
        if ('closed' != this.readyState) {
          this.polling = false;
          this.emit('pollComplete');
          if ('open' == this.readyState) {
            this.poll();
          } else {
            debug('ignoring poll - transport state "%s"', this.readyState);
          }
        }
      };
      Polling.prototype.doClose = function() {
        var self = this;
        function close() {
          debug('writing close packet');
          self.write([{type: 'close'}]);
        }
        if ('open' == this.readyState) {
          debug('transport open - closing');
          close();
        } else {
          debug('transport not open - deferring close');
          this.once('open', close);
        }
      };
      Polling.prototype.write = function(packets) {
        var self = this;
        this.writable = false;
        var callbackfn = function() {
          self.writable = true;
          self.emit('drain');
        };
        var self = this;
        parser.encodePayload(packets, this.supportsBinary, function(data) {
          self.doWrite(data, callbackfn);
        });
      };
      Polling.prototype.uri = function() {
        var query = this.query || {};
        var schema = this.secure ? 'https' : 'http';
        var port = '';
        if (false !== this.timestampRequests) {
          query[this.timestampParam] = yeast();
        }
        if (!this.supportsBinary && !query.sid) {
          query.b64 = 1;
        }
        query = parseqs.encode(query);
        if (this.port && (('https' == schema && this.port != 443) || ('http' == schema && this.port != 80))) {
          port = ':' + this.port;
        }
        if (query.length) {
          query = '?' + query;
        }
        var ipv6 = this.hostname.indexOf(':') !== -1;
        return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
      };
    }, {
      "../transport": 4,
      "component-inherit": 16,
      "debug": 17,
      "engine.io-parser": 19,
      "parseqs": 27,
      "xmlhttprequest-ssl": 10,
      "yeast": 30
    }],
    9: [function(_dereq_, module, exports) {
      (function(global) {
        var Transport = _dereq_('../transport');
        var parser = _dereq_('engine.io-parser');
        var parseqs = _dereq_('parseqs');
        var inherit = _dereq_('component-inherit');
        var yeast = _dereq_('yeast');
        var debug = _dereq_('debug')('engine.io-client:websocket');
        var BrowserWebSocket = global.WebSocket || global.MozWebSocket;
        var WebSocket = BrowserWebSocket;
        if (!WebSocket && typeof window === 'undefined') {
          try {
            WebSocket = _dereq_('ws');
          } catch (e) {}
        }
        module.exports = WS;
        function WS(opts) {
          var forceBase64 = (opts && opts.forceBase64);
          if (forceBase64) {
            this.supportsBinary = false;
          }
          this.perMessageDeflate = opts.perMessageDeflate;
          Transport.call(this, opts);
        }
        inherit(WS, Transport);
        WS.prototype.name = 'websocket';
        WS.prototype.supportsBinary = true;
        WS.prototype.doOpen = function() {
          if (!this.check()) {
            return;
          }
          var self = this;
          var uri = this.uri();
          var protocols = void(0);
          var opts = {
            agent: this.agent,
            perMessageDeflate: this.perMessageDeflate
          };
          opts.pfx = this.pfx;
          opts.key = this.key;
          opts.passphrase = this.passphrase;
          opts.cert = this.cert;
          opts.ca = this.ca;
          opts.ciphers = this.ciphers;
          opts.rejectUnauthorized = this.rejectUnauthorized;
          if (this.extraHeaders) {
            opts.headers = this.extraHeaders;
          }
          this.ws = BrowserWebSocket ? new WebSocket(uri) : new WebSocket(uri, protocols, opts);
          if (this.ws.binaryType === undefined) {
            this.supportsBinary = false;
          }
          if (this.ws.supports && this.ws.supports.binary) {
            this.supportsBinary = true;
            this.ws.binaryType = 'buffer';
          } else {
            this.ws.binaryType = 'arraybuffer';
          }
          this.addEventListeners();
        };
        WS.prototype.addEventListeners = function() {
          var self = this;
          this.ws.onopen = function() {
            self.onOpen();
          };
          this.ws.onclose = function() {
            self.onClose();
          };
          this.ws.onmessage = function(ev) {
            self.onData(ev.data);
          };
          this.ws.onerror = function(e) {
            self.onError('websocket error', e);
          };
        };
        if ('undefined' != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)) {
          WS.prototype.onData = function(data) {
            var self = this;
            setTimeout(function() {
              Transport.prototype.onData.call(self, data);
            }, 0);
          };
        }
        WS.prototype.write = function(packets) {
          var self = this;
          this.writable = false;
          var total = packets.length;
          for (var i = 0,
              l = total; i < l; i++) {
            (function(packet) {
              parser.encodePacket(packet, self.supportsBinary, function(data) {
                if (!BrowserWebSocket) {
                  var opts = {};
                  if (packet.options) {
                    opts.compress = packet.options.compress;
                  }
                  if (self.perMessageDeflate) {
                    var len = 'string' == typeof data ? global.Buffer.byteLength(data) : data.length;
                    if (len < self.perMessageDeflate.threshold) {
                      opts.compress = false;
                    }
                  }
                }
                try {
                  if (BrowserWebSocket) {
                    self.ws.send(data);
                  } else {
                    self.ws.send(data, opts);
                  }
                } catch (e) {
                  debug('websocket closed before onclose event');
                }
                --total || done();
              });
            })(packets[i]);
          }
          function done() {
            self.emit('flush');
            setTimeout(function() {
              self.writable = true;
              self.emit('drain');
            }, 0);
          }
        };
        WS.prototype.onClose = function() {
          Transport.prototype.onClose.call(this);
        };
        WS.prototype.doClose = function() {
          if (typeof this.ws !== 'undefined') {
            this.ws.close();
          }
        };
        WS.prototype.uri = function() {
          var query = this.query || {};
          var schema = this.secure ? 'wss' : 'ws';
          var port = '';
          if (this.port && (('wss' == schema && this.port != 443) || ('ws' == schema && this.port != 80))) {
            port = ':' + this.port;
          }
          if (this.timestampRequests) {
            query[this.timestampParam] = yeast();
          }
          if (!this.supportsBinary) {
            query.b64 = 1;
          }
          query = parseqs.encode(query);
          if (query.length) {
            query = '?' + query;
          }
          var ipv6 = this.hostname.indexOf(':') !== -1;
          return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
        };
        WS.prototype.check = function() {
          return !!WebSocket && !('__initialize' in WebSocket && this.name === WS.prototype.name);
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "../transport": 4,
      "component-inherit": 16,
      "debug": 17,
      "engine.io-parser": 19,
      "parseqs": 27,
      "ws": undefined,
      "yeast": 30
    }],
    10: [function(_dereq_, module, exports) {
      var hasCORS = _dereq_('has-cors');
      module.exports = function(opts) {
        var xdomain = opts.xdomain;
        var xscheme = opts.xscheme;
        var enablesXDR = opts.enablesXDR;
        try {
          if ('undefined' != typeof XMLHttpRequest && (!xdomain || hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (e) {}
        try {
          if ('undefined' != typeof XDomainRequest && !xscheme && enablesXDR) {
            return new XDomainRequest();
          }
        } catch (e) {}
        if (!xdomain) {
          try {
            return new ActiveXObject('Microsoft.XMLHTTP');
          } catch (e) {}
        }
      };
    }, {"has-cors": 22}],
    11: [function(_dereq_, module, exports) {
      module.exports = after;
      function after(count, callback, err_cb) {
        var bail = false;
        err_cb = err_cb || noop;
        proxy.count = count;
        return (count === 0) ? callback() : proxy;
        function proxy(err, result) {
          if (proxy.count <= 0) {
            throw new Error('after called too many times');
          }
          --proxy.count;
          if (err) {
            bail = true;
            callback(err);
            callback = err_cb;
          } else if (proxy.count === 0 && !bail) {
            callback(null, result);
          }
        }
      }
      function noop() {}
    }, {}],
    12: [function(_dereq_, module, exports) {
      module.exports = function(arraybuffer, start, end) {
        var bytes = arraybuffer.byteLength;
        start = start || 0;
        end = end || bytes;
        if (arraybuffer.slice) {
          return arraybuffer.slice(start, end);
        }
        if (start < 0) {
          start += bytes;
        }
        if (end < 0) {
          end += bytes;
        }
        if (end > bytes) {
          end = bytes;
        }
        if (start >= bytes || start >= end || bytes === 0) {
          return new ArrayBuffer(0);
        }
        var abv = new Uint8Array(arraybuffer);
        var result = new Uint8Array(end - start);
        for (var i = start,
            ii = 0; i < end; i++, ii++) {
          result[ii] = abv[i];
        }
        return result.buffer;
      };
    }, {}],
    13: [function(_dereq_, module, exports) {
      (function(chars) {
        "use strict";
        exports.encode = function(arraybuffer) {
          var bytes = new Uint8Array(arraybuffer),
              i,
              len = bytes.length,
              base64 = "";
          for (i = 0; i < len; i += 3) {
            base64 += chars[bytes[i] >> 2];
            base64 += chars[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
            base64 += chars[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
            base64 += chars[bytes[i + 2] & 63];
          }
          if ((len % 3) === 2) {
            base64 = base64.substring(0, base64.length - 1) + "=";
          } else if (len % 3 === 1) {
            base64 = base64.substring(0, base64.length - 2) + "==";
          }
          return base64;
        };
        exports.decode = function(base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;
          if (base64[base64.length - 1] === "=") {
            bufferLength--;
            if (base64[base64.length - 2] === "=") {
              bufferLength--;
            }
          }
          var arraybuffer = new ArrayBuffer(bufferLength),
              bytes = new Uint8Array(arraybuffer);
          for (i = 0; i < len; i += 4) {
            encoded1 = chars.indexOf(base64[i]);
            encoded2 = chars.indexOf(base64[i + 1]);
            encoded3 = chars.indexOf(base64[i + 2]);
            encoded4 = chars.indexOf(base64[i + 3]);
            bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
            bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
            bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
          }
          return arraybuffer;
        };
      })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/");
    }, {}],
    14: [function(_dereq_, module, exports) {
      (function(global) {
        var BlobBuilder = global.BlobBuilder || global.WebKitBlobBuilder || global.MSBlobBuilder || global.MozBlobBuilder;
        var blobSupported = (function() {
          try {
            var a = new Blob(['hi']);
            return a.size === 2;
          } catch (e) {
            return false;
          }
        })();
        var blobSupportsArrayBufferView = blobSupported && (function() {
          try {
            var b = new Blob([new Uint8Array([1, 2])]);
            return b.size === 2;
          } catch (e) {
            return false;
          }
        })();
        var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
        function mapArrayBufferViews(ary) {
          for (var i = 0; i < ary.length; i++) {
            var chunk = ary[i];
            if (chunk.buffer instanceof ArrayBuffer) {
              var buf = chunk.buffer;
              if (chunk.byteLength !== buf.byteLength) {
                var copy = new Uint8Array(chunk.byteLength);
                copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
                buf = copy.buffer;
              }
              ary[i] = buf;
            }
          }
        }
        function BlobBuilderConstructor(ary, options) {
          options = options || {};
          var bb = new BlobBuilder();
          mapArrayBufferViews(ary);
          for (var i = 0; i < ary.length; i++) {
            bb.append(ary[i]);
          }
          return (options.type) ? bb.getBlob(options.type) : bb.getBlob();
        }
        ;
        function BlobConstructor(ary, options) {
          mapArrayBufferViews(ary);
          return new Blob(ary, options || {});
        }
        ;
        module.exports = (function() {
          if (blobSupported) {
            return blobSupportsArrayBufferView ? global.Blob : BlobConstructor;
          } else if (blobBuilderSupported) {
            return BlobBuilderConstructor;
          } else {
            return undefined;
          }
        })();
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    15: [function(_dereq_, module, exports) {
      module.exports = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      ;
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks[event] = this._callbacks[event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        var self = this;
        this._callbacks = this._callbacks || {};
        function on() {
          self.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks[event];
        if (!callbacks)
          return this;
        if (1 == arguments.length) {
          delete this._callbacks[event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks[event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0,
              len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks[event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }, {}],
    16: [function(_dereq_, module, exports) {
      module.exports = function(a, b) {
        var fn = function() {};
        fn.prototype = b.prototype;
        a.prototype = new fn;
        a.prototype.constructor = a;
      };
    }, {}],
    17: [function(_dereq_, module, exports) {
      exports = module.exports = _dereq_('./debug');
      exports.log = log;
      exports.formatArgs = formatArgs;
      exports.save = save;
      exports.load = load;
      exports.useColors = useColors;
      exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
      exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
      function useColors() {
        return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
      }
      exports.formatters.j = function(v) {
        return JSON.stringify(v);
      };
      function formatArgs() {
        var args = arguments;
        var useColors = this.useColors;
        args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
        if (!useColors)
          return args;
        var c = 'color: ' + this.color;
        args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
        var index = 0;
        var lastC = 0;
        args[0].replace(/%[a-z%]/g, function(match) {
          if ('%%' === match)
            return;
          index++;
          if ('%c' === match) {
            lastC = index;
          }
        });
        args.splice(lastC, 0, c);
        return args;
      }
      function log() {
        return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }
      function save(namespaces) {
        try {
          if (null == namespaces) {
            exports.storage.removeItem('debug');
          } else {
            exports.storage.debug = namespaces;
          }
        } catch (e) {}
      }
      function load() {
        var r;
        try {
          r = exports.storage.debug;
        } catch (e) {}
        return r;
      }
      exports.enable(load());
      function localstorage() {
        try {
          return window.localStorage;
        } catch (e) {}
      }
    }, {"./debug": 18}],
    18: [function(_dereq_, module, exports) {
      exports = module.exports = debug;
      exports.coerce = coerce;
      exports.disable = disable;
      exports.enable = enable;
      exports.enabled = enabled;
      exports.humanize = _dereq_('ms');
      exports.names = [];
      exports.skips = [];
      exports.formatters = {};
      var prevColor = 0;
      var prevTime;
      function selectColor() {
        return exports.colors[prevColor++ % exports.colors.length];
      }
      function debug(namespace) {
        function disabled() {}
        disabled.enabled = false;
        function enabled() {
          var self = enabled;
          var curr = +new Date();
          var ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          if (null == self.useColors)
            self.useColors = exports.useColors();
          if (null == self.color && self.useColors)
            self.color = selectColor();
          var args = Array.prototype.slice.call(arguments);
          args[0] = exports.coerce(args[0]);
          if ('string' !== typeof args[0]) {
            args = ['%o'].concat(args);
          }
          var index = 0;
          args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
            if (match === '%%')
              return match;
            index++;
            var formatter = exports.formatters[format];
            if ('function' === typeof formatter) {
              var val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          if ('function' === typeof exports.formatArgs) {
            args = exports.formatArgs.apply(self, args);
          }
          var logFn = enabled.log || exports.log || console.log.bind(console);
          logFn.apply(self, args);
        }
        enabled.enabled = true;
        var fn = exports.enabled(namespace) ? enabled : disabled;
        fn.namespace = namespace;
        return fn;
      }
      function enable(namespaces) {
        exports.save(namespaces);
        var split = (namespaces || '').split(/[\s,]+/);
        var len = split.length;
        for (var i = 0; i < len; i++) {
          if (!split[i])
            continue;
          namespaces = split[i].replace(/\*/g, '.*?');
          if (namespaces[0] === '-') {
            exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
          } else {
            exports.names.push(new RegExp('^' + namespaces + '$'));
          }
        }
      }
      function disable() {
        exports.enable('');
      }
      function enabled(name) {
        var i,
            len;
        for (i = 0, len = exports.skips.length; i < len; i++) {
          if (exports.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = exports.names.length; i < len; i++) {
          if (exports.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error)
          return val.stack || val.message;
        return val;
      }
    }, {"ms": 25}],
    19: [function(_dereq_, module, exports) {
      (function(global) {
        var keys = _dereq_('./keys');
        var hasBinary = _dereq_('has-binary');
        var sliceBuffer = _dereq_('arraybuffer.slice');
        var base64encoder = _dereq_('base64-arraybuffer');
        var after = _dereq_('after');
        var utf8 = _dereq_('utf8');
        var isAndroid = navigator.userAgent.match(/Android/i);
        var isPhantomJS = /PhantomJS/i.test(navigator.userAgent);
        var dontSendBlobs = isAndroid || isPhantomJS;
        exports.protocol = 3;
        var packets = exports.packets = {
          open: 0,
          close: 1,
          ping: 2,
          pong: 3,
          message: 4,
          upgrade: 5,
          noop: 6
        };
        var packetslist = keys(packets);
        var err = {
          type: 'error',
          data: 'parser error'
        };
        var Blob = _dereq_('blob');
        exports.encodePacket = function(packet, supportsBinary, utf8encode, callback) {
          if ('function' == typeof supportsBinary) {
            callback = supportsBinary;
            supportsBinary = false;
          }
          if ('function' == typeof utf8encode) {
            callback = utf8encode;
            utf8encode = null;
          }
          var data = (packet.data === undefined) ? undefined : packet.data.buffer || packet.data;
          if (global.ArrayBuffer && data instanceof ArrayBuffer) {
            return encodeArrayBuffer(packet, supportsBinary, callback);
          } else if (Blob && data instanceof global.Blob) {
            return encodeBlob(packet, supportsBinary, callback);
          }
          if (data && data.base64) {
            return encodeBase64Object(packet, callback);
          }
          var encoded = packets[packet.type];
          if (undefined !== packet.data) {
            encoded += utf8encode ? utf8.encode(String(packet.data)) : String(packet.data);
          }
          return callback('' + encoded);
        };
        function encodeBase64Object(packet, callback) {
          var message = 'b' + exports.packets[packet.type] + packet.data.data;
          return callback(message);
        }
        function encodeArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          var data = packet.data;
          var contentArray = new Uint8Array(data);
          var resultBuffer = new Uint8Array(1 + data.byteLength);
          resultBuffer[0] = packets[packet.type];
          for (var i = 0; i < contentArray.length; i++) {
            resultBuffer[i + 1] = contentArray[i];
          }
          return callback(resultBuffer.buffer);
        }
        function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          var fr = new FileReader();
          fr.onload = function() {
            packet.data = fr.result;
            exports.encodePacket(packet, supportsBinary, true, callback);
          };
          return fr.readAsArrayBuffer(packet.data);
        }
        function encodeBlob(packet, supportsBinary, callback) {
          if (!supportsBinary) {
            return exports.encodeBase64Packet(packet, callback);
          }
          if (dontSendBlobs) {
            return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
          }
          var length = new Uint8Array(1);
          length[0] = packets[packet.type];
          var blob = new Blob([length.buffer, packet.data]);
          return callback(blob);
        }
        exports.encodeBase64Packet = function(packet, callback) {
          var message = 'b' + exports.packets[packet.type];
          if (Blob && packet.data instanceof global.Blob) {
            var fr = new FileReader();
            fr.onload = function() {
              var b64 = fr.result.split(',')[1];
              callback(message + b64);
            };
            return fr.readAsDataURL(packet.data);
          }
          var b64data;
          try {
            b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
          } catch (e) {
            var typed = new Uint8Array(packet.data);
            var basic = new Array(typed.length);
            for (var i = 0; i < typed.length; i++) {
              basic[i] = typed[i];
            }
            b64data = String.fromCharCode.apply(null, basic);
          }
          message += global.btoa(b64data);
          return callback(message);
        };
        exports.decodePacket = function(data, binaryType, utf8decode) {
          if (typeof data == 'string' || data === undefined) {
            if (data.charAt(0) == 'b') {
              return exports.decodeBase64Packet(data.substr(1), binaryType);
            }
            if (utf8decode) {
              try {
                data = utf8.decode(data);
              } catch (e) {
                return err;
              }
            }
            var type = data.charAt(0);
            if (Number(type) != type || !packetslist[type]) {
              return err;
            }
            if (data.length > 1) {
              return {
                type: packetslist[type],
                data: data.substring(1)
              };
            } else {
              return {type: packetslist[type]};
            }
          }
          var asArray = new Uint8Array(data);
          var type = asArray[0];
          var rest = sliceBuffer(data, 1);
          if (Blob && binaryType === 'blob') {
            rest = new Blob([rest]);
          }
          return {
            type: packetslist[type],
            data: rest
          };
        };
        exports.decodeBase64Packet = function(msg, binaryType) {
          var type = packetslist[msg.charAt(0)];
          if (!global.ArrayBuffer) {
            return {
              type: type,
              data: {
                base64: true,
                data: msg.substr(1)
              }
            };
          }
          var data = base64encoder.decode(msg.substr(1));
          if (binaryType === 'blob' && Blob) {
            data = new Blob([data]);
          }
          return {
            type: type,
            data: data
          };
        };
        exports.encodePayload = function(packets, supportsBinary, callback) {
          if (typeof supportsBinary == 'function') {
            callback = supportsBinary;
            supportsBinary = null;
          }
          var isBinary = hasBinary(packets);
          if (supportsBinary && isBinary) {
            if (Blob && !dontSendBlobs) {
              return exports.encodePayloadAsBlob(packets, callback);
            }
            return exports.encodePayloadAsArrayBuffer(packets, callback);
          }
          if (!packets.length) {
            return callback('0:');
          }
          function setLengthHeader(message) {
            return message.length + ':' + message;
          }
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, !isBinary ? false : supportsBinary, true, function(message) {
              doneCallback(null, setLengthHeader(message));
            });
          }
          map(packets, encodeOne, function(err, results) {
            return callback(results.join(''));
          });
        };
        function map(ary, each, done) {
          var result = new Array(ary.length);
          var next = after(ary.length, done);
          var eachWithIndex = function(i, el, cb) {
            each(el, function(error, msg) {
              result[i] = msg;
              cb(error, result);
            });
          };
          for (var i = 0; i < ary.length; i++) {
            eachWithIndex(i, ary[i], next);
          }
        }
        exports.decodePayload = function(data, binaryType, callback) {
          if (typeof data != 'string') {
            return exports.decodePayloadAsBinary(data, binaryType, callback);
          }
          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }
          var packet;
          if (data == '') {
            return callback(err, 0, 1);
          }
          var length = '',
              n,
              msg;
          for (var i = 0,
              l = data.length; i < l; i++) {
            var chr = data.charAt(i);
            if (':' != chr) {
              length += chr;
            } else {
              if ('' == length || (length != (n = Number(length)))) {
                return callback(err, 0, 1);
              }
              msg = data.substr(i + 1, n);
              if (length != msg.length) {
                return callback(err, 0, 1);
              }
              if (msg.length) {
                packet = exports.decodePacket(msg, binaryType, true);
                if (err.type == packet.type && err.data == packet.data) {
                  return callback(err, 0, 1);
                }
                var ret = callback(packet, i + n, l);
                if (false === ret)
                  return;
              }
              i += n;
              length = '';
            }
          }
          if (length != '') {
            return callback(err, 0, 1);
          }
        };
        exports.encodePayloadAsArrayBuffer = function(packets, callback) {
          if (!packets.length) {
            return callback(new ArrayBuffer(0));
          }
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function(data) {
              return doneCallback(null, data);
            });
          }
          map(packets, encodeOne, function(err, encodedPackets) {
            var totalLength = encodedPackets.reduce(function(acc, p) {
              var len;
              if (typeof p === 'string') {
                len = p.length;
              } else {
                len = p.byteLength;
              }
              return acc + len.toString().length + len + 2;
            }, 0);
            var resultArray = new Uint8Array(totalLength);
            var bufferIndex = 0;
            encodedPackets.forEach(function(p) {
              var isString = typeof p === 'string';
              var ab = p;
              if (isString) {
                var view = new Uint8Array(p.length);
                for (var i = 0; i < p.length; i++) {
                  view[i] = p.charCodeAt(i);
                }
                ab = view.buffer;
              }
              if (isString) {
                resultArray[bufferIndex++] = 0;
              } else {
                resultArray[bufferIndex++] = 1;
              }
              var lenStr = ab.byteLength.toString();
              for (var i = 0; i < lenStr.length; i++) {
                resultArray[bufferIndex++] = parseInt(lenStr[i]);
              }
              resultArray[bufferIndex++] = 255;
              var view = new Uint8Array(ab);
              for (var i = 0; i < view.length; i++) {
                resultArray[bufferIndex++] = view[i];
              }
            });
            return callback(resultArray.buffer);
          });
        };
        exports.encodePayloadAsBlob = function(packets, callback) {
          function encodeOne(packet, doneCallback) {
            exports.encodePacket(packet, true, true, function(encoded) {
              var binaryIdentifier = new Uint8Array(1);
              binaryIdentifier[0] = 1;
              if (typeof encoded === 'string') {
                var view = new Uint8Array(encoded.length);
                for (var i = 0; i < encoded.length; i++) {
                  view[i] = encoded.charCodeAt(i);
                }
                encoded = view.buffer;
                binaryIdentifier[0] = 0;
              }
              var len = (encoded instanceof ArrayBuffer) ? encoded.byteLength : encoded.size;
              var lenStr = len.toString();
              var lengthAry = new Uint8Array(lenStr.length + 1);
              for (var i = 0; i < lenStr.length; i++) {
                lengthAry[i] = parseInt(lenStr[i]);
              }
              lengthAry[lenStr.length] = 255;
              if (Blob) {
                var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
                doneCallback(null, blob);
              }
            });
          }
          map(packets, encodeOne, function(err, results) {
            return callback(new Blob(results));
          });
        };
        exports.decodePayloadAsBinary = function(data, binaryType, callback) {
          if (typeof binaryType === 'function') {
            callback = binaryType;
            binaryType = null;
          }
          var bufferTail = data;
          var buffers = [];
          var numberTooLong = false;
          while (bufferTail.byteLength > 0) {
            var tailArray = new Uint8Array(bufferTail);
            var isString = tailArray[0] === 0;
            var msgLength = '';
            for (var i = 1; ; i++) {
              if (tailArray[i] == 255)
                break;
              if (msgLength.length > 310) {
                numberTooLong = true;
                break;
              }
              msgLength += tailArray[i];
            }
            if (numberTooLong)
              return callback(err, 0, 1);
            bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
            msgLength = parseInt(msgLength);
            var msg = sliceBuffer(bufferTail, 0, msgLength);
            if (isString) {
              try {
                msg = String.fromCharCode.apply(null, new Uint8Array(msg));
              } catch (e) {
                var typed = new Uint8Array(msg);
                msg = '';
                for (var i = 0; i < typed.length; i++) {
                  msg += String.fromCharCode(typed[i]);
                }
              }
            }
            buffers.push(msg);
            bufferTail = sliceBuffer(bufferTail, msgLength);
          }
          var total = buffers.length;
          buffers.forEach(function(buffer, i) {
            callback(exports.decodePacket(buffer, binaryType, true), i, total);
          });
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./keys": 20,
      "after": 11,
      "arraybuffer.slice": 12,
      "base64-arraybuffer": 13,
      "blob": 14,
      "has-binary": 21,
      "utf8": 29
    }],
    20: [function(_dereq_, module, exports) {
      module.exports = Object.keys || function keys(obj) {
        var arr = [];
        var has = Object.prototype.hasOwnProperty;
        for (var i in obj) {
          if (has.call(obj, i)) {
            arr.push(i);
          }
        }
        return arr;
      };
    }, {}],
    21: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        module.exports = hasBinary;
        function hasBinary(data) {
          function _hasBinary(obj) {
            if (!obj)
              return false;
            if ((global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer) || (global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              return true;
            }
            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              if (obj.toJSON) {
                obj = obj.toJSON();
              }
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }
            return false;
          }
          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {"isarray": 24}],
    22: [function(_dereq_, module, exports) {
      try {
        module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
      } catch (err) {
        module.exports = false;
      }
    }, {}],
    23: [function(_dereq_, module, exports) {
      var indexOf = [].indexOf;
      module.exports = function(arr, obj) {
        if (indexOf)
          return arr.indexOf(obj);
        for (var i = 0; i < arr.length; ++i) {
          if (arr[i] === obj)
            return i;
        }
        return -1;
      };
    }, {}],
    24: [function(_dereq_, module, exports) {
      module.exports = Array.isArray || function(arr) {
        return Object.prototype.toString.call(arr) == '[object Array]';
      };
    }, {}],
    25: [function(_dereq_, module, exports) {
      var s = 1000;
      var m = s * 60;
      var h = m * 60;
      var d = h * 24;
      var y = d * 365.25;
      module.exports = function(val, options) {
        options = options || {};
        if ('string' == typeof val)
          return parse(val);
        return options.long ? long(val) : short(val);
      };
      function parse(str) {
        str = '' + str;
        if (str.length > 10000)
          return;
        var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
        if (!match)
          return;
        var n = parseFloat(match[1]);
        var type = (match[2] || 'ms').toLowerCase();
        switch (type) {
          case 'years':
          case 'year':
          case 'yrs':
          case 'yr':
          case 'y':
            return n * y;
          case 'days':
          case 'day':
          case 'd':
            return n * d;
          case 'hours':
          case 'hour':
          case 'hrs':
          case 'hr':
          case 'h':
            return n * h;
          case 'minutes':
          case 'minute':
          case 'mins':
          case 'min':
          case 'm':
            return n * m;
          case 'seconds':
          case 'second':
          case 'secs':
          case 'sec':
          case 's':
            return n * s;
          case 'milliseconds':
          case 'millisecond':
          case 'msecs':
          case 'msec':
          case 'ms':
            return n;
        }
      }
      function short(ms) {
        if (ms >= d)
          return Math.round(ms / d) + 'd';
        if (ms >= h)
          return Math.round(ms / h) + 'h';
        if (ms >= m)
          return Math.round(ms / m) + 'm';
        if (ms >= s)
          return Math.round(ms / s) + 's';
        return ms + 'ms';
      }
      function long(ms) {
        return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
      }
      function plural(ms, n, name) {
        if (ms < n)
          return;
        if (ms < n * 1.5)
          return Math.floor(ms / n) + ' ' + name;
        return Math.ceil(ms / n) + ' ' + name + 's';
      }
    }, {}],
    26: [function(_dereq_, module, exports) {
      (function(global) {
        var rvalidchars = /^[\],:{}\s]*$/;
        var rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
        var rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
        var rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g;
        var rtrimLeft = /^\s+/;
        var rtrimRight = /\s+$/;
        module.exports = function parsejson(data) {
          if ('string' != typeof data || !data) {
            return null;
          }
          data = data.replace(rtrimLeft, '').replace(rtrimRight, '');
          if (global.JSON && JSON.parse) {
            return JSON.parse(data);
          }
          if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
            return (new Function('return ' + data))();
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    27: [function(_dereq_, module, exports) {
      exports.encode = function(obj) {
        var str = '';
        for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
            if (str.length)
              str += '&';
            str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
          }
        }
        return str;
      };
      exports.decode = function(qs) {
        var qry = {};
        var pairs = qs.split('&');
        for (var i = 0,
            l = pairs.length; i < l; i++) {
          var pair = pairs[i].split('=');
          qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
        return qry;
      };
    }, {}],
    28: [function(_dereq_, module, exports) {
      var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];
      module.exports = function parseuri(str) {
        var src = str,
            b = str.indexOf('['),
            e = str.indexOf(']');
        if (b != -1 && e != -1) {
          str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
        }
        var m = re.exec(str || ''),
            uri = {},
            i = 14;
        while (i--) {
          uri[parts[i]] = m[i] || '';
        }
        if (b != -1 && e != -1) {
          uri.source = src;
          uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
          uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
          uri.ipv6uri = true;
        }
        return uri;
      };
    }, {}],
    29: [function(_dereq_, module, exports) {
      (function(global) {
        ;
        (function(root) {
          var freeExports = typeof exports == 'object' && exports;
          var freeModule = typeof module == 'object' && module && module.exports == freeExports && module;
          var freeGlobal = typeof global == 'object' && global;
          if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
            root = freeGlobal;
          }
          var stringFromCharCode = String.fromCharCode;
          function ucs2decode(string) {
            var output = [];
            var counter = 0;
            var length = string.length;
            var value;
            var extra;
            while (counter < length) {
              value = string.charCodeAt(counter++);
              if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                  output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                  output.push(value);
                  counter--;
                }
              } else {
                output.push(value);
              }
            }
            return output;
          }
          function ucs2encode(array) {
            var length = array.length;
            var index = -1;
            var value;
            var output = '';
            while (++index < length) {
              value = array[index];
              if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
              }
              output += stringFromCharCode(value);
            }
            return output;
          }
          function checkScalarValue(codePoint) {
            if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
              throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
            }
          }
          function createByte(codePoint, shift) {
            return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
          }
          function encodeCodePoint(codePoint) {
            if ((codePoint & 0xFFFFFF80) == 0) {
              return stringFromCharCode(codePoint);
            }
            var symbol = '';
            if ((codePoint & 0xFFFFF800) == 0) {
              symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
            } else if ((codePoint & 0xFFFF0000) == 0) {
              checkScalarValue(codePoint);
              symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
              symbol += createByte(codePoint, 6);
            } else if ((codePoint & 0xFFE00000) == 0) {
              symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
              symbol += createByte(codePoint, 12);
              symbol += createByte(codePoint, 6);
            }
            symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
            return symbol;
          }
          function utf8encode(string) {
            var codePoints = ucs2decode(string);
            var length = codePoints.length;
            var index = -1;
            var codePoint;
            var byteString = '';
            while (++index < length) {
              codePoint = codePoints[index];
              byteString += encodeCodePoint(codePoint);
            }
            return byteString;
          }
          function readContinuationByte() {
            if (byteIndex >= byteCount) {
              throw Error('Invalid byte index');
            }
            var continuationByte = byteArray[byteIndex] & 0xFF;
            byteIndex++;
            if ((continuationByte & 0xC0) == 0x80) {
              return continuationByte & 0x3F;
            }
            throw Error('Invalid continuation byte');
          }
          function decodeSymbol() {
            var byte1;
            var byte2;
            var byte3;
            var byte4;
            var codePoint;
            if (byteIndex > byteCount) {
              throw Error('Invalid byte index');
            }
            if (byteIndex == byteCount) {
              return false;
            }
            byte1 = byteArray[byteIndex] & 0xFF;
            byteIndex++;
            if ((byte1 & 0x80) == 0) {
              return byte1;
            }
            if ((byte1 & 0xE0) == 0xC0) {
              var byte2 = readContinuationByte();
              codePoint = ((byte1 & 0x1F) << 6) | byte2;
              if (codePoint >= 0x80) {
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }
            if ((byte1 & 0xF0) == 0xE0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
              if (codePoint >= 0x0800) {
                checkScalarValue(codePoint);
                return codePoint;
              } else {
                throw Error('Invalid continuation byte');
              }
            }
            if ((byte1 & 0xF8) == 0xF0) {
              byte2 = readContinuationByte();
              byte3 = readContinuationByte();
              byte4 = readContinuationByte();
              codePoint = ((byte1 & 0x0F) << 0x12) | (byte2 << 0x0C) | (byte3 << 0x06) | byte4;
              if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
                return codePoint;
              }
            }
            throw Error('Invalid UTF-8 detected');
          }
          var byteArray;
          var byteCount;
          var byteIndex;
          function utf8decode(byteString) {
            byteArray = ucs2decode(byteString);
            byteCount = byteArray.length;
            byteIndex = 0;
            var codePoints = [];
            var tmp;
            while ((tmp = decodeSymbol()) !== false) {
              codePoints.push(tmp);
            }
            return ucs2encode(codePoints);
          }
          var utf8 = {
            'version': '2.0.0',
            'encode': utf8encode,
            'decode': utf8decode
          };
          if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
            define(function() {
              return utf8;
            });
          } else if (freeExports && !freeExports.nodeType) {
            if (freeModule) {
              freeModule.exports = utf8;
            } else {
              var object = {};
              var hasOwnProperty = object.hasOwnProperty;
              for (var key in utf8) {
                hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
              }
            }
          } else {
            root.utf8 = utf8;
          }
        }(this));
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    30: [function(_dereq_, module, exports) {
      'use strict';
      var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
          length = 64,
          map = {},
          seed = 0,
          i = 0,
          prev;
      function encode(num) {
        var encoded = '';
        do {
          encoded = alphabet[num % length] + encoded;
          num = Math.floor(num / length);
        } while (num > 0);
        return encoded;
      }
      function decode(str) {
        var decoded = 0;
        for (i = 0; i < str.length; i++) {
          decoded = decoded * length + map[str.charAt(i)];
        }
        return decoded;
      }
      function yeast() {
        var now = encode(+new Date());
        if (now !== prev)
          return seed = 0, prev = now;
        return now + '.' + encode(seed++);
      }
      for (; i < length; i++)
        map[alphabet[i]] = i;
      yeast.encode = encode;
      yeast.decode = decode;
      module.exports = yeast;
    }, {}],
    31: [function(_dereq_, module, exports) {
      var url = _dereq_('./url');
      var parser = _dereq_('socket.io-parser');
      var Manager = _dereq_('./manager');
      var debug = _dereq_('debug')('socket.io-client');
      module.exports = exports = lookup;
      var cache = exports.managers = {};
      function lookup(uri, opts) {
        if (typeof uri == 'object') {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        var parsed = url(uri);
        var source = parsed.source;
        var id = parsed.id;
        var path = parsed.path;
        var sameNamespace = cache[id] && path in cache[id].nsps;
        var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
        var io;
        if (newConnection) {
          debug('ignoring socket cache for %s', source);
          io = Manager(source, opts);
        } else {
          if (!cache[id]) {
            debug('new io instance for %s', source);
            cache[id] = Manager(source, opts);
          }
          io = cache[id];
        }
        return io.socket(parsed.path);
      }
      exports.protocol = parser.protocol;
      exports.connect = lookup;
      exports.Manager = _dereq_('./manager');
      exports.Socket = _dereq_('./socket');
    }, {
      "./manager": 32,
      "./socket": 34,
      "./url": 35,
      "debug": 39,
      "socket.io-parser": 47
    }],
    32: [function(_dereq_, module, exports) {
      var eio = _dereq_('engine.io-client');
      var Socket = _dereq_('./socket');
      var Emitter = _dereq_('component-emitter');
      var parser = _dereq_('socket.io-parser');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:manager');
      var indexOf = _dereq_('indexof');
      var Backoff = _dereq_('backo2');
      var has = Object.prototype.hasOwnProperty;
      module.exports = Manager;
      function Manager(uri, opts) {
        if (!(this instanceof Manager))
          return new Manager(uri, opts);
        if (uri && ('object' == typeof uri)) {
          opts = uri;
          uri = undefined;
        }
        opts = opts || {};
        opts.path = opts.path || '/socket.io';
        this.nsps = {};
        this.subs = [];
        this.opts = opts;
        this.reconnection(opts.reconnection !== false);
        this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
        this.reconnectionDelay(opts.reconnectionDelay || 1000);
        this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
        this.randomizationFactor(opts.randomizationFactor || 0.5);
        this.backoff = new Backoff({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor()
        });
        this.timeout(null == opts.timeout ? 20000 : opts.timeout);
        this.readyState = 'closed';
        this.uri = uri;
        this.connecting = [];
        this.lastPing = null;
        this.encoding = false;
        this.packetBuffer = [];
        this.encoder = new parser.Encoder();
        this.decoder = new parser.Decoder();
        this.autoConnect = opts.autoConnect !== false;
        if (this.autoConnect)
          this.open();
      }
      Manager.prototype.emitAll = function() {
        this.emit.apply(this, arguments);
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
          }
        }
      };
      Manager.prototype.updateSocketIds = function() {
        for (var nsp in this.nsps) {
          if (has.call(this.nsps, nsp)) {
            this.nsps[nsp].id = this.engine.id;
          }
        }
      };
      Emitter(Manager.prototype);
      Manager.prototype.reconnection = function(v) {
        if (!arguments.length)
          return this._reconnection;
        this._reconnection = !!v;
        return this;
      };
      Manager.prototype.reconnectionAttempts = function(v) {
        if (!arguments.length)
          return this._reconnectionAttempts;
        this._reconnectionAttempts = v;
        return this;
      };
      Manager.prototype.reconnectionDelay = function(v) {
        if (!arguments.length)
          return this._reconnectionDelay;
        this._reconnectionDelay = v;
        this.backoff && this.backoff.setMin(v);
        return this;
      };
      Manager.prototype.randomizationFactor = function(v) {
        if (!arguments.length)
          return this._randomizationFactor;
        this._randomizationFactor = v;
        this.backoff && this.backoff.setJitter(v);
        return this;
      };
      Manager.prototype.reconnectionDelayMax = function(v) {
        if (!arguments.length)
          return this._reconnectionDelayMax;
        this._reconnectionDelayMax = v;
        this.backoff && this.backoff.setMax(v);
        return this;
      };
      Manager.prototype.timeout = function(v) {
        if (!arguments.length)
          return this._timeout;
        this._timeout = v;
        return this;
      };
      Manager.prototype.maybeReconnectOnOpen = function() {
        if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
          this.reconnect();
        }
      };
      Manager.prototype.open = Manager.prototype.connect = function(fn) {
        debug('readyState %s', this.readyState);
        if (~this.readyState.indexOf('open'))
          return this;
        debug('opening %s', this.uri);
        this.engine = eio(this.uri, this.opts);
        var socket = this.engine;
        var self = this;
        this.readyState = 'opening';
        this.skipReconnect = false;
        var openSub = on(socket, 'open', function() {
          self.onopen();
          fn && fn();
        });
        var errorSub = on(socket, 'error', function(data) {
          debug('connect_error');
          self.cleanup();
          self.readyState = 'closed';
          self.emitAll('connect_error', data);
          if (fn) {
            var err = new Error('Connection error');
            err.data = data;
            fn(err);
          } else {
            self.maybeReconnectOnOpen();
          }
        });
        if (false !== this._timeout) {
          var timeout = this._timeout;
          debug('connect attempt will timeout after %d', timeout);
          var timer = setTimeout(function() {
            debug('connect attempt timed out after %d', timeout);
            openSub.destroy();
            socket.close();
            socket.emit('error', 'timeout');
            self.emitAll('connect_timeout', timeout);
          }, timeout);
          this.subs.push({destroy: function() {
              clearTimeout(timer);
            }});
        }
        this.subs.push(openSub);
        this.subs.push(errorSub);
        return this;
      };
      Manager.prototype.onopen = function() {
        debug('open');
        this.cleanup();
        this.readyState = 'open';
        this.emit('open');
        var socket = this.engine;
        this.subs.push(on(socket, 'data', bind(this, 'ondata')));
        this.subs.push(on(socket, 'ping', bind(this, 'onping')));
        this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
        this.subs.push(on(socket, 'error', bind(this, 'onerror')));
        this.subs.push(on(socket, 'close', bind(this, 'onclose')));
        this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
      };
      Manager.prototype.onping = function() {
        this.lastPing = new Date;
        this.emitAll('ping');
      };
      Manager.prototype.onpong = function() {
        this.emitAll('pong', new Date - this.lastPing);
      };
      Manager.prototype.ondata = function(data) {
        this.decoder.add(data);
      };
      Manager.prototype.ondecoded = function(packet) {
        this.emit('packet', packet);
      };
      Manager.prototype.onerror = function(err) {
        debug('error', err);
        this.emitAll('error', err);
      };
      Manager.prototype.socket = function(nsp) {
        var socket = this.nsps[nsp];
        if (!socket) {
          socket = new Socket(this, nsp);
          this.nsps[nsp] = socket;
          var self = this;
          socket.on('connecting', onConnecting);
          socket.on('connect', function() {
            socket.id = self.engine.id;
          });
          if (this.autoConnect) {
            onConnecting();
          }
        }
        function onConnecting() {
          if (!~indexOf(self.connecting, socket)) {
            self.connecting.push(socket);
          }
        }
        return socket;
      };
      Manager.prototype.destroy = function(socket) {
        var index = indexOf(this.connecting, socket);
        if (~index)
          this.connecting.splice(index, 1);
        if (this.connecting.length)
          return;
        this.close();
      };
      Manager.prototype.packet = function(packet) {
        debug('writing packet %j', packet);
        var self = this;
        if (!self.encoding) {
          self.encoding = true;
          this.encoder.encode(packet, function(encodedPackets) {
            for (var i = 0; i < encodedPackets.length; i++) {
              self.engine.write(encodedPackets[i], packet.options);
            }
            self.encoding = false;
            self.processPacketQueue();
          });
        } else {
          self.packetBuffer.push(packet);
        }
      };
      Manager.prototype.processPacketQueue = function() {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var pack = this.packetBuffer.shift();
          this.packet(pack);
        }
      };
      Manager.prototype.cleanup = function() {
        debug('cleanup');
        var sub;
        while (sub = this.subs.shift())
          sub.destroy();
        this.packetBuffer = [];
        this.encoding = false;
        this.lastPing = null;
        this.decoder.destroy();
      };
      Manager.prototype.close = Manager.prototype.disconnect = function() {
        debug('disconnect');
        this.skipReconnect = true;
        this.reconnecting = false;
        if ('opening' == this.readyState) {
          this.cleanup();
        }
        this.backoff.reset();
        this.readyState = 'closed';
        if (this.engine)
          this.engine.close();
      };
      Manager.prototype.onclose = function(reason) {
        debug('onclose');
        this.cleanup();
        this.backoff.reset();
        this.readyState = 'closed';
        this.emit('close', reason);
        if (this._reconnection && !this.skipReconnect) {
          this.reconnect();
        }
      };
      Manager.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect)
          return this;
        var self = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) {
          debug('reconnect failed');
          this.backoff.reset();
          this.emitAll('reconnect_failed');
          this.reconnecting = false;
        } else {
          var delay = this.backoff.duration();
          debug('will wait %dms before reconnect attempt', delay);
          this.reconnecting = true;
          var timer = setTimeout(function() {
            if (self.skipReconnect)
              return;
            debug('attempting reconnect');
            self.emitAll('reconnect_attempt', self.backoff.attempts);
            self.emitAll('reconnecting', self.backoff.attempts);
            if (self.skipReconnect)
              return;
            self.open(function(err) {
              if (err) {
                debug('reconnect attempt error');
                self.reconnecting = false;
                self.reconnect();
                self.emitAll('reconnect_error', err.data);
              } else {
                debug('reconnect success');
                self.onreconnect();
              }
            });
          }, delay);
          this.subs.push({destroy: function() {
              clearTimeout(timer);
            }});
        }
      };
      Manager.prototype.onreconnect = function() {
        var attempt = this.backoff.attempts;
        this.reconnecting = false;
        this.backoff.reset();
        this.updateSocketIds();
        this.emitAll('reconnect', attempt);
      };
    }, {
      "./on": 33,
      "./socket": 34,
      "backo2": 36,
      "component-bind": 37,
      "component-emitter": 38,
      "debug": 39,
      "engine.io-client": 1,
      "indexof": 42,
      "socket.io-parser": 47
    }],
    33: [function(_dereq_, module, exports) {
      module.exports = on;
      function on(obj, ev, fn) {
        obj.on(ev, fn);
        return {destroy: function() {
            obj.removeListener(ev, fn);
          }};
      }
    }, {}],
    34: [function(_dereq_, module, exports) {
      var parser = _dereq_('socket.io-parser');
      var Emitter = _dereq_('component-emitter');
      var toArray = _dereq_('to-array');
      var on = _dereq_('./on');
      var bind = _dereq_('component-bind');
      var debug = _dereq_('debug')('socket.io-client:socket');
      var hasBin = _dereq_('has-binary');
      module.exports = exports = Socket;
      var events = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      };
      var emit = Emitter.prototype.emit;
      function Socket(io, nsp) {
        this.io = io;
        this.nsp = nsp;
        this.json = this;
        this.ids = 0;
        this.acks = {};
        this.receiveBuffer = [];
        this.sendBuffer = [];
        this.connected = false;
        this.disconnected = true;
        if (this.io.autoConnect)
          this.open();
      }
      Emitter(Socket.prototype);
      Socket.prototype.subEvents = function() {
        if (this.subs)
          return;
        var io = this.io;
        this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
      };
      Socket.prototype.open = Socket.prototype.connect = function() {
        if (this.connected)
          return this;
        this.subEvents();
        this.io.open();
        if ('open' == this.io.readyState)
          this.onopen();
        this.emit('connecting');
        return this;
      };
      Socket.prototype.send = function() {
        var args = toArray(arguments);
        args.unshift('message');
        this.emit.apply(this, args);
        return this;
      };
      Socket.prototype.emit = function(ev) {
        if (events.hasOwnProperty(ev)) {
          emit.apply(this, arguments);
          return this;
        }
        var args = toArray(arguments);
        var parserType = parser.EVENT;
        if (hasBin(args)) {
          parserType = parser.BINARY_EVENT;
        }
        var packet = {
          type: parserType,
          data: args
        };
        packet.options = {};
        packet.options.compress = !this.flags || false !== this.flags.compress;
        if ('function' == typeof args[args.length - 1]) {
          debug('emitting packet with ack id %d', this.ids);
          this.acks[this.ids] = args.pop();
          packet.id = this.ids++;
        }
        if (this.connected) {
          this.packet(packet);
        } else {
          this.sendBuffer.push(packet);
        }
        delete this.flags;
        return this;
      };
      Socket.prototype.packet = function(packet) {
        packet.nsp = this.nsp;
        this.io.packet(packet);
      };
      Socket.prototype.onopen = function() {
        debug('transport is open - connecting');
        if ('/' != this.nsp) {
          this.packet({type: parser.CONNECT});
        }
      };
      Socket.prototype.onclose = function(reason) {
        debug('close (%s)', reason);
        this.connected = false;
        this.disconnected = true;
        delete this.id;
        this.emit('disconnect', reason);
      };
      Socket.prototype.onpacket = function(packet) {
        if (packet.nsp != this.nsp)
          return;
        switch (packet.type) {
          case parser.CONNECT:
            this.onconnect();
            break;
          case parser.EVENT:
            this.onevent(packet);
            break;
          case parser.BINARY_EVENT:
            this.onevent(packet);
            break;
          case parser.ACK:
            this.onack(packet);
            break;
          case parser.BINARY_ACK:
            this.onack(packet);
            break;
          case parser.DISCONNECT:
            this.ondisconnect();
            break;
          case parser.ERROR:
            this.emit('error', packet.data);
            break;
        }
      };
      Socket.prototype.onevent = function(packet) {
        var args = packet.data || [];
        debug('emitting event %j', args);
        if (null != packet.id) {
          debug('attaching ack callback to event');
          args.push(this.ack(packet.id));
        }
        if (this.connected) {
          emit.apply(this, args);
        } else {
          this.receiveBuffer.push(args);
        }
      };
      Socket.prototype.ack = function(id) {
        var self = this;
        var sent = false;
        return function() {
          if (sent)
            return;
          sent = true;
          var args = toArray(arguments);
          debug('sending ack %j', args);
          var type = hasBin(args) ? parser.BINARY_ACK : parser.ACK;
          self.packet({
            type: type,
            id: id,
            data: args
          });
        };
      };
      Socket.prototype.onack = function(packet) {
        var ack = this.acks[packet.id];
        if ('function' == typeof ack) {
          debug('calling ack %s with %j', packet.id, packet.data);
          ack.apply(this, packet.data);
          delete this.acks[packet.id];
        } else {
          debug('bad ack %s', packet.id);
        }
      };
      Socket.prototype.onconnect = function() {
        this.connected = true;
        this.disconnected = false;
        this.emit('connect');
        this.emitBuffered();
      };
      Socket.prototype.emitBuffered = function() {
        var i;
        for (i = 0; i < this.receiveBuffer.length; i++) {
          emit.apply(this, this.receiveBuffer[i]);
        }
        this.receiveBuffer = [];
        for (i = 0; i < this.sendBuffer.length; i++) {
          this.packet(this.sendBuffer[i]);
        }
        this.sendBuffer = [];
      };
      Socket.prototype.ondisconnect = function() {
        debug('server disconnect (%s)', this.nsp);
        this.destroy();
        this.onclose('io server disconnect');
      };
      Socket.prototype.destroy = function() {
        if (this.subs) {
          for (var i = 0; i < this.subs.length; i++) {
            this.subs[i].destroy();
          }
          this.subs = null;
        }
        this.io.destroy(this);
      };
      Socket.prototype.close = Socket.prototype.disconnect = function() {
        if (this.connected) {
          debug('performing disconnect (%s)', this.nsp);
          this.packet({type: parser.DISCONNECT});
        }
        this.destroy();
        if (this.connected) {
          this.onclose('io client disconnect');
        }
        return this;
      };
      Socket.prototype.compress = function(compress) {
        this.flags = this.flags || {};
        this.flags.compress = compress;
        return this;
      };
    }, {
      "./on": 33,
      "component-bind": 37,
      "component-emitter": 38,
      "debug": 39,
      "has-binary": 41,
      "socket.io-parser": 47,
      "to-array": 51
    }],
    35: [function(_dereq_, module, exports) {
      (function(global) {
        var parseuri = _dereq_('parseuri');
        var debug = _dereq_('debug')('socket.io-client:url');
        module.exports = url;
        function url(uri, loc) {
          var obj = uri;
          var loc = loc || global.location;
          if (null == uri)
            uri = loc.protocol + '//' + loc.host;
          if ('string' == typeof uri) {
            if ('/' == uri.charAt(0)) {
              if ('/' == uri.charAt(1)) {
                uri = loc.protocol + uri;
              } else {
                uri = loc.host + uri;
              }
            }
            if (!/^(https?|wss?):\/\//.test(uri)) {
              debug('protocol-less url %s', uri);
              if ('undefined' != typeof loc) {
                uri = loc.protocol + '//' + uri;
              } else {
                uri = 'https://' + uri;
              }
            }
            debug('parse %s', uri);
            obj = parseuri(uri);
          }
          if (!obj.port) {
            if (/^(http|ws)$/.test(obj.protocol)) {
              obj.port = '80';
            } else if (/^(http|ws)s$/.test(obj.protocol)) {
              obj.port = '443';
            }
          }
          obj.path = obj.path || '/';
          var ipv6 = obj.host.indexOf(':') !== -1;
          var host = ipv6 ? '[' + obj.host + ']' : obj.host;
          obj.id = obj.protocol + '://' + host + ':' + obj.port;
          obj.href = obj.protocol + '://' + host + (loc && loc.port == obj.port ? '' : (':' + obj.port));
          return obj;
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "debug": 39,
      "parseuri": 45
    }],
    36: [function(_dereq_, module, exports) {
      module.exports = Backoff;
      function Backoff(opts) {
        opts = opts || {};
        this.ms = opts.min || 100;
        this.max = opts.max || 10000;
        this.factor = opts.factor || 2;
        this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
        this.attempts = 0;
      }
      Backoff.prototype.duration = function() {
        var ms = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var rand = Math.random();
          var deviation = Math.floor(rand * this.jitter * ms);
          ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
        }
        return Math.min(ms, this.max) | 0;
      };
      Backoff.prototype.reset = function() {
        this.attempts = 0;
      };
      Backoff.prototype.setMin = function(min) {
        this.ms = min;
      };
      Backoff.prototype.setMax = function(max) {
        this.max = max;
      };
      Backoff.prototype.setJitter = function(jitter) {
        this.jitter = jitter;
      };
    }, {}],
    37: [function(_dereq_, module, exports) {
      var slice = [].slice;
      module.exports = function(obj, fn) {
        if ('string' == typeof fn)
          fn = obj[fn];
        if ('function' != typeof fn)
          throw new Error('bind() requires a function');
        var args = slice.call(arguments, 2);
        return function() {
          return fn.apply(obj, args.concat(slice.call(arguments)));
        };
      };
    }, {}],
    38: [function(_dereq_, module, exports) {
      module.exports = Emitter;
      function Emitter(obj) {
        if (obj)
          return mixin(obj);
      }
      ;
      function mixin(obj) {
        for (var key in Emitter.prototype) {
          obj[key] = Emitter.prototype[key];
        }
        return obj;
      }
      Emitter.prototype.on = Emitter.prototype.addEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
        return this;
      };
      Emitter.prototype.once = function(event, fn) {
        function on() {
          this.off(event, on);
          fn.apply(this, arguments);
        }
        on.fn = fn;
        this.on(event, on);
        return this;
      };
      Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function(event, fn) {
        this._callbacks = this._callbacks || {};
        if (0 == arguments.length) {
          this._callbacks = {};
          return this;
        }
        var callbacks = this._callbacks['$' + event];
        if (!callbacks)
          return this;
        if (1 == arguments.length) {
          delete this._callbacks['$' + event];
          return this;
        }
        var cb;
        for (var i = 0; i < callbacks.length; i++) {
          cb = callbacks[i];
          if (cb === fn || cb.fn === fn) {
            callbacks.splice(i, 1);
            break;
          }
        }
        return this;
      };
      Emitter.prototype.emit = function(event) {
        this._callbacks = this._callbacks || {};
        var args = [].slice.call(arguments, 1),
            callbacks = this._callbacks['$' + event];
        if (callbacks) {
          callbacks = callbacks.slice(0);
          for (var i = 0,
              len = callbacks.length; i < len; ++i) {
            callbacks[i].apply(this, args);
          }
        }
        return this;
      };
      Emitter.prototype.listeners = function(event) {
        this._callbacks = this._callbacks || {};
        return this._callbacks['$' + event] || [];
      };
      Emitter.prototype.hasListeners = function(event) {
        return !!this.listeners(event).length;
      };
    }, {}],
    39: [function(_dereq_, module, exports) {
      arguments[4][17][0].apply(exports, arguments);
    }, {
      "./debug": 40,
      "dup": 17
    }],
    40: [function(_dereq_, module, exports) {
      arguments[4][18][0].apply(exports, arguments);
    }, {
      "dup": 18,
      "ms": 44
    }],
    41: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        module.exports = hasBinary;
        function hasBinary(data) {
          function _hasBinary(obj) {
            if (!obj)
              return false;
            if ((global.Buffer && global.Buffer.isBuffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer) || (global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              return true;
            }
            if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                if (_hasBinary(obj[i])) {
                  return true;
                }
              }
            } else if (obj && 'object' == typeof obj) {
              if (obj.toJSON && 'function' == typeof obj.toJSON) {
                obj = obj.toJSON();
              }
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key) && _hasBinary(obj[key])) {
                  return true;
                }
              }
            }
            return false;
          }
          return _hasBinary(data);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {"isarray": 43}],
    42: [function(_dereq_, module, exports) {
      arguments[4][23][0].apply(exports, arguments);
    }, {"dup": 23}],
    43: [function(_dereq_, module, exports) {
      arguments[4][24][0].apply(exports, arguments);
    }, {"dup": 24}],
    44: [function(_dereq_, module, exports) {
      arguments[4][25][0].apply(exports, arguments);
    }, {"dup": 25}],
    45: [function(_dereq_, module, exports) {
      arguments[4][28][0].apply(exports, arguments);
    }, {"dup": 28}],
    46: [function(_dereq_, module, exports) {
      (function(global) {
        var isArray = _dereq_('isarray');
        var isBuf = _dereq_('./is-buffer');
        exports.deconstructPacket = function(packet) {
          var buffers = [];
          var packetData = packet.data;
          function _deconstructPacket(data) {
            if (!data)
              return data;
            if (isBuf(data)) {
              var placeholder = {
                _placeholder: true,
                num: buffers.length
              };
              buffers.push(data);
              return placeholder;
            } else if (isArray(data)) {
              var newData = new Array(data.length);
              for (var i = 0; i < data.length; i++) {
                newData[i] = _deconstructPacket(data[i]);
              }
              return newData;
            } else if ('object' == typeof data && !(data instanceof Date)) {
              var newData = {};
              for (var key in data) {
                newData[key] = _deconstructPacket(data[key]);
              }
              return newData;
            }
            return data;
          }
          var pack = packet;
          pack.data = _deconstructPacket(packetData);
          pack.attachments = buffers.length;
          return {
            packet: pack,
            buffers: buffers
          };
        };
        exports.reconstructPacket = function(packet, buffers) {
          var curPlaceHolder = 0;
          function _reconstructPacket(data) {
            if (data && data._placeholder) {
              var buf = buffers[data.num];
              return buf;
            } else if (isArray(data)) {
              for (var i = 0; i < data.length; i++) {
                data[i] = _reconstructPacket(data[i]);
              }
              return data;
            } else if (data && 'object' == typeof data) {
              for (var key in data) {
                data[key] = _reconstructPacket(data[key]);
              }
              return data;
            }
            return data;
          }
          packet.data = _reconstructPacket(packet.data);
          packet.attachments = undefined;
          return packet;
        };
        exports.removeBlobs = function(data, callback) {
          function _removeBlobs(obj, curKey, containingObject) {
            if (!obj)
              return obj;
            if ((global.Blob && obj instanceof Blob) || (global.File && obj instanceof File)) {
              pendingBlobs++;
              var fileReader = new FileReader();
              fileReader.onload = function() {
                if (containingObject) {
                  containingObject[curKey] = this.result;
                } else {
                  bloblessData = this.result;
                }
                if (!--pendingBlobs) {
                  callback(bloblessData);
                }
              };
              fileReader.readAsArrayBuffer(obj);
            } else if (isArray(obj)) {
              for (var i = 0; i < obj.length; i++) {
                _removeBlobs(obj[i], i, obj);
              }
            } else if (obj && 'object' == typeof obj && !isBuf(obj)) {
              for (var key in obj) {
                _removeBlobs(obj[key], key, obj);
              }
            }
          }
          var pendingBlobs = 0;
          var bloblessData = data;
          _removeBlobs(bloblessData);
          if (!pendingBlobs) {
            callback(bloblessData);
          }
        };
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {
      "./is-buffer": 48,
      "isarray": 43
    }],
    47: [function(_dereq_, module, exports) {
      var debug = _dereq_('debug')('socket.io-parser');
      var json = _dereq_('json3');
      var isArray = _dereq_('isarray');
      var Emitter = _dereq_('component-emitter');
      var binary = _dereq_('./binary');
      var isBuf = _dereq_('./is-buffer');
      exports.protocol = 4;
      exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'BINARY_EVENT', 'ACK', 'BINARY_ACK', 'ERROR'];
      exports.CONNECT = 0;
      exports.DISCONNECT = 1;
      exports.EVENT = 2;
      exports.ACK = 3;
      exports.ERROR = 4;
      exports.BINARY_EVENT = 5;
      exports.BINARY_ACK = 6;
      exports.Encoder = Encoder;
      exports.Decoder = Decoder;
      function Encoder() {}
      Encoder.prototype.encode = function(obj, callback) {
        debug('encoding packet %j', obj);
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          encodeAsBinary(obj, callback);
        } else {
          var encoding = encodeAsString(obj);
          callback([encoding]);
        }
      };
      function encodeAsString(obj) {
        var str = '';
        var nsp = false;
        str += obj.type;
        if (exports.BINARY_EVENT == obj.type || exports.BINARY_ACK == obj.type) {
          str += obj.attachments;
          str += '-';
        }
        if (obj.nsp && '/' != obj.nsp) {
          nsp = true;
          str += obj.nsp;
        }
        if (null != obj.id) {
          if (nsp) {
            str += ',';
            nsp = false;
          }
          str += obj.id;
        }
        if (null != obj.data) {
          if (nsp)
            str += ',';
          str += json.stringify(obj.data);
        }
        debug('encoded %j as %s', obj, str);
        return str;
      }
      function encodeAsBinary(obj, callback) {
        function writeEncoding(bloblessData) {
          var deconstruction = binary.deconstructPacket(bloblessData);
          var pack = encodeAsString(deconstruction.packet);
          var buffers = deconstruction.buffers;
          buffers.unshift(pack);
          callback(buffers);
        }
        binary.removeBlobs(obj, writeEncoding);
      }
      function Decoder() {
        this.reconstructor = null;
      }
      Emitter(Decoder.prototype);
      Decoder.prototype.add = function(obj) {
        var packet;
        if ('string' == typeof obj) {
          packet = decodeString(obj);
          if (exports.BINARY_EVENT == packet.type || exports.BINARY_ACK == packet.type) {
            this.reconstructor = new BinaryReconstructor(packet);
            if (this.reconstructor.reconPack.attachments === 0) {
              this.emit('decoded', packet);
            }
          } else {
            this.emit('decoded', packet);
          }
        } else if (isBuf(obj) || obj.base64) {
          if (!this.reconstructor) {
            throw new Error('got binary data when not reconstructing a packet');
          } else {
            packet = this.reconstructor.takeBinaryData(obj);
            if (packet) {
              this.reconstructor = null;
              this.emit('decoded', packet);
            }
          }
        } else {
          throw new Error('Unknown type: ' + obj);
        }
      };
      function decodeString(str) {
        var p = {};
        var i = 0;
        p.type = Number(str.charAt(0));
        if (null == exports.types[p.type])
          return error();
        if (exports.BINARY_EVENT == p.type || exports.BINARY_ACK == p.type) {
          var buf = '';
          while (str.charAt(++i) != '-') {
            buf += str.charAt(i);
            if (i == str.length)
              break;
          }
          if (buf != Number(buf) || str.charAt(i) != '-') {
            throw new Error('Illegal attachments');
          }
          p.attachments = Number(buf);
        }
        if ('/' == str.charAt(i + 1)) {
          p.nsp = '';
          while (++i) {
            var c = str.charAt(i);
            if (',' == c)
              break;
            p.nsp += c;
            if (i == str.length)
              break;
          }
        } else {
          p.nsp = '/';
        }
        var next = str.charAt(i + 1);
        if ('' !== next && Number(next) == next) {
          p.id = '';
          while (++i) {
            var c = str.charAt(i);
            if (null == c || Number(c) != c) {
              --i;
              break;
            }
            p.id += str.charAt(i);
            if (i == str.length)
              break;
          }
          p.id = Number(p.id);
        }
        if (str.charAt(++i)) {
          try {
            p.data = json.parse(str.substr(i));
          } catch (e) {
            return error();
          }
        }
        debug('decoded %s as %j', str, p);
        return p;
      }
      Decoder.prototype.destroy = function() {
        if (this.reconstructor) {
          this.reconstructor.finishedReconstruction();
        }
      };
      function BinaryReconstructor(packet) {
        this.reconPack = packet;
        this.buffers = [];
      }
      BinaryReconstructor.prototype.takeBinaryData = function(binData) {
        this.buffers.push(binData);
        if (this.buffers.length == this.reconPack.attachments) {
          var packet = binary.reconstructPacket(this.reconPack, this.buffers);
          this.finishedReconstruction();
          return packet;
        }
        return null;
      };
      BinaryReconstructor.prototype.finishedReconstruction = function() {
        this.reconPack = null;
        this.buffers = [];
      };
      function error(data) {
        return {
          type: exports.ERROR,
          data: 'parser error'
        };
      }
    }, {
      "./binary": 46,
      "./is-buffer": 48,
      "component-emitter": 49,
      "debug": 39,
      "isarray": 43,
      "json3": 50
    }],
    48: [function(_dereq_, module, exports) {
      (function(global) {
        module.exports = isBuf;
        function isBuf(obj) {
          return (global.Buffer && global.Buffer.isBuffer(obj)) || (global.ArrayBuffer && obj instanceof ArrayBuffer);
        }
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    49: [function(_dereq_, module, exports) {
      arguments[4][15][0].apply(exports, arguments);
    }, {"dup": 15}],
    50: [function(_dereq_, module, exports) {
      (function(global) {
        ;
        (function() {
          var isLoader = typeof define === "function" && define.amd;
          var objectTypes = {
            "function": true,
            "object": true
          };
          var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
          var root = objectTypes[typeof window] && window || this,
              freeGlobal = freeExports && objectTypes[typeof module] && module && !module.nodeType && typeof global == "object" && global;
          if (freeGlobal && (freeGlobal["global"] === freeGlobal || freeGlobal["window"] === freeGlobal || freeGlobal["self"] === freeGlobal)) {
            root = freeGlobal;
          }
          function runInContext(context, exports) {
            context || (context = root["Object"]());
            exports || (exports = root["Object"]());
            var Number = context["Number"] || root["Number"],
                String = context["String"] || root["String"],
                Object = context["Object"] || root["Object"],
                Date = context["Date"] || root["Date"],
                SyntaxError = context["SyntaxError"] || root["SyntaxError"],
                TypeError = context["TypeError"] || root["TypeError"],
                Math = context["Math"] || root["Math"],
                nativeJSON = context["JSON"] || root["JSON"];
            if (typeof nativeJSON == "object" && nativeJSON) {
              exports.stringify = nativeJSON.stringify;
              exports.parse = nativeJSON.parse;
            }
            var objectProto = Object.prototype,
                getClass = objectProto.toString,
                isProperty,
                forEach,
                undef;
            var isExtended = new Date(-3509827334573292);
            try {
              isExtended = isExtended.getUTCFullYear() == -109252 && isExtended.getUTCMonth() === 0 && isExtended.getUTCDate() === 1 && isExtended.getUTCHours() == 10 && isExtended.getUTCMinutes() == 37 && isExtended.getUTCSeconds() == 6 && isExtended.getUTCMilliseconds() == 708;
            } catch (exception) {}
            function has(name) {
              if (has[name] !== undef) {
                return has[name];
              }
              var isSupported;
              if (name == "bug-string-char-index") {
                isSupported = "a"[0] != "a";
              } else if (name == "json") {
                isSupported = has("json-stringify") && has("json-parse");
              } else {
                var value,
                    serialized = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                if (name == "json-stringify") {
                  var stringify = exports.stringify,
                      stringifySupported = typeof stringify == "function" && isExtended;
                  if (stringifySupported) {
                    (value = function() {
                      return 1;
                    }).toJSON = value;
                    try {
                      stringifySupported = stringify(0) === "0" && stringify(new Number()) === "0" && stringify(new String()) == '""' && stringify(getClass) === undef && stringify(undef) === undef && stringify() === undef && stringify(value) === "1" && stringify([value]) == "[1]" && stringify([undef]) == "[null]" && stringify(null) == "null" && stringify([undef, getClass, null]) == "[null,null,null]" && stringify({"a": [value, true, false, null, "\x00\b\n\f\r\t"]}) == serialized && stringify(null, value) === "1" && stringify([1, 2], null, 1) == "[\n 1,\n 2\n]" && stringify(new Date(-8.64e15)) == '"-271821-04-20T00:00:00.000Z"' && stringify(new Date(8.64e15)) == '"+275760-09-13T00:00:00.000Z"' && stringify(new Date(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && stringify(new Date(-1)) == '"1969-12-31T23:59:59.999Z"';
                    } catch (exception) {
                      stringifySupported = false;
                    }
                  }
                  isSupported = stringifySupported;
                }
                if (name == "json-parse") {
                  var parse = exports.parse;
                  if (typeof parse == "function") {
                    try {
                      if (parse("0") === 0 && !parse(false)) {
                        value = parse(serialized);
                        var parseSupported = value["a"].length == 5 && value["a"][0] === 1;
                        if (parseSupported) {
                          try {
                            parseSupported = !parse('"\t"');
                          } catch (exception) {}
                          if (parseSupported) {
                            try {
                              parseSupported = parse("01") !== 1;
                            } catch (exception) {}
                          }
                          if (parseSupported) {
                            try {
                              parseSupported = parse("1.") !== 1;
                            } catch (exception) {}
                          }
                        }
                      }
                    } catch (exception) {
                      parseSupported = false;
                    }
                  }
                  isSupported = parseSupported;
                }
              }
              return has[name] = !!isSupported;
            }
            if (!has("json")) {
              var functionClass = "[object Function]",
                  dateClass = "[object Date]",
                  numberClass = "[object Number]",
                  stringClass = "[object String]",
                  arrayClass = "[object Array]",
                  booleanClass = "[object Boolean]";
              var charIndexBuggy = has("bug-string-char-index");
              if (!isExtended) {
                var floor = Math.floor;
                var Months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
                var getDay = function(year, month) {
                  return Months[month] + 365 * (year - 1970) + floor((year - 1969 + (month = +(month > 1))) / 4) - floor((year - 1901 + month) / 100) + floor((year - 1601 + month) / 400);
                };
              }
              if (!(isProperty = objectProto.hasOwnProperty)) {
                isProperty = function(property) {
                  var members = {},
                      constructor;
                  if ((members.__proto__ = null, members.__proto__ = {"toString": 1}, members).toString != getClass) {
                    isProperty = function(property) {
                      var original = this.__proto__,
                          result = property in (this.__proto__ = null, this);
                      this.__proto__ = original;
                      return result;
                    };
                  } else {
                    constructor = members.constructor;
                    isProperty = function(property) {
                      var parent = (this.constructor || constructor).prototype;
                      return property in this && !(property in parent && this[property] === parent[property]);
                    };
                  }
                  members = null;
                  return isProperty.call(this, property);
                };
              }
              forEach = function(object, callback) {
                var size = 0,
                    Properties,
                    members,
                    property;
                (Properties = function() {
                  this.valueOf = 0;
                }).prototype.valueOf = 0;
                members = new Properties();
                for (property in members) {
                  if (isProperty.call(members, property)) {
                    size++;
                  }
                }
                Properties = members = null;
                if (!size) {
                  members = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                  forEach = function(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        length;
                    var hasProperty = !isFunction && typeof object.constructor != "function" && objectTypes[typeof object.hasOwnProperty] && object.hasOwnProperty || isProperty;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && hasProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                    for (length = members.length; property = members[--length]; hasProperty.call(object, property) && callback(property))
                      ;
                  };
                } else if (size == 2) {
                  forEach = function(object, callback) {
                    var members = {},
                        isFunction = getClass.call(object) == functionClass,
                        property;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && !isProperty.call(members, property) && (members[property] = 1) && isProperty.call(object, property)) {
                        callback(property);
                      }
                    }
                  };
                } else {
                  forEach = function(object, callback) {
                    var isFunction = getClass.call(object) == functionClass,
                        property,
                        isConstructor;
                    for (property in object) {
                      if (!(isFunction && property == "prototype") && isProperty.call(object, property) && !(isConstructor = property === "constructor")) {
                        callback(property);
                      }
                    }
                    if (isConstructor || isProperty.call(object, (property = "constructor"))) {
                      callback(property);
                    }
                  };
                }
                return forEach(object, callback);
              };
              if (!has("json-stringify")) {
                var Escapes = {
                  92: "\\\\",
                  34: '\\"',
                  8: "\\b",
                  12: "\\f",
                  10: "\\n",
                  13: "\\r",
                  9: "\\t"
                };
                var leadingZeroes = "000000";
                var toPaddedString = function(width, value) {
                  return (leadingZeroes + (value || 0)).slice(-width);
                };
                var unicodePrefix = "\\u00";
                var quote = function(value) {
                  var result = '"',
                      index = 0,
                      length = value.length,
                      useCharIndex = !charIndexBuggy || length > 10;
                  var symbols = useCharIndex && (charIndexBuggy ? value.split("") : value);
                  for (; index < length; index++) {
                    var charCode = value.charCodeAt(index);
                    switch (charCode) {
                      case 8:
                      case 9:
                      case 10:
                      case 12:
                      case 13:
                      case 34:
                      case 92:
                        result += Escapes[charCode];
                        break;
                      default:
                        if (charCode < 32) {
                          result += unicodePrefix + toPaddedString(2, charCode.toString(16));
                          break;
                        }
                        result += useCharIndex ? symbols[index] : value.charAt(index);
                    }
                  }
                  return result + '"';
                };
                var serialize = function(property, object, callback, properties, whitespace, indentation, stack) {
                  var value,
                      className,
                      year,
                      month,
                      date,
                      time,
                      hours,
                      minutes,
                      seconds,
                      milliseconds,
                      results,
                      element,
                      index,
                      length,
                      prefix,
                      result;
                  try {
                    value = object[property];
                  } catch (exception) {}
                  if (typeof value == "object" && value) {
                    className = getClass.call(value);
                    if (className == dateClass && !isProperty.call(value, "toJSON")) {
                      if (value > -1 / 0 && value < 1 / 0) {
                        if (getDay) {
                          date = floor(value / 864e5);
                          for (year = floor(date / 365.2425) + 1970 - 1; getDay(year + 1, 0) <= date; year++)
                            ;
                          for (month = floor((date - getDay(year, 0)) / 30.42); getDay(year, month + 1) <= date; month++)
                            ;
                          date = 1 + date - getDay(year, month);
                          time = (value % 864e5 + 864e5) % 864e5;
                          hours = floor(time / 36e5) % 24;
                          minutes = floor(time / 6e4) % 60;
                          seconds = floor(time / 1e3) % 60;
                          milliseconds = time % 1e3;
                        } else {
                          year = value.getUTCFullYear();
                          month = value.getUTCMonth();
                          date = value.getUTCDate();
                          hours = value.getUTCHours();
                          minutes = value.getUTCMinutes();
                          seconds = value.getUTCSeconds();
                          milliseconds = value.getUTCMilliseconds();
                        }
                        value = (year <= 0 || year >= 1e4 ? (year < 0 ? "-" : "+") + toPaddedString(6, year < 0 ? -year : year) : toPaddedString(4, year)) + "-" + toPaddedString(2, month + 1) + "-" + toPaddedString(2, date) + "T" + toPaddedString(2, hours) + ":" + toPaddedString(2, minutes) + ":" + toPaddedString(2, seconds) + "." + toPaddedString(3, milliseconds) + "Z";
                      } else {
                        value = null;
                      }
                    } else if (typeof value.toJSON == "function" && ((className != numberClass && className != stringClass && className != arrayClass) || isProperty.call(value, "toJSON"))) {
                      value = value.toJSON(property);
                    }
                  }
                  if (callback) {
                    value = callback.call(object, property, value);
                  }
                  if (value === null) {
                    return "null";
                  }
                  className = getClass.call(value);
                  if (className == booleanClass) {
                    return "" + value;
                  } else if (className == numberClass) {
                    return value > -1 / 0 && value < 1 / 0 ? "" + value : "null";
                  } else if (className == stringClass) {
                    return quote("" + value);
                  }
                  if (typeof value == "object") {
                    for (length = stack.length; length--; ) {
                      if (stack[length] === value) {
                        throw TypeError();
                      }
                    }
                    stack.push(value);
                    results = [];
                    prefix = indentation;
                    indentation += whitespace;
                    if (className == arrayClass) {
                      for (index = 0, length = value.length; index < length; index++) {
                        element = serialize(index, value, callback, properties, whitespace, indentation, stack);
                        results.push(element === undef ? "null" : element);
                      }
                      result = results.length ? (whitespace ? "[\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "]" : ("[" + results.join(",") + "]")) : "[]";
                    } else {
                      forEach(properties || value, function(property) {
                        var element = serialize(property, value, callback, properties, whitespace, indentation, stack);
                        if (element !== undef) {
                          results.push(quote(property) + ":" + (whitespace ? " " : "") + element);
                        }
                      });
                      result = results.length ? (whitespace ? "{\n" + indentation + results.join(",\n" + indentation) + "\n" + prefix + "}" : ("{" + results.join(",") + "}")) : "{}";
                    }
                    stack.pop();
                    return result;
                  }
                };
                exports.stringify = function(source, filter, width) {
                  var whitespace,
                      callback,
                      properties,
                      className;
                  if (objectTypes[typeof filter] && filter) {
                    if ((className = getClass.call(filter)) == functionClass) {
                      callback = filter;
                    } else if (className == arrayClass) {
                      properties = {};
                      for (var index = 0,
                          length = filter.length,
                          value; index < length; value = filter[index++], ((className = getClass.call(value)), className == stringClass || className == numberClass) && (properties[value] = 1))
                        ;
                    }
                  }
                  if (width) {
                    if ((className = getClass.call(width)) == numberClass) {
                      if ((width -= width % 1) > 0) {
                        for (whitespace = "", width > 10 && (width = 10); whitespace.length < width; whitespace += " ")
                          ;
                      }
                    } else if (className == stringClass) {
                      whitespace = width.length <= 10 ? width : width.slice(0, 10);
                    }
                  }
                  return serialize("", (value = {}, value[""] = source, value), callback, properties, whitespace, "", []);
                };
              }
              if (!has("json-parse")) {
                var fromCharCode = String.fromCharCode;
                var Unescapes = {
                  92: "\\",
                  34: '"',
                  47: "/",
                  98: "\b",
                  116: "\t",
                  110: "\n",
                  102: "\f",
                  114: "\r"
                };
                var Index,
                    Source;
                var abort = function() {
                  Index = Source = null;
                  throw SyntaxError();
                };
                var lex = function() {
                  var source = Source,
                      length = source.length,
                      value,
                      begin,
                      position,
                      isSigned,
                      charCode;
                  while (Index < length) {
                    charCode = source.charCodeAt(Index);
                    switch (charCode) {
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        Index++;
                        break;
                      case 123:
                      case 125:
                      case 91:
                      case 93:
                      case 58:
                      case 44:
                        value = charIndexBuggy ? source.charAt(Index) : source[Index];
                        Index++;
                        return value;
                      case 34:
                        for (value = "@", Index++; Index < length; ) {
                          charCode = source.charCodeAt(Index);
                          if (charCode < 32) {
                            abort();
                          } else if (charCode == 92) {
                            charCode = source.charCodeAt(++Index);
                            switch (charCode) {
                              case 92:
                              case 34:
                              case 47:
                              case 98:
                              case 116:
                              case 110:
                              case 102:
                              case 114:
                                value += Unescapes[charCode];
                                Index++;
                                break;
                              case 117:
                                begin = ++Index;
                                for (position = Index + 4; Index < position; Index++) {
                                  charCode = source.charCodeAt(Index);
                                  if (!(charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 102 || charCode >= 65 && charCode <= 70)) {
                                    abort();
                                  }
                                }
                                value += fromCharCode("0x" + source.slice(begin, Index));
                                break;
                              default:
                                abort();
                            }
                          } else {
                            if (charCode == 34) {
                              break;
                            }
                            charCode = source.charCodeAt(Index);
                            begin = Index;
                            while (charCode >= 32 && charCode != 92 && charCode != 34) {
                              charCode = source.charCodeAt(++Index);
                            }
                            value += source.slice(begin, Index);
                          }
                        }
                        if (source.charCodeAt(Index) == 34) {
                          Index++;
                          return value;
                        }
                        abort();
                      default:
                        begin = Index;
                        if (charCode == 45) {
                          isSigned = true;
                          charCode = source.charCodeAt(++Index);
                        }
                        if (charCode >= 48 && charCode <= 57) {
                          if (charCode == 48 && ((charCode = source.charCodeAt(Index + 1)), charCode >= 48 && charCode <= 57)) {
                            abort();
                          }
                          isSigned = false;
                          for (; Index < length && ((charCode = source.charCodeAt(Index)), charCode >= 48 && charCode <= 57); Index++)
                            ;
                          if (source.charCodeAt(Index) == 46) {
                            position = ++Index;
                            for (; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                              ;
                            if (position == Index) {
                              abort();
                            }
                            Index = position;
                          }
                          charCode = source.charCodeAt(Index);
                          if (charCode == 101 || charCode == 69) {
                            charCode = source.charCodeAt(++Index);
                            if (charCode == 43 || charCode == 45) {
                              Index++;
                            }
                            for (position = Index; position < length && ((charCode = source.charCodeAt(position)), charCode >= 48 && charCode <= 57); position++)
                              ;
                            if (position == Index) {
                              abort();
                            }
                            Index = position;
                          }
                          return +source.slice(begin, Index);
                        }
                        if (isSigned) {
                          abort();
                        }
                        if (source.slice(Index, Index + 4) == "true") {
                          Index += 4;
                          return true;
                        } else if (source.slice(Index, Index + 5) == "false") {
                          Index += 5;
                          return false;
                        } else if (source.slice(Index, Index + 4) == "null") {
                          Index += 4;
                          return null;
                        }
                        abort();
                    }
                  }
                  return "$";
                };
                var get = function(value) {
                  var results,
                      hasMembers;
                  if (value == "$") {
                    abort();
                  }
                  if (typeof value == "string") {
                    if ((charIndexBuggy ? value.charAt(0) : value[0]) == "@") {
                      return value.slice(1);
                    }
                    if (value == "[") {
                      results = [];
                      for (; ; hasMembers || (hasMembers = true)) {
                        value = lex();
                        if (value == "]") {
                          break;
                        }
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "]") {
                              abort();
                            }
                          } else {
                            abort();
                          }
                        }
                        if (value == ",") {
                          abort();
                        }
                        results.push(get(value));
                      }
                      return results;
                    } else if (value == "{") {
                      results = {};
                      for (; ; hasMembers || (hasMembers = true)) {
                        value = lex();
                        if (value == "}") {
                          break;
                        }
                        if (hasMembers) {
                          if (value == ",") {
                            value = lex();
                            if (value == "}") {
                              abort();
                            }
                          } else {
                            abort();
                          }
                        }
                        if (value == "," || typeof value != "string" || (charIndexBuggy ? value.charAt(0) : value[0]) != "@" || lex() != ":") {
                          abort();
                        }
                        results[value.slice(1)] = get(lex());
                      }
                      return results;
                    }
                    abort();
                  }
                  return value;
                };
                var update = function(source, property, callback) {
                  var element = walk(source, property, callback);
                  if (element === undef) {
                    delete source[property];
                  } else {
                    source[property] = element;
                  }
                };
                var walk = function(source, property, callback) {
                  var value = source[property],
                      length;
                  if (typeof value == "object" && value) {
                    if (getClass.call(value) == arrayClass) {
                      for (length = value.length; length--; ) {
                        update(value, length, callback);
                      }
                    } else {
                      forEach(value, function(property) {
                        update(value, property, callback);
                      });
                    }
                  }
                  return callback.call(source, property, value);
                };
                exports.parse = function(source, callback) {
                  var result,
                      value;
                  Index = 0;
                  Source = "" + source;
                  result = get(lex());
                  if (lex() != "$") {
                    abort();
                  }
                  Index = Source = null;
                  return callback && getClass.call(callback) == functionClass ? walk((value = {}, value[""] = result, value), "", callback) : result;
                };
              }
            }
            exports["runInContext"] = runInContext;
            return exports;
          }
          if (freeExports && !isLoader) {
            runInContext(root, freeExports);
          } else {
            var nativeJSON = root.JSON,
                previousJSON = root["JSON3"],
                isRestored = false;
            var JSON3 = runInContext(root, (root["JSON3"] = {"noConflict": function() {
                if (!isRestored) {
                  isRestored = true;
                  root.JSON = nativeJSON;
                  root["JSON3"] = previousJSON;
                  nativeJSON = previousJSON = null;
                }
                return JSON3;
              }}));
            root.JSON = {
              "parse": JSON3.parse,
              "stringify": JSON3.stringify
            };
          }
          if (isLoader) {
            define(function() {
              return JSON3;
            });
          }
        }).call(this);
      }).call(this, typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
    }, {}],
    51: [function(_dereq_, module, exports) {
      module.exports = toArray;
      function toArray(list, index) {
        var array = [];
        index = index || 0;
        for (var i = index || 0; i < list.length; i++) {
          array[i - index] = list[i];
        }
        return array;
      }
    }, {}]
  }, {}, [31])(31);
});

})();
(function() {
var define = $__System.amdDefine;
define("3d", ["3c"], function(main) {
  return main;
});

})();
$__System.registerDynamic("3e", ["6"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6');
  module.exports = function defineProperty(it, key, desc) {
    return $.setDesc(it, key, desc);
  };
  return module.exports;
});

$__System.registerDynamic("3f", ["3e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('3e'),
    __esModule: true
  };
  return module.exports;
});

$__System.registerDynamic("40", ["3f"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var _Object$defineProperty = $__require('3f')["default"];
  exports["default"] = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        _Object$defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("41", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports["default"] = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  exports.__esModule = true;
  return module.exports;
});

$__System.registerDynamic("39", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  "format cjs";
  return module.exports;
});

$__System.registerDynamic("42", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function() {};
  return module.exports;
});

$__System.registerDynamic("43", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(done, value) {
    return {
      value: value,
      done: !!done
    };
  };
  return module.exports;
});

$__System.registerDynamic("3", ["44", "19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var IObject = $__require('44'),
      defined = $__require('19');
  module.exports = function(it) {
    return IObject(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("32", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = true;
  return module.exports;
});

$__System.registerDynamic("45", ["6", "46", "37", "47", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6'),
      descriptor = $__require('46'),
      setToStringTag = $__require('37'),
      IteratorPrototype = {};
  $__require('47')(IteratorPrototype, $__require('22')('iterator'), function() {
    return this;
  });
  module.exports = function(Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});

$__System.registerDynamic("1b", ["32", "c", "48", "47", "49", "4a", "45", "37", "6", "22"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var LIBRARY = $__require('32'),
      $export = $__require('c'),
      redefine = $__require('48'),
      hide = $__require('47'),
      has = $__require('49'),
      Iterators = $__require('4a'),
      $iterCreate = $__require('45'),
      setToStringTag = $__require('37'),
      getProto = $__require('6').getProto,
      ITERATOR = $__require('22')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function() {
    return this;
  };
  module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function(kind) {
      if (!BUGGY && kind in proto)
        return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR))
        hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED)
        for (key in methods) {
          if (!(key in proto))
            redefine(proto, key, methods[key]);
        }
      else
        $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});

$__System.registerDynamic("4b", ["42", "43", "4a", "3", "1b"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var addToUnscopables = $__require('42'),
      step = $__require('43'),
      Iterators = $__require('4a'),
      toIObject = $__require('3');
  module.exports = $__require('1b')(Array, 'Array', function(iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function() {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys')
      return step(0, index);
    if (kind == 'values')
      return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});

$__System.registerDynamic("3a", ["4b", "4a"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('4b');
  var Iterators = $__require('4a');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});

$__System.registerDynamic("44", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('28');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});

$__System.registerDynamic("19", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (it == undefined)
      throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("14", ["19"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var defined = $__require('19');
  module.exports = function(it) {
    return Object(defined(it));
  };
  return module.exports;
});

$__System.registerDynamic("4c", ["28"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('28');
  module.exports = Array.isArray || function(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});

$__System.registerDynamic("4d", ["1c", "4c", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('1c'),
      isArray = $__require('4c'),
      SPECIES = $__require('22')('species');
  module.exports = function(original, length) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
        C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null)
          C = undefined;
      }
    }
    return new (C === undefined ? Array : C)(length);
  };
  return module.exports;
});

$__System.registerDynamic("4e", ["1e", "44", "14", "4f", "4d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('1e'),
      IObject = $__require('44'),
      toObject = $__require('14'),
      toLength = $__require('4f'),
      asc = $__require('4d');
  module.exports = function(TYPE) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++)
        if (NO_HOLES || index in self) {
          val = self[index];
          res = f(val, index, O);
          if (TYPE) {
            if (IS_MAP)
              result[index] = res;
            else if (res)
              switch (TYPE) {
                case 3:
                  return true;
                case 5:
                  return val;
                case 6:
                  return index;
                case 2:
                  result.push(val);
              }
            else if (IS_EVERY)
              return false;
          }
        }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  return module.exports;
});

$__System.registerDynamic("50", ["47", "36", "1d", "1c", "34", "35", "4e", "49", "51"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hide = $__require('47'),
      redefineAll = $__require('36'),
      anObject = $__require('1d'),
      isObject = $__require('1c'),
      strictNew = $__require('34'),
      forOf = $__require('35'),
      createArrayMethod = $__require('4e'),
      $has = $__require('49'),
      WEAK = $__require('51')('weak'),
      isExtensible = Object.isExtensible || isObject,
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;
  var frozenStore = function(that) {
    return that._l || (that._l = new FrozenStore);
  };
  var FrozenStore = function() {
    this.a = [];
  };
  var findFrozen = function(store, key) {
    return arrayFind(store.a, function(it) {
      return it[0] === key;
    });
  };
  FrozenStore.prototype = {
    get: function(key) {
      var entry = findFrozen(this, key);
      if (entry)
        return entry[1];
    },
    has: function(key) {
      return !!findFrozen(this, key);
    },
    set: function(key, value) {
      var entry = findFrozen(this, key);
      if (entry)
        entry[1] = value;
      else
        this.a.push([key, value]);
    },
    'delete': function(key) {
      var index = arrayFindIndex(this.a, function(it) {
        return it[0] === key;
      });
      if (~index)
        this.a.splice(index, 1);
      return !!~index;
    }
  };
  module.exports = {
    getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function(that, iterable) {
        strictNew(that, C, NAME);
        that._i = id++;
        that._l = undefined;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        'delete': function(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this)['delete'](key);
          return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
        },
        has: function has(key) {
          if (!isObject(key))
            return false;
          if (!isExtensible(key))
            return frozenStore(this).has(key);
          return $has(key, WEAK) && $has(key[WEAK], this._i);
        }
      });
      return C;
    },
    def: function(that, key, value) {
      if (!isExtensible(anObject(key))) {
        frozenStore(that).set(key, value);
      } else {
        $has(key, WEAK) || hide(key, WEAK, {});
        key[WEAK][that._i] = value;
      }
      return that;
    },
    frozenStore: frozenStore,
    WEAK: WEAK
  };
  return module.exports;
});

$__System.registerDynamic("c", ["25", "f", "1e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('25'),
      core = $__require('f'),
      ctx = $__require('1e'),
      PROTOTYPE = 'prototype';
  var $export = function(type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL)
      source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports)
        continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? (function(C) {
        var F = function(param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO)
        (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});

$__System.registerDynamic("46", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});

$__System.registerDynamic("47", ["6", "46", "2c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6'),
      createDesc = $__require('46');
  module.exports = $__require('2c') ? function(object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function(object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});

$__System.registerDynamic("48", ["47"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('47');
  return module.exports;
});

$__System.registerDynamic("36", ["48"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var redefine = $__require('48');
  module.exports = function(target, src) {
    for (var key in src)
      redefine(target, key, src[key]);
    return target;
  };
  return module.exports;
});

$__System.registerDynamic("21", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    if (typeof it != 'function')
      throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1e", ["21"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var aFunction = $__require('21');
  module.exports = function(fn, that, length) {
    aFunction(fn);
    if (that === undefined)
      return fn;
    switch (length) {
      case 1:
        return function(a) {
          return fn.call(that, a);
        };
      case 2:
        return function(a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function(a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function() {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});

$__System.registerDynamic("52", ["1d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var anObject = $__require('1d');
  module.exports = function(iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined)
        anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});

$__System.registerDynamic("53", ["4a", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var Iterators = $__require('4a'),
      ITERATOR = $__require('22')('iterator'),
      ArrayProto = Array.prototype;
  module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});

$__System.registerDynamic("1d", ["1c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var isObject = $__require('1c');
  module.exports = function(it) {
    if (!isObject(it))
      throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("18", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function(it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});

$__System.registerDynamic("4f", ["18"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toInteger = $__require('18'),
      min = Math.min;
  module.exports = function(it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
  };
  return module.exports;
});

$__System.registerDynamic("28", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var toString = {}.toString;
  module.exports = function(it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});

$__System.registerDynamic("33", ["28", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var cof = $__require('28'),
      TAG = $__require('22')('toStringTag'),
      ARG = cof(function() {
        return arguments;
      }()) == 'Arguments';
  module.exports = function(it) {
    var O,
        T,
        B;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof(T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});

$__System.registerDynamic("4a", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {};
  return module.exports;
});

$__System.registerDynamic("54", ["33", "22", "4a", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var classof = $__require('33'),
      ITERATOR = $__require('22')('iterator'),
      Iterators = $__require('4a');
  module.exports = $__require('f').getIteratorMethod = function(it) {
    if (it != undefined)
      return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});

$__System.registerDynamic("35", ["1e", "52", "53", "1d", "4f", "54"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var ctx = $__require('1e'),
      call = $__require('52'),
      isArrayIter = $__require('53'),
      anObject = $__require('1d'),
      toLength = $__require('4f'),
      getIterFn = $__require('54');
  module.exports = function(iterable, entries, fn, that) {
    var iterFn = getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator;
    if (typeof iterFn != 'function')
      throw TypeError(iterable + ' is not iterable!');
    if (isArrayIter(iterFn))
      for (length = toLength(iterable.length); length > index; index++) {
        entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      }
    else
      for (iterator = iterFn.call(iterable); !(step = iterator.next()).done; ) {
        call(iterator, f, step.value, entries);
      }
  };
  return module.exports;
});

$__System.registerDynamic("34", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it, Constructor, name) {
    if (!(it instanceof Constructor))
      throw TypeError(name + ": use the 'new' operator!");
    return it;
  };
  return module.exports;
});

$__System.registerDynamic("1c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});

$__System.registerDynamic("6", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});

$__System.registerDynamic("49", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function(it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});

$__System.registerDynamic("55", ["25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = $__require('25'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function(key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});

$__System.registerDynamic("51", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var id = 0,
      px = Math.random();
  module.exports = function(key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});

$__System.registerDynamic("25", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number')
    __g = global;
  return module.exports;
});

$__System.registerDynamic("22", ["55", "51", "25"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var store = $__require('55')('wks'),
      uid = $__require('51'),
      Symbol = $__require('25').Symbol;
  module.exports = function(name) {
    return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
  };
  return module.exports;
});

$__System.registerDynamic("37", ["6", "49", "22"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var def = $__require('6').setDesc,
      has = $__require('49'),
      TAG = $__require('22')('toStringTag');
  module.exports = function(it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG))
      def(it, TAG, {
        configurable: true,
        value: tag
      });
  };
  return module.exports;
});

$__System.registerDynamic("12", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = function(exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});

$__System.registerDynamic("2c", ["12"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = !$__require('12')(function() {
    return Object.defineProperty({}, 'a', {get: function() {
        return 7;
      }}).a != 7;
  });
  return module.exports;
});

$__System.registerDynamic("56", ["6", "25", "c", "12", "47", "36", "35", "34", "1c", "37", "2c"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6'),
      global = $__require('25'),
      $export = $__require('c'),
      fails = $__require('12'),
      hide = $__require('47'),
      redefineAll = $__require('36'),
      forOf = $__require('35'),
      strictNew = $__require('34'),
      isObject = $__require('1c'),
      setToStringTag = $__require('37'),
      DESCRIPTORS = $__require('2c');
  module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
      new C().entries().next();
    }))) {
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
    } else {
      C = wrapper(function(target, iterable) {
        strictNew(target, C, NAME);
        target._c = new Base;
        if (iterable != undefined)
          forOf(iterable, IS_MAP, target[ADDER], target);
      });
      $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','), function(KEY) {
        var IS_ADDER = KEY == 'add' || KEY == 'set';
        if (KEY in proto && !(IS_WEAK && KEY == 'clear'))
          hide(C.prototype, KEY, function(a, b) {
            if (!IS_ADDER && IS_WEAK && !isObject(a))
              return KEY == 'get' ? undefined : false;
            var result = this._c[KEY](a === 0 ? 0 : a, b);
            return IS_ADDER ? this : result;
          });
      });
      if ('size' in proto)
        $.setDesc(C.prototype, 'size', {get: function() {
            return this._c.size;
          }});
    }
    setToStringTag(C, NAME);
    O[NAME] = C;
    $export($export.G + $export.W + $export.F, O);
    if (!IS_WEAK)
      common.setStrong(C, NAME, IS_MAP);
    return C;
  };
  return module.exports;
});

$__System.registerDynamic("57", ["6", "48", "50", "1c", "49", "56"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  var $ = $__require('6'),
      redefine = $__require('48'),
      weak = $__require('50'),
      isObject = $__require('1c'),
      has = $__require('49'),
      frozenStore = weak.frozenStore,
      WEAK = weak.WEAK,
      isExtensible = Object.isExtensible || isObject,
      tmp = {};
  var $WeakMap = $__require('56')('WeakMap', function(get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    get: function get(key) {
      if (isObject(key)) {
        if (!isExtensible(key))
          return frozenStore(this).get(key);
        if (has(key, WEAK))
          return key[WEAK][this._i];
      }
    },
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  }, weak, true, true);
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    $.each.call(['delete', 'has', 'get', 'set'], function(key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function(a, b) {
        if (isObject(a) && !isExtensible(a)) {
          var result = frozenStore(this)[key](a, b);
          return key == 'set' ? this : result;
        }
        return method.call(this, a, b);
      });
    });
  }
  return module.exports;
});

$__System.registerDynamic("f", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var core = module.exports = {version: '1.2.6'};
  if (typeof __e == 'number')
    __e = core;
  return module.exports;
});

$__System.registerDynamic("58", ["39", "3a", "57", "f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  $__require('39');
  $__require('3a');
  $__require('57');
  module.exports = $__require('f').WeakMap;
  return module.exports;
});

$__System.registerDynamic("59", ["58"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = {
    "default": $__require('58'),
    __esModule: true
  };
  return module.exports;
});

$__System.register('5a', ['40', '41', '59'], function (_export) {
  var _createClass, _classCallCheck, _WeakMap, objectToEvents, Emitter;

  return {
    setters: [function (_) {
      _createClass = _['default'];
    }, function (_2) {
      _classCallCheck = _2['default'];
    }, function (_3) {
      _WeakMap = _3['default'];
    }],
    execute: function () {
      /* */
      'use strict';

      'format es6';
      'use strict';

      objectToEvents = new _WeakMap();

      Emitter = (function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          objectToEvents.set(this, {});
        }

        _createClass(Emitter, [{
          key: 'on',
          value: function on(type, handler) {
            var events = objectToEvents.get(this);

            if (!events[type]) {
              events[type] = [];
            }
            events[type].push(handler);
            return this;
          }
        }, {
          key: 'once',
          value: function once(type, handler) {
            this.on(type, function tempHandler() {
              handler.apply(this, arguments);
              this.off(type, tempHandler);
            });
            return this;
          }
        }, {
          key: 'off',
          value: function off(type, handler) {
            var events = objectToEvents.get(this)[type];

            if (events) {
              if (!handler) {
                events.length = 0;
              } else {
                events.splice(events.indexOf(handler), 1);
              }
            }
            return this;
          }
        }, {
          key: 'emit',
          value: function emit(type) {
            var event, events;

            events = (objectToEvents.get(this)[type] || []).slice();

            var args = new Array(arguments.length - 1);
            var iterateTo = args.length + 1;
            for (var i = 1; i < iterateTo; ++i) {
              args[i - 1] = arguments[i];
            }

            if (events.length) {
              while (event = events.shift()) {
                event.apply(this, args);
              }
            }
            return this;
          }
        }]);

        return Emitter;
      })();

      _export('default', Emitter);
    }
  };
});
$__System.register("5b", ["5a"], function (_export) {
  "use strict";

  return {
    setters: [function (_a) {
      var _exportObj = {};

      for (var _key in _a) {
        if (_key !== "default") _exportObj[_key] = _a[_key];
      }

      _exportObj["default"] = _a["default"];

      _export(_exportObj);
    }],
    execute: function () {}
  };
});
$__System.registerDynamic("5c", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    if ('string' == typeof val)
      return parse(val);
    return options.long ? long(val) : short(val);
  };
  function parse(str) {
    str = '' + str;
    if (str.length > 10000)
      return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match)
      return;
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch (type) {
      case 'years':
      case 'year':
      case 'yrs':
      case 'yr':
      case 'y':
        return n * y;
      case 'days':
      case 'day':
      case 'd':
        return n * d;
      case 'hours':
      case 'hour':
      case 'hrs':
      case 'hr':
      case 'h':
        return n * h;
      case 'minutes':
      case 'minute':
      case 'mins':
      case 'min':
      case 'm':
        return n * m;
      case 'seconds':
      case 'second':
      case 'secs':
      case 'sec':
      case 's':
        return n * s;
      case 'milliseconds':
      case 'millisecond':
      case 'msecs':
      case 'msec':
      case 'ms':
        return n;
    }
  }
  function short(ms) {
    if (ms >= d)
      return Math.round(ms / d) + 'd';
    if (ms >= h)
      return Math.round(ms / h) + 'h';
    if (ms >= m)
      return Math.round(ms / m) + 'm';
    if (ms >= s)
      return Math.round(ms / s) + 's';
    return ms + 'ms';
  }
  function long(ms) {
    return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
  }
  function plural(ms, n, name) {
    if (ms < n)
      return;
    if (ms < n * 1.5)
      return Math.floor(ms / n) + ' ' + name;
    return Math.ceil(ms / n) + ' ' + name + 's';
  }
  return module.exports;
});

$__System.registerDynamic("5d", ["5c"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5c');
  return module.exports;
});

$__System.registerDynamic("5e", ["5d"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = debug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = $__require('5d');
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevColor = 0;
  var prevTime;
  function selectColor() {
    return exports.colors[prevColor++ % exports.colors.length];
  }
  function debug(namespace) {
    function disabled() {}
    disabled.enabled = false;
    function enabled() {
      var self = enabled;
      var curr = +new Date();
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      if (null == self.useColors)
        self.useColors = exports.useColors();
      if (null == self.color && self.useColors)
        self.color = selectColor();
      var args = Array.prototype.slice.call(arguments);
      args[0] = exports.coerce(args[0]);
      if ('string' !== typeof args[0]) {
        args = ['%o'].concat(args);
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-z%])/g, function(match, format) {
        if (match === '%%')
          return match;
        index++;
        var formatter = exports.formatters[format];
        if ('function' === typeof formatter) {
          var val = args[index];
          match = formatter.call(self, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      if ('function' === typeof exports.formatArgs) {
        args = exports.formatArgs.apply(self, args);
      }
      var logFn = enabled.log || exports.log || console.log.bind(console);
      logFn.apply(self, args);
    }
    enabled.enabled = true;
    var fn = exports.enabled(namespace) ? enabled : disabled;
    fn.namespace = namespace;
    return fn;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    var split = (namespaces || '').split(/[\s,]+/);
    var len = split.length;
    for (var i = 0; i < len; i++) {
      if (!split[i])
        continue;
      namespaces = split[i].replace(/\*/g, '.*?');
      if (namespaces[0] === '-') {
        exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        exports.names.push(new RegExp('^' + namespaces + '$'));
      }
    }
  }
  function disable() {
    exports.enable('');
  }
  function enabled(name) {
    var i,
        len;
    for (i = 0, len = exports.skips.length; i < len; i++) {
      if (exports.skips[i].test(name)) {
        return false;
      }
    }
    for (i = 0, len = exports.names.length; i < len; i++) {
      if (exports.names[i].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
  return module.exports;
});

$__System.registerDynamic("5f", ["5e"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  exports = module.exports = $__require('5e');
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
  exports.colors = ['lightseagreen', 'forestgreen', 'goldenrod', 'dodgerblue', 'darkorchid', 'crimson'];
  function useColors() {
    return ('WebkitAppearance' in document.documentElement.style) || (window.console && (console.firebug || (console.exception && console.table))) || (navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31);
  }
  exports.formatters.j = function(v) {
    return JSON.stringify(v);
  };
  function formatArgs() {
    var args = arguments;
    var useColors = this.useColors;
    args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
    if (!useColors)
      return args;
    var c = 'color: ' + this.color;
    args = [args[0], c, 'color: inherit'].concat(Array.prototype.slice.call(args, 1));
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-z%]/g, function(match) {
      if ('%%' === match)
        return;
      index++;
      if ('%c' === match) {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
    return args;
  }
  function log() {
    return 'object' === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem('debug');
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e) {}
  }
  function load() {
    var r;
    try {
      r = exports.storage.debug;
    } catch (e) {}
    return r;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e) {}
  }
  return module.exports;
});

$__System.registerDynamic("60", ["5f"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('5f');
  return module.exports;
});

$__System.register('61', ['8', '11', '16', '40', '41', '60', '3b', '3d', '5b'], function (_export) {
  var _get, _inherits, _Object$keys, _createClass, _classCallCheck, debug, _Promise, socketIO, Emitter, d, HotReloader;

  function identity(value) {
    return value;
  }

  return {
    setters: [function (_) {
      _get = _['default'];
    }, function (_2) {
      _inherits = _2['default'];
    }, function (_5) {
      _Object$keys = _5['default'];
    }, function (_3) {
      _createClass = _3['default'];
    }, function (_4) {
      _classCallCheck = _4['default'];
    }, function (_6) {
      debug = _6['default'];
    }, function (_b) {
      _Promise = _b['default'];
    }, function (_d) {
      socketIO = _d['default'];
    }, function (_b2) {
      Emitter = _b2['default'];
    }],
    execute: function () {
      /* */

      /* eslint-env browser */
      'use strict';

      "format esm";d = debug('hot-reloader');

      if (System.trace !== true) {
        console.warn('System.trace must be set to true via configuration before loading modules to hot-reload.');
      }
      HotReloader = (function (_Emitter) {
        _inherits(HotReloader, _Emitter);

        function HotReloader(backendUrl) {
          var _this = this;

          var transform = arguments.length <= 1 || arguments[1] === undefined ? identity : arguments[1];

          _classCallCheck(this, HotReloader);

          if (!backendUrl) {
            backendUrl = '//' + document.location.host;
          }
          _get(Object.getPrototypeOf(HotReloader.prototype), 'constructor', this).call(this);
          this.originalSystemImport = System['import'];
          this.transform = transform;
          var self = this;
          self.clientImportedModules = [];
          System['import'] = function () {
            var args = arguments;
            self.clientImportedModules.push(args[0]);
            return self.originalSystemImport.apply(System, arguments)['catch'](function (err) {
              self.lastFailedSystemImport = args;
              throw err;
            });
          };
          this.socket = socketIO(backendUrl);
          this.socket.on('connect', function () {
            d('hot reload connected to watcher on ', backendUrl);
            _this.socket.emit('identification', navigator.userAgent);
            _this.socket.emit('package.json', function (pjson) {
              // self.pjson = pjson // maybe needed in the future?
              self.jspmConfigFile = pjson.jspm.configFile || 'config.js';
            });
          });
          this.socket.on('reload', function () {
            d('whole page reload requested');
            document.location.reload(true);
          });
          this.socket.on('change', this.onFileChanged.bind(this));
          window.onerror = function (err) {
            _this.socket.emit('error', err); // emitting errors for jspm-dev-buddy
          };
          this.socket.on('disconnect', function () {
            d('hot reload disconnected from ', backendUrl);
          });
          this.pushImporters(System.loads);
        }

        _createClass(HotReloader, [{
          key: 'onFileChanged',
          value: function onFileChanged(ev) {
            var _this2 = this;

            var moduleName = this.transform(ev.path);
            this.emit('change', moduleName);
            if (moduleName === 'index.html' || moduleName === this.jspmConfigFile) {
              document.location.reload(true);
            } else {
              if (this.lastFailedSystemImport) {
                // for wehn inital System.import fails
                return this.originalSystemImport.apply(System, this.lastFailedSystemImport).then(function () {
                  d(_this2.lastFailedSystemImport[0], 'broken module reimported succesfully');
                  _this2.lastFailedSystemImport = null;
                });
              }
              if (this.currentHotReload) {
                this.currentHotReload = this.currentHotReload.then(function () {
                  // chain promises TODO we can solve this better- this often leads to the same module being reloaded mutliple times
                  return _this2.hotReload(moduleName);
                });
              } else {
                if (this.failedReimport) {
                  this.reImportRootModules(this.failedReimport, new Date());
                } else {
                  this.currentHotReload = this.hotReload(moduleName);
                }
              }
            }
          }
        }, {
          key: 'pushImporters',
          value: function pushImporters(moduleMap, overwriteOlds) {
            _Object$keys(moduleMap).forEach(function (moduleName) {
              var mod = System.loads[moduleName];
              if (!mod.importers) {
                mod.importers = [];
              }
              mod.deps.forEach(function (dependantName) {
                var normalizedDependantName = mod.depMap[dependantName];
                var dependantMod = System.loads[normalizedDependantName];
                if (!dependantMod) {
                  return;
                }
                if (!dependantMod.importers) {
                  dependantMod.importers = [];
                }
                if (overwriteOlds) {
                  var imsIndex = dependantMod.importers.length;
                  while (imsIndex--) {
                    if (dependantMod.importers[imsIndex].name === mod.name) {
                      dependantMod.importers[imsIndex] = mod;
                      return;
                    }
                  }
                }
                dependantMod.importers.push(mod);
              });
            });
          }
        }, {
          key: 'deleteModule',
          value: function deleteModule(moduleToDelete, from) {
            var name = moduleToDelete.name;
            if (!this.modulesJustDeleted[name]) {
              var exportedValue = undefined;
              this.modulesJustDeleted[name] = moduleToDelete;
              if (!moduleToDelete.exports) {
                // this is a module from System.loads
                exportedValue = System.get(name);
                if (!exportedValue) {
                  console.warn('missing exported value on ' + name + ', reloading whole page because module record is broken');
                  return document.location.reload(true);
                }
              } else {
                exportedValue = moduleToDelete.exports;
              }
              if (typeof exportedValue.__unload === 'function') {
                exportedValue.__unload(); // calling module unload hook
              }
              System['delete'](name);
              this.emit('deleted', moduleToDelete);
              d('deleted a module ', name, ' because it has dependency on ', from);
            }
          }
        }, {
          key: 'getModuleRecord',
          value: function getModuleRecord(moduleName) {
            return System.normalize(moduleName).then(function (normalizedName) {
              var aModule = System._loader.moduleRecords[normalizedName];
              if (!aModule) {
                aModule = System.loads[normalizedName];
                if (aModule) {
                  return aModule;
                }
                return System.normalize(moduleName + '!').then(function (normalizedName) {
                  // .jsx! for example are stored like this
                  var aModule = System._loader.moduleRecords[normalizedName];
                  if (aModule) {
                    return aModule;
                  }
                  throw new Error('module was not found in Systemjs moduleRecords');
                });
              }
              return aModule;
            });
          }
        }, {
          key: 'hotReload',
          value: function hotReload(moduleName) {
            var _this3 = this;

            var self = this;
            var start = new Date().getTime();

            this.modulesJustDeleted = {}; // TODO use weakmap
            return this.getModuleRecord(moduleName).then(function (module) {
              _this3.deleteModule(module, 'origin');
              var toReimport = [];

              function deleteAllImporters(mod) {
                var importersToBeDeleted = mod.importers;
                return importersToBeDeleted.map(function (importer) {
                  if (self.modulesJustDeleted.hasOwnProperty(importer.name)) {
                    d('already deleted', importer.name);
                    return false;
                  }
                  self.deleteModule(importer, mod.name);
                  if (importer.importers.length === 0 && toReimport.indexOf(importer.name) === -1) {
                    toReimport.push(importer.name);
                    return true;
                  } else {
                    // recourse
                    var deleted = deleteAllImporters(importer);
                    return deleted;
                  }
                });
              }

              if (typeof module.importers === 'undefined' || module.importers.length === 0) {
                toReimport.push(module.name);
              } else {
                var deleted = deleteAllImporters(module);
                if (deleted.find(function (res) {
                  return res === false;
                }) !== undefined) {
                  toReimport.push(module.name);
                }
              }
              d('toReimport', toReimport);
              if (toReimport.length === 0) {
                toReimport = self.clientImportedModules;
              }
              return _this3.reImportRootModules(toReimport, start);
            }, function (err) {
              _this3.emit('moduleRecordNotFound', err);
              // not found any module for this file, not really an error
            });
          }
        }, {
          key: 'reImportRootModules',
          value: function reImportRootModules(toReimport, start) {
            var _this4 = this;

            var promises = toReimport.map(function (moduleName) {
              return _this4.originalSystemImport.call(System, moduleName).then(function (moduleReloaded) {
                d('reimported ', moduleName);
                if (typeof moduleReloaded.__reload === 'function') {
                  var deletedModule = _this4.modulesJustDeleted[moduleName];
                  if (deletedModule !== undefined) {
                    moduleReloaded.__reload(deletedModule.exports); // calling module reload hook
                  }
                }
              });
            });
            return _Promise.all(promises).then(function () {
              _this4.emit('allReimported', toReimport);
              _this4.pushImporters(_this4.modulesJustDeleted, true);
              _this4.modulesJustDeleted = {};
              _this4.failedReimport = null;
              _this4.currentHotReload = null;
              d('all reimported in ', new Date().getTime() - start, 'ms');
            }, function (err) {
              _this4.emit('error', err);
              console.error(err);
              _this4.failedReimport = toReimport;
              _this4.currentHotReload = null;
            });
          }
        }]);

        return HotReloader;
      })(Emitter);

      _export('default', HotReloader);
    }
  };
});
$__System.register('62', ['61'], function (_export) {
  /* */
  'use strict';

  var HotReloader;
  return {
    setters: [function (_) {
      HotReloader = _['default'];
    }],
    execute: function () {
      "format esm";

      new HotReloader('http://localhost:5776');
    }
  };
});
$__System.register("1", ["62"], function (_export) {
  "use strict";

  return {
    setters: [function (_) {}],
    execute: function () {

      console.log("gay");
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=app.js.map