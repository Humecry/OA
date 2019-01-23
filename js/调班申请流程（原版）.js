<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
	/** 
 * Created by xiaozr2 on 2016/9/3.
 */
	window.onload = function() {
		$(document).ready(function() {
			var nodeID = jQuery("input[name=nodeid]").val();
			if (nodeID == "164") {
				var startDateID = 'field5888_0';
				var ssbmID = "field5878";
				jQuery("#" + startDateID).bindPropertyChange(function() {
					GetDateDiff();
				});
			}
			function GetDateDiff() {
				var startDate = jQuery("#" + startDateID).val();
				var ssbm = jQuery("#" + ssbmID).val();
				startDate = startDate.replace(/-/g, "/");
				var ta = new Date(startDate);
				var tb = new Date(startDate);
				var tc = new Date();
				tb.setHours(0);
				tb.setMinutes(0);
				tb.setSeconds(0);
				tb.setMilliseconds(0);
				tc.setHours(0);
				tc.setMinutes(0);
				tc.setSeconds(0);
				tc.setMilliseconds(0);

				if (tc > tb) {
					Dialog.alert("超时提交单据!");
					setTimeout(function() {
						jQuery("#" + startDateID).val("");
						jQuery("#" + startDateID + "span").text("");
					},
					100);
					return false;
				}
				/*
if(ta.getDay() == 0 || ta.getDay() == 6 ||  (ssbm!=451    &&    ssbm!=452   &&   ssbm!=453   &&   ssbm!=460   &&   ssbm!=461   &&   ssbm!=462   &&   ssbm!=466   &&   ssbm!=467   &&   ssbm!=468   &&   ssbm!=470   &&   ssbm!=471   &&   ssbm!=472   &&   ssbm!=473   &&   ssbm!=474   &&   ssbm!=475   &&   ssbm!=478   &&   ssbm!=479   &&   ssbm!=494   &&   ssbm!=495   &&   ssbm!=505   &&   ssbm!=506   &&   ssbm!=507)   ) {
        }else
{
         Dialog.alert("非周六日不能使用该单据!");
            setTimeout(function(){
                jQuery("#" +startDateID).val("");  
                jQuery("#" + startDateID + "span").text(""); 
            },100);
            return false;
}
*/
			}
		});
	}
</script>

// 移动版本
<script type="text/javascript">
window.onload = function(){
var startDateID = 'field5888_0';
       var tc = new Date();
       tc.setHours(0);
       tc.setMinutes(0);
       tc.setSeconds(0);
       tc.setMilliseconds(0);
 jQuery("#" + startDateID ).bindPropertyChange(function(){
       GetDateDiff();
    });
function GetDateDiff(){
var startDate = jQuery("#" + startDateID).val();
startDate = startDate.replace(/-/g, "/");
var tb = new Date(startDate);
       tb.setHours(0);
       tb.setMinutes(0);
       tb.setSeconds(0);
       tb.setMilliseconds(0);

if(tb<tc)
{
jQuery('#view_page').html('<a  href="http://m.xmlhbh.com/login.do" style="text-align:center; line-height:500px;font-size:100px; color:red;">超时上单</a>')
}

}
}
</script>