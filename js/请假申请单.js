<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/** 
 * Created by xiaozr2 on 2016/9/3.
 * Updated by Hume on 2018/09/05
 * @desc 新增请假时数小于1小时, 清空请假时间
 */
window.onload = function () {
	$(document).ready(function () {
		var nodeID = $("input[name=nodeid]").val();
		if (nodeID == "330") {
			var startDateID = "field6360"; //开始日期字段ID
			var startTimeID = "field6361"; //开始时间字段ID
			var endDateID = "field6362"; //结束日期字段ID
			var endTimeID = "field6363"; //结束时间字段ID
			$("#" + startDateID + ",#" + startTimeID + ",#" + endDateID + ",#" + endTimeID).bindPropertyChange(function () {
				GetDateDiff();
			});
		}
		/*
		 * 获取请假开始时间和结束时间的差,并为请假天数和小时数赋值
		 */
		function GetDateDiff() {
			var startDate = $("#" + startDateID).val();
			var startTime = $("#" + startTimeID).val();
			var endDate = $("#" + endDateID).val();
			var endTime = $("#" + endTimeID).val();
			var leaveDaysID = "field6369"; // 请假天数字段ID
			var leaveHoursID = "field6365"; // 请假小时数字段ID
			if (!(startDate && startTime && endDate && endTime)) {
				return false;
			}
			startDate = startDate.replace(/-/g, "/");
			endDate = endDate.replace(/-/g, "/");
			var sDate = new Date(startDate + " " + startTime);
			var eDate = new Date(endDate + " " + endTime);
			var diff = eDate.getTime() - sDate.getTime(); // 时间差的毫秒数
			// 服务器当前时间
			var tc = new Date($.ajax({
				async: false
			}).getResponseHeader("Date"));
			var tb = new Date(startDate);
			var dt = new Date(startDate + " " + startTime);
			tb.setHours(0);
			tb.setMinutes(0);
			tb.setSeconds(0);
			tb.setMilliseconds(0);
			tc.setHours(0);
			tc.setMinutes(0);
			tc.setSeconds(0);
			tc.setMilliseconds(0);
			// 判断请假开始日期是否小于申请日期, 是的话清空
			if (tb < tc) {
				Dialog.alert("上单时间已经超过24小时!");
				setTimeout(function () {
					$("#" + startDateID).val(""); //清空值
					$("#" + startDateID + "span").text(""); //清空文本
					$("#" + startTimeID).val(""); //清空值
					$("#" + startTimeID + "span").text(""); //清空文本
				}, 100);
				return false;
			}
			// 判断请假结束时间不能早于开始时间
			if (diff < 0) {
				Dialog.alert("请假结束时间不能早于开始时间!");
				setTimeout(function () {
					$("#" + endDateID).val(""); //清空值
					$("#" + endDateID + "span").text(""); //清空文本
					$("#" + endTimeID).val(""); //清空值
					$("#" + endTimeID + "span").text(""); //清空文本
				}, 100);
				return false;
			}
			// 如果请假时数小于1小时则清空
			if (diff / 3600 / 1000 < 1) {
				Dialog.alert("请假时数不能小于1小时!");
				setTimeout(function () {
					$("#" + endDateID).val(""); //清空值
					$("#" + endDateID + "span").text(""); //清空文本
					$("#" + endTimeID).val(""); //清空值
					$("#" + endTimeID + "span").text(""); //清空文本
				}, 100);
				return false;
			}
			//计算出相差天数
			var days = Math.floor(diff / (24 * 3600 * 1000));
			//计算出小时数
			var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
			var hours = Math.ceil(leave1 / (3600 * 1000));
			// 进行请假天数和请假小时赋值
			$("#" + leaveDaysID).val(days);
			$("#" + leaveHoursID).val(hours);
		}
	});
} 
</script>