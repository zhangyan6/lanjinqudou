<?php
namespace Admin\Controller;
use Think\Controller;
class CaseController extends Controller {
public function index(){
    //1、获取数据
    $caseModel = M('case');
    $case = $caseModel->select();
    //2、分配数据
    $this->assign('case', $case);
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


        $caseModel = M('case');
        //添加


        $data = $caseModel->create();
        $data['cname']=$_POST['cname'];                    
        $data['cintroduce']=$_POST['cintroduce'];
        $data['callintroduce']=$_POST['callintroduce'];
        $data['cremark']=$_POST['cremark'];
        $data['cpublisher']=$_POST['cpublisher'];
        $data['ctime']=$_POST['ctime'];
        // $data['cpicture']=$_POST['cpicture'];
        
 
        //设置thumb字段属性(目录+名字)
        $data['cpicture']=$info['cpicture']['savepath'].$info['cpicture']['savename'];




        if($caseModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
}



public  function edit(){
     $caseModel=M('case');
     $id=(int)$_GET['id'];
     $case=$caseModel->where("id=$id")->find();
     $this->assign('case',$case);
     $this->display();
   }
public function update(){
   
        $caseModel = M('case');
        $data = $caseModel->create();
         $caseModel = M('case');
        //添加

        $data = $caseModel->create();
        $data['id']=$_POST['id']; 
        
        $data = $caseModel->create();
        $data['cname']=$_POST['cname'];                    
        $data['cintroduce']=$_POST['cintroduce'];
        $data['callintroduce']=$_POST['callintroduce'];
        $data['cremark']=$_POST['cremark'];
        $data['cpublisher']=$_POST['cpublisher'];
        $data['ctime']=$_POST['ctime'];
        // $data['cpicture']=$_POST['cpicture'];
 
 
        //设置thumb字段属性(目录+名字)
        $data['cpicture']=$info['cpicture']['savepath'].$info['cpicture']['savename'];

        if($caseModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $caseModel = M('case');
    if($caseModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

