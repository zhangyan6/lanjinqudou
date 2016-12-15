<?php
namespace Admin\Controller;
use Think\Controller;
class ProjectController extends Controller {
public function index(){
    //1、获取数据
    $projectModel = M('project');
    $project = $projectModel->select();
    //2、分配数据
    $this->assign('project', $project);
    //3、显示视图
    $this->display();
}

public function add(){
    $this->display();
}

public function store(){
     $upload = new \Think\Upload();// 实例化上传类
    $upload->maxSize=3145728;// 设置附件上传大小
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


        $projectModel = M('project');
        //添加
        $data = $projectModel->create();
        $data['pname']=$_POST['pname'];                    
        $data['pintroduction']=$_POST['pintroduction'];
        $data['pcontent']=$_POST['pcontent'];
        $data['pimgnumber']=$_POST['pimgnumber'];
        $data['premark']=$_POST['premark'];
        $data['ppublishe']=$_POST['ppublishe'];
        $data['ptime']=$_POST['ptime'];
 
        //设置thumb字段属性(目录+名字)
        $data['pimg']=$info['pimg']['savepath'].$info['pimg']['savename'];




        if($projectModel->add($data)){
            $this->success('数据添加成功', 'index');
        }else{
            $this->showError('数据添加失败');
        }
    }
}


    


public  function edit(){
     $projectModel=M('project');
     $id=(int)$_GET['id'];
     $project=$projectModel->where("id=$id")->find();
     $this->assign('project',$project);
     $this->display();
   }
public function update(){


   
        $projectModel = M('project');
        $data = $projectModel->create();
        $data['id']=$_POST['id']; 
        $data['pname']=$_POST['pname']; 
                          
        $data['pintroduction']=$_POST['pintroduction'];
        $data['pcontent']=$_POST['pcontent'];
        $data['pimgnumber']=$_POST['pimgnumber'];
        $data['premark']=$_POST['premark'];
        $data['ppublishe']=$_POST['ppublishe'];
        $data['ptime']=$_POST['ptime'];
        // $data['pimg']=$_POST['pimg'];
        //设置thumb字段属性(目录+名字)
                 $data['pimg']=$info['pimg']['savepath'].$info['pimg']['savename'];

        if($projectModel->save($data)){
            $this->success('数据更新成功', 'index');
        }else{
            $this->error('数据更新失败');
        }
    
}
public function destroy(){
    $id = I('id');
    $projectModel = M('project');
    if($projectModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

