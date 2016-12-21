<?php
namespace Home\Controller;
use Think\Controller;
class ProductController extends Controller {
    public function index(){

    $productModel = M('product');
    $product = $productModel->select();
    //2、分配数据
    $this->assign('product', $product);
    //3、显示视图
    $this->display();   
}
    public function lj(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='蓝金组合祛痘系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }

    public function zy(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='中药祛痘系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
    public function qypb(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='祛印平疤系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
    public function xf(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='修复系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
         public function ljhf(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='蓝金护肤系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
        public function lsjd(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='蓝色经典系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }

         public function hyxf(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='焕颜修复系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
        public function mm(){
   
      $seriesModel=M('series');
      $series=$seriesModel->select();
      $this->assign('series',$series);

      $productModel=M('product');
      $product=$productModel->where("series='面膜系列'")->select();
      $this->assign('product',$product);

      $this->display(); 

        }


    public function content(){
      $id=$_GET['id'];
      $productModel=M('product');
      $product=$productModel->where("id=$id")->select();
      $this->assign('product',$product);

      $this->display(); 

        }
 }

