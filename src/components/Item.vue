<template>
    <a href="https://juejin.cn/user/3386151545092589" target="_blank"> 
        <el-card shadow="hover" class="">
            <div class="nav-bar">
                <ul class="metaList">
                    <li class="topBar">字节跳动技术团队</li>
                    <li class="separate"></li>
                    <li class="topBar">{{daysBefore}}天前</li>
                    <li class="separate"></li>
                    <li class="topBar">前端</li>
                </ul>
            </div>

            <div class="content-wrapper">
                <div class="info-box">
                    
                    <div class="title-row">
                        <span class="text-highlight">
                            第四届字节跳动青训营 - 暑假场 重磅来袭 🔥
                        </span>
                    </div>
                    <!--定义box1为父元素，定义一个子元素summary_oneline，限制父元素宽度，然后在样式中解决文字溢出隐藏-->
                    <div class="box1" style="width: 100%;">
                        <div class="summary_oneline">
                            这个暑假，我们学点不一样的！第四届字节跳动青训营正式开启,前端、客户端、大数据三大方向同时开课。来自抖音与头条的大咖讲师，连接校园与职场的学习秘籍，在实操演练中迸发灵感，在专属社群中快速成长。                        
                        </div>
                    </div>

                    <ul class="action-list">
                        <li class="item-view">
                            <i class="item-i"></i>
                            <span class="item-span">4500</span>
                        </li>

                        <!-- <li class="item-space"></li> -->

                        <li class="item-like">
                            <i class="item-i"></i>
                            <span class="item-span">70</span>
                        </li>

                        <!-- <li class="item-space"></li> -->

                        <li class="item-comment">
                            <i class="item-i"></i>
                            <span class="item-span">22</span>
                        </li>
                    </ul>
                </div>

                <img class="showImg"
                src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89113cb6af33430189e3f90d49cf7836~tplv-k3u1fbpfcp-no-mark:240:240:240:240.awebp?"
                alt="" title="青训营官方账号"
                >
            </div>
        </el-card>
    </a>
</template>

<script>
export default {
    name:"Item",
    data(){
        return {
            daysBefore:28,
        }
    }
}
</script>

<style>

.el-card{
    margin-right:60px;
    margin-top:0;
}
.nav-bar {
    display: inline-block;
}
.metaList{
    display: flex;
    align-items: baseline;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    list-style-type: none;
    margin-block-start: 0px;
    margin-block-end: 0px;
}
.topBar{
    margin: 0 5px 0 6px;
    font-size: 13px;
    color: #86909c;
}
.topBar:hover{
    color: #1d7dfa;
}

.content-wrapper{
    /* display: flex; */
    /* padding-bottom: 12px; */
    /* border-bottom: 1px solid #e5e6eb; */
    margin-top: 10px;
    width: 100%;
}
/* 分隔 */
.separate {
    width: 1px;
    height: 14px;
    background: #e5e6eb;
    display: inline-block;
    vertical-align: center;
}


.info-box{
    width:600px;
    display: inline-block;
    /* position:absolute; */
    
    /* flex: 1 1 auto; */
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    min-width: 0;
}
.title-row{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* margin: 0.5rem 0 1rem; */
    margin: 0.2rem 0 0.7rem;
}
/* 图片部分 */
.showImg{
    display: inline-block;
    /* float:right; */

    margin-left: 2rem;
    background-color: #fff;
    border-radius: 2px;
    width: 120px;
    height: 80px;
    margin-left: 24px;
}

.text-highlight{
    /* font-size: 1.4rem; */
    font-size:16.8px;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
    /* padding:6px 0px 12px; */
    margin:6px 0px 12px;
    border:#2e3135
}
.detail{
    display: inline-block;
    width: 100%;
}
.summary_oneline{
    overflow: hidden;
    text-overflow: ellipsis ;
    white-space: nowrap;
    font-size:12px;
    color: #86909c;
}


/* 最下方点赞等图标 */
.action-list{
    align-items: baseline;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    list-style-type: none;
    /*  */
    display: flex;
    align-items: center;
    margin-block-start: 0.7em;
    /* margin-block-end: 0.7em; */
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* padding-inline-start: 40px; */
}
.item-i{
    display:inline-block;
    vertical-align:middle;
    width: 16px;
    height: 16px;
    background-size: 100%;
}
.item-span{
    display:inline-block;
    vertical-align:middle;
    position: relative;
    margin-right: 30px;
    font-size: 13px;
    line-height: 20px;
    color: #4e5969;
    flex-shrink: 0;
    width: 16px;
}
.item-view{
    margin-right:10px
}
.item-view i{
    background-image: url(//lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/view.1eda8fa.png);
}
.item-like i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ9SURBVHgB7VZNbtNQEP7GP7AkN8DcoJyA5gRNTwCR2kqsUm9YEKEaoZRl0hUSBLWcAHOCpjdIT1AfIewgTjzM+AccxwHXLRYS/STnvbyxZ743b34e8L+DcEMMhu+fERk7DLTAuAwRjjz3eVD1+xsROD75eARmr7AczDlsVyVhoCbeDt85mXHmqLtkbst0Ko9jk31aVU9tAgvYW7FxYNJ3D85eufuTOZtKYiZu3X4z/LBdRU9tAia4E0+YL7I1z+3OmPEpkWOrip7aBED0RAcb7K8KeBb/alD+LQIa+TI48kxfuAfTVSlVMlybgAafpN1RYgujopwIOzpGEhuogGuloTc8bd2j5TmS8/VfHu7t5uUaeCaRygORPaqi00JFJAVn2UuNa667xXfEeJZ+rePR+Kool7gIQg67+RpBJTvo5QMoZHPXxFLW8Tld2lhoUqMOfg/JlKjdT2Pnpwf0bDlx3worG1EnPlENF0m5OayO5+7NyjRLHXgMfCsNQhumrBviRfRAhnqyu0KAYXmpcX/BfKKekL+dvBIheOUddkuNK7QO6A43ycXDvolYr5OtGTnlD3VU41rVZLdfccvIipMYDdYINAHZZJyicgR+4wQ0hbVH6Px7RBeNE9BM0lGbVxorTRNImhcxf8mvNxcDafOywBM0TUCqqEa/I09QbF6NECDQdjKuN6hGCJSlX2MENqXfGgFKS6hlmA9wi7hvLJ/qWEy/DL96AfMlEXWkU/mD0XiCkjud7kRk56iOltwRYz3ShM7KXlhpx4PheBR3qxzS6zbSi0YtyOZe9919D38ioNC2vIDl6NyQC2bWtzWVomvf93gWwg7KXH+HfwY/AGsn+Lf3Dim6AAAAAElFTkSuQmCC);
}
.item-like:hover i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKYSURBVHgB7VddbtNAEJ7ZdVJFtMKPSE2EjxBOgHOChhOQnCDilTaqoYLncIK2J6g5QZ0bpCeoVUDi0RCkQOzdZfyTHztO5brFPMD3EI1ndmc+r+dnA/CvA+GeaA1nPQB2QK50peAq0MToq9Vwi+6/F4HmkX+MqKyM2vW56BQlwaAknlgzYxVc9JUUHUSY0INRE/y0qJ/SBGoBayei8+mkcfb5XcNhrNahI/VIZzYPZ2YRP6UJELrhj5JqvFC4FnpSwXmkB2wXcVKeAMLzKJBCO6VXyovNqBdxU4pAnPloUNZPvryvT1JGLBa4NIEw+WjbcbSZsVHWTol5EEvSgQK4EwHdUroW8Iv47ZV981Y7X7c3D30ztJHohklZxKcGBbH/et7DwB9QqYXJ5WqafJVdg0yeJq1Fbw1/XW96wbBH9Nd7BGbfgJwMYC2BptPai73duUlne5GoXE6Nxs1pNHFQNOB2eFJAZ5E7yxOIGotQl9nm+GjP70ohgXFOT3LM+U7XtepenmfO688Afm5JQqEHQb1HJzhgHOgloZ8iQI3FimMrW0n5AZlGi1Q37YRdh7UOW5DYttrphG1AFQY3lh5XZnwahafgUQIp+Q0eGIyJRXNycwj8eSjF4hJFZldOwKASpk9shvL0Ox9XTkAEVEkxHG+0yqMqP0GU0FLKj+vK6ggkwwsUc6BqAvvWvL1o0dnhVQkBLqSZiE7WVgmBvPKrjMC28tskgHFpIK89hgeElP7LREyV3wLLWUAt+AoZdkmwW8O5Q6q8O51JtksoCLoxhf8VIj+I7CxvTXocH81H4bRKOaHrdrSQ8cKBN4OoNzcnO1a+LQODxnLgx9NKqwnPtXYnsf5HO/D5ne574X4a6O5tE/Q//jp+A4uQ/sJMdO/iAAAAAElFTkSuQmCC);
}
.item-like.active i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG1SURBVHgB7ZdbTsJAFIb/MwWMEZI+moix7oAdCCsQdwAr4F00VI0+4wrUFagrAHcAO5h4SXxsxISEtjNOJZByCRTo5UG/J+YMw3y055xpgb8OYUP2z/sVgB2rn9KlRNdJuc1Pc5sHXb+RQP7MbhBJcyrMbc0tBZVgWJNds2/M2dzDSLvaHQKytkDaYYUF08V8vV9ElAKK8qJJCVokGIIA4WjxNOmISmCY+WQgBFYW8JJPLWss/6ZoIwArlaFuSj3r2C0iLLu//O0qc4gwBfZOBxViqAXY3MNSaWjN2c7rEVV/j5gQyNftIjFRgy+Ber30SS47KILoEeFgCRelj5tMxxukRtHfxuLK1vRF2cnZZeEKME1DSOhMg/qTqHqDcRKqxmIiPozRB18V0AHig2NWIEaIPSFJgd6X9oIEBdpWk6zEBIQQz/5x/FdAsjYSFOCjBpSUQHs6EK+Ar/wSEfCX36wAkYVomSi/GQEpRBcRQsTu58XHAu/XW6Z6sbidWShcrp4BODbZHPLi9TL1MH9uCkMdy449PK1SadfiZrYzjH8XHFsL9KA5wluvDnTOzchv7z/r8wP0gYciEk0ZYQAAAABJRU5ErkJggg==);
}
.item-comment i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKRSURBVHgB7VZNbtpQEJ55BlR15RvUOUHTG5ATJD1BQ9NU6gq8JKiKoyrJ0u2qUmkFOUGaE5TegJwg7gnqLRh7MvMwwiDbYHCUDZ9kHph5M9+bN38AO+zwzEAoiEv3xz4v/KAFiK/0S6J/qPCBoui+Y38cFlC3HgHH7Zk1FTXZUIt/mivEPVY6GFFw4difPNiWwNW3X+dLhj1iA3JqProXq7EQ8TVoz4A1147OWfPkAjYhcO1+twirt7FSEexPiG4+26cDyMEXt1s3AI7Z+LsZ4TEFB1newBzjf2B6Gi8kaqwyvEpHFgmVtjmxcTgm401R44I2G0M2KjpEV5W9KbG0koC+8znrt47d8GFDCAk+gJCQwNyvwqS1LLNwBbHbHuQ7G99bJ4rXgY4LRPGqz4T2koda8EAERl2zIrory7hArlBnDmdSDSbHyf8WrwDVNHKV0YOyQdGNXhAPMwlgnHKjaHQPJUNBOEjamL9fhI7SMt0/Q3uu08wjoJGWLk+FZQKefLyEwIKSETcxwTCbANFfWQLAIygZCFifrjkEQq73WgixCaUziHWi+p1JIC65Hj/mpdt1oCQkq2u7+f4uk4BAGo8minguFQy2hFRXvlonqTuXgK5aRLqHc/m8vXK7LdgCE6hYskolTGtqqWnYsU+dmITJrnCvv/7sOXKSDVCBiScrJgeVBHInIokDuYqEsB5KQqgMl7uk1A4DwrpCkFLLExL0x1HAWfXCr2H4X2TOWh+wEAGB7pBQcRITzgwymvmxEilcVtp+cX1cfs20Drv2VKyDSVUPI4Ij3lRPEfFJclzXEvIQlXhioZ4QYaNjn/Q3IrAMiQmDA0wB+QGEflr/ENK6xXOXFS8QRQdFx/YdnhyP1D0hcwr1KvEAAAAASUVORK5CYII=);
}
.item-space{
    margin:0 5px 0 7px;
}

</style>