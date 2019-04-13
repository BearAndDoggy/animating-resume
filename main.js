function $writeCode(pre, content, fn) {
    let n = 0  
    let timeId = setInterval(() => {
        n += 1
        $('style').append(content[n])
        var html = Prism.highlight(content.substring(0, n), Prism.languages.css, 'css')
        document.querySelector('#domPage').innerHTML = pre + html
        $('#domPage').scrollTop($('#domPage').height())       
        if (n === content.length) {
            clearInterval(timeId)
            fn.call()
        }           
    }, 10)


}

function createPage() {
    $('body').append('<div class="rightPage"><pre class="markdownPage"></pre></div>')
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
    }, 10)  
}

function markdownToHtml(md) {
    html_content = marked(md)
    $('.markdownPage').replaceWith('<div class="markdown-body markdownPage"></div>');
    $('.markdownPage').html(html_content) 
}

var content = ` 
/*
你好，我是孙炎，马上要毕业了，准备写一份简历！
说做就做，让我们开始吧！
/*

/* 首先给所有动画加一个动态效果时间 */
* {
    transition: all 1s;
}

/* 背景太单调了，加一个背景 */
html {
    background: #BEE7E9;
}
/* 文字离边框太近了 */
#domPage {
    margin: 0.5rem;
    padding: 1rem;
    border:1px solid white;
    overflow: auto;
}

/* 代码加个高亮吧 */
.token.comment {color: rgb(16, 40, 132);}
.token.selector {color: #690;}
.token.punctuation {color: #999;}
.token.property {color: #905;}
.token.function {color: #DD4A68;}

/* 加点3D动画效果吧 */
html {
    perspective: 1000px;
}
#domPage {
    position: fixed;left:0;top:0;
    width: 48vw; height: 96vh;
}

#domPage {
    transition: none;
    transform: rotateY(10deg) translateZ(-100px) ;
               
}

/* 接下来准备一个编辑器 */
.markdownPage {
    position: fixed;
    right: 0;
    top:0;
    padding: 1rem;
    margin: 0.5rem;
    width:48vw;
    height:96vh;
    border: 1px solid white;
    background: white; 
    color: #222;
    overflow: hidden;
    transform: rotateY(-10deg) translateZ(-100px) ;
}

`
var content2 = `
## 孙炎
前端工程师 应届毕业生 

## 技能
- 熟练掌握HTML5 & CSS3 能够制作精美网页，掌握CSS3动画，过渡效果，Flex布局，掌握响应式开发等常用技术
- 会使用REM、vw/vh、媒体查询等技术制作适配移动端的页面
- 熟练掌握JavaScript的知识，能够使用基于ES5/ES6的原生JavaScript操作DOM结构实现页面的交互响应
- 熟练掌握jQuery知识，能使用jQuery制作网站、轮播、Tab等
- 理解MVC、MVVM等思想，熟悉Vue常用的功能及命令，如组件通信、Vue-Router、Vuex、Vue-CLI、生命周期、Axios等
- 掌握HTTP基础、熟练利用Ajax与后端进行交互，了解跨域的常用解决方案JSONP、CORS等
- 熟练使用 VsCode、WebStorm、Git 等开发工具

## 项目经验
1. 仿网易云音乐移动端-jQuery
2. 多人博客-Vue
3. 仿CNode社区-Vue
4. 在线简易画板-Canvas
5. 会动的简历-JavaScript
`

var content3 = `
/* 这个简历好像差点什么
 * 对了，这是 Markdown 格式的，我需要变成对 HR 更友好的格式
 * 简单，用开源工具翻译成 HTML 就行了
 * 
 * 
 * 谢谢观看！
*/
`
createPage()
$writeCode('', content, () => {
    $writeMakedown(content2, () => {
        $writeCode(content, content3, () => {
            markdownToHtml(content2)
        })
    })
})



