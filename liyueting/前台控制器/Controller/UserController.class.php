<?php
namespace Home\Controller;
use Think\Controller;
class UserController extends Controller {
    public function index(){

        $this->display();

        
        }

        public function my(){
        $id=$_GET['id'];
        $skincaretipsModel=M('skincaretips');
        $skincaretips=$skincaretipsModel->select();
        $this->assign('skincaretips',$skincaretips);

        $this->display();

        
        }

        public function yy(){
        $id=$_GET['id'];
        $appointmentModel=M('appointment');
        $appointment=$appointmentModel->select();
        $this->assign('appointment',$appointment);




        $this->display();

        
        }

   
 // public function yy(){
 //    $this->display();
 //   }

public function store(){
   

        $appointment1Model = M('appointment1');
        //添加

        $data = $appointment1Model->create();
        $data['username']=$_POST['username'];
        $data['qq']=$_POST['qq'];                    
        $data['weixin']=$_POST['weixin'];
        $data['phone']=$_POST['phone'];
        $data['remark']=$_POST['remark'];

        if($appointment1Model->add($data)){
            $this->success('数据添加成功', 'yy');
        }else{
            $this->showError('数据添加失败');
        }
    }

     public function fb(){
        $id=$_GET['id'];
        $feedbackModel=M('feedback');
        $feedback=$feedbackModel->select();
        $this->assign('feedback',$feedback);

        $this->display();

        
        }

        public function store1(){
   

        $feedbackModel = M('feedback');
        //添加

        $data = $feedbackModel->create();
        $data['username']=$_POST['username'];
        $data['phone']=$_POST['phone'];                    
        $data['ctime']=$_POST['ctime'];
        $data['phone']=$_POST['phone'];
        $data['fcontent']=$_POST['fcontent'];

        if($feedbackModel->add($data)){
            $this->success('数据添加成功', 'fb');
        }else{
            $this->showError('数据添加失败');
        }
    }
     public function zx(){
        $id=$_GET['id'];
        $consulModel=M('consul');
        $consul=$consulModel->select();
        $this->assign('consul',$consul);

        $this->display();

        
        }

        public function store2(){
   

        $consulModel = M('consul');
        //添加

        $data = $consulModel->create();
        $data['username']=$_POST['username'];
        $data['phone']=$_POST['phone'];                    
        $data['ctime']=$_POST['ctime'];
        $data['phone']=$_POST['phone'];
        $data['fcontent']=$_POST['fcontent'];

        if($consulModel->add($data)){
            $this->success('数据添加成功', 'fb');
        }else{
            $this->showError('数据添加失败');
        }
    }



   }

