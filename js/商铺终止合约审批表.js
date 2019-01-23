<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript" >
/** 
 * Created by Hume on 2018/06/22.
 * Updated by Hume on 2018/07/13
 * @description  限制商铺编号为纯数字
 */
window.onload = function() {
    var store = $("#field7203");
    store.keyup(function() {
        var reg = new RegExp("^[0-9]*$");
        if(!reg.test(store.val())){
            Dialog.alert("商铺编号请输入纯数字!");
            $(".zd_btn_cancle", parent.document).click(function() {
                store.val("");
                store.next().html('<img src="/images/BacoError_wev8.gif" align="absMiddle">');
                store.focus();
            })
        }
    })
}
</script>