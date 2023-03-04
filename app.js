//declare global variable
let score=0;
let i=0;
let itemFound=0;
let timeFn;
let addTime=0;
//let clickedableItems=[];
//create objects that contatins pictures links and key links and key locations
const objectsToFind=[
{
    picName:'Hogwarts Train',
    pictureLink: './images/train.png',
    alt: 'train',
    item:[
        {link:'./images/train/owl.png', alt:'owl', location:{top:'55%', left:'21%'}},
        {link:'./images/train/luggage.png', alt:'luggage', location:{top:'75%', left:'42%'}},
        {link:'./images/train/map.png', alt:'map', location:{top:'70%', left:'63%'}},
        {link:'./images/train/wand.png', alt:'wand', location:{top:'75%', left:'20%'}},
        {link:'./images/train/frog.png', alt:'frog', location:{top:'70%', left:'72%'}}
    ]
}, 
{
    picName:'Potions Class',
    pictureLink: './images/potions.png',
    alt: 'potions',
    item:[
        {link:'./images/potions/tank.png', alt:'tank', location:{top:'45%', left:'32%'}},
        {link:'./images/potions/bottle.png', alt:'bottle', location:{top:'80%', left:'58%'}},
        {link:'./images/potions/lizard.png', alt:'lizard', location:{top:'57%', left:'35%'}},
        {link:'./images/potions/knift.png', alt:'knift', location:{top:'58%', left:'58%'}},
        {link:'./images/potions/book.png', alt:'book', location:{top:'55%', left:'26%'}},
        {link:'./images/potions/bowls.png', alt:'bowls', location:{top:'55%', left:'65%'}},
        {link:'./images/potions/book2.png', alt:'book2', location:{top:'55%', left:'50%'}}
    ]
}, 
{
    picName:'Hufflepuff Common Room',
    pictureLink: './images/hufflepuff.png',
    alt: 'hufflepuff',
    item:[
        {link:'./images/hufflepuff/plant.png', alt:'plant', location:{top:'48%', left:'16%'}},
        {link:'./images/hufflepuff/machine.png', alt:'machine', location:{top:'48%', left:'43%'}},
        {link:'./images/hufflepuff/fire.png', alt:'fire', location:{top:'63%', left:'51%'}},
        {link:'./images/hufflepuff/people.png', alt:'people', location:{top:'35%', left:'50%'}},
        {link:'./images/hufflepuff/frog.png', alt:'frog', location:{top:'60%', left:'85%'}},
        {link:'./images/hufflepuff/pumpkin.png', alt:'pumpkin', location:{top:'18%', left:'31%'}},
        {link:'./images/hufflepuff/painting.png', alt:'painting', location:{top:'35%', left:'40%'}}
    ]
},
{
    picName:'Slytherin Common Room',
    pictureLink: './images/slytherin.png',
    alt: 'slytherin',
    item:[
        {link:'./images/slytherin/skull.png', alt:'skull', location:{top:'63%', left:'34%'}},
        {link:'./images/slytherin/gift.png', alt:'gift', location:{top:'62%', left:'78%'}},
        {link:'./images/slytherin/candle.png', alt:'candle', location:{top:'33%', left:'48%'}},
        {link:'./images/slytherin/cushion.png', alt:'cushion', location:{top:'48%', left:'44%'}},
        {link:'./images/slytherin/voldemort.png', alt:'voldemort', location:{top:'17%', left:'28%'}},
        {link:'./images/slytherin/candle2.png', alt:'candle2', location:{top:'60%', left:'47%'}},
        {link:'./images/slytherin/gift2.png', alt:'gift2', location:{top:'59%', left:'72%'}},
        {link:'./images/slytherin/mirror.png', alt:'mirror', location:{top:'28%', left:'50%'}}
    ]
},
{
    picName:'Gryffindor Common Room',
    pictureLink: './images/gryffindor.png',
    alt: 'gryffindor',
    item:[
        {link:'./images/gryffindor/basket.png', alt:'basket', location:{top:'58%', left:'17%'}},
        {link:'./images/gryffindor/scarf.png', alt:'scarf', location:{top:'57%', left:'43%'}},
        {link:'./images/gryffindor/painting.png', alt:'painting', location:{top:'11%', left:'84%'}},
        {link:'./images/gryffindor/lamp.png', alt:'lamp', location:{top:'35%', left:'2%'}},
        {link:'./images/gryffindor/mug.png', alt:'mug', location:{top:'43%', left:'76%'}},
        {link:'./images/gryffindor/box.png', alt:'box', location:{top:'50%', left:'40%'}},
        {link:'./images/gryffindor/bean.png', alt:'bean', location:{top:'60%', left:'53%'}},
        {link:'./images/gryffindor/person.png', alt:'person', location:{top:'8%', left:'8%'}},
        {link:'./images/gryffindor/cushion.png', alt:'cushion', location:{top:'40%', left:'42%'}},
        {link:'./images/gryffindor/sweather.png', alt:'sweather', location:{top:'50%', left:'28%'}}
    ]
},
{
    picName:'Ravenclaw Common Room',
    pictureLink: './images/ravenclaw.png',
    alt: 'ravenclaw',
    item:[
        {link:'./images/ravenclaw/sign.png', alt:'sign', location:{top:'32%', left:'45%'}},
        {link:'./images/ravenclaw/person.png', alt:'person', location:{top:'18%', left:'90%'}},
        {link:'./images/ravenclaw/pattern.png', alt:'pattern', location:{top:'25%', left:'8%'}},
        {link:'./images/ravenclaw/cushion.png', alt:'cushion', location:{top:'84%', left:'58%'}},
        {link:'./images/ravenclaw/champion.png', alt:'champion', location:{top:'36%', left:'94%'}},
        {link:'./images/ravenclaw/lamp.png', alt:'lamp', location:{top:'50%', left:'10%'}},
        {link:'./images/ravenclaw/timer.png', alt:'timer', location:{top:'45%', left:'0%'}},
        {link:'./images/ravenclaw/box.png', alt:'box', location:{top:'45%', left:'7%'}},
        {link:'./images/ravenclaw/model.png', alt:'model', location:{top:'60%', left:'63%'}},
        {link:'./images/ravenclaw/champion2.png', alt:'champion2', location:{top:'50%', left:'95%'}}
    ]
}, 
{
    picName:"Dumbledore's Office",
    pictureLink: './images/dumbledore.png',
    alt: 'dumbledore',
    item:[
        {link:'./images/dumbledore/time.png', alt:'time', location:{top:'40%', left:'53%'}},
        {link:'./images/dumbledore/bluerock.png', alt:'bluerock', location:{top:'60%', left:'2%'}},
        {link:'./images/dumbledore/dragon.png', alt:'dragon', location:{top:'80%', left:'45%'}},
        {link:'./images/dumbledore/crystal.png', alt:'crystal', location:{top:'82%', left:'60%'}},
        {link:'./images/dumbledore/sorting.png', alt:'sorting', location:{top:'25%', left:'0%'}},
        {link:'./images/dumbledore/box.png', alt:'box', location:{top:'80%', left:'36%'}},
        {link:'./images/dumbledore/smoke.png', alt:'smoke', location:{top:'78%', left:'23%'}},
        {link:'./images/dumbledore/owl.png', alt:'owl', location:{top:'60%', left:'70%'}},
        {link:'./images/dumbledore/lamp.png', alt:'lamp', location:{top:'78%', left:'67%'}},
        {link:'./images/dumbledore/machine.png', alt:'machine', location:{top:'90%', left:'28%'}}
    ]
},
{
    picName:'Room of Requirement',
    pictureLink: './images/requirement.png',
    alt: 'requirement',
    item:[
        {link:'./images/requirement/luggage.png', alt:'luggage', location:{top:'73%', left:'56%'}},
        {link:'./images/requirement/mirror.png', alt:'mirror', location:{top:'3%', left:'74%'}},
        {link:'./images/requirement/telescope.png', alt:'telescope', location:{top:'52%', left:'47%'}},
        {link:'./images/requirement/triangle.png', alt:'triangle', location:{top:'68%', left:'6%'}},
        {link:'./images/requirement/violin.png', alt:'violin', location:{top:'58%', left:'65%'}},
        {link:'./images/requirement/pot.png', alt:'pot', location:{top:'62%', left:'48%'}},
        {link:'./images/requirement/ball.png', alt:'ball', location:{top:'53%', left:'40%'}},
        {link:'./images/requirement/bottle.png', alt:'bottle', location:{top:'70%', left:'20%'}},
        {link:'./images/requirement/door.png', alt:'door', location:{top:'33%', left:'68%'}},
        {link:'./images/requirement/instrument.png', alt:'instrument', location:{top:'56%', left:'70%'}}
    ]
},
{
    picName:'Gringotts Wizarding Bank',
    pictureLink: './images/bank.png',
    alt: 'gringotts',
    item:[
        {link:'./images/bank/cup.png', alt:'cup', location:{top:'73%', left:'67%'}},
        {link:'./images/bank/shield.png', alt:'shield', location:{top:'45%', left:'38%'}},
        {link:'./images/bank/plate.png', alt:'plate', location:{top:'81%', left:'26%'}},
        {link:'./images/bank/pot.png', alt:'pot', location:{top:'50%', left:'12%'}},
        {link:'./images/bank/vase.png', alt:'vase', location:{top:'48%', left:'42%'}},
        {link:'./images/bank/cap.png', alt:'cap', location:{top:'78%', left:'40%'}},
        {link:'./images/bank/gold.png', alt:'gold', location:{top:'60%', left:'44%'}},
        {link:'./images/bank/head.png', alt:'head', location:{top:'58%', left:'15%'}},
        {link:'./images/bank/silver.png', alt:'silver', location:{top:'35%', left:'70%'}},
        {link:'./images/bank/snake.png', alt:'snake', location:{top:'35%', left:'37%'}}
    ]
    }
];

//beginning scene name and sort hat function
const playerName=document.getElementById('player');
const sortEl=document.getElementById('sort');
//sort button function
sortEl.addEventListener('click',()=>{
    //setup data and variable;
    let name=playerName.value; 
    const colleges=['Gryffdor','Slytherin','Hufflepuff','Ravenclaw'];
    const imgColleges=['./images/colleges/gryffindor.png','./images/colleges/slytherin.png','./images/colleges/hufflepuff.png','./images/colleges/ravenclaw.png']
    let randomIndex=Math.floor(Math.random()*4);
    let assignCollege=colleges[randomIndex];
    //make new window and new button and new h1
    const windows=document.createElement('div');
    windows.classList='new-window';
    const collegeImg=document.createElement('img');
    collegeImg.classList='img'
    const announcement=document.createElement('h2');
    announcement.style.color='#b19c48';
    const enterButton=document.createElement('button');
    document.querySelector('.beginning').appendChild(windows);
    //assign name
    let time=10;
    let index=0;
    let sort=setInterval(()=>{
        announcement.innerText='Sorting hat is deciding...'
        time--;
        collegeImg.src=imgColleges[index];
        index++;
        if(index>=imgColleges.length){
            index=0;
        }
        if(time===0){
            //clear timer, show player their college and start the game;
           clearInterval(sort);
           collegeImg.src=imgColleges[randomIndex];
           enterButton.innerHTML='<h1>Start Game</h1>';
           announcement.innerHTML=`Welcome, ${name}! You are assigned to ${assignCollege}.`
           windows.appendChild(enterButton);
        }
    }, 250)   
    //append button to windows 
    windows.appendChild(collegeImg);
    windows.appendChild(announcement);
    enterButton.addEventListener('click',()=>{
        changeTheme(i);
        document.querySelector('.mainPicture').style.display='flex';
        document.querySelector('.items').style.display='flex';
        document.querySelector('.beginning').style.display='none';
        const h6=document.querySelectorAll('h6');
        h6.forEach((word)=>{
            word.style.display='flex';
        })
       timer();
    })
})


//generate random array of item
function randomItem(arr){
const selectedIndex=[];
let selectedKeys=[];
while(selectedIndex.length<5){
   let index=Math.floor(Math.random()*arr.length);
   if(!selectedIndex.includes(index)){
    selectedIndex.push(index);
   } 
selectedKeys=selectedIndex.map(index=>arr[index]);
}

return selectedKeys;
}

// const them=changeTheme(0)
//make function that will change picture and keys
function changeTheme(i){
   removeClickListener();
   //change picture name
   const picNameEl=document.getElementById('pic-name')
   picNameEl.innerHTML=objectsToFind[i].picName;
   //change picture link and alt
   const pictureLinkEl=document.getElementById('image');
   pictureLinkEl.src=objectsToFind[i].pictureLink;
   pictureLinkEl.alt=objectsToFind[i].alt;
   //change key pictures
   const itemPictureEls=document.querySelectorAll('.keys img');
   const keys=randomItem(objectsToFind[i].item);
   for(let j=0; j<keys.length; j++){
     itemPictureEls[j].src=keys[j].link;
     itemPictureEls[j].alt=keys[j].alt;
     }
   //change click items locations
   const imageContainer=document.querySelector('.image-container');
   const items=imageContainer.querySelectorAll('.item');
   for(let k=0; k<keys.length;k++){
    const item=imageContainer.querySelector(`[data-item-id="${k+1}"]`)
    console.log(item);
    item.style.top=keys[k].location.top;
    item.style.left=keys[k].location.left; 
   }
   addClickListener();
}


//make clickable item event listener
function addClickListener(){
    const itemClicked=document.querySelectorAll('.clickable');
    itemClicked.forEach(function(item){
        item.addEventListener('click',handleClick);
    //clickedableItems.push(item);
})
}
//make remove clickable item event listener
function removeClickListener(){
    const itemClicked=document.querySelectorAll('.clickable');
    itemClicked.forEach((item)=>{
        item.removeEventListener('click', handleClick);
       // clickedableItems=[];
    })
}

//click function
let prevItemFound=itemFound;
function handleClick(event){
    //score plus 1 and show on board
    score=score+2;
    itemFound++;
    console.log(itemFound)
    document.getElementById('score').innerText=score;
    //remove click event
    event.target.removeEventListener('click',handleClick);
    //if item is clicked, then add border around keys
    const keys=document.querySelector(`#image${event.target.dataset.itemId}`);
    keys.style.border='5px dotted #b19c48';
    keys.style.borderRadius='1em'

    if(itemFound%5===0){
        announceWin()
    }
    prevItemFound=itemFound;
};

//create win message window and attach two buttons
function announceWin(){
    
    //make new window
   const windows=document.createElement('div');
   windows.classList='new-window';
   //create element in the window
   const message=document.createElement('h1')
   const buttonRow=document.createElement('span');
   const replay=document.createElement('button');
   const nextLevel=document.createElement('button');
   //append element to the window
   buttonRow.appendChild(replay);
   buttonRow.appendChild(nextLevel);
   windows.appendChild(message);
   windows.appendChild(buttonRow)
   document.querySelector('.mainPicture').appendChild(windows);
   //element text 
   if(itemFound===40){
    replay.innerHTML='<h1>Replay</h1>';
    message.textContent=`Congratulations, You complete all the levels ! Your final score is ${score}.`
    nextLevel.style.display='none';
   } else {
    replay.innerHTML='<h1>Replay</h1>';
    nextLevel.innerHTML='<h1>Next Level</h1>';
    message.textContent='Congratulations, You have won this level !'
   }
   clearInterval(timeFn);
    //make click event on two buttons
    nextLevel.addEventListener('click',function(){
        i=i+1;
        changeTheme(i);
        windows.style.display='none';
        const keyPic=document.querySelectorAll('.key')
        keyPic.forEach((key)=>{
            key.style.border='none';
        })
        timer();
       })
    replay.addEventListener('click',function(){
        changeTheme(i);
        score=score-10;
        document.getElementById('score').innerText=score;
        itemFound=itemFound-5;
        windows.style.display='none';
        const keyPic=document.querySelectorAll('.key')
        keyPic.forEach((key)=>{
            key.style.border='none';
       })
       timer();
      })
}

//create time-out windows with 1 button
function announceLose(){
    //copy new-windows from announceWin
    const windows=document.createElement('div');
    windows.classList='new-window';
    const message=document.createElement('h1')
    const replay=document.createElement('button');
    windows.appendChild(message);
    windows.appendChild(replay);
    document.querySelector('.mainPicture').appendChild(windows);
    replay.innerHTML='<h1>Restart</h1>';
    message.textContent=`Sorry, time has run out! You extend time ${addTime} times. Your final score is ${score-addTime}.`
    //clear last timer
    clearInterval(timeFn);
    //make click event on replay
    replay.addEventListener('click',function(){
        i=0;
        changeTheme(i);
        score=0;
        itemFound=0;
        document.getElementById('score').innerText=score;
        // score=score-(itemFound%5)*2;
        // itemFound=itemFound-itemFound%5;
        windows.style.display='none';
        const keyPic=document.querySelectorAll('.key')
        keyPic.forEach((key)=>{
            key.style.border='none';
       })
       timer();
    })
}

//make timer function

function timer(){
    let time=21;
    let moreTime=document.querySelector('#moretime')
    moreTime.addEventListener('click',()=>{
        if(addTime<=4){
            time=time+10;
        addTime++;}
    })
        timeFn=setInterval(function(){
        time--;
        let timeDisplay=document.querySelector('#timer')
        timeDisplay.innerText=`${time}`
        
        if(time<=0){
            clearInterval(timeFn);
            if(itemFound-prevItemFound===0 || itemFound%5 !==0){
               announceLose()
            }
            return;
        }    
    }, 1000)
}


