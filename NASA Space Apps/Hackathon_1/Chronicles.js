let countdown;
function startTimer(duration) {
    let timer = duration;
    countdown = setInterval(() => {
        if (timer <= 0) {
            clearInterval(countdown);
            return timer;
        } else {
            timer--;
            return timer;
        }
    }, 1000);}
function li(list2){
    for(let i=0;i<list1.length+2;i++){
        let a=8;
        let m=startTimer(a);
        if(m==0){
            document.getElementById(list1[i]).style.display="none";
        }
    }
}
let l=["0","Line_1","Line_2","Line_3","Line_4","Line_5","Line_6","Line_7"];
li(l);