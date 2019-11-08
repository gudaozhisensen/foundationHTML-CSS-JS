var command_content = document.getElementsByClassName('command_content')[0];

var commandPart = command_content.get
var commandItem_btn = document.getElementsByClassName('commandTab')[0].getElementsByClassName('commandItem');

// tab 切换，event为当前要显示的tab，所以block传入的就为event的值，而其他的tab要进行隐藏，所以用for循环来使i变为要隐藏的tab的index值，最好i的初始值和tab的id一致，不容易出错

function tab(event) { 
    for( let i = 1; i <= commandItem_btn.length; i++){
            if(event == i){
                console.log("event:"+event);
                commandItem_btn[i-1].children[0].className = 'underline_active';
                document.getElementById("command_"+event).style.display = 'block';
            }else{
                console.log("i:"+i);
                commandItem_btn[i-1].children[0].className = '';
                document.getElementById("command_"+i).style.display = 'none';
            }
    }
}
