var Alert = class {
    TIMER
    data = {
        load:{
            cover:{
                background: "#ffffff"
            },
            box:{
                background:"rgba(16,16,16,.5)",
                size: "100px",
            },
            img:{
                size: "100px",
            },
            timeout:0
        }
    }
    load(params={cover:{background:"#ffffff"},box:{background:"rgba(16,16,16,.5)",size:"100px"},img:{size:"100px"},timeout:0}){
        this.data.load.cover = params.cover?params.cover:{background:"#ffffff"};
        this.data.load.box = params.box?params.box:{background:"rgba(16,16,16,.5)",size: "100px"};
        this.data.load.img = params.img?params.img:{size:"100px"};
        this.data.timeout = params.timeout?params.timeout:0;
        $("#ALERTJS_LoadingBox").remove();
        let borderRadius=parseInt(this.data.load.box.size) * 0.1+"px";
        let __marginTop=parseInt(this.data.load.box.size) / 2 + "px";
        let html=`
        <div id="ALERTJS_LoadingBox">
            <div style="background:${this.data.load.box.background};width: ${this.data.load.box.size};height:${this.data.load.box.size};line-height:${this.data.load.box.size};text-align:center;border-radius:${borderRadius};margin:0 auto;margin-top:calc(50vh - ${__marginTop})">
                <div><img src="../assets/loading.gif" style="width:${this.data.load.img.size};height:${this.data.load.img.size}"></div>
            </div>
        </div>
        `;
        $("body").append(html);
        $("#ALERTJS_LoadingBox").show();
        if(this.data.load.timeout>0){
            this.TIMER=window.setTimeout(() => {
                $("#ALERTJS_LoadingBox").hide();
                $("#ALERTJS_LoadingBox").remove();
            }, timeout*1000);
        }else{
            ;
        }
    }
    hideLoad(){
        window.clearTimeout(__ALERT__.TIMER);
        $("#ALERTJS_LoadingBox").hide();
        $("#ALERTJS_LoadingBox").remove();
    }
    fn1(){
        ;
    };
    fn2(){
        ;
    };
    toast(data={content:"操作成功！",fn:()=>{},timeout:0}){
        data.content = data.content?data.content:"操作成功！";
        data.timeout = data.timeout?data.timeout:3;
        this.fn1=()=>{
            data.fn();
        }
        $("#ALERTJS_alertBox").remove();
        let html=`
        <div id="ALERTJS_alertBox" style="z-index:1500;height: 50px;;line-height:50px;text-align:center;width: 50%;background: #138496;border: 1px solid #138496;color:#fff;border-radius: 0 0 5px 5px;box-shadow: 0 2px 2px #aaa;position: fixed;top: 0;left: 25%">
            ${data.content}
        </div>
        `;
        $("body").append(html);
        $("#ALERTJS_alertBox").show();
        if(data.timeout>0){
            this.TIMER=window.setTimeout(() => {
               $("#ALERTJS_alertBox").hide();
               $("#ALERTJS_alertBox").remove();
               __ALERT__.fn1();
            }, data.timeout*1000);
        }else{
            ;
        }
    }
    hideToast(){
        window.clearTimeout(__ALERT__.TIMER);
        $("#ALERTJS_alertBox").hide();
        $("#ALERTJS_alertBox").remove();
    }
    notice(data={title:"警告",maintip:"发生错误了！",secondarytip:"我们遇到了一个未知的错误！",positivetext:"好的，我明白了！",positiveoption:()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();},negativetext:"关闭",negativeoption:()=>{$("#ALERTJS_alertNoticeBox").hide();$("#ALERTJS_alertNoticeBox").remove();}}){
        data.title = data.title ? data.title : "警告";
        data.maintip = data.maintip ? data.maintip : "发生错误了！";
        data.secondarytip = data.secondarytip ? data.secondarytip : "我们遇到了一个未知的错误！";
        data.positivetext = data.positivetext ? data.positivetext : "好的，我明白了！";
        data.negativetext = data.negativetext ? data.negativetext : "关闭";
        this.fn1=()=>{
            data.positiveoption();
        }
        this.fn2=()=>{
            data.negativeoption();
        }
        $("#ALERTJS_alertNoticeBox").remove();
        let html=`
        <div id="ALERTJS_alertNoticeBox" style="min-width:500px;width:500px;max-width:500px;min-height:380px;height:auto;z-index:1500;background:linear-gradient(87deg,#f5365c 0,#f56036 100%);border-radius: 7px;box-shadow: 0 15px 35px rgba(50,50,93,.2), 0 5px 15px rgba(0,0,0,.17);position: fixed;top: 30vh;left: calc(50% - 250px);color:#fff;">
        <div style="font-weight: bold;padding:.5em 1em">
            <div style="float: left;">${data.title}</div>
            <div style="float: right;cursor:pointer" onclick="javascript:$('#ALERTJS_alertNoticeBox').hide();$('#ALERTJS_alertNoticeBox').remove();">
                <i class="fa fa-times"></i>
            </div>
            <div style="clear:both"></div>
        </div>
        <div style="text-align:center;">
            <div style="margin-top:5em">
                <i class="fa fa-bell" style="font-size:3em"></i>
            </div>
            <div style="font-weight:bolder;height:5em;line-height:5em;font-size: 1.2em">
                ${data.maintip}
            </div>
            <div>${data.secondarytip}</div>
        </div>
        <div style="height:2.7em;line-height: 3em;padding: 1.5em 1.25em">
            <div style="float:left">
                <button style="height: 2.7em;line-height: 2em;outline: none;background: #fff;border: 1px solid #fff;border-radius: 5px;padding: .35em 1em;cursor: pointer;" onclick="__ALERT__.fn1()">${data.positivetext}</button>
            </div>
            <div style="float:right;cursor:pointer" onclick="__ALERT__.fn2();">
                ${data.negativetext}
            </div>
            <div style="clear:both"></div>
        </div>
    </div>
        `;
        $("body").append(html);
        $("#ALERTJS_alertNoticeBox").show();
    }
    hideNotice(){
        $("#ALERTJS_alertNoticeBox").hide();
        $("#ALERTJS_alertNoticeBox").remove();
    }
};
var __ALERT__ = new Alert();