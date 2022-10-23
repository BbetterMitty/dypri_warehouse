/* 设计思路： */
const textarea = document.querySelector('textarea');
const tagsEle = document.querySelector('.tags');

textarea.addEventListener('keyup', (e) => {
    // console.log(e);
    // 获取键盘输入的值 输入的内容可以累计
    // console.log(e.target.value);
    createTags(e.target.value);

    // 获取键盘输入的值 只是每一次单独按下后的值
    // console.log(e.key);
    if (e.key === 'Enter') {
        e.target.value = '';

        randomSelect();
    }
})
// 选择框同步文本框中的内容
function createTags(invalue) {
    // 改变键入值的格式 以数组的形式保存 '，'就变为新的数组项
    const tags = invalue.split('，').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    // console.log(tags);
    // 每一次键盘新增内容就会额外创建一个选择框
    // ?????????
    tagsEle.innerHTML = '';
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        // 添加新的类名 获得样式
        tagEl.classList.add('tag');
        // 将文本框内容传给选择框 
        tagEl.innerText = tag;
        tagsEle.appendChild(tagEl);
    });
}
// 实现选择框随机高亮显示并做出决定
function randomSelect() {
    // 定时器实现选择框选择过程中不断高亮
    const interval = setInterval(() => {
        const randomTag = pickRandomSelect();
        if (randomTag !== undefined) {
            highlightTag(randomTag);
            // 高亮后取消高亮效果
            // 时间是同步的，但是用的是setTimeout，每次setInterval执行一次
            setTimeout(() => {
                unHighlightTag(randomTag)
            }, 100);
        }
    }, 100);

    // 停止高亮选择
    const times = 30;
    setTimeout(() => {
        clearInterval(interval);
        // 实现最后决定
        setTimeout(() => {
            const randomTag = pickRandomSelect();
            if (randomTag !== undefined) {
                highlightTag(randomTag);
            }
        }, 100);
    }, times * 100)
}


function pickRandomSelect() {
    // 31行 创建了选择框 但是tag是类名
    // 虽然是函数内的 但是和局部变量没有关系 已经将类名加上去了
    const tags = document.querySelectorAll('.tag');
    // 返回一个随机数
    return tags[parseInt(Math.random() * tags.length)]
}

function highlightTag(randomTag) {
    randomTag.classList.add('highlight');
}

function unHighlightTag(randomTag) {
    randomTag.classList.remove('highlight');
}