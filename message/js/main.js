function swiperAnimateCache() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("swiper-animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("swiper-animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
}
function swiperAnimate(a) {
    clearSwiperAnimate();
    var b = a.slides[a.activeIndex].querySelectorAll(".ani");
    for (i = 0; i < b.length; i++) b[i].style.visibility = "visible", effect = b[i].attributes["swiper-animate-effect"] ? b[i].attributes["swiper-animate-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["swiper-animate-duration"] ? b[i].attributes["swiper-animate-duration"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = b[i].attributes["swiper-animate-delay"] ? b[i].attributes["swiper-animate-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), b[i].setAttribute("style", style)
}

function clearSwiperAnimate() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["swiper-animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["swiper-animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["swiper-animate-effect"] && (effect = allBoxes[i].attributes["swiper-animate-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
}
/*全局变量*/
var d_seller="image/user1.png";
var d_customer="image/user2.png";
var message_block_height=0;
var delay_time=0;
var foot = document.getElementById("footer");
var arrow = document.getElementById("arrow");
var message_records_object={
    message_records:[
 { 
        seller_message_text: "在吗？ 有件重要的事对你说！ 看到消息请回复。 谢谢 ", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "", 
        customer_message_text: "什么事？ ", 
        customer_message_text_url: "",
        customer_message_image: "", 
        customer_message_image_url: "" 
    }, 
    { 
        seller_message_text: "你有听说过某某活动吗？ ", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "没有诶， 某某活动是什么？ ", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "", 
        customer_message_text_url: "", 
        customer_message_image: "image/biguanghuan11.gif", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "有件重要的事情对你说!", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "什么事？", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "你听说过某某品牌举办的2016开年行运梦成真吗?", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "没有额，某某品牌是什么", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "恩", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "接下来我要讲一件对你我都很重要的事情", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "快点讲吧真的是", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "", 
        customer_message_text_url: "", 
        customer_message_image: "image/biguanghuan6.gif", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "让我冷静一下先", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "好吧 ", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "你先冷静冷静啊", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
     { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "等一下.该不会是......", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "", 
        customer_message_text_url: "", 
        customer_message_image: "image/biguanghuan6.gif", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "这德玛，好想去啊", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    },
    { 
        seller_message_text: "想去吧。跟我一起啊 ", 
        seller_message_text_url: "", 
        seller_message_image: "", 
        seller_message_image_url: "",
        customer_message_text: "好，咱们走吧", 
        customer_message_text_url: "", 
        customer_message_image: "", 
        customer_message_image_url: "" 
    }

    ]};


// var message_records_eval=eval('('+message_records+')');
 // console.log("输出json字符串"+message_records_object.message_records.length);
// 举例:m1_name:seller_message_text
//      m1_value:在吗？
//      m2_name:seller_message_text_url
//      m2_value:" "
function createMessage(m1_name,m1_value,m2_name,m2_value)
{
    var  message_box_class="";
    var user_image="";
    //图片资源
    var triangle_type="";
    // 图片资源类
    var triangle_class="";
    var message="";
    if((m1_name=="seller_message_text")||(m1_name=="seller_message_image"))
    {
        message_box_class="template-user-dialog-left";
        user_image=d_seller;
        triangle_type="image/triangle.png";
        triangle_class="triangle-left";
    }
    else
    {
        message_box_class="template-user-dialog-right";
        user_image=d_customer;
        triangle_type="image/triangle1.png";
        triangle_class="triangle-right";
    }

    if(m1_value)
    {
        if((m1_name=="seller_message_text")||(m1_name=="customer_message_text"))//text
       {  
            // url
             if(m2_value)
              {
                 message='<div class="'+triangle_class+'"><img src="' + triangle_type+'" alt=" "></div>\
                <div class="message"><a href="'+m2_value+'" class="message-url">'+m1_value+'</a></div>\
                 ';

              }
            //text 
              else
              {
                message='<div class="'+triangle_class+'"><img src="' + triangle_type+'" alt=" "></div>\
                <div class="message"><p>'+m1_value+'</p></div>\
                 ';
              }

        }
        // image
        else if(((m1_name == "seller_message_image") || (m1_name = "customer_message_image")))
        {
            // image-url
            if(m2_value)
            {
                message='<a href="' + m2_value + '" title="" class="message-url">' +
                    '<img src="' + m1_value + '" alt="" class="message-img">' + '</a>';
            }
          else
          {
             message='<img src="'+m1_value+'" alt="" class="message-img">';
          }
           
            

        }
         var message_block='<div class="block ani"  swiper-animate-effect="fadeInUp" swiper-animate-duration="600ms" swiper-animate-delay="' + delay_time + 'ms" ><div class="'+message_box_class+'">\
                    <div class="user"><img src="'+user_image+'" alt="" class="user-image"></div>  \
                    <div class="dialog">'+message+' </div>\
                   </div></div>';
         return message_block;

    }
    else
    {
        return '';
    }
}

window.onload=function()
{   

var swiper = new Swiper('.swiper-container', {


    direction: 'vertical',
    mousewheelControl : true,
    onInit: function(swiper) {
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成后开始动画 
    },

    onSlideChangeEnd: function(swiper) {
        // alert('事件触发');
         swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        // 切换slide触发加载动画
        // alert(swiper.activeIndex);
        if (swiper.isBeginning) {
            foot.style.display = "none";
            arrow.style.display = "block";
        } else if (swiper.isEnd) {
            foot.style.display = "none";
            arrow.style.display = "none";
        } else {
            foot.style.display = "block";
            arrow.style.display = "block";
        }
    }
});

     (function(){
        var weeks=["星期天","星期一","星期二","星期三","星期四","星期五","星期六"];
        var today=new Date();
        var Month=today.getMonth()+1;//月份
        var Day=today.getDate();//月份的第几天
        var week=weeks[today.getDay()];
        var Hours=today.getHours()<10?'0'+today.getHours():today.getHours();
        var Minutes=today.getMinutes()<10?'0'+today.getMinutes():today.getMinutes();//分钟
        var date_week='';
        date_week=Month+'月'+Day+'日'+week;
        console.log("当前时间:"+date_week);
        var current_time=Hours+":"+Minutes;
        console.log("当前时间:"+current_time);
        document.getElementById('date-week').innerHTML=date_week;
        document.getElementById('current-time').innerHTML=current_time;
     })();
    var messages='';
for(var i=0;i<message_records_object.message_records.length;i++)
{
    var seller_message_text = createMessage("seller_message_text", message_records_object.message_records[i].seller_message_text, "seller_message_text_url", message_records_object.message_records[i].seller_message_text_url);
    var seller_message_image = createMessage("seller_message_image", message_records_object.message_records[i].seller_message_image, "seller_message_image_url", message_records_object.message_records[i].seller_message_image_url);
    var customer_message_text = createMessage("customer_message_text", message_records_object.message_records[i].customer_message_text, "customer_message_text_url",message_records_object.message_records[i].customer_message_text_url);
    var customer_message_image = createMessage("customer_message_image",message_records_object.message_records[i].customer_message_image, "customer_message_image_url",message_records_object.message_records[i].customer_message_image_url);
      if (seller_message_text) {
            messages += seller_message_text;
        }
        if (seller_message_image) {
            messages += seller_message_image;
        }
        if (customer_message_text) {
            messages += customer_message_text;
        }
        if (customer_message_image) {
            messages += customer_message_image;
        }

}
 var message_box = '<div class="swiper-slide swiper-slide-message " > \
                        ' + messages + '<div id="backplate"></div></div>';

 swiper.appendSlide(message_box);


 /*/*实现分页处理*/
 
 var blocks=document.getElementsByClassName("block");
 // 这里不能直接用blocks,原因是在删除子节点之后，blocks会重新加载元素
 var testDivs = Array.prototype.filter.call(blocks, function(testElement) {
        return testElement.nodeName === 'DIV';
    });


 // console.log("所有的block高度为:"+blocks.length);
 //用来存储未处理的blocks
 var Cache_Unhandled_blocks=[];

 /*用来存储未处理的block的高度。原因是，要分页时，删除了溢出的节点，
 下一步，剩下的block进行分页处理的时候，需要用高度判断偶没有溢出屏幕
 ，而这时，元素已经移除，无法判断高度，所以事先应该保存高度*/
 var Cache_Height=[];
 var height=window.innerHeight;
 var temp=0;
 delay_time=0;
 // console.log("返回窗口的高度"+height);
 for(var i=0;i<testDivs.length;i++)
 {
    
    var flag=0;
    var parentNode=testDivs[i].parentNode;
    // console.log("父元素为:"+parentNode.className);
     // swiper-animate-effect="fadeInUp" swiper-animate-duration="0.5s" swiper-animate-delay="0.3s"
    message_block_height+=testDivs[i].offsetHeight;
    
    if(message_block_height>(height-32*2))
    {
        
        flag=1;
    }
    else
    {
          delay_time+=400;
          blocks[i].setAttribute("swiper-animate-delay",delay_time+"ms");

    }
    
    if(flag>0)
    {
        console.log("temp"+temp);
        Cache_Unhandled_blocks[temp]=testDivs[i];
        Cache_Height[temp]=testDivs[i].offsetHeight;
        temp=temp+1;
        delay_time=0;
        //console.log("temp"+temp);
        parentNode.removeChild(testDivs[i]);
    }
 }
 console.log("剩余的消息的高度时:"+Cache_Unhandled_blocks.length);
 if(Cache_Unhandled_blocks.length>0)
 {
    var message_height=0;
    var swiper_slide_message=document.createElement('div');
    swiper_slide_message.className='swiper-slide swiper-slide-message';
    var div=swiper_slide_message.cloneNode(true);//这里设置的小技巧
    for(var i=0;i<Cache_Unhandled_blocks.length;i++)
    {
        delay_time+=400;
        message_height+=Cache_Height[i];
        if(message_height>height-32*2)//分页处理
        {
            delay_time=400;
            message_height=0;
             swiper.appendSlide(div);
            div = swiper_slide_message.cloneNode(true);
        }
        Cache_Unhandled_blocks[i].setAttribute("swiper-animate-delay", delay_time + "ms")
          div.appendChild(Cache_Unhandled_blocks[i]);
    }
    //如果不需要分页
    if(div.hasChildNodes())
    {
       swiper.appendSlide(div);
    }
 }

  swiperAnimateCache();
 
if(swiper.isBeginning){
   swiperAnimate(swiper);
}

  // 添加最后一页
    var lastpage_div = '<div class="swiper-slide swiper-side-n">\
                            <img src="http://stor.weixinhost.com/3/wxhost-images/ar_e7962da795f80341451f265089cb853a9c2fcfd4" alt="" style="width:100%;height:100%;">\
                            <div class="template-eveCanvas">\
                                <div class="template-title ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2400ms" swiper-animate-delay="1200ms"> 关注官方微信，后续剧情早知道 </div>\
                                <div class="template-code ani" swiper-animate-effect="zoomIn" swiper-animate-duration="2400ms" swiper-animate-delay="400ms">\
                                    <div class="title-box">\
                                     <img src="http://open.weixin.qq.com/qr/code/?username=gh_4a0a01ec1f3b" alt="">\
                                    <div class="template-left ani" swiper-animate-effect="fadeInDown" swiper-animate-duration="2400ms" swiper-animate-delay="400ms"></div>\
                                    <div class="template-top ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="2400ms" swiper-animate-delay="400ms"></div>\
                                    <div class="template-right ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="2400ms" swiper-animate-delay="400ms"></div>\
                                    <div class="template-bottom ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="2400ms" swiper-animate-delay="400ms"></div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
    swiper.appendSlide(lastpage_div);

}
