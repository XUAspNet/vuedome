
//数据解析类 
class Analysis {
    //soket 对象 备用
    _soket;
    //构造函数
    constructor(soket) {
        this._soket = soket;
    }
    //根据协议号自动调用对应解析方法
    analysis(num, data) {//协议号/数据包
        //var funName = this.agreementArry.find((itme) => { return itme.num == num }).agreement;
        if (typeof this["ay" + num] == "function") {
            return this["ay" + num](data);
        }
        return null;
    }
    //去除空格
    arryTostrTrim(str) {
        var num = str.indexOf("\0");
        if (num > 0)
            str = str.substring(0, num);
        return str;
    }
    //=================================以下为协议对应解析方法，以ay+协议号命名===========================================//
    ay0x09000246(data) {

    }
}

