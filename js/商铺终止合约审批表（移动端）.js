<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type = "text/javascript" >
/** 
 * Created by Hume on 2018/07/14.
 * @description  限制商铺编号为纯数字
 */
$(function() {
    var store = $("#field7203");
    store.keyup(function() {
        var reg = new RegExp("^[0-9]*$");
        if(!reg.test(store.val())){
            alert("商铺编号请输入纯数字!");
            store.val("");
            store.focus();
            $("#field7203_ismandspan").css("style", "inline");
        }
    })
    $("input[type=text], textarea").focus(function() {
        var inputElement = this;
        setTimeout(function() {
            inputElement.scrollIntoView(false)
        }, 200)
    })
    $("input[type=text], textarea").each(function() {
        this.scrollIntoView(false)
    })
})
</script>