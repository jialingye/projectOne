//declare global variable
let score=0;
let i=0;
let itemFound=0;
//let clickedableItems=[];
//create objects that contatins pictures links and key links and key locations
const objectsToFind=[
{
    picName:'Hogwarts Train',
    pictureLink: './images/train.png',
    alt: 'train',
    itemPicture: ['./images/train/owl.png','./images/train/luggage.png','./images/train/map.png','./images/train/wand.png','./images/train/frog.png '  ],
    itemAlt:['owl','luggage','map','wand','frog'],
    itemLocation: [{id:1,top:'55%',left:'21%'},{id:2,top:'75%',left:'42%'},{id:3,top:'70%',left:'63%'},{id:4,top:'75%',left:'20%'},{id:5,top:'70%',left:'72%'}]
}, 
{
    picName:'Potions Class',
    pictureLink: './images/potions.png',
    alt: 'potions',
    itemPicture: ['./images/potions/tank.png','./images/potions/bottle.png','./images/potions/lizard.png','./images/potions/knift.png','./images/potions/book.png '  ],
    itemAlt:['tank','bottle','lizard','knift','book'],
    itemLocation: [{id:1,top:'45%',left:'32%'},{id:2,top:'56%',left:'62%'},{id:3,top:'57%',left:'35%'},{id:4,top:'58%',left:'58%'},{id:5,top:'55%',left:'26%'}]
}, 
{
    picName:'Ravenclaw Common Room',
    pictureLink: './images/ravenclaw.png',
    alt: 'ravenclaw',
    itemPicture: ['./images/ravenclaw/telescope.png','./images/ravenclaw/bottle.png','./images/ravenclaw/glass.png','./images/ravenclaw/pumkin.png','./images/ravenclaw/chair.png '  ],
    itemAlt:['telescope','bottle','glass','pumkin','chair'],
    itemLocation: [{id:1,top:'75%',left:'23%'},{id:2,top:'72%',left:'47%'},{id:3,top:'73%',left:'51%'},{id:4,top:'72%',left:'87%'},{id:5,top:'65%',left:'80%'}]
}, 
{
    picName:'Hufflepuff Common Room',
    pictureLink: './images/hufflepuff.png',
    alt: 'hufflepuff',
    itemPicture: ['./images/hufflepuff/plant.png','./images/hufflepuff/machine.png','./images/hufflepuff/fire.png','./images/hufflepuff/people.png','./images/hufflepuff/frog.png '  ],
    itemAlt:['plant','machine','fire','people','frog'],
    itemLocation: [{id:1,top:'48%',left:'16%'},{id:2,top:'48%',left:'43%'},{id:3,top:'63%',left:'51%'},{id:4,top:'35%',left:'50%'},{id:5,top:'60%',left:'85%'}]
},
{
    picName:'Slytherin Common Room',
    pictureLink: './images/slytherin.png',
    alt: 'slytherin',
    itemPicture: ['./images/slytherin/skull.png','./images/slytherin/gift.png','./images/slytherin/candle.png','./images/slytherin/cushion.png','./images/slytherin/voldemort.png '  ],
    itemAlt:['skull','gift','candle','cushion','voldemort'],
    itemLocation: [{id:1,top:'63%',left:'34%'},{id:2,top:'62%',left:'78%'},{id:3,top:'33%',left:'48%'},{id:4,top:'48%',left:'44%'},{id:5,top:'17%',left:'28%'}]
},
{
    picName:'Gryffindor Common Room',
    pictureLink: './images/gryffindor.png',
    alt: 'gryffindor',
    itemPicture: ['./images/gryffindor/basket.png','./images/gryffindor/scarf.png','./images/gryffindor/painting.png','./images/gryffindor/lamp.png','./images/gryffindor/mug.png '  ],
    itemAlt:['basket','scarf','painting','lamp','mug'],
    itemLocation: [{id:1,top:'58%',left:'17%'},{id:2,top:'57%',left:'43%'},{id:3,top:'11%',left:'84%'},{id:4,top:'35%',left:'2%'},{id:5,top:'43%',left:'76%'}]
},
{
    picName:'Room of Requirement',
    pictureLink: './images/requirement.png',
    alt: 'gryffindor',
    itemPicture: ['./images/requirement/luggage.png','./images/requirement/mirror.png','./images/requirement/telescope.png','./images/requirement/triangle.png','./images/requirement/violin.png '  ],
    itemAlt:['luggage','mirror','telescope','triangle','violin'],
    itemLocation: [{id:1,top:'73%',left:'56%'},{id:2,top:'3%',left:'74%'},{id:3,top:'52%',left:'47%'},{id:4,top:'68%',left:'6%'},{id:5,top:'58%',left:'65%'}]
},
{
    picName:'Gringotts Wizarding Bank',
    pictureLink: './images/bank.png',
    alt: 'gringotts',
    itemPicture: ['./images/bank/cup.png','./images/bank/shield.png','./images/bank/plate.png','./images/bank/pot.png','./images/bank/vase.png '  ],
    itemAlt:['cup','shield','plate','pot','vase'],
    itemLocation: [{id:1,top:'73%',left:'67%'},{id:2,top:'45%',left:'38%'},{id:3,top:'81%',left:'26%'},{id:4,top:'50%',left:'12%'},{id:5,top:'48%',left:'42%'}]
    }
];

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
const gryffindorTheme=changeTheme(i);


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
   if(itemFound===10){
    replay.innerHTML='<h1>Replay</h1>';
    message.textContent=`Congratulations, You complete all the levels ! Your final score is ${score}.`
    nextLevel.style.display='none';
   } else {
    replay.innerHTML='<h1>Replay</h1>';
    nextLevel.innerHTML='<h1>Next Level</h1>';
    message.textContent='Congratulations, You have won this level !'
   }
    //make click event on two buttons
    nextLevel.addEventListener('click',function(){
        i=i+1;
        changeTheme(i);
        windows.style.display='none';
        const keyPic=document.querySelectorAll('.key')
        keyPic.forEach((key)=>{
            key.style.border='none';
        })
       })
    replay.addEventListener('click',function(){
        changeTheme(i);
        score=score-10;
        windows.style.display='none';
        const keyPic=document.querySelectorAll('.key')
        keyPic.forEach((key)=>{
            key.style.border='none';
       })
      })
}

