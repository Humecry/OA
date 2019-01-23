<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/**
 * 
 * @authors Hume (102734075@qq.com)
 * @date    2018-07-30 14:11:14
 * @version 1.0
 * @description 设置申请权限必填
 */
$(setTimeout(function(){
	$('.e8_btn_top_first', parent.document).click(function(){
		if ($('.mainTd_8_1>div>span>.Inputstyle').is(':checked') == false){
			Dialog.alert('申请权限为必填!')
			return false
		}
	})
	$('#rightMenuIframe').contents().find("button[title='提交']").click(function(){
		if ($('.mainTd_8_1>div>span>.Inputstyle').is(':checked') == false){
			Dialog.alert('申请权限为必填!')
			return false
		}
	})
},1000))
</script>
