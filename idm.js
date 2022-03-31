// idm.js by Himekawa(Hermit) - 蝶梦js扩展库,优先支持中文。

// 内置变量
var idm_version="0.1";
var idm_author="Himekawa";
var pi=3.141592653589793;
// 带"_"的为测试中函数
function _test()
{
    alert("This is a test!\nPowered by idm.js");
}
function _强加密(message)
{
    // 强加密,不使用base64而使用自创算法。只要你不翻源码,基本没法解
}
function _强解密(message)
{

}
function _时间差(t1,t2)
{

}
function _数组和()
{

}

function 随机数()
{
    return Math.random();
}
function 随机整数(n,m)
{
    return parseInt(Math.random()*(m-n+1)+n);
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
function 余弦(num)
{
    return Math.cos(num);
}
function 正切(num)
{
    return Math.tan(num);
}
function 反正弦(num)
{
    return Math.asin(num);
}
function 反余弦(num)
{
    return Math.acos(num);
}
function 反正切(num)
{
    return Math.atan(num);
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
function 弹窗(message)
{
    alert(message);
}
function 音乐开(id)
{
    window.GameScene.play_bgm("http://music.163.com/song/media/outer/url?id="+id+".mp3");
}
function 音乐关()
{
    window.GameScene.stop_bgm();
}
function 输入(MDvalue)
{

}
function 定时器(time)
{

}

class 背包
{
    constructor(bag_name,bag_space)
    {
        this.bag_name=bag_name;
        this.bag_space=bag_space;
    }
    obj={};
    放入(name,num)
    {
        this.obj[name]+=num;
    }
    拿出(name,num)
    {
        if(this.obj[name]-num>=0) this.obj[name]-=num;
        else this.obj[name]=0;
    }
    改名(newname)
    {
        this.bag_name=newname;
    }
    改容(newspace)
    {
        this.bag_space=newspace;
    }
}
class 地图
{
    constructor(map_name,map_originalX,map_originalY)
    {
        this.map_name=map_name;
        this.map_X=map_originalX;
        this.map_Y=map_originalY;
    }

}
class _人物
{

}
