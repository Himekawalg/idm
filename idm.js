// idm.js by Himekawa(Hermit) - 蝶梦js扩展库,让蝶梦也能用上js。优先支持中文
// version: v0.1
var version="0.1";
var author="Himekawa(Hermit)";
var pi=3.14159265

function _test()
{
    alert("This is a test!\nPowered by idm.js");
}
function _强加密(message)
{
    // 强加密,不使用base64而使用自创算法。
    // 只要你不翻源码,基本无解。
}

function 随机数()
{
    return Math.random();
}
function 四舍五入(num)
{
    return Math.round(num);
}
function 最大值(num1,num2)
{
    return Math.max(num1,num2);
}
function 最小值(num1,num2)
{
    return Math.min(num1,num2);
}
function 绝对值(num)
{
    return Math.abs(num);
}
function 正弦(num)
{
    return Math.sin(num);
}
function 自然对数(num)
{
    return Math.log(num);
}
function 转字符串(num)
{
    return num.toString();
}
function 长度(str)
{
    return str.length;
}
function 时间()
{
    var idm_time=new Date();
    var idm_tmp=idm_time.toLocaleString();
    return idm_tmp;
}
function 大写(str)
{
    return str.toUpperCase();
}
function 小写(str)
{
    return str.toLowerCase();
}
function 加密(str)
{  
    return window.btoa(encodeURI(str));
}
function 解密(str)
{
    return decodeURI(window.atob(str));
}
function 持久化存储(name,value)
{
    localStorage.setItem(name,value);
}
function 持久化检索(name)
{
    return localStorage.getItem(name);
}
function 持久化删除(name)
{
    localStorage.removeItem(name);
}
