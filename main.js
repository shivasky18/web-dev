let boxes=document.querySelectorAll(".box");
let re=document.querySelector("#resetbt");
let newbt=document.querySelector("#newbt");

let turnx=true;
let p1=document.querySelector("#p1 span");
let p2=document.querySelector("#p2 span");

p1.innerHTML=0;
p2.innerHTML=0;
let p1_score=0;
let p2_score=0;


const wincases=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],
[6,7,8]];

const regame=() => {
    for(each of boxes){
        each.disabled=false;
        each.innerText="";
    }

}

const resetgame=() => {
    for(each of boxes){
        each.disabled=false;
        each.innerText="";
        p1.innerHTML=0;
        p2.innerHTML=0;

    }

}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box clicked")
        if(turnx){
            box.innerHTML="X"
            turnx=false
        }
        else{
            box.innerHTML="O"
            turnx=true
        }
        box.disabled=true;
        winfun();
    })

});

const winfun=() =>{
    for(each of wincases){
        let val1=boxes[each[0]].innerText;
        let val2=boxes[each[1]].innerText;
        let val3=boxes[each[2]].innerText;
        if(val1 !="" && val2 !="" && val3 !="" ){
            if (val1==val2 && val1==val3){
                if(val1=="X"){
                    p1_score++;
                    p1.innerHTML=p1_score;
                    console.log("P1 WINNER");
                    alert("P1 IS WINNER \n choose either a newgame or reset");
                    for(each of boxes){
                        each.disabled="true";
                    }
                }
                else{
                    p2_score++;
                    p2.innerHTML=p2_score;
                    console.log("P2 WINNER");
                    alert("P2 IS WINNER \n choose either a newgame or reset");
                    for(each of boxes){
                        each.disabled="true";
                    }

                }
                console.log("WINNER");
            }
        alert("IT IS A DRAW");
        }
    }
}
newbt.addEventListener("click",() =>{
    regame();
})

re.addEventListener("click",() =>{
    resetgame();
})

