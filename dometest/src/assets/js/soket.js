import tool from "./tool";
import MsgHandle from "./MsgHandle";//消息处理类
import Assemble from "./Assemble";//数据组装
import Analysis from "./Analysis";//数据解析
//soket 主体
let soket = {
    ws: "",
    _tool,
    _msgHandle,
    _assemble,
    _analysis,
    hostArry: [],
    // agreementArry: [{ num: "10001", agreement: "ndds" }],
    init: function (host) {
        // var _this = this;
        this.ws = new websoket(host);
        this.ws.onopen = this.wsOpen;
        this.ws.wsMsg = this.wsMsg;
        this._tool = new tool();

        this._analysis = new Analysis(this);
        this._assemble = new Assemble(this);
        this._msgHandle = new MsgHandle(this);

    },
    wsOpen: function () {
        //打开

    },
    wsMsg: function (msg) {
        //接受消息
        var data = msg.data;
        var handle = new Uint32Array(data, 12, 4);
        this._msgHandle(handle[1], data);
    }
};


