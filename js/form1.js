document.writeln("<form class=\"form-horizontal\" method=\"post\" name=\"form\" action=\"http://inquiry.sbmchina.com/updata.php\" onsubmit=\"return(CheckfootInput())\">");
document.writeln("<table border=\"1\" cellspacing=\"1\">");
document.writeln("<tr>");
//document.writeln("<td><label class=\"control-label\">Products:</label></td>");
document.writeln("<td><label class=\"control-label\">Products:</label><select name=\"products\" class=\"input-xlarge\">");
document.writeln("<option selected=\"selected\" value=\"\" style=\"color:#ff0000; font-weight:bold;\">Please Select!</option>");
document.writeln("<option value=\"Mobile crushing plant\">Mobile Crusher</option>");
document.writeln("<option value=\"LM Vertical Grinding Mill\">Vertical Mill</option>");
document.writeln("<option value=\"Jaw Crusher\">Jaw Crusher</option>");
document.writeln("<option value=\"Cone Crusher\">Cone Crusher</option>");
document.writeln("<option value=\"MTW European Grinding Machine\">MTW European Grinding Machine</option>");
document.writeln("<option value=\"Ultrafine Mill\">Ultrafine Mill</option>");
document.writeln("<option value=\"Impact Crusher\">Impact Crusher</option>");
document.writeln("<option value=\"VSI Crusher\">VSI Crusher</option>");
document.writeln("<option value=\"Hydraulic Cylinder Cone Crusher\">Hydraulic Cylinder Cone Crusher</option>");
document.writeln("<option value=\"Sand Washing Machine\">Sand Washing Machine</option>");
document.writeln("<option value=\"Vibrating Screen\">Vibrating Screen</option>");
document.writeln("<option value=\"Vibrating Feeder\">Vibrating Feeder</option>");
document.writeln("<option value=\"Belt Conveyor\">Belt Conveyor</option>");
document.writeln("<option value=\"Stone processing production line\">Stone processing production line</option>");
document.writeln("<option value=\"Industrial milling production line\">Industrial milling production line</option>");
document.writeln("<option value=\"Beneficiation Production Line\">Beneficiation Production Line</option>");
document.writeln("<option value=\"Not Sure\" style=\"color:#ff0000; font-weight:bold;\">Not Sure !</option>");
document.writeln("</select></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\" for=\"address\">Use Place:</label><input name=\"address\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: South Africa\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: South Africa\';this.style.color=\'#999\';};\" value=\"As: South Africa\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\" for=\"name\">Name:<span class=\"red\">*</span></label><input name=\"name\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: Mario\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: Mario\';this.style.color=\'#999\';};\" value=\"As: Mario\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\" for=\"input01\">Email:<span class=\"red\">*</span></label><input name=\"email\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: sample@isp.com\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: sample@isp.com\';this.style.color=\'#999\';};\" value=\"As: sample@isp.com\" size=\"25\" maxlength=\"50\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\" for=\"phone\">Phone:</label><input name=\"phone\" type=\"text\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: 0086-21-51860251\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: 0086-21-51860251\';this.style.color=\'#999\';};\" value=\"As: 0086-21-51860251\" size=\"25\" /></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><label class=\"control-label\">Message:<span class=\"red\">*</span></label><textarea name=\"content\" cols=\"45\" rows=\"6\" class=\"input-xlarge\" style=\"color: rgb(153, 153, 153);\" onfocus=\"if(value==\'As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.\'){value=\'\';this.style.color=\'#000\';};\" onblur=\"if(value==\'\'){value=\'As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.\';this.style.color=\'#999\';};\">As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.</textarea></td>");
document.writeln("</tr>");
document.writeln("<tr>");
document.writeln("<td><input type=\"submit\" value=\"Submit Now\" class=\"btn btn-primary\" /></td>");
document.writeln("</tr>");
document.writeln("</table>");
document.writeln("<form>");
function is_number(str) {
exp = /[^0-9 .+()-]/g;
if (str.search(exp) != -1) {
return false;
}
return true;
}
function is_email(str) {
if ((str.indexOf("@") == -1) || (str.indexOf(".") == -1)) {
return false;
}
return true;
}
function CheckfootInput(){

if(document.form.name.value==''||document.form.name.value=='As: Mario'){
alert("Please Write Your Name ^_^");
document.form.name.focus();
return false; 
}

if(document.form.email.value==''||document.form.email.value=='As: sample@isp.com'||!is_email(document.form.email.value)){
alert("Please Write Your Email ^_^");
document.form.email.focus();
return false; 
}

if(document.form.content.value==''||document.form.content.value=='As: output size like 0-10,10-15, 15-20 mm for crushing or 75 microns ( 200 meshes) for mill machine and other requirements.'){
alert("Please Write Your Message ^_^");
document.form.content.focus();
return false; 
}

if(document.form.capacity.value=='As: 20 TPH'){
document.form.capacity.value='';
}

if(document.form.title.value=='As: Marble'){ 
document.form.title.value=''; 
}

if(document.form.phone.value=='As: 0086-21-51860251'){
document.form.phone.value = ''; 
}

return true;
}