//declare global variable
let score=0;
let i=0;
let clickedableItems=[];
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
itemPicture: ['./images/ravenclaw/telescope.png','./images/ravenclaw/bottle.png','./images/ravenclaw/glass.png','./images/ravenclaw/book.png','./images/ravenclaw/chair.png '  ],
itemAlt:['telescope','bottle','glass','book','chair'],
itemLocation: [{id:1,top:'100px',left:'200px'},{id:2,top:'100px',left:'200px'},{id:3,top:'100px',left:'200px'},{id:4,top:'100px',left:'200px'},{id:5,top:'100px',left:'200px'}]
}, 
{
picName:'Hufflepuff Common Room',
pictureLink: './images/hufflepuff.png',
alt: 'hufflepuff',
itemPicture: ['./images/hufflepuff/plant.png','./images/hufflepuff/machine.png','./images/hufflepuff/fire.png','./images/hufflepuff/people.png','./images/hufflepuff/frog.png '  ],
itemAlt:['plant','machine','fire','people','frog'],
itemLocation: [{id:1,top:'100px',left:'200px'},{id:2,top:'100px',left:'200px'},{id:3,top:'100px',left:'200px'},{id:4,top:'100px',left:'200px'},{id:5,top:'100px',left:'200px'}]
},
{
picName:'Slytherin Common Room',
pictureLink: './images/slytherin.png',
alt: 'slytherin',
itemPicture: ['./images/slytherin/skull.png','./images/slytherin/gift.png','./images/slytherin/candle.png','./images/slytherin/cushion.png','./images/slytherin/voldemort.png '  ],
itemAlt:['skull','gift','candle','cushion','voldemort'],
itemLocation: [{id:1,top:'400px',left:'350px'},{id:2,top:'100px',left:'200px'},{id:3,top:'100px',left:'200px'},{id:4,top:'100px',left:'200px'},{id:5,top:'100px',left:'200px'}]
},
{
picName:'Gryffindor Common Room',
pictureLink: './images/gryffindor.png',
alt: 'gryffindor',
itemPicture: ['./images/gryffindor/basket.png','./images/gryffindor/scarf.png','./images/gryffindor/painting.png','./images/gryffindor/lamp.png','./images/gryffindor/mug.png '  ],
itemAlt:['basket','scarf','painting','lamp','mug'],
itemLocation: [{id:1,top:'100px',left:'200px'},{id:2,top:'100px',left:'200px'},{id:3,top:'100px',left:'200px'},{id:4,top:'100px',left:'200px'},{id:5,top:'100px',left:'200px'}]
},
{
picName:'Room of Requirement',
pictureLink: './images/requirement.png',
alt: 'gryffindor',
itemPicture: ['./images/requirement/luggage.png','./images/requirement/mirror.png','./images/requirement/telescope.png','./images/requirement/triangle.png','./images/requirement/violin.png '  ],
itemAlt:['luggage','mirror','telescope','triangle','violin'],
itemLocation: [{id:1,top:'100px',left:'200px'},{id:2,top:'100px',left:'200px'},{id:3,top:'100px',left:'200px'},{id:4,top:'100px',left:'200px'},{id:5,top:'100px',left:'200px'}]
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
    clickedableItems.push(item);
})
}
//make remove clickable item event listener
function removeClickListener(){
    const itemClicked=document.querySelectorAll('.clickable');
    itemClicked.forEach((item)=>{
        item.removeEventListener('click', handleClick);
        clickedableItems=[];
    })
}

//click function
function handleClick(event){
    //score plus 1 and show on board
    score++;
    document.getElementById('score').innerText=score;
    //remove click event
    event.target.removeEventListener('click',handleClick);
    //if item is clicked, then add border around keys
    const keys=document.querySelector(`#image${event.target.dataset.itemId}`);
    keys.style.border='5px dotted #b19c48';
    keys.style.borderRadius='1em'

    if(score%5===0){
        announceWin()
        console.log('you win')
    }
}

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
   //element text 
   replay.innerHTML='<h1>Replay</h1>';
   nextLevel.innerHTML='<h1>Next Level</h1>';
   message.textContent='Congratulations, You have won this level !'
   //append element to the window
   buttonRow.appendChild(replay);
   buttonRow.appendChild(nextLevel);
   windows.appendChild(message);
   windows.appendChild(buttonRow)
   document.querySelector('.mainPicture').appendChild(windows);
    //make click event on two buttons
    nextLevel.addEventListener('click',function(){
        changeTheme(i+1);
        windows.style.display='none'
       })
    replay.addEventListener('click',function(){
        changeTheme(i);
        windows.style.display='none'
       })

}

