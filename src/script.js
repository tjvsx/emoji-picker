const picker = document.querySelector('#emoji-picker');
const popover = document.querySelector('#composer-popover')

picker.addEventListener('click', e => {
    e.stopPropagation();
    popover.classList.toggle('active');
});


//select emoji element and display
const selector = document.querySelector('#emoji-select');

for(let elem of selector.querySelectorAll('*')) {
    elem.addEventListener("click", () => {
        const content = document.querySelector('#content')
        const sp1 = content.querySelector('span');
        const emoji = sp1.querySelector('*');
        const sp1_content = document.createElement(`${elem.tagName}`);
        sp1.replaceChild(sp1_content, emoji);
    }, true);
}
