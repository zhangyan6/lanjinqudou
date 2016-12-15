<?php
namespace Admin\Controller;
use Think\Controller;
class KeyController extends Controller {
public function index(){
    //1、获取数据
    $keyModel = M('key');
    $key = $keyModel->select();
    //2、分配数据
    $this->assign('key', $key);
    //3、显示视图
    $this->display();
}

public function add(){
    $this->display();
}

public function store(){
     /*$upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize=3145728 ;// 设置附件上传大小
    $upload->exts=array('jpg', 'gif', 'png', 'jpeg');// 设置附件上传类型
    $upload->rootPath  = THINK_PATH; // 设置附件上传根目录
    $upload->savePath  ='../Public/uploads/'; // 设置附件上传（子）目录
    // 上传文件 
    $info   =   $upload->upload();
    if(!$info) {// 上传错误提示错误信息
        $this->error($upload->getError());
    }else{// 上传成功
        //$this->success('上传成功！');*/
        //创建模型


        $keyModel = M('key');
        //添加


        $data = $keyModel->create();

        $data['kname']=$_POST['kname'];                    
        $data['kcontent']=$_POST['kcontent'];
        $data['kremark']=$_POST['kremark'];
        $data['kpublisher']=$_POST['kpublisher'];
        $data['ktime']=$_POST['ktime'];
        
        
 
        //设置thumb字段属性(目录+名字)
        //$data['pdpicture']=$info['pdpicture']['savepath'].$info['pdpicture']['savename'];




        if($keyModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
    


public  function edit(){
     $keyModel=M('key');
     $id=(int)$_GET['id'];
     $key=$keyModel->where("id=$id")->find();
     $this->assign('key',$key);
     $this->display();
   }
public function update(){
   
        $keyModel = M('key');
        $data = $keyModel->create();
        $data['id']=$_POST['id']; 
        
        $data['kname']=$_POST['kname'];                    
        $data['kcontent']=$_POST['kcontent'];
        $data['kremark']=$_POST['kremark'];
        $data['kpublisher']=$_POST['kpublisher'];
        $data['ktime']=$_POST['ktime'];
        
 
 
        //设置thumb字段属性(目录+名字)
        // $data['pdpicture']=$info['pdpicture']['savepath'].$info['pdpicture']['savename'];

        if($keyModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $keyModel = M('key');
    if($keyModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

