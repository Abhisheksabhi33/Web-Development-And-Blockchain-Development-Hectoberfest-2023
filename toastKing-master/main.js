/* this code is written for toastKing.js library, by rudra pratap singh, github-rudraWorks */
/* https://rudraworks.github.io/toastKing/ */

let progressDiv = document.createElement('div')

progressDiv.style.position="fixed"
progressDiv.style.top="0"
progressDiv.style.width="95%"
progressDiv.style.display="flex"
progressDiv.style.alignItems="center"
progressDiv.style.flexDirection="column"
progressDiv.style.height="0px"
progressDiv.style.left="0"
progressDiv.style.right="0"
progressDiv.style.margin="auto"
progressDiv.style.userSelect="none"
progressDiv.style.zIndex="81";

document.body.prepend(progressDiv)

let showToast = (msg,duration,progressBarVis,type,stopOnFocus,design,onClick,onDismiss,borderVis,shadowVis) =>{
    
    let t=document.createElement('div')
    let closeBtn = document.createElement('div')
    let msgBox = document.createElement('div')
    let timeLeft = document.createElement('div')
    let msgContent = document.createElement('div')
    let msgType = document.createElement('div')
    let msgMessage = document.createElement('div')

    

    let fullWidth=100

    let isPaused = false
    let dx=0.25

    let interval = setInterval(function() {
        
        if(!duration){
            return
        }
        timeLeft.style.width=fullWidth+"%"
        fullWidth-=dx
        if(fullWidth<=0)
        {
            try{
                clearInterval(interval)

                let op=1
                let inte=setInterval(() => {
                    if(op<=0)
                    {
                        try{
                            progressDiv.removeChild(t)
                            clearInterval(inte)
                            onDismiss()
                        }
                        catch(e){}
                    }
                    t.style.opacity=op
                    op-=0.021
                   
                }, 10);
            }
            catch(e){}
        }

    }, duration);

    function pause()
    {
       if(stopOnFocus)
        dx=0
    }
    function resume()
    {
        dx=0.25
    }

    t.addEventListener('mouseover',()=>{
        pause()
    })

    t.addEventListener('mouseout',()=>{
        resume()
    })

    t.style.width="90%"

    t.style.display="flex"
    t.style.backgroundColor="skyblue"
    
    if(borderVis)
    t.style.border="1px solid black"
    if(shadowVis)
    {
        t.style.boxShadow="5px 10px 9px #888888"
        t.style.marginBottom="20px"
    }
    else t.style.marginBottom="10px"
    t.style.color="white"
    t.style.fontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"


    if(design=='moss'){
    t.style.background="#134E5E"
    t.style.background=" -webkit-linear-gradient(to right, #71B280, #134E5E)"
    t.style.background="linear-gradient(to right, #71B280, #134E5E)"
    timeLeft.style.background="skyblue"
    t.style.color="white"
    }
    if(design=='sunnyDays'){
        t.style.background="#EDE574"
        t.style.background=" -webkit-linear-gradient(to right, #E1F5C4, #EDE574)"
        t.style.background="linear-gradient(to right, #E1F5C4, #EDE574)"
        timeLeft.style.background="black"
        t.style.color="black"
    }
    if(design=='anwar'){
        t.style.background="#334d50"
        t.style.background="  -webkit-linear-gradient(to right, #cbcaa5, #334d50)"
        t.style.background="linear-gradient(to right, #cbcaa5, #334d50)"
        timeLeft.style.background="black"
        t.style.color="white"
    }
    if(design=='stripe'){
        t.style.background="#1FA2FF"
        t.style.background="  -webkit-linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF)"
        t.style.background="linear-gradient(to right, #A6FFCB, #12D8FA, #1FA2FF)"
        timeLeft.style.background="black"
        t.style.color="black"
    }
    if(design=='endlessRiver'){
        t.style.background="#43cea2"
        t.style.background=" -webkit-linear-gradient(to right, #185a9d, #43cea2)"
        t.style.background="linear-gradient(to right, #185a9d, #43cea2)"
        timeLeft.style.background="black"
    }
    if(design=='instagram'){
        t.style.background="#833ab4"
        t.style.background=" -webkit-linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)"
        t.style.background="linear-gradient(to right, #fcb045, #fd1d1d, #833ab4)"
        timeLeft.style.background="black"
    }
    if(design=='ukraine'){
        t.style.background="#004FF9"
        t.style.background="  -webkit-linear-gradient(to right, #FFF94C, #004FF9)"
        t.style.background="linear-gradient(to right, #FFF94C, #004FF9)"
        timeLeft.style.background="black"
    }
    if(design=='celestial'){
        t.style.background="#C33764"
        t.style.background="  -webkit-linear-gradient(to right, #1D2671, #C33764)"
        t.style.background="linear-gradient(to right, #1D2671, #C33764)"
        timeLeft.style.background="wheat"
    }
    if(design=='meredian'){
        t.style.background="#283c86"
        t.style.background=" -webkit-linear-gradient(to right, #45a247, #283c86)"
        t.style.background=" linear-gradient(to right, #45a247, #283c86)"
        timeLeft.style.background="skyblue"
    }
    if(design=='plain')
    {
        t.style.background="skyblue"
        timeLeft.style.background="gray"
    }
/* this code is written for toastKing.js library, by rudra pratap singh, github-rudraWorks */
/* https://rudraworks.github.io/toastKing/ */
    closeBtn.textContent="❌" 
    closeBtn.style.cursor="pointer"
    closeBtn.style.marginLeft="auto"
    closeBtn.style.padding="10px" 
    closeBtn.style.color="white"
    closeBtn.style.fontWeight="900"
    closeBtn.style.fontSize="15px"
    closeBtn.style.display="flex"
    closeBtn.style.justifyContent="center"
    closeBtn.style.alignItems="center"
    closeBtn.style.borderLeft="1px dashed black"
    

    closeBtn.addEventListener('click',()=>{

        let op=1
        let inte=setInterval(() => {
            if(op<=0)
            {
                try{
                    progressDiv.removeChild(t)
                    clearInterval(inte)
                    onDismiss()
                }
                catch(e){

                }
            }
            t.style.opacity=op
            op-=0.021
           
        }, 10);
       
    })


    msgBox.style.display="flex"
    msgBox.style.flexDirection="column"
    msgBox.style.textAlign="center"
    msgBox.style.width="100%"


    timeLeft.style.width="100%"
    timeLeft.style.height="5px"
    timeLeft.style.marginTop="auto"
    timeLeft.style.marginBottom="0"

    msgContent.style.padding="5px"
    msgContent.marginBottom="0"
    msgContent.style.display="flex"
    msgContent.appendChild(msgType)
    msgContent.appendChild(msgMessage)

    msgType.textContent=type
    msgType.style.margin="0"
    msgType.style.margin="auto"
    msgType.style.padding="1px"
    msgType.style.fontSize="20px"

    /* this code is written for toastKing.js library, by rudra pratap singh, github-rudraWorks */
/* https://rudraworks.github.io/toastKing/ */

    msgMessage.textContent=msg
    msgMessage.style.padding="1px"
    msgMessage.style.display="flex"
    msgMessage.style.justifyContent="center"
    msgMessage.style.alignItems="center"
    msgMessage.style.width="100%"

    msgBox.addEventListener('click',onClick)
    msgBox.appendChild(msgContent)

    if(progressBarVis)
    msgBox.appendChild(timeLeft)
    

    t.appendChild(msgBox)
    t.appendChild(closeBtn)
    progressDiv.prepend(t)

}

let infoTypes={}         
infoTypes['info']='❗'       
infoTypes['success']='☑️'       
infoTypes['danger']='❎'
infoTypes['warning']='⚠️'
infoTypes['prohibited']='🚫' 
infoTypes['ok']='🆗'
infoTypes['none']=''


function toastKing({message,duration,progressBarVis,type,stopOnFocus,design,onClick,onDismiss,borderVis,shadowVis})
{   
    
    if(duration===undefined) duration=5    
    if(message===undefined) message=''
    if(progressBarVis===undefined)progressBarVis=true
    if(borderVis===undefined)borderVis=false 
    if(type===undefined)type='none'
    if(design===undefined)design='plain'
    if(stopOnFocus===undefined)stopOnFocus=true 
    if(onClick===undefined)onClick=function(){}
    if(onDismiss===undefined)onDismiss=function(){}
    if(shadowVis===undefined)shadowVis=true
   
    if(typeof duration === 'number' && isFinite(duration))
    {
        duration = (20/8)*duration
    }

    type = infoTypes[type]
    showToast(message,duration,progressBarVis,type,stopOnFocus,design,onClick,onDismiss,borderVis,shadowVis)
}

/* this code is written for toastKing.js library, by rudra pratap singh, github-rudraWorks */
/* https://rudraworks.github.io/toastKing/ */