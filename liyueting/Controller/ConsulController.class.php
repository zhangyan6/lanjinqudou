<?php
namespace Admin\Controller;
use Think\Controller;
class ConsulController extends Controller {
public function index(){
    //1、获取数据
    $consulModel = M('consul');
    $consul = $consulModel->select();
    //2、分配数据
    $this->assign('consul', $consul);
    //3、显示视图
    $this->display();
}

// public function add(){
//     $this->display();
// }

// public function store(){
  
        
//         $userModel = M('user');
  
//         $data = $userModel->create();
//         $data['bcontent']=$_POST['bcontent'];                    
//         $data['username']=$_POST['username'];
//         $data['phone']=$_POST['phone'];
//         $data['fcontent']=$_POST['fcontent'];
//         $data['ctime']=$_POST['ctime'];
    




//          if($userModel->add($data)){
//             $this->success('数据添加成功', 'index');
//         }else{
//             $this->showError('数据添加失败');
//         }
//     }

    



public function destroy(){
    $id = I('id');
    $userModel = M('user');
    if($userModel->where("id=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->showError('删除失败');
    }
}

}

