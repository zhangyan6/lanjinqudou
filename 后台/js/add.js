
<script>
	 KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id');
        });
</script>
<script>
                        function tianjia(){
                              alert("添加成功！");
                         }
                    </script>
<script>
                           function deleteallbutton(){
                           var x;
                           var r=confirm("你确定要批量删除吗？");
                               if (r==true){
                                 x="删除成功!";
                              }
                                else{
                                 x="已取消删除!";
                              }
                             document.getElementById("demo").innerHTML=x;
                            }
                       </script>
<script>
function deletebutton(){
    var x;
    var r=confirm("你确定要删除这条信息吗？");
    if (r==true){
        x="删除成功!";
    }
    else{
        x="已取消删除!";
    }
    document.getElementById("demo").innerHTML=x;
}
</script>