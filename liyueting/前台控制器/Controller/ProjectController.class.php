<?php
namespace Home\Controller;
use Think\Controller;
class ProjectController extends Controller {
     public function qd(){
   
     $projectModel=M('project');
     $project=$projectModel->select();
     $this->assign('project',$project);

      $programModel=M('program');
      $program=$programModel->where("project='祛痘项目'")->select();
      $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->where("project='祛痘项目'")->select();
      $this->assign('product',$product);

    $this->display(); 

 


        
        }
      public function qy(){
   
     $projectModel=M('project');
     $project=$projectModel->select();
     $this->assign('project',$project);

      $programModel=M('program');
      $program=$programModel->where("project='祛印项目'")->select();
      $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->where("project='祛印项目'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
         public function pb(){
   
     $projectModel=M('project');
     $project=$projectModel->select();
     $this->assign('project',$project);

      $programModel=M('program');
      $program=$programModel->where("project='平疤项目'")->select();
      $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->where("project='平疤项目'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }

        public function xf(){
   
     $projectModel=M('project');
     $project=$projectModel->select();
     $this->assign('project',$project);

      $programModel=M('program');
      $program=$programModel->where("project='修复项目'")->select();
      $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->where("project='修复项目'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }

        public function hf(){
   
     $projectModel=M('project');
     $project=$projectModel->select();
     $this->assign('project',$project);

      $programModel=M('program');
      $program=$programModel->where("project='护肤项目'")->select();
      $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->where("project='护肤项目'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
        public function content1(){
   
        // $programModel=M('program');
        // $program=$programModel->select();
        // $this->assign('program',$program);

      $programModel=M('program');
      $program=$programMode->select();
      $this->assign('program',$program);

      // $productModel=M('product');
      // $product=$productModel->where("project='护肤项目'")->select();
      // $this->assign('product',$product);

      $this->display(); 

        }
   

   public function content2(){
   
        // $programModel=M('program');
        // $program=$programModel->select();
        // $this->assign('program',$program);

      $productModel=M('product');
      $product=$productModel->select();
      $this->assign('product',$product);

      // $productModel=M('product');
      // $product=$productModel->where("project='护肤项目'")->select();
      // $this->assign('product',$product);

      $this->display(); 

        }
   
}