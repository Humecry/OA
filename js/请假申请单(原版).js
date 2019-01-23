<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/** 
 * Created by xiaozr2 on 2016/9/3.
 */
window.onload = function(){
	jQuery(document).ready(function(){
		var nodeID = jQuery("input[name=nodeid]").val();
		if(nodeID == "330") {
		var startDateID = "field6360"; //开始日期字段ID
		var startTimeID = "field6361"; //开始时间字段ID
		var endDateID = "field6362"; //结束日期字段ID
		var endTimeID = "field6363"; //结束时间字段ID
		var ssbmID ="field12282"; //员工编号字段ID
		jQuery("#" + startDateID + ",#" + startTimeID + ",#" + endDateID + ",#" + endTimeID).bindPropertyChange(function(){
			GetDateDiff();
		});
	}
	/*
	 * 获取请假开始时间和结束时间的差,并为请假天数和小时数赋值
	 */
	function GetDateDiff(){
		var startDate = jQuery("#" + startDateID).val();
		var startTime = jQuery("#" + startTimeID).val();
		var endDate = jQuery("#" + endDateID).val();
		var endTime = jQuery("#" + endTimeID).val();
		var ssbm = jQuery("#" + ssbmID).val();
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
		var tc = new Date();//当前系统时间
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
		if (tb<tc) {
			Dialog.alert("上单时间已经超过24小时!");
			setTimeout(function(){
				jQuery("#" + startDateID).val("");      //清空值
				jQuery("#" + startDateID + "span").text(""); //清空文本
				jQuery("#" + startTimeID).val("");      //清空值
				jQuery("#" + startTimeID + "span").text(""); //清空文本
			},100);
			return false;
		}
		// 判断请假结束时间不能早于开始时间
		if (diff < 0) {
			Dialog.alert("请假结束时间不能早于开始时间!");
			setTimeout(function(){
				jQuery("#" + endDateID).val("");      //清空值
				jQuery("#" + endDateID + "span").text(""); //清空文本
				jQuery("#" + endTimeID).val("");      //清空值
				jQuery("#" + endTimeID + "span").text(""); //清空文本
			},100);
			return false;
		}
		//计算出相差天数
		var days = Math.floor(diff / (24 * 3600 * 1000));
		//计算出小时数
		var leave1 = diff % (24 * 3600 * 1000);   //计算天数后剩余的毫秒数
		var hours = Math.ceil(leave1 / (3600 * 1000));
		// 进行请假天数和请假小时赋值
		jQuery("#" + leaveDaysID).val(days);     
		jQuery("#" + leaveHoursID).val(hours);
	}
});
}
</script>