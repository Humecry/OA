#!/usr/bin/env python
# -*- coding: utf-8 -*-

# @Date    : 2018-12-18 14:14:09
# @Author  : Hume (cry.hume@gmail.com)
# @Link    : https://humecry.wordpress.com
# @Version : 1.0
# @Description : 批量设置删除共享权限并更新文档

import selenium
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from time import sleep

driver = webdriver.Chrome()
# 隐性等待，最长等5秒
driver.implicitly_wait(5)
# 登录管理员账号
driver.get('http://oa.lh/login/Login.jsp?logintype=1')
driver.find_element_by_id('loginid').send_keys(ID)
driver.find_element_by_id('userpassword').send_keys(PWD)
driver.find_element_by_id('login').click()
# 跳转到文档权限管理界面
driver.get('http://oa.lh/docs/category/DocSecCategoryRightEdit.jsp?_fromURL=4&id=2')
# driver.switch_to.frame('contentframeRight')
# # 全选
# driver.find_element_by_xpath(u"(.//*[normalize-space(text()) and normalize-space(.)='共享列表'])[1]/following::span[4]").click()
# # 删除
# driver.find_element_by_xpath(u"(.//*[normalize-space(text()) and normalize-space(.)='共享列表'])[1]/following::input[2]").click()
# driver.switch_to.parent_frame()
# # 确认删除
# driver.find_element_by_xpath('//input[@value="确定"]').click()

# 更新文档权限
driver.switch_to.frame(0)
driver.switch_to.frame('rightMenuIframe')
js = 'parent.onSynchronous(this)'
driver.execute_script(js)
sleep(120)
driver.quit()