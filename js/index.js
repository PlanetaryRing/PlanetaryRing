let btns=document.querySelectorAll(".chartBtn")
let selectedBtn=document.querySelector(".selectedBtn")
let photo=document.querySelector(".chartPhoto")
let nowPicIndex=0
function nextPic() {
    nowPicIndex++
    nowPicIndex=nowPicIndex%4
    setPic()
    setBtnColor()
    console.log("已切换图片")
}

function setPic()
{
    photo.style.backgroundPosition=`${(3-nowPicIndex)*1374}px 0`
}

function setBtnColor()
{
    selectedBtn.classList.remove("selectedBtn")
    btns[nowPicIndex].classList.add("selectedBtn")
    selectedBtn=btns[nowPicIndex]
}
let autoSwitchCon=setInterval(nextPic,4000)
function addListener()
{
    for(let i=0;i<4;i++)
    {
        btns[i].addEventListener("click",function()
        {
            console.log(`你点击了第${i+1}个按钮`)
            clearInterval(autoSwitchCon)
            nowPicIndex=i
            setPic()
            setBtnColor()
            autoSwitchCon=setInterval(nextPic,3000)
        })
    }
}


addListener()
