// var user=prompt("값을 입력하세요");

var user = "";
while(true){    // while 무한루프 걸기는 이렇게 하면 됩니다
    user = prompt("가위,바위,보 중에 하나를 입력하세요:");
    if(user == "가위" || user == "바위" || user == "보"){
        break;  // while 무한루프를 빠져나감
    } else {
        alert("장난치지마세요");
    }
}
var com = Math.floor(Math.random()* 3);



if(com ==1){
    com="바위";
}else if(com ==2){
   com="가위";
}else{
    com="보";
}



dw("유저:"+user);
br();
dw("컴:"+com);
br();

var winDrawLose= "";

switch(user){
    case "바위":
        switch(com){
            case "바위":
                winDrawLose = "DRAW";
                break;
            case "가위":
                winDrawLose = "LOSE";
                break;
            case "보":
                winDrawLose = "WIN";
                break;
        }
        break;
    case "가위" :
    switch(com){
        case "바위":
            winDrawLose = "WIN";
            break;
        case "가위":
            winDrawLose = "DRAW";
            break;
        case "보":
            winDrawLose = "LOSE";
            break;
    }
    break;
    case "보" :
        switch(comRpc){
            case "가위":
                winDrawLose = "WIN";
                break;
            case "바위":
                winDrawLose = "LOSE";
                break;
            case "보":
                winDrawLose = "DRAW";
                break;
        }        
        break;
}
dw(winDrawLose);

function dw(str){    // var str; var str = "고양이";
    document.write(str);
}
function br(){
    document.write("<br>");
}