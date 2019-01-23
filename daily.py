#! /usr/bin/env python3
# -*- coding:utf-8 -*-

# @Date    : 2018-08-20 10:03:07
# @Author  : Hume (102734075@qq.com)
# @Link    : https://humecry.wordpress.com
# @Version : 1.0
# @Description:

import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep
import datetime
# 引入配置文件
from conf import *

today = datetime.datetime.now()
# 每周一工作内容
mondayContent = {
	'上周网销数据统计',
	'上周异常数据统计',
	'上周客流数据统计',
}
# 固定工作内容
workDayContent = {
	'促销终止日期变更',
	'下传调价与资料',
}
# 不定工作内容
content = [
	'每月信息中心月度报告生成',
	# '每月会员与各店的业绩和来客数据提供给企划部杨晶',
	# '查询海富店毛利异常原因',

	# 2019/01/21
	# '协助何经理新建请假申请流程',
	# 2019/01/22
	'每周例会',
]
# 明日计划
plan = [
	'OA维护',
	'企业微信维护',
]

try:
	# # 自动加载Flash
	# chromeOpitons = Options()
	# prefs = {
	#     "profile.content_settings.exceptions.plugins.*,*.per_resource.adobe-flash-player":1,
	# }
	# chromeOpitons.add_experimental_option('prefs',prefs)
	# driver =webdriver.Chrome(chrome_options=chromeOpitons)
	driver = webdriver.Chrome()
	# 隐性等待，最长等5秒
	driver.implicitly_wait(5)
	driver.get('http://oa.lh/login/Login.jsp?logintype=1')
	driver.find_element_by_id("loginid").send_keys(ID)
	driver.find_element_by_id("userpassword").send_keys(PWD)
	driver.find_element_by_id("login").click()
	driver.get('http://oa.lh/workflow/request/AddRequest.jsp?workflowid=318&isagent=0&beagenter=0&f_weaver_belongto_userid=')
	driver.switch_to.frame('bodyiframe')
	driver.find_element_by_id("field9968_browserbtn").click()
	driver.switch_to.parent_frame()
	driver.switch_to.frame(4)
	driver.switch_to.frame('main')
	driver.find_element_by_xpath('//*[@title="总部"]').click()
	driver.switch_to.default_content()
	driver.switch_to.frame('bodyiframe')
	driver.find_element_by_id("field9963browser").click()
	driver.switch_to.frame(11)
	driver.find_element_by_id("dpTodayInput").click()
	driver.switch_to.parent_frame()
	# 工作日固定工作内容
	for i, value in enumerate(workDayContent):
		driver.find_element_by_id("field9965").send_keys(str(i+1) + '. ' + value + '\n')
	# 工作日不定工作内容
	for j, value in enumerate(content):
		driver.find_element_by_id("field9965").send_keys(str(j+i+2) + '. ' + value + '\n')
	# 每周一工作内容
	if today.weekday() == 0:
		for k, value in enumerate(mondayContent):
			driver.find_element_by_id("field9965").send_keys(str(j+i+k+3) + '. ' + value + '\n')
	# 明日计划
	for i, value in enumerate(plan):
		driver.find_element_by_id("field9966").send_keys(str(i+1) + '. ' + value + '\n')
	# 突发及亟需协调事项
	driver.find_element_by_id("field9967").send_keys("无")
except AttributeError as err:
	print(err)
except selenium.common.exceptions.NoSuchElementException as err:
	print(err)
finally:
	sleep(1800)
	driver.quit()