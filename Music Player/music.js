class Music{
    constructor(title,singer,img,file){
        this.title=title;
        this.singer=singer;
        this.img=img;
        this.file=file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}

const musicList=[
    new Music("Boşver","Nulüfer","1.jpeg","1.mp3"), 
];

