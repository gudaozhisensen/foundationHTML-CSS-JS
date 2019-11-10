# foundationHTML-CSS-JS
h5app test
#### 此为简单的HTML5+CSS3+原生JS 的H5项目，主要为练手加强代码熟练度(现在最熟练的反而是console.log...)。接触到的都是之前学过的知识，轮播图，正则表达，flex布局，position定位，日历控件，表单输入，验证，手势动作……做得不是很好，移动端变为网页端时，轮播图不会跟着撑大至整个页面，轮播图弄了挺久，忘记原理和实现了，还是就是tab切换(选中一个，其他的tab高亮及所绑定的内容消失))也是，都忘记了。表单验证方面还是差。

#### 还有就是div.className属性获得div所有类名，div.style.height获得内联样式的高，外联样式用的是，var style = getComputedStyle(obj,false)[name],还有offsetWidth获取的是盒模型的width。

#### 还有document.getElementByClassName('name'),获取的是一个类名数组,document.getElementByTagName('name')也一样，要取一个就要加上[0]，还有个简单的就是，querySelector('.name')直接获取第一个数组的类名。

#### 今次用到touch事件，touchstart,touchmove,touchend, 有用到的就是e.touches[0].clientX,e.touches[0].clientY/e.changedTouches[0].clientX(点击时的坐标,移动时的坐标(一直触发)/手离开屏幕结束时的坐标)。数值是由屏幕左递增到右边的，所以可做个简单的判断左右滑动，当endX - startX 大于0 时，为向右滑动，小于0是为向左滑动。其他属性暂时还没用到。

#### calc()新学的一个css的方法，可以直接进行计算数值，width: calc(100% - 1rem);
