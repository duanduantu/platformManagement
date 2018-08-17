/**
 * Created by Administrator on 2018/8/16 0016.
 */

$(function() {
    $('#tree').treeview({
        data: getTree(),//节点数据
        showIcon:false,
        showCheckbox:true,
        selectedBackColor:"#13C2C2"
    });
})

function getTree() {
    //节点上的数据遵循如下的格式：
    var tree = [{
        text: "安徽省", //节点显示的文本值  string
        icon: "glyphicon glyphicon-play-circle", //节点上显示的图标，支持bootstrap的图标  string
        selectedIcon: "glyphicon glyphicon-ok", //节点被选中时显示的图标       string
        color:"#000", //节点的前景色      string
        href: "#http://www.baidu.com", //节点上的超链接
        selectable: true, //标记节点是否可以选择。false表示节点应该作为扩展标题，不会触发选择事件。  string
        state: { //描述节点的初始状态    Object
            checked: true, //是否选中节点
            /*disabled: true,*/ //是否禁用节点
            expanded: false, //是否展开节点
            selected: true //是否选中节点
        },
        tags: ['标签信息1', '标签信息2'], //向节点的右侧添加附加信息（类似与boostrap的徽章）    Array of Strings
        nodes: [{
            text: "Child 1"
        }, {
            text: "Child 2"
        }]
    }, {
        text: "湖南省"
    }, {
        text: "四川省",
        nodes:[{
            text: "绵阳",
            nodes: [{
                text: "Grandchild 3"
            }, {
                text: "Grandchild 4"
            }]
        }, {
            text: "成都",
            nodes:[{text:"长虹国际城"},{text:"长虹世纪城"}]
        }]
    }, {
        text: "首页"
    }];

    return tree;
}

$(function() {
    $('.add-button').on('click', ()=>{
        $('#pop-up').css('display','block');
        $('#shade').css('display','block');
        $('#tree').css('display','block');
        $('.select').css('display','none');
        $('.textarea-content').css('display','none');
    })
    $('.edit').on('click', ()=>{
        $('.title-text').text('编辑');
        $('.park-text').text('停车场：');
        $('#tree').css('display','none');
        $('.select').css('display','inline');
        $('.textarea-content').css('display','none');
        $('#pop-up').css('display','block');
        $('#shade').css('display','block');
    })
    $('.detail').on('click', ()=>{
        $('.title-text').text('详情');
        $('.park-text').text('停车场列表：');
        $('#tree').css('display','none');
        $('.select').css('display','none');
        $('.textarea-content').css('display','inline-block');
        $('#pop-up').css('display','block');
        $('#shade').css('display','block');
    })
    $('.close-image').on('click', ()=>{
        $('#pop-up').css('display','none');
        $('#shade').css('display','none');
    })
    $('.yes').on('click', ()=>{
        $('#pop-up').css('display','none');
        $('#shade').css('display','none');
    })
    $('.no').on('click', ()=>{
        $('#pop-up').css('display','none');
        $('#shade').css('display','none');
    })
})