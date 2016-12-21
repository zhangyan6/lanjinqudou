<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    $indexModel = M('indexcontrol');
    $index = $indexModel->select();
    //2、分配数据
    $this->assign('index', $index);
    //3、显示视图
    $this->display();   
    }
   
}