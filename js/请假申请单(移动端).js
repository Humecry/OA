<script type="text/javascript">
/** 
 * Created by Hume on 2018/09/05.
 */
$(function () {
	var startDateID = "#field6360"; //开始日期字段ID
	var startTimeID = "#field6361"; //开始时间字段ID
	var endDateID = "#field6362"; //结束日期字段ID
	var endTimeID = "#field6363"; //结束时间字段ID
	// 服务器当前时间
	var today = new Date($.ajax({
		async: false
	}).getResponseHeader("Date"));
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);
	today.setMilliseconds(0);
	// 判断客户端是否为APP
	if(/E-Mobile/i.test(navigator.userAgent)){
		// 绑定输入框失去焦点事件
		$([startDateID, startTimeID, endDateID, endTimeID].join(',')).blur(function(){
			GetDateDiff();
		});	
	}
	else {
		$([startDateID, startTimeID, endDateID, endTimeID].join(',')).bindPropertyChange(function(){
			GetDateDiff();
		});
	}
	// 清空请假开始时间及结束时间
	function clear() {
		$(startDateID).val("");
		$(startTimeID).val("");
		$(endDateID).val("");
		$(endTimeID).val("");
	}
	// 判断请假开始时间及结束时间
	function GetDateDiff() {
		var startDate = $(startDateID).val();
		var startTime = $(startTimeID).val();
		var endDate = $(endDateID).val();
		var endTime = $(endTimeID).val();

		startDate = startDate.replace(/-/g, "/");
		endDate = endDate.replace(/-/g, "/");

		var sDate = new Date(startDate + " " + startTime);
		var eDate = new Date(endDate + " " + endTime);
		var diff = eDate.getTime() - sDate.getTime(); // 时间差的毫秒数

		var startDate = new Date(startDate);
		startDate.setHours(0);
		startDate.setMinutes(0);
		startDate.setSeconds(0);
		startDate.setMilliseconds(0);
		// 判断请假开始日期与结束日期是否已经填写
		if (!(startDate && startTime && endDate && endTime)) {
			return false;
		}
		// 判断请假开始日期是否小于申请日期, 是的话清空
		if (startDate < today) {
			alert("请请假时间不能早于申请时间!");
			clear();
		}
		// 判断请假结束时间是否早于开始时间
		else if (diff < 0) {
			alert("请假结束时间不能早于开始时间!");
			clear();
		}
		// 如果请假时数小于1小时则清空
		else if (diff/3600/1000 < 1) {
			alert("请假时数不能小于1小时!");
			clear();
		}
	}
})
</script>