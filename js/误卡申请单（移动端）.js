<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/** 
 * created by Hume on 2018/07/13.
 * updated by Hume on 2018/08/02.
 * @desc 设置申请日期和误卡日期只能在本月初至倒数第二天
 */
 $(function() {
 	// 判断申请日期是否在最后一天
 	var today = new Date($.ajax({async: false}).getResponseHeader("Date"));
 	var y = today.getFullYear();
 	var m = today.getMonth();
 	// 这个月第一天
 	var thisMonthFirstDay = new Date(y, m, 1); 
 	// 这个月最后一天
 	var thisMonthEndDay =new Date(y, m+1, 0);
 	if(today < thisMonthFirstDay || today >= thisMonthEndDay) { 
 	   	alert("月底最后一天不能上误卡申请!");
 		history.back();
 	}

	var count = 0;
	// 判断第一个误卡日期是否在本月初至倒数第二天
	$("#field7356_0").bindPropertyChange(function(date) {
		GetDateDiff(date);
	})
	// 判断新增误卡日期是否在本月初至倒数第二天
	$("button[title='添加']").bind("click", function() {
		count += 1
		var startDateID = 'field7356_' + count;
		$("#" + startDateID).bindPropertyChange(function(event) {
			GetDateDiff(event);
		})
	})
 	function GetDateDiff(date){
		// 误卡日期
		var missCardPunchDate = $(date).val();   
		missCardPunchDate = missCardPunchDate.replace(/-/g, "/");
		var missCardPunchDate = new Date(missCardPunchDate);
		if(missCardPunchDate >= thisMonthEndDay ||  missCardPunchDate < thisMonthFirstDay ) { 
			alert("误卡日期只能在本月第一天至倒数第二天!");
			$(date).val("");
			$("#isshow0_" + count + "_7356").empty();
			$("#field7356_" + count +"_d").val("");
			$("#field7356_" + count +"_d").after('<span id="field5888_0_d_ismandspan" class="" style="display: block; color: red; font-size: 16pt; float: right;"><img src="/mobile/plugin/1/images/BacoErrorM_wev8.png" align="absmiddle"></span>');
		}
 	}
 })
</script>