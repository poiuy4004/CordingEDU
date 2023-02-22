var qkel={
    qorudtor:function (color){
    document.querySelector('body').style.backgroundColor=color;
    }
}

var a={
    color:function (color){

    var linka=document.querySelectorAll('a')

    var i=0

        while(i<linka.length){
        linka[i].style.color=color;
        i=i+1;        
        }
    }
}

function ND(dlsvnt){

var target=document.querySelector('body');

    if(dlsvnt.value==='Night\nMode'){
        qkel.qorudtor('gray');
        dlsvnt.value='Day\nMode';
        a.color('black');
    }

    else{
        qkel.qorudtor('white');
        dlsvnt.value='Night\nMode';
        a.color('black');
    }

}