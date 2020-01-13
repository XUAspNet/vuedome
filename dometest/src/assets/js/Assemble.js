

//消息组装类
class Assemble {

    _soket; //soket 对象 备用
    _tool;//帮助类
    //构造函数
    constructor(soket) {
        this._soket = soket;
        this._tool = soket.tool;
    }
    //将字符串填充到buff(要填充的字符串,目标buff,偏移起始位置)
    arryFillStr(str, buf, offset) {
        var uint8array = new TextEncoder().encode(str);
        var strLen = uint8array.length;
        var bufView = new Uint8Array(buf, offset, strLen);
        for (var i = 0; i < strLen; i++) {
            bufView[i] = uint8array[i];
        }
    }

    //创建arrybuff(整个buff长度，协议号)
    newSendData(len, agreement) {
        var sendData = new ArrayBuffer(16 + len);
        var headArry = new Int32Array(sendData, 0, 4);
        headArry[0] = 16 + len;
        headArry[1] = agreement;
        return sendData;
    }

    //=================================以下为协议对应组装方法，===========================================//
    //心跳
    heartbeat() {
        return sendData = this.newSendData(0, 286331153);
    }

    //登录房间({用户名，用户密码，房间idx,主播idx})
    userLoginRoom(parame) {
        var sendData = this.newSendData(304, 0x00000246);
        this.arryFillStr(parame.u_name, sendData, 16);
        this.arryFillStr(parame.u_pwd, sendData, 32);
        this.arryFillStr(parame.roomid, sendData, 76);
        var roomidxArry = new Uint32Array(sendData, 116, 1);
        roomidxArry[0] = parame.roomidx;
        var iswebEnterArry = new Uint32Array(sendData, 140, 1);
        iswebEnterArry[0] = this._tool.versions.android ? 9 : 8;
        var validArry = new Uint32Array(sendData, 188, 2);
        validArry[0] = 2;//语种 0简中1泰国2简中3英文4阿拉伯  简体中文推荐用2
        validArry[1] = 0;//进房间是否验证数据库 0 验证 1 不验证
        return sendData;
    }

    //退出房间(主播idx)
    EnterOutRoom(roomidx) {
        var sendData = this.newSendData(4, 20006);
        var infoArry = new Uint32Array(sendData, 12, 2);
        infoArry[0] = roomidx;
        infoArry[1] = 1;
        return sendData;
    }

}
