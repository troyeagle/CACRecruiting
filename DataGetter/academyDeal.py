#coding:utf-8
import sys

def getAcademy(num):
    reload(sys)
    sys.setdefaultencoding('utf-8')
    if num == '0':
        return '未选择'
    elif num =='1':
        return '文学院'
    elif num == '2':
        return '历史学院'
    elif num == '3':
        return '法学院'
    elif num == '4':
        return '哲学系'
    elif num == '5':
        return '新闻传播学院'
    elif num == '6':
        return '政府管理学院'
    elif num == '7':
        return '信息管理学院'
    elif num == '8':
        return '社会学院'
    elif num == '9':
        return '商学院'
    elif num == '10':
        return '外国语学院'
    elif num == '11':
        return '数学系'
    elif num == '12':
        return '物理学院'
    elif num == '13':
        return '化学化工学院'
    elif num == '14':
        return '生命科学学院'
    elif num == '15':
        return '地球科学与工程学院'
    elif num == '16':
        return '地理与海洋科学学院'
    elif num == '17':
        return '大气科学学院'
    elif num == '18':
        return '电子科学与工程学院'
    elif num == '19':
        return '现代工程与应用科学学院'
    elif num == '20':
        return '环境学院'
    elif num == '21':
        return '天文与空间科学学院'
    elif num == '22':
        return '计算机科学与技术系'
    elif num == '23':
        return '医学院'
    elif num == '24':
        return '匡亚明学院'
    elif num == '25':
        return '软件学院'
    elif num == '26':
        return '教育研究院'
    elif num == '27':
        return '工程管理学院'
    elif num == '28':
        return '海外教育学院'
    elif num == '29':
        return '建筑与城市规划学院'
    else:
        return '其他'