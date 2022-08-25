var $ = function (id) { 
	return document.getElementById(id); 
}
window.onload = function () {
    var listNode = $("image_list");
    var captionNode = $("caption");
    var imageNode = $("image");
    var picture;
    var link;
    
    var imageLinks = listNode.getElementsByTagName("a");
    // TODO task    
    // Process image links
   
    for(i=0;i<imageLinks.length;i++)
    {
        picture=imageLinks[i];
        
        picture.onclick=function(evt)
        {  
           var pic=this;

          

           link=pic.getAttribute("href");
         
           imageNode.setAttribute("src",link);
    
          if(evt.preventDefault){
            evt.preventDefault();
          }
        } 
    }



    $("first_link").focus();
}
