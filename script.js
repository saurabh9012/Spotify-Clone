console.log('Welcome to spotify...')



// Ab hum javaScript lekhege neche dekhe.

// Hum kuch variables ko Initialize krege neche dekhe.
let songIndex=0; //Konsa song play ho rha hai to initilly 0 song play hoga.

let audioElement=new Audio('songs/1.mp3') /*ye audioelement bnaya or fr eske under new audio kr ki humne
                                            eske under apne song ka path deya hai ye es trha se hum apne file
                                            ko add kr sekte hai image bhi kr sekte hai bs audio ki jgha image krna hoga 
                                            javaScript mein aise krte hai link file ko.*/

let masterPlay=document.getElementById('masterPlay')/*Ye humne masterplay name ka variable bnaya hai or esme
getElementbyId kra or fr jo humne html ki under icon ki jo id the masterplay usko yha deya.*/
let myProgessBar=document.getElementById('myProgessBar') /*yha bhi humne myProgressBar name ka variable bnaya or fr
document by id kra uske baad jo humare html file ki myprogressBar name ki id the usko deya hai esme */

let gif=document.getElementById('gif')/**ye humne gif name ka variable bnaya hai or fr document by id kra uske baad
jo humare html file ki gif id hai us image ki usko deya hai esme. */

masterSongName=document.getElementById('masterSongName')

let songItem=Array.from(document.getElementsByClassName('songItem'))/*ye humne songItem name ka variable bnaya hai or fr doucmnet
by classname kra hai or jo class hai html ki under songItem name se usko deya hai. 
Ab esme ye Array.from kyu kra hai wo esliye kyu ki ye html collection hai to hum neche es pr for each loop lga rhe hai
wo nhi lga sekte the aise hi.*/







/*Hum ek array bnayege or uske under object rkehge or uske key value rhege neche dekhe.*/
let songs=[
    {
        songName:'Raba-Salam-e-Ishq',filePath:'songs/1.mp3',coverPath:'image/cover/cover1.jpg'
    },
    {
        songName:'Na-jaana',filePath:'songs/2.mp3',coverPath:'image/cover/cover2.jpg'
    },
    {
        songName:'Bhula-Dena',filePath:'songs/3.mp3',coverPath:'image/cover/cover3.jpg'
    },
    {
        songName:'Tumhari.Kasam-Salam-e-Ishq',filePath:'songs/4.mp3',coverPath:'image/cover/cover4.jpg'
    },
    {
        songName:'Humari-Kahani',filePath:'songs/5.mp3',coverPath:'image/cover/cover5.jpg'
    },
    {
        songName:'Salam-e-Ishq',filePath:'songs/6.mp3',coverPath:'image/cover/cover6.jpg'
    },
    {
        songName:'Sakhiyan-Salam-e-Ishq',filePath:'songs/7.mp3',coverPath:'image/cover/cover7.jpg'
    }
]


/*Ab hum kya chahte hai ki jo ye songs enka sbka name aaye or jo real time hai song ka wo aaye or play button jo hai song
ki saamne us pr click kre to song chle.To uske leye krege neche dekhe.*/
songItem.forEach((element,i)=>{/*Humne kya kra hai uper jo wo songItem class ko es variable mein daala hai songItem name ki
                                ab usko yha rkha hai or usme for each loop chlaya hai or ab esme hum getElementsBy tag name
                                krege or uske image ki src ko yha add krege html ki. */
    element.getElementsByTagName('img')[0].src=songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName

})



//Actually mein hum un event ko listen kr rhe hai un variables mein jo humne uper bnaye hai neche dekhe kaise krege.
// Ab hum Event ko listen krege neche dekhe.
//Handle play/pause click.
masterPlay.addEventListener('click',()=>{ /*Hum ye bol rhe hai ki masterplay pr eventlistener lgao click, agar kisi ne bhi
                                            masterplay pr click kiya to tb kya ho.To 2 cheje ho ya to audio play ya
                                            audio pause to uske leye if condition ka use kr lege.*/
    if(audioElement.paused || audioElement.currentTime<=0){   /*audioElelement paused hai ya fr audioElement ka current 
                                                                time hai wo kya hai wo lessthen zero hai.To eska mtlb hai
                                                                audio ruke hue hai audio ko play kr do. */
        audioElement.play() //To esliye hum lekhege audioElement.play.
        /*Ab song to play hogya but ab hum kya krege jo humara icon hai play vaala wo ab pause mein convert hojaye.
        Eske baad mtlb song play hone ki baad.*/
        /*To uske leye jo masterplay hai uske classList mein se remove krege wo play ka icon or add krege pause ka icon
        play hone ki baad dekhe kaise krege sb neche dekhe. */
        masterPlay.classList.remove('fa-play-circle-o')
        masterPlay.classList.add('fa-pause-circle-o')
        gif.style.opacity=1; /*ye humne uper jo gif name ka variable bnaya tha usko deya or fr style.opacity kra
        jise humare jo gif image lgaye hai wo tbhi chle jb song play ho tb nhi jb pause ho esliye neche humne opacity
        0 de hai.*/
    }
    /*Ab same work krege else mein bs yha kya krege ki agar audio chal rhe hai to pause krege neche dekhe kaise. */
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle-o')
        masterPlay.classList.add('fa-play-circle-o')
        gif.style.opacity=0;
    }
})
//Actually mein hum un event ko listen kr rhe hai un variables mein jo humne uper bnaye hai neche dekhe kaise krege.
audioElement.addEventListener('timeupdate',()=>{

/*Ab hum uske leye work krege progressBar jo blue color ka jisme ye pta rhega ki ye kitne song chal gya or kitna rha gya 
jo line hai.*/
progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
/*humne progress name ka variable bnaya hai.or jo humare song chal chuka hai usko krege percentage mein to hum parseInt use
kr rhe hai kyu ki hume integer mein chaye. To esliye humne parseInt kra or audioElement mein currentTime dega jo humara
chal rha hai play ho rha hai song or fr audioElement.duration kitna long hai song wo percent.uper dekhe sb thel se.*/
myProgessBar.value=progress /*ye humne jo deya hai myProgressBar ye wo uper jo variable bnaya tha getElementByid ka wo hai
or fr humare jo input hai html ki under es blue vaale line ko jo ye bta rhe hai kitne percent song chla uske value or =
jo hai wo progress variable hai.Mtlb uske equal kr deya hai uper vaale line ki. */
})

/*Ab hum myProgressBar jo uper variable bnaya tha sbse uper jisme getElement by id kra tha us mein ab change Event
listener lgayege neche dekhe.
or ye progressBar vhe hai sb jo wo blue color ka hai jo song ka bta rha hai.*/
myProgessBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgessBar.value*audioElement.duration/100

})






/*Hum kya chahte hai jo humare songs ki saamne jo button hai jeha time bhi hai ki kitne minute ka song hai us pr jb click
kre to song chal jaaye, to uske leye kya krege hum ek click event ka use krege neche dekhe.*/
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle-o')
        element.classList.add('fa-play-circle-o')
       
    })    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ /*Humne ye kra or fr sb en pr forEach lgaya*/
    element.addEventListener('click',(e)=>{ /*bol rhe hai ki en pr click hota hai to, */
        makeAllPlay() //ye function bnaya hai humne.
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle-o')
        e.target.classList.add('fa-pause-circle-o')
        audioElement.src=`songs/${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle-o')
        masterPlay.classList.add('fa-pause-circle-o')
        

    })
})
/*Ab humare jo sbse neche button hai previous or next song ki unke leye work krege neche dekhe kaise krege. */
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle-o')
    masterPlay.classList.add('fa-pause-circle-o')
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    masterSongName.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    masterPlay.classList.remove('fa-play-circle-o')
    masterPlay.classList.add('fa-pause-circle-o')
    
})