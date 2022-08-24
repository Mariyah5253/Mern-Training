var $ = function (id) {
    return document.getElementById(id);
}
var stateCodeLookup = function (stateCode) {
    var states = ["CA", "WA", "NW", "AZ", "WY", "MT"]
    states.push("TX")
    for (let i in states) {
        if (i == stateCode) {
            return true;
        }

    }
    return false;
}
var joinList = function () {
    var emailAddress1 = $("email_address1").value;
    emailAddress1=emailAddress1.trim();
   
    var emailAddress2 = $("email_address2").value;
   

    var isvalid = true;
    if (emailAddress1 == "") {
        $("email_address1_error").value = "This Field is required.";
        isvalid = false;
    }
    else {
        $("email_address1_error").firstChild.nodeValue = "";
    }
    if (emailAddress2 == "") {
        $("email_address2_error").firstChild.nodeValue = "This Field is required.";
        
        isvalid = false;

    }
    
    else if (!(emailAddress1 == emailAddress2) ){
        $("email_address2_error").firstChild.nodeValue = "This entry must equal first Entry.";
 
        isvalid = false;
    }
    else{ 
        
        $("email_address2_error").value = "";
       
    }
    if(isvalid){
        
        $("email_form").submit();
    }


}
window.onload = function () {
    console.log($("email_address2_error").firstChild)
    $("join_list").onclick = joinList;
    $("email_address1").focus();
}
