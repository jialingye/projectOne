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
        {id: 1, link:'./images/train/owl.png', alt:'owl', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/train/luggage.png', alt:'luggage', location:{top:'75%', left:'42%'}},
        {id: 1, link:'./images/train/map.png', alt:'map', location:{top:'70%', left:'63%'}},
        {id: 1, link:'./images/train/wand.png', alt:'wand', location:{top:'75%', left:'20%'}},
        {id: 1, link:'./images/train/frog.png', alt:'frog', location:{top:'70%', left:'72%'}}
    ],
    itemPicture: ['./images/train/owl.png','./images/train/luggage.png','./images/train/map.png','./images/train/wand.png','./images/train/frog.png'],
    itemAlt:['owl','luggage','map','wand','frog'],
    itemLocation: [{id:1,top:'55%',left:'21%'},{id:2,top:'75%',left:'42%'},{id:3,top:'70%',left:'63%'},{id:4,top:'75%',left:'20%'},{id:5,top:'70%',left:'72%'}]
}, 
{
    picName:'Potions Class',
    pictureLink: './images/potions.png',
    alt: 'potions',
    item:[
        {id: 1, link:'./images/potions/tank.png', alt:'tank', location:{top:'45%', left:'32%'}},
        {id: 1, link:'./images/potions/bottle.png', alt:'bottle', location:{top:'56%', left:'62%'}},
        {id: 1, link:'./images/potions/lizard.png', alt:'lizard', location:{top:'57%', left:'35%'}},
        {id: 1, link:'./images/potions/knift.png', alt:'knift', location:{top:'58%', left:'58%'}},
        {id: 1, link:'./images/potions/book.png', alt:'book', location:{top:'55%', left:'26%'}},
        {id: 1, link:'./images/potions/bowls.png', alt:'bowls', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/potions/book2.png', alt:'book2', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/potions/tank.png','./images/potions/bottle.png','./images/potions/lizard.png','./images/potions/knift.png','./images/potions/book.png','./images/potions/bowls.png','./images/potions/book2.png'],
    itemAlt:['tank','bottle','lizard','knift','book','bowls','book2'],
    itemLocation: [{id:1,top:'45%',left:'32%'},{id:2,top:'56%',left:'62%'},{id:3,top:'57%',left:'35%'},{id:4,top:'58%',left:'58%'},{id:5,top:'55%',left:'26%'}]
}, 
{
    picName:'Hufflepuff Common Room',
    pictureLink: './images/hufflepuff.png',
    alt: 'hufflepuff',
    item:[
        {id: 1, link:'./images/hufflepuff/plant.png', alt:'plant', location:{top:'48%', left:'16%'}},
        {id: 1, link:'./images/hufflepuff/machine.png', alt:'machine', location:{top:'48%', left:'43%'}},
        {id: 1, link:'./images/hufflepuff/fire.png', alt:'fire', location:{top:'%', left:'21%'}},
        {id: 1, link:'./images/hufflepuff/people.png', alt:'people', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/hufflepuff/frog.png', alt:'frog', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/hufflepuff/pumpkin.png', alt:'pumpkin', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/hufflepuff/painting.png', alt:'painting', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/hufflepuff/plant.png','./images/hufflepuff/machine.png','./images/hufflepuff/fire.png','./images/hufflepuff/people.png','./images/hufflepuff/frog.png','./images/hufflepuff/pumkin.png','./images/hufflepuff/painting.png'],
    itemAlt:['plant','machine','fire','people','frog','pumkin','painting'],
    itemLocation: [{id:1,top:'48%',left:'16%'},{id:2,top:'48%',left:'43%'},{id:3,top:'63%',left:'51%'},{id:4,top:'35%',left:'50%'},{id:5,top:'60%',left:'85%'}]
},
{
    picName:'Slytherin Common Room',
    pictureLink: './images/slytherin.png',
    alt: 'slytherin',
    item:[
        {id: 1, link:'./images/slytherin/skull.png', alt:'skull', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/gift.png', alt:'gift', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/candle.png', alt:'candle', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/cushion.png', alt:'cushion', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/voldemort.png', alt:'voldemort', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/candle2.png', alt:'candle2', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/gift2.png', alt:'gift2', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/slytherin/mirror.png', alt:'mirror', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/slytherin/skull.png','./images/slytherin/gift.png','./images/slytherin/candle.png','./images/slytherin/cushion.png','./images/slytherin/voldemort.png','./images/slytherin/candle2.png','./images/slytherin/gift2.png','./images/slytherin/mirror.png'],
    itemAlt:['skull','gift','candle','cushion','voldemort','candle2','gift2','mirror'],
    itemLocation: [{id:1,top:'63%',left:'34%'},{id:2,top:'62%',left:'78%'},{id:3,top:'33%',left:'48%'},{id:4,top:'48%',left:'44%'},{id:5,top:'17%',left:'28%'}]
},
{
    picName:'Gryffindor Common Room',
    pictureLink: './images/gryffindor.png',
    alt: 'gryffindor',
    item:[
        {id: 1, link:'./images/gryffindor/basket.png', alt:'basket', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/scarf.png', alt:'scarf', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/painting.png', alt:'painting', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/lamp.png', alt:'lamp', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/mug.png', alt:'mug', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/box.png', alt:'box', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/bean.png', alt:'bean', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/person.png', alt:'person', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/cushion.png', alt:'cushion', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/gryffindor/sweather.png', alt:'sweather', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/gryffindor/basket.png','./images/gryffindor/scarf.png','./images/gryffindor/painting.png','./images/gryffindor/lamp.png','./images/gryffindor/mug.png','./images/gryffindor/box.png','./images/gryffindor/bean.png','./images/gryffindor/person.png','./images/gryffindor/cushion.png','./images/gryffindor/sweather.png'],
    itemAlt:['basket','scarf','painting','lamp','mug','box','bean','person','cushion','sweather'],
    itemLocation: [{id:1,top:'58%',left:'17%'},{id:2,top:'57%',left:'43%'},{id:3,top:'11%',left:'84%'},{id:4,top:'35%',left:'2%'},{id:5,top:'43%',left:'76%'}]
},
{
    picName:'Ravenclaw Common Room',
    pictureLink: './images/ravenclaw.png',
    alt: 'ravenclaw',
    item:[
        {id: 1, link:'./images/ravenclaw/sign.png', alt:'sign', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/person.png', alt:'person', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/pattern.png', alt:'pattern', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/cushion.png', alt:'cushion', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/champion.png', alt:'champion', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/lamp.png', alt:'lamp', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/timer.png', alt:'timer', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/box.png', alt:'box', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/model.png', alt:'model', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/ravenclaw/champion2.png', alt:'champion2', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/ravenclaw/sign.png','./images/ravenclaw/person.png','./images/ravenclaw/pattern.png','./images/ravenclaw/cushion.png','./images/ravenclaw/champion.png','./images/ravenclaw/lamp.png','./images/ravenclaw/timer.png','./images/ravenclaw/box.png','./images/ravenclaw/model.png','./images/ravenclaw/champion2.png'],
    itemAlt:['sign','person','pattern','cushion','champion','lamp','timer','box','model','champion2'],
    itemLocation: [{id:1,top:'32%',left:'45%'},{id:2,top:'18%',left:'90%'},{id:3,top:'25%',left:'8%'},{id:4,top:'84%',left:'58%'},{id:5,top:'36%',left:'94%'}]
}, 
{
    picName:"Dumbledore's Office",
    pictureLink: './images/dumbledore.png',
    alt: 'dumbledore',
    item:[
        {id: 1, link:'./images/dumbledore/time.png', alt:'time', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/bluerock.png', alt:'bluerock', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/dragon.png', alt:'dragon', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/crystal.png', alt:'crystal', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/sorting.png', alt:'sorting', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/box.png', alt:'box', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/smoke.png', alt:'smoke', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/owl.png', alt:'owl', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/lamp.png', alt:'lamp', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/dumbledore/machine.png', alt:'machine', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/dumbledore/time.png','./images/dumbledore/bluerock.png','./images/dumbledore/dragon.png','./images/dumbledore/crystal.png','./images/dumbledore/sorting.png','./images/dumbledore/box.png','./images/dumbledore/smoke.png','./images/dumbledore/owl.png','./images/dumbledore/lamp.png','./images/dumbledore/machine.png'],
    itemAlt:['time','bluerock','dragon','crystal','sorting','box','smoke','owl','lamp','machine'],
    itemLocation: [{id:1,top:'30%',left:'50%'},{id:2,top:'3%',left:'74%'},{id:3,top:'52%',left:'47%'},{id:4,top:'68%',left:'6%'},{id:5,top:'58%',left:'65%'}]
},
{
    picName:'Room of Requirement',
    pictureLink: './images/requirement.png',
    alt: 'requirement',
    item:[
        {id: 1, link:'./images/requirement/luggage.png', alt:'luggage', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/mirror.png', alt:'mirror', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/telescope.png', alt:'telescope', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/triangle.png', alt:'triangle', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/violin.png', alt:'violin', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/pot.png', alt:'pot', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/ball.png', alt:'ball', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/bottle.png', alt:'bottle', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/door.png', alt:'door', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/requirement/instrument.png', alt:'instrument', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/requirement/luggage.png','./images/requirement/mirror.png','./images/requirement/telescope.png','./images/requirement/triangle.png','./images/requirement/violin.png','./images/requirement/pot.png', './images/requirement/ball.png', './images/requirement/bottle.png', './images/requirement/door.png', './images/requirement/instrument.png'],
    itemAlt:['luggage','mirror','telescope','triangle','violin','pot','ball','bottle','door','instrument'],
    itemLocation: [{id:1,top:'73%',left:'56%'},{id:2,top:'3%',left:'74%'},{id:3,top:'52%',left:'47%'},{id:4,top:'68%',left:'6%'},{id:5,top:'58%',left:'65%'}]
},
{
    picName:'Gringotts Wizarding Bank',
    pictureLink: './images/bank.png',
    alt: 'gringotts',
    item:[
        {id: 1, link:'./images/bank/cup.png', alt:'cup', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/shield.png', alt:'shield', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/plate.png', alt:'plate', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/pot.png', alt:'pot', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/vase.png', alt:'vase', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/cap.png', alt:'cap', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/gold.png', alt:'gold', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/head.png', alt:'head', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/silver.png', alt:'silver', location:{top:'55%', left:'21%'}},
        {id: 1, link:'./images/bank/snake.png', alt:'snake', location:{top:'55%', left:'21%'}}
    ],
    itemPicture: ['./images/bank/cup.png','./images/bank/shield.png','./images/bank/plate.png','./images/bank/pot.png','./images/bank/vase.png','./images/bank/cap.png','./images/bank/gold.png','./images/bank/head.png','./images/bank/silver.png','./images/bank/snake.png',  ],
    itemAlt:['cup','shield','plate','pot','vase','cap','gold','head','silver','snake'],
    itemLocation: [{id:1,top:'73%',left:'67%'},{id:2,top:'45%',left:'38%'},{id:3,top:'81%',left:'26%'},{id:4,top:'50%',left:'12%'},{id:5,top:'48%',left:'42%'}]
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
const theme=changeTheme(1);
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
   for(let j=0; j<objectsToFind[i].itemPicture.length; j++){
     itemPictureEls[j].src=objectsToFind[i].itemPicture[j];
     itemPictureEls[j].alt=objectsToFind[i].itemAlt[j];
     }
   //change click items locations
   const imageContainer=document.querySelector('.image-container');
   const items=imageContainer.querySelectorAll('.item');
   for(let k=0; k<objectsToFind[i].itemLocation.length;k++){
    const item=imageContainer.querySelector(`[data-item-id="${objectsToFind[i].itemLocation[k].id}"]`)
    item.style.top=objectsToFind[i].itemLocation[k].top;
    item.style.left=objectsToFind[i].itemLocation[k].left; 
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


