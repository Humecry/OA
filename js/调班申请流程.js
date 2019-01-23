<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type = "text/javascript" >
  /** 
   * Created by xiaozr2 on 2016/9/3.
   * Updated by Hume on 2018/07/31
   * @desc 调班日期小于申请日期则清空
   */
  
var count = 0;

// 判断调班日期是否过期
function _customAddFun0() {
  var startDateID = 'field5888_' + count;
  $("#" + startDateID).bindPropertyChange(function(event) {
    GetDateDiff(event);
  })
  count += 1
}

// 判断调班日期是否已过申请日期
function GetDateDiff(thisEvent) {
  // 获取调班日期
  var startDate = $(thisEvent).val();
  var shiftdate = new Date(startDate);
  // 获取服务器当前时间
  var today = new Date($.ajax({async: false}).getResponseHeader("Date"));
  shiftdate.setHours(0);
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  if (today > shiftdate) {
    Dialog.alert("请提前申请调班，调班日期已过!");
    $(thisEvent).val("");
    $(thisEvent).prev().html('<img src="/images/BacoError_wev8.gif" align="absmiddle">');
  }
}
</script>