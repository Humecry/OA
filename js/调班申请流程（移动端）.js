<!-- script代码，如果需要引用js文件，请使用与HTML中相同的方式。 -->
<script type = "text/javascript" >
  /** 
   * Created by Hume on 2018/07/12
   * Update by Hume on 2018/07/31
   * @desc 调班日期小于申请日期则清空
   */
$(function() {
    var count = 0;
    // 判断第一个调班日期是否过期
    $("#field5888_0").bindPropertyChange(function(event) {
      GetDateDiff(event, 0);
    })
    // 判断新增调班日期是否过期
    $("button[title='添加']").bind("click", function() {
      count += 1
      var startDateID = 'field5888_' + count;
      $("#" + startDateID).bindPropertyChange(function(event) {
        GetDateDiff(event, count);
      })
    })
    // 判断调班日期是否已过申请日期
    function GetDateDiff(thisEvent, count) {
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
        alert("请提前申请调班，调班日期已过!");
        $(thisEvent).val("");
        $("#isshow0_" + count + "_5888").empty();
        $("#field5888_" + count +"_d").val("");
        $("#field5888_" + count +"_d").after('<span id="field5888_0_d_ismandspan" class="" style="display: block; color: red; font-size: 16pt; float: right;"><img src="/mobile/plugin/1/images/BacoErrorM_wev8.png" align="absmiddle"></span>');
      }
    }
})
</script>