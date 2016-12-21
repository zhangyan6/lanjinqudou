<?php
namespace Home\Controller;
use Think\Controller;
class LanjinController extends Controller {
    public function index(){

        $this->display();

        
        }
     public function news(){
   
      $newsModel=M('news');
      $news=$newsModel->select();
      $this->assign('news',$news);

      // $productModel=M('product');
      // $product=$productModel->where("series='蓝金组合祛痘系列'")->select();
      // $this->assign('product',$product);

      $this->display(); 

        }

        public function content(){
      $id=$_GET['id'];
      $newsModel=M('news');
      $news=$newsModel->where("id=$id")->select();
      $this->assign('news',$news);

      $this->display(); 

        }

   
}