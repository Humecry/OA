<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/** 
 * Created by xiaozr2 on 2016/09/03.
 * Updatee by Hume on 2018/08/02.
 * @desc 设置申请日期及误卡日期只能在本月初至倒数第二天
 */

// 判断申请日期是否在本月初至倒数第二天
var today = new Date($.ajax({async: false}).getResponseHeader("Date"));
var y = today.getFullYear();
var m = today.getMonth();
// 这个月第一天
var thisMonthFirstDay = new Date(y, m, 1); 
// 这个月最后一天
var thisMonthEndDay =new Date(y, m+1, 0);
// 判断申请日期是否在本月初至倒数第二天
if(today < thisMonthFirstDay || today >= thisMonthEndDay) { 
    Dialog.alert("月底最后一天不能上误卡申请!");
	$('.zd_btn_cancle', top.document).click(function(){
		top.window.close();
	})
}

// 判断误卡日期是否在本月初至倒数第二天
var count = 0;
function _customAddFun0() {
	var startDateID = 'field7356_' + count;
	$("#" + startDateID).bindPropertyChange(function(event) {
		GetDateDiff(event);
	})
	count += 1
}
function GetDateDiff(date){
	// 误卡日期
	var missCardPunchDate = $(date).val();   
	missCardPunchDate = missCardPunchDate.replace(/-/g, "/");
	var missCardPunchDate = new Date(missCardPunchDate);
	if(missCardPunchDate >= thisMonthEndDay ||  missCardPunchDate < thisMonthFirstDay ) { 
		Dialog.alert("误卡日期只能在本月第一天至倒数第二天!");
		// 清理input标签字段值
		$(date).val("");
		// 在span标签中用红感叹号覆盖误卡日期
		$(date).prev().html('<img src="/images/BacoError_wev8.gif" align="absMiddle">');
	}
}
 </script>