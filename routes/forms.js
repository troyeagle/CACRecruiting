'use strict';
var router = require('express').Router()
var AV = require('leanengine')

var Entry = AV.Object.extend('CACer');


router.get('/',function(req, res, next){
	res.render('forms')
})

router.post('/',function(req, res, next){
	// console.log(req.body)

	var realname = req.body.realName;
	var studyId = req.body.studyId;
	var phone = req.body.phone;
	var academy = req.body.academies;
	var gradeNum = req.body.grade;
	var cn = req.body.cn;
	var departmentList = req.body.department;
	var department='';
	var announce = req.body.announce;

	var testNum = testReq(req)

	if(testNum!=0){
		var str = 'fail'
		str += testNum.toString();
		res.render(str);
		return;
	}



	//处理年级信息
  var grade = '';

  switch(gradeNum){
		case 'option1':
			grade = '2017';
			break;
		case 'option2':
			grade = '2016';
			break;
		case 'option3':
			grade = '2015';
			break;
		case 'option4':
			grade = '2014';
			break;
		case 'option5':
			grade = '研究生及以上';
			break;
		default:
			grade = '?';
	}
	//处理部门信息

	if(typeof(departmentList)=='undefined'){
		department = "未选择;";
	}else if(typeof(departmentList) == 'string'){
		department = getDepartment(departmentList);
	}else {
		var dstring = JSON.stringify(departmentList);
		var array = JSON.parse(dstring);
		for (var i = 0; i < array.length; i++) {
			department+=(getDepartment(array[i])+";");
		}
	}

	var entry = new Entry();
	entry.set('realName',realname);
	entry.set('studyId',studyId);
	entry.set('phone',phone);
	entry.set('academy',academy);
	entry.set('grade',grade);
	entry.set('cn',cn);
	entry.set('department',department);
	entry.set('announce',announce);

	entry.save().then(function (entry) {
		res.render('success');
  }, function (error) {
    // 失败之后执行其他逻辑
		res.render('forms');
  });

});


//辅助函数 获得部门名称
function getDepartment(num){
	switch(num){
		case '1':
			return 'cos团';
		case '2':
		  return '宅舞团';
		case '4':
			return '宣传组'
		case '8':
			return '音乐部'
		case '16':
			return '技术部'
		case '32':
			return '活动部'
		case '64':
			return '摄影部'
		default:
			return '恭喜你发现隐藏部门！';
	}
}

//辅助函数，检查输入的正确性
//如果正确，返回0.如果错误，根据错误位置返回一个整数

function testReq(req){
	var studyId = req.body.studyId;
	var phone = req.body.phone;
	var academy = req.body.academies;
	var departmentList = req.body.department;

	var idReg1 = /[A-Za-z]{2}[0-9]{7}/
	var idReg2 = /[0-9]{9}/
	if(!(idReg1.test(studyId)||idReg2.test(studyId))){
		console.log('Id Wrong');
		return 1;
	}
	var phoneReg = /[0-9]{11}/;
	if(!phoneReg.test(phone)){
		console.log('phone Wrong')
		return 2;
	}

	if(academy=='0'){
		console.log('uninput academy');
		return 3;
	}

	if(typeof(departmentList)=='undefined'){
		console.log('unchoose department');
		return 4;
	}

	return 0;

}

module.exports = router
