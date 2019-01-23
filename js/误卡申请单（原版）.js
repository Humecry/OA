<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type="text/javascript">
/** 
 * Created by xiaozr2 on 2016/9/3.
 */
 window.onload = function(){
 	$(document).ready(function(){
 		var nodeID = jQuery("input[name=nodeid]").val();
 		if(nodeID == "160") {
 			var startDateID = 'field7356_0';
 			jQuery("#" + startDateID ).bindPropertyChange(function(){
 				GetDateDiff();
 			});
 		}
 		function GetDateDiff(){
 			var startDate = jQuery("#" + startDateID).val();   
 			startDate = startDate.replace(/-/g, "/");
 			var da = new Date(startDate), y = da.getFullYear(), m = da.getMonth();
 			var last = new Date(y, m + 1, 0); 
 			var n =new Date(y,m,+1);
 			if(da < last &&  da >= n )
 			{}
 		else
 			{ 
 				document.write('<div style="text-align:center; line-height:500px;font-size:100px; color:red;">超时上单</div>');
 			}

 	}
 });}
 	</script>