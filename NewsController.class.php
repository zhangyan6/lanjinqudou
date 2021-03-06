<?php
namespace Admin\Controller;
use Think\Controller;
class NewsController extends Controller {
public function index(){
    //1、获取数据
    $newsModel = M('news');
    $news = $newsModel->select();
    //2、分配数据
    $this->assign('news', $news);
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


        $newsModel = M('news');
        //添加


        $data = $newsModel->create();
        $data['ntitle']=$_POST['ntitle'];                    
        $data['nintroduce']=$_POST['nintroduce'];
        $data['ncontent']=$_POST['ncontent'];
        $data['nremark']=$_POST['nremark'];
        $data['npublisher']=$_POST['npublisher'];
        $data['ntime']=$_POST['ntime'];
        // $data['npicture']=$_POST['npicture'];
        
 
        //设置thumb字段属性(目录+名字)
        $data['npicture']=$info['npicture']['savepath'].$info['npicture']['savename'];




        if($newsModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
}



public  function edit(){
     $newsModel=M('news');
     $id=(int)$_GET['id'];
     $news=$newsModel->where("id=$id")->find();
     $this->assign('news',$news);
     $this->display();
   }
public function update(){
   
        $newsModel = M('news');
        $data = $newsModel->create();
        $data['id']=$_POST['id']; 
        $data['ntitle']=$_POST['ntitle'];                    
        $data['nintroduce']=$_POST['nintroduce'];
        $data['ncontent']=$_POST['ncontent'];
        $data['nremark']=$_POST['nremark'];
        $data['npublisher']=$_POST['npublisher'];
        $data['ntime']=$_POST['ntime'];
        // $data['npicture']=$_POST['npicture'];
 
 
        //设置thumb字段属性(目录+名字)
        $data['npicture']=$info['npicture']['savepath'].$info['npicture']['savename'];

        if($newsModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $newsModel = M('news');
    if($newsModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

