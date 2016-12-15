<?php
namespace Admin\Controller;
use Think\Controller;
class ProgramController extends Controller {
public function index(){
    //1、获取数据
    $programModel = M('program');
    $program = $programModel->select();
    //2、分配数据
    $this->assign('program', $program);
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


        $programModel = M('program');
        //添加


        $data = $programModel->create();
        $data['prname']=$_POST['prname'];                    
        $data['printroduce']=$_POST['printroduce'];
        $data['prallintroduce']=$_POST['prallintroduce'];
        $data['prremark']=$_POST['prremark'];
        $data['prpublisher']=$_POST['prpublisher'];
        $data['prtime']=$_POST['prtime'];
        // $data['prpicture']=$_POST['prpicture'];
        
 
        //设置thumb字段属性(目录+名字)
        $data['prpicture']=$info['prpicture']['savepath'].$info['prpicture']['savename'];




        if($programModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
}
    


public  function edit(){
     $programModel=M('program');
     $id=(int)$_GET['id'];
     $program=$programModel->where("id=$id")->find();
     $this->assign('program',$program);
     $this->display();
   }
public function update(){
   
        $programModel = M('program');
        $data = $programModel->create();
        
        $data['id']=$_POST['id']; 
       $data['prname']=$_POST['prname'];                    
        $data['printroduce']=$_POST['printroduce'];
        $data['prallintroduce']=$_POST['prallintroduce'];
        $data['prremark']=$_POST['prremark'];
        $data['prpublisher']=$_POST['prpublisher'];
        $data['prtime']=$_POST['prtime'];
        // $data['prpicture']=$_POST['prpicture'];
        
 
        //设置thumb字段属性(目录+名字)
        $data['prpicture']=$info['prpicture']['savepath'].$info['prpicture']['savename'];

        if($programModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $programModel = M('program');
    if($programModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

