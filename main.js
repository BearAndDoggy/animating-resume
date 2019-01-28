function $writeCode(content, fn) {
    let n = 0
    $('body').append('<div class="rightPage"><div class="markdownPage"></div></div>')
    let timeId = setInterval(() => {
        n += 1
        $('style').append(content[n])
        var html = Prism.highlight(content.substring(0, n), Prism.languages.css, 'css')
        $('#domPage').html(html).scrollTop($('#domPage').height())       
        if (n === content.length) {
            clearInterval(timeId)
            fn.call()
        }           
    }, 20)


}

function $writeMakedown(content, fn) {
    let n = 0
    let timeId = setInterval(() => {
        n += 1
        $('style').append(content[n])
        $('.markdownPage').append(content[n])    
        if (n === content.length) {
            clearInterval(timeId)
            fn()
        }           
    }, 20)  
}

function markdownToHtml(content1, content2) {
    let n = 0
    let timeId = setInterval(() => {
        n += 1
        $('#domPage').append(content2[n])
        $('#domPage').scrollTop($('#domPage').height())   
        if (n === content2.length) {
            clearInterval(timeId)
            html_content = markdown.toHTML(content1)
            $('.markdownPage').html(html_content) 
        }           
    }, 20)  
}

var content = ` 
/*
你好，我是孙炎，马上要毕业了，准备写一份简历！
说做就做，让我们开始吧！
/*

/* 首先给所有动画加一个动态效果时间 */
* {
    transition: all 0.3s;
}

/* 背景太单调了，加一个背景 */
html {
    background: #BEE7E9;
}
/* 文字离边框太近了 */
#domPage {
    padding: 0.75rem;
    margin: 1rem;
    border: 0.1rem solid white;
    width:45vw;height:90vh;
    overflow: auto;
}

/* 代码加个高亮吧 */
.token.comment {color:  #333;}
.token.selector {color: #690;}
.token.punctuation {color: #999;}
.token.property {color: #905;}
.token.function {color: #DD4A68;}

/* 加点3D效果吧 */
html {
    perspective: 1000px;
}

#domPage {
position: fixed; left: 0; top: 0;
-webkit-transition: none;
transition: none;
-webkit-transform: rotateY(5deg) translateZ(-60px) ;
        transform: rotateY(5deg) translateZ(-60px) ;
}

/* 接下来准备一个编辑器 */
.markdownPage {
    position: fixed; right: 0; top: 0;
    padding: 1rem;
    margin: 1rem;
    margin-right: 3rem;
    width:45vw;height:90vh;
    border: 1px solid;
    background: white; color: #222;
    overflow: auto;
}

`
var content2 = `
### 孙炎
前端工程师 应届毕业生 
### 技能
- 前端开发
- Rails 开发
- Node.js 开发
- 前端授课
### 工作经历
1. 饥人谷
2. 腾讯即时通讯平台部
3. 阿里巴巴B2B部门
4. 彩程知人项目组
`

var content3 = `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
*/
`
$writeCode(content, () => {
    $writeMakedown(content2, () => {
        markdownToHtml(content2, content3)
    })
})



