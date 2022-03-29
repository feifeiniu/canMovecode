let html = document.querySelector("#html")
let style = document.querySelector("#css")
let n = 0
let string = `/*你好我是吴鹏飞，求职中
 * 现在我将做一个 CSS 动画展示我的学习成果
 * 望得到一个工作的机会*/
* {
    margin:0;
    padding:0;
    box-sizing:border-box;
}
*::before {
    box-sizing:border-box;
}
*::after {
    box-sizing:border-box;
}

#div1 {
    width:200px;
    height:200px;
    position:fixed;
    top:0;
    right:0; 
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
@media (max-width:500px){
#html {
    height:50vh;
    overflow:auto;
}
#divW {
    height:50vh; 
    position:relative;
}
#div1 {
   position:absolute;
   left:50%;
   transform:translateX(-50%);
}}
#div1::before{
    content: ' ';
    display:block;
    width:100px;
    height:100px;
    position:absolute;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    content: ' ';
    display:block;
    width:100px;
    height:100px;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
#html {
    word-break:break-all;
}

}
`
let  string2 = ''
// html.innerHTML = string
// setInterval(()=>{
//         html.innerHTML=string[n]
//         n=n+1
// },1000)
// string = string.replaceAll('\n','<br>')
function step() {
        setTimeout(()=>{
                if(string[n]==="\n"){
                        string2+="<br>"
                }else if(string[n]===" "){
                    string2=string2+"&nbsp"
                } else{
                        string2 = string2+string[n]
                }
                html.innerHTML=string2

                // html.innerHTML=string.substring(0,n+1)
                n=n+1
                if(n<string.length){
                        step()
                }
                style.innerHTML=string.substring(0,n)//让css一点一一点实现
                window.scrollTo(0,99999)
                html.scrollTo(0,99999)
        },0)
}
step()
