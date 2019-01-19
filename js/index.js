$(function () {
    $('.container').fullpage({
        /*1. 每一屏的背景色*/
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        /*2. 设置导航*/
        navigation: true,
        /*3. 内容顶部对齐*/
        verticalCentered: false,
        /*4. 在完全进入某一屏后 */
        afterLoad: function () {
            /*5. 同时控制多个动画执行*/
            /*5.1 如果是过渡  加上过渡属性  做属性的改变*/
            /*5.2 如果是动画  通过animation属性调用动画序列*/
            /*5.3 能不通过一个开关 开启所有的动画执行*/
            /*5.4 通过加类  类当中可以包含任何属性  去执行动画*/
            /*5.5 加一个类 控制容器内容的所有动画  加给父容器 .section*/
            //this是当前屏的jquery对象  .section
            this.addClass('now');
        },
        /*6. 离开某一屏后触发 */
        onLeave: function (index, nextIndex) {
            /*7. 判断离开屏是第二屏  将要切换的屏幕第三屏 */
            if (index === 2 && nextIndex === 3) {
                //第二屏做沙发下降动画  加类名
                $('.section:nth-child(2) .sofa').addClass('down');
            }
            /*9. 判断离开屏是第三屏  将要切换的屏幕第四屏 */
            else if (index === 3 && nextIndex === 4) {
                //第三屏做沙发下降动画 加类名
                $('.section:nth-child(3) .sofa').addClass('down');
            }
            /*11. 判断离开屏是第五屏  将要切换的屏幕第六屏 */
            else if (index === 5 && nextIndex === 6) {
                //第五屏做沙发下降动画 加类名
                $('.section:nth-child(5) .sofa').addClass('down');
                $('.section:nth-child(6) .box').addClass('down');
            }
            /*12. 判断离开屏是第六屏  将要切换的屏幕第七屏 */
            else if (index === 6 && nextIndex === 7) {
                // setTimeout(function () {
                // },1000);  需要等一秒 完全到第七屏 做动画
                $('.section:nth-child(7) .star img').each(function (i, item) {
                    $(item).delay(1000 + i * 500).fadeIn();
                });
            }
        },
        /*8. 下降动画时间  和 屏幕切换时间 一致 */
        scrollingSpeed: 1000,
        /*10. 在插件结构初始化完毕后去绑定事件 */
        afterRender: function () {
            //animationend 动画结束事件
            $('.section:nth-child(4) .cart').on('animationend', function () {
                //console.log('动画结束');
                //使用jquery动画 fadeIn  前提  display:none
                //1. 淡入 文字  收货地址的电脑
                //2. 淡入收货地址的电脑后  淡入收货地址文字
                $('.section:nth-child(4) .text img:last-child').fadeIn();
                $('.section:nth-child(4) .address').fadeIn(function () {
                    $(this).find('img:last-child').fadeIn();
                });
            });
            /*1. 手跟随鼠标移动*/
            $('.section:nth-child(8)').on('mousemove',function (e) {
                //获取当前鼠标的位置  坐标基于窗口 clientX|Y
                $(this).find('.hand').css({
                    left:e.clientX + 20, //手指和鼠标对齐
                    top:e.clientY + 20 //让图片下移 露出鼠标
                });
            }).on('click','.again',function () {
                /*2. 点击再来一次 跳转第一屏 所有动画重置*/
                //跳转第一屏
                //1. 刷新页面  location.href = '当前页面地址'  location.reload()  重新加载资源
                //2. fullpage 提供切换屏的函数 moveTo  $.fn.fullpage去调用
                $.fn.fullpage.moveTo(1);
                //所有动画重置
                // 加类名now  down  jquery动画fadeIn()
                $('.now').removeClass('now');
                $('.down').removeClass('down');
                $('.section [style]').removeAttr('style');
            })
        }
    });
});