<?php
namespace Admin\Controller;
use Think\Controller;
class AdministratorController extends Controller {
public function index(){
    //1、获取数据
    $administratorModel = M('administrator');
    $administrator = $administratorModel->select();
    //2、分配数据
    $this->assign('administrator', $administrator);
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


        $administratorModel = M('administrator');
        //添加


        $data = $administratorModel->create();
        // $data['picture']=$_POST['picture'];                    
        $data['username']=$_POST['username'];
        $data['email']=$_POST['email'];
        $data['phone']=$_POST['phone'];
        $data['limit']=$_POST['limit'];
        $data['password']=$_POST['password'];
        $data['remark']=$_POST['remark'];
        
 
        //设置thumb字段属性(目录+名字)
        $data['picture']=$info['picture']['savepath'].$info['picture']['savename'];
  

        if($administratorModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
        }



public  function edit(){
     $administratorModel=M('administrator');
     $id=(int)$_GET['id'];
     $administrator=$administratorModel->where("id=$id")->find();
     $this->assign('administrator',$administrator);
     $this->display();
   }
public function update(){
     $upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize=3145728;// 设置附件上传大小
    $upload->exts=array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  = THINK_PATH; // 设置附件上传根目录
    $upload->savePath  ='../Public/uploads/'; // 设置附件上传（子）目录

        $info   =   $upload->upload();
    if(!$info) {// 上传错误提示错误信息
        $this->error($upload->getError());
    }else{// 上传成功
        //$this->success('上传成功！');
        //创建模型
        $administratorModel = M('administrator');
        $data = $administratorModel->create();
        
        $data['id']=$_POST['id']; 
        // $data['picture']=$_POST['picture'];                    
        $data['username']=$_POST['username'];
        $data['email']=$_POST['email'];
        $data['phone']=$_POST['phone'];
        $data['limit']=$_POST['limit'];
        $data['password']=$_POST['password'];
        $data['remark']=$_POST['remark'];
 
 
        //设置thumb字段属性(目录+名字)
         $data['picture']=$info['picture']['savepath'].$info['picture']['savename'];

        if($administratorModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $administratorModel = M('administrator');
    if($administratorModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

