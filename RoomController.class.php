<?php
namespace Admin\Controller;
use Think\Controller;
class RoomController extends Controller {
 public function index(){
 $Model = M('rooms');
$data = $Model->join('categorys ON rooms.cid = categorys.id')->select();

$this->assign('rooms', $data);
$this->display();
    }

/**
 * 添加数据
 */
public function create(){
    //1、分配客房分类数据
    $categoryModel = M('categorys');
    $data = $categoryModel->select();
    $this->assign('categorys',$data);

    //2、显示视图文件
    $this->display();
}

/**
 * 添加数据到数据库
 */
public function store(){
    $roomModel = M('rooms');//生成模型对象

    $data = $roomModel->create();//创建数据对象

    if($roomModel->add($data)){//添加数据
        $this->success('数据添加成功','index');
    }else{
        $this->error('数据添加失败');
    }
}
public function edit(){
    //获取id
    $id = I('rid');
    //获取数据
    $roomModel = M('rooms');
    $data = $roomModel->find($id);
    
    //分配数据
    $this->assign('room', $data);

    $this->display();
}
public function update(){
        $roomModel = M('rooms');//生成模型对象

    $data = $roomModel->create();//创建数据对象

    if($roomModel->save($data)){//添加数据
        $this->success('数据添加成功','index');
    }else{
        $this->error('数据添加失败');
    }
}
public function destroy(){
    $id = I('id');
    $roomModel = M('rooms');
    if($roomModel->where("rid=$id")->delete()){
        $this->success('删除成功');
    }else{
        $this->error('删除失败');
    }
}

}