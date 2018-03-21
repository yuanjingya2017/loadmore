function ajax(url,fnSucc)
{
    if(window.XMLHttpRequest)
    {
        var oAjax = new XMLHttpRequest();
    }
    else
    {
        var oAjax = new ActiveXObject("Microsoft.XMLHTTP");//IE6浏览器创建ajax对象
    }
    oAjax.open("POST",url,true);//把要读取的参数的传过来。
    oAjax.send();
    oAjax.onreadystatechange=function()
    {
        if(oAjax.readyState==4)
        {
            if(oAjax.status==200)
            {
                console.log(fnSucc)
                console.log(oAjax.responseText)
                fnSucc(oAjax.responseText);//成功的时候调用这个方法
            }
            else
            {
                // if(fnfiled)
                // {
                //     fnField(oAjax.status);
                // }
                console.log(oAjax.status)
            }
        }
    };
}
