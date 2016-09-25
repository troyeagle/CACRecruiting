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

	//处理年级信息
  var grade = '';

  switch(gradeNum){
		case 'option1':
			grade = '2016';
			break;
		case 'option2':
			grade = '2015';
			break;
		case 'option3':
			grade = '2014或者更早';
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


//辅助函数
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

module.exports = router
