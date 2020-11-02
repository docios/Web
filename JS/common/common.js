 /**
  * @param {Object} obj 对象
  * @param {Object} name 属性名
  */
 function log(printMsg) {
     console.log(printMsg);
 }


 /**
  * @param {Object} obj 对象
  * @param {Object} name 属性名
  */
 function setStyle(obj, name) {
     if (window.getComputedStyle) {
         return window.getComputedStyle(obj, null)[name];
     } else {
         return obj.currentStyle[name];
     }
 }

 /**
  * @param {Object} obj 
  * @param {Object} attr 属性
  * @param {Object} target 移动目标
  * @param {Object} value每次移动的距离 正直向右移动
  */
 function move(obj, attr, target, value, callBcakFun) {
     clearInterval(obj.timer);
     var oldValue = parseInt(setStyle(obj, attr)); //获取当前obj 对象距离左侧的距离
     if (target < oldValue) {
         value = -value;
     }
     obj.timer = setInterval(function() {
         oldValue += value;
         if (value < 0 && oldValue <= target || value > 0 && oldValue >= target) {
             oldValue = target;
         }
         if (oldValue == target) {
             clearInterval(obj.timer);
             callBcakFun && callBcakFun();
         }
         obj.style[attr] = oldValue + "px";
     }, 100);
 }

 /**
  * 添加类
  * @param {Object} obj 对象
  * @param {Object} valueName 属性名
  */
 function addClass(obj, valueName) {
     if (!hasClass(obj, valueName)) {
         obj.className += " " + valueName;

     }
 }

 /**
  * 判断是否含有该类
  * @param {Object} obj 对象
  * @param {Object} valueName 属性名
  */
 function hasClass(obj, valueName) {
     var reg = new RegExp("\\b" + valueName + "\\b");
     return reg.test(obj.className);
 }


 /**
  * 移除类
  * @param {Object} obj 对象
  * @param {Object} valueName 属性名
  */
 function removeClass(obj, valueName) {
     var reg = new RegExp("\\b" + valueName + "\\b");
     obj.className = obj.className.replace(reg, "");

 }


 function toggleClass(obj, valueName) {
     if (!hasClass(obj, valueName)) {
         addClass(obj, valueName);
     } else {
         removeClass(obj, valueName);
     }
 }