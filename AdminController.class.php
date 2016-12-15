<?php
namespace Admin\Controller;
use Think\Controller;

class AdminController extends Controller {
     

    /*public function __CONSTRUCT(){
       parent::__CONSTRUCT();
        if(!isLogin()){
        $this->error("您尚未登录，请您先去登录",U("Admin/login"));  
        }

    }*/
    public function login(){
        if(IS_POST){
            $adminusersModel=M('adminusers');
            $condition=array(
                'username'=>I('post.username'),
                'password'=>I('post.password')
                );
            $_SESSION['username']=I('post.username');
            $result=$adminusersModel->where($condition)->count();
            if($result>0){
                session('username',I('post.username'));
                
                $this->success("登陆成功",U('Index/index'));
                
            }
            else{
                $this->error("用户名或密码不正确");
                
            }
        }
        else{
            $this->display();
        }
        
    }
}
?>