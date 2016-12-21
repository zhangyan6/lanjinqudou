<?php
namespace Home\Controller;
use Think\Controller;
class ProgramController extends Controller {
    public function index(){

        $this->display();

        
        }

    public function nwp(){
        $id=$_GET['id'];
        $programModel=M('program');
        $program=$programModel->select();
        $this->assign('program',$program);

        $this->display();

        
        }
        public function zy(){
        $id=$_GET['id'];
        $programModel=M('program');
        $program=$programModel->select();
        $this->assign('program',$program);

        $this->display();

        
        }
        public function wl(){
        $id=$_GET['id'];
        $programModel=M('program');
        $program=$programModel->select();
        $this->assign('program',$program);

        $this->display();

        
        }

    public function content(){
      $id=$_GET['id'];
      $programModel=M('program');
      $program=$programModel->where("id=$id")->select();
      $this->assign('program',$program);

      $this->display(); 

        }
   
}