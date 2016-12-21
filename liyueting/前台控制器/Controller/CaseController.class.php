<?php
namespace Home\Controller;
use Think\Controller;
class CaseController extends Controller {
    public function index(){

        $this->display();

        
        }
         public function qcd(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
        public function cc(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
        public function fc(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
        public function py(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
        public function pb(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
         public function xf(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->select();
        $this->assign('case',$case);

        $this->display();

        
        }
   
        public function qt(){
        $id=$_GET['id'];
        $caseModel=M('case');
        $case=$caseModel->where("class='其他案例'")->select();
        $this->assign('case',$case);

        $this->display();

        
        }

    public function content(){
      $id=$_GET['id'];
      $caseModel=M('case');
      $case=$caseModel->where("id=$id")->select();
      $this->assign('case',$case);

      $this->display(); 

        }
   
}