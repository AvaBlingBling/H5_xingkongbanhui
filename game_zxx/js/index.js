
// 题号索引
let topicIndex = 0
// 学习币
let learnScore = 0
// 存储结果
let unlock_res = []
// 判断是否开启音频
let video_flag = true
// 判断答题框颜色
let color_flag = [true, true, true, true]
// 从主页跳转到题目显示页
let timer1 = setTimeout(() => {
    $(`.page0`).hide();
    $(`.page1`).fadeIn();

}, 1800)

$(".enterup .enter").on("click", enter);
function enter() {
    clearTimeout(timer1)
    $(`.page1`).hide();
    $(`.page2`).fadeIn();
    audioAutoPlay();
}

// 题目页选择题目
$(".page2 .child").on("click", clickGame);
function clickGame() {
    let idName = $(this).attr('id')
    topicIndex = Number(idName[idName.length - 1])
    audioClickPlay()
    gameShow()
}

// 留言版跳转
$(".page2 .message").on("click", function () {
    $(`.page2`).hide();
    $(`.message_board`).fadeIn();
});
$(".message_board .return").on("click", function () {
    $(`.message_board`).hide();
    unlock_res.forEach(item => {
        $(`#game${item}`).css("pointer-events", "none");
        $(`#game${item}`).css({
            "background-image": `url(${unlock[item]})`,
        });
        $(`#game${item} .game_lock`).css("display", "none");
    })
    $(`.page2`).fadeIn();
});

function gameShow() {
    $(`.page2`).hide();
    $(`.game`).fadeIn();
    $(`.game .answer`).fadeIn()
    $(`.answer .item .options`).empty();
    // 先进行背景图片预加载，防止出现背景切换造成的闪屏问题)
    const img = new Image();
    img.src = background[topicIndex]
    img.onload = () => {
        $(`.game`).css({
            "background-image": `url(${background[topicIndex]})`,
        });
    }
    $(`.topic .header`).text(res.data.content[topicIndex].title)
    $(`.topic .footer`).text(res.data.content[topicIndex].topic)
    const div = $(`.answer .item .options`)
    res.data.content[topicIndex].options.forEach((item, index) => {
        div.append($(`<div class="options-item no${index}"><div>${item}</div></div>`))
    })
    res.data.content[topicIndex].options.forEach((item, index) => {
        if (item.length > 24) {
            $(`.no${index}`).css({
                "line-height": `0.2rem`,
                "white-space": "initial",
                // "padding-top": `0.04rem`,
            });
        }
    })
    $(`.game .submit`).fadeIn()
    // 回答情况
    answer()
}

// 每一题的答题情况
function answer() {
    color_flag = [true, true, true, true]
    $('.options .options-item').on("click", function () {
        let className = $(this).attr('class')
        let curClassName = className.split(' ')[1]
        let index = Number(curClassName[curClassName.length - 1])
        color_flag[index] = !color_flag[index]
        if (!color_flag[index]) {
            $(`.${curClassName}`).css({
                "background-color": `#ffdca0`,
            });
        } else {
            $(`.${curClassName}`).css({
                "background-color": `#fff`,
            });
        }
    });
}

// 提交选择结果
$('.game .submit').on("click", function () {
    // 只有选择了选项才能提交，提交前可修改
    let submit_flag = color_flag.some(item => item == false)
    if (submit_flag) {
        $(`.game .answer`).hide()
        $(`.submit`).hide()
        $(`.mask`).fadeIn(1000);
        $('.suggest').append($(`<div id="details">${suggestion[topicIndex]}</div>`));
        $(`#details`).css("line-height", "0.22rem");
        $(`.mask .continue`).css({
            "background-image": `url(${tips[topicIndex]})`,
        });
        document.querySelector(".tips-content").scrollTo(0, 0)
    }
})

// 答题情况回显
function changeStyle(timerSecond) {
    clearTimeout(timerSecond)
    $(`.game`).hide();
    unlock_res.forEach(item => {
        $(`#game${item}`).css("pointer-events", "none");
        $(`#game${item}`).css({
            "background-image": `url(${unlock[item]})`,
        });
        $(`#game${item} .game_lock`).css("display", "none");
    })
    // 10题做完跳转表单
    if (learnScore == 10) {
        // 放跳转表单的链接
        $(`.page2`).hide();
        $(`.form_board`).fadeIn();
    }
}

// tips 继续学习
$(".game .mask .cancel").on("click", debounce(cancel));
function cancel() {
    $(`.answer .item .options`).empty();
    $(`.game .mask`).hide();
    $(`.learn-score-animation`).fadeIn()
    const img = new Image();
    img.src = score[topicIndex]
    img.onload = () => {
        $(`.game`).css({
            "background-image": `url(${score[topicIndex]})`,
        });
    }
    // 学习币背景音乐播放
    audioScorePlay()
    // 动画效果结束后再执行
    let timerFirst = setTimeout(() => {
        $(`.learn-score span`).text('学习币 × ' + ++learnScore);
    }, 2000)
    let timerSecond = setTimeout(() => {
        clearTimeout(timerFirst)
        $(`.tips-content .suggest #details`).remove();
        $(`.learn-score-animation`).hide()
        // 判断条件为题目总数量
        // if (topicIndex < 4) {
        //     gameShow()
        // } else {
        //     $(`.answer .item .topic`).remove();
        // }
        unlock_res.push(topicIndex)
        $(`.page2`).fadeIn(1000);
        changeStyle(timerSecond)
    }, 2500)

}
$(".mugine_audio").on("click", function () {
    document.getElementById("bg_audio").muted = true;
    $(`.mugine_audio_off`).css("display", "inline");
    video_flag = !video_flag
    if (video_flag) {
        document.getElementById("bg_audio").muted = false;
        $(`.mugine_audio_off`).css("display", "none");
    }
});
// 防抖函数
function debounce(fn) {
    let timer = null
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
        }, 600)
    }
}