#coding:utf-8
import leancloud
import xlwt
from academyDeal import *
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

def writeData(datas,sheet,pointer):
    i = 0
    for e in datas:
        sheet.write(pointer,i,e)
        i+=1

leancloud.init("FtSzJNltnwUzgGgehg4aRPMK", "Nae1PlPR4veOa4KbBR2X65IH")

wb = xlwt.Workbook()
ws0 = wb.add_sheet('All',cell_overwrite_ok=True)
ws1 = wb.add_sheet('cos',cell_overwrite_ok=True)
ws2 = wb.add_sheet('ZhaiWu',cell_overwrite_ok=True)
ws3 = wb.add_sheet('XuanChuan',cell_overwrite_ok=True)
ws4 = wb.add_sheet('Music',cell_overwrite_ok=True)
ws5 = wb.add_sheet('Technology',cell_overwrite_ok=True)
ws6 = wb.add_sheet('HuoDong',cell_overwrite_ok=True)
ws7 = wb.add_sheet('SheYing',cell_overwrite_ok=True)

wss = [ws0,ws1,ws2,ws3,ws4,ws5,ws6,ws7]
pointer = [0,0,0,0,0,0,0,0]

for sheet in wss:
    sheet.write(0, 0, 'Name')
    sheet.write(0, 1, 'StudyId')
    sheet.write(0, 2, 'Phone')
    sheet.write(0, 3, 'Academy')
    sheet.write(0, 4, 'Year')
    sheet.write(0, 5, 'CN')
    sheet.write(0, 6, 'Departments')
    sheet.write(0, 7, 'Announcement')



CAC = leancloud.Object.extend('CACer')
query = leancloud.Query(CAC)
query.limit(1000)

print(query.find())

for data in query.find():
    academy = data.get('academy')
    academy = u""+getAcademy(academy)
    departments=str(data.get('department'))
    record = [data.get('realName'),data.get('studyId'),data.get('phone'),academy,
              data.get('grade'),data.get('cn'),data.get('department'),data.get('announce')]
    print record
    writeData(record,wss[0],pointer[0]+1)
    pointer[0]+=1

    if(departments.find('cos团')>=0):
        writeData(record,wss[1],pointer[1]+1)
        pointer[1]+=1
    if (departments.find('宅舞团') >= 0):
        writeData(record, wss[2], pointer[2] + 1)
        pointer[2] += 1
    if (departments.find('宣传组') >= 0):
        writeData(record, wss[3], pointer[3] + 1)
        pointer[3] += 1
    if (departments.find('音乐部') >= 0):
        writeData(record, wss[4], pointer[4] + 1)
        pointer[4] += 1
    if (departments.find('技术部') >= 0):
        writeData(record, wss[5], pointer[5] + 1)
        pointer[5] += 1
    if (departments.find('活动部') >= 0):
        writeData(record, wss[6], pointer[6] + 1)
        pointer[6] += 1
    if (departments.find('摄影部') >= 0):
        writeData(record, wss[7], pointer[7] + 1)
        pointer[7] += 1

wb.save('Form.xls')






