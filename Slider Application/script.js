let carModels=[
    {
        name:"bmw 12p",
        image:'jpeg/car-1.jpg',
        link:'https://www.google.com'
    },
    {
        name:"ferrari 12p",
        image:'jpeg/car-2.jpg',
        link:'https://www.google.com'    
    },
    {
        name:"merdeces 12p",
        image:'jpeg/car-3.jpg',
        link:'https://www.google.com'    
    },
    {
        name:"tesla 12p",
        image:'jpeg/car-4.jpg',
        link:'https://www.google.com'    
    },
    {
        name:"aaaaa 12p",
        image:'jpeg/car-5.jpg',
        link:'https://www.google.com'    
    },
    
];

let index=0;
let slaytCount=carModels.length;
let interval;
let settings={
    duration:'1000',
    random:false,
}
init(settings);

document.querySelector('.fa-arrow-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});


document.querySelector('.fa-arrow-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrowbuton').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrowbuton').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
    // setTimeout//belli süre sonra başlar öyle gider
    // setInterval// clear interval ile yapmazsan durmaz asla
    let prev;
    interval=setInterval(function(){
        if(settings.random){
            //random index
            do{
                index=Math.floor(Math.random()*slaytCount);

            }while(index==prev)
            prev=index;
        }else{
            //artan index
            if(slaytCount==index+1){
                index=-1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index);
    },settings.duration)


}


function showSlide(i){

    index =  i;
    if(i<0){
        index=slaytCount-1;
    }  
    if(i>=slaytCount){
        index=0;
    }
    document.querySelector('.card-title').textContent=carModels[index].name;
    document.querySelector('.card-img-top').setAttribute('src',carModels[index].image);
    document.querySelector('.card-link').setAttribute('href',carModels[index].link);

}


