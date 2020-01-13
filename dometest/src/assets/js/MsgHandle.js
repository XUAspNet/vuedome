
//消息处理类
class MsgHandle {
    _soket;//soket 对象 备用
    _analysis;
    _assemble;
    //构造函数
    constructor(soket) {
        this._soket = soket;
        this._analysis = soket._analysis;
        this._assemble = soket._assemble;
    }
    //根据协议号自动处理该消息
    msgHandle(num, data) {//协议号/数据包
        //var funName = this.agreementArry.find((itme) => { return itme.num == num }).agreement;
        const arrybuff = this._analysis.analysis(num, data);
        if (typeof this["mh" + num] == "function") {
            this["mh" + num](arrybuff);
        }
    }
    //登录房间
    mh0x09000246(arrybuff) {

    }

}