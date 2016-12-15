<?php
namespace Admin\Controller;
use Think\Controller;
class AppointmentController extends Controller {
public function index(){
    //1、获取数据
    $appointmentModel = M('appointment');
    $appointment = $appointmentModel->select();
    //2、分配数据
    $this->assign('appointment', $appointment);
    //3、显示视图
    $this->display();
}

public function add(){
    $this->display();
}

public function store(){
     $upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize=3145728 ;// 设置附件上传大小
    $upload->exts=array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  = THINK_PATH; // 设置附件上传根目录
    $upload->savePath  ='../Public/uploads/'; // 设置附件上传（子）目录
    // 上传文件 
    $info   =   $upload->upload();
    if(!$info) {// 上传错误提示错误信息
        $this->error($upload->getError());
    }else{// 上传成功
        //$this->success('上传成功！');
        //创建模型


        $appointmentModel = M('appointment');
        //添加


        $data = $appointmentModel->create();
        $data['userid']=$_POST['userid'];                    
        $data['userphone']=$_POST['userphone'];
        $data['userqq']=$_POST['userqq'];
        $data['userweixin']=$_POST['userweixin'];
        $data['useradress']=$_POST['useradress'];
        $data['doctorname']=$_POST['doctorname'];
        $data['appointmenttime']=$_POST['appointmenttime'];
        $data['ifaccept']=$_POST['ifaccept'];
        $data['ifappointment']=$_POST['ifappointment'];
        $data['remark']=$_POST['remark'];
        $data['publisher']=$_POST['publisher'];
        $data['time']=$_POST['time'];
        
        //设置thumb字段属性(目录+名字)
        // $data['cpicture']=$info['cpicture']['savepath'].$info['cpicture']['savename'];




        if($appointmentModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
}



public  function edit(){
     $appointmentModel=M('appointment');
     $id=(int)$_GET['id'];
     $appointment=$appointmentModel->where("id=$id")->find();
     $this->assign('appointment',$appointment);
     $this->display();
   }
public function update(){
   
        $appointmentModel = M('appointment');
        $data = $appointmentModel->create();
        
        $data['id']=$_POST['id']; 
        $data['userid']=$_POST['userid'];                    
        $data['userphone']=$_POST['userphone'];
        $data['userqq']=$_POST['userqq'];
        $data['userweixin']=$_POST['userweixin'];
        $data['useradress']=$_POST['useradress'];
        $data['doctorname']=$_POST['doctorname'];
        $data['appointmenttime']=$_POST['appointmenttime'];
        $data['ifaccept']=$_POST['ifaccept'];
        $data['ifappointment']=$_POST['ifappointment'];
        $data['remark']=$_POST['remark'];
        $data['publisher']=$_POST['publisher'];
        $data['time']=$_POST['time'];
 
 
        //设置thumb字段属性(目录+名字)
        // $data['pdpicture']=$info['pdpicture']['savepath'].$info['pdpicture']['savename'];

        if($appointmentModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $appointmentModel = M('appointment');
    if($appointmentModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

