$(function(){function p(t){function s(t){var n='<div class="questionsBox">';n+='<div class="questions">'+e[t].questions+"</div>";var s=e[t].answers;n+='<ul class="answerList">';for(var o=0;o<s.length;o++){n+="<li>";n+='<label><input type="radio" name="answerGroup" value="'+o+'" id="answerGroup_'+o+'"> ';n+=s[o];n+="</label></li>"}n+="</ul>";n+='<div class="questionsRow"><a href="#" class="button" id="nextquestions">Next</a>';if(sessionStorage.skip<i){n+=' <a href="#" class="button" id="skipquestions">Skip</a>'}n+="<span>"+sessionStorage.litofQution+" of "+r+"</span></div>";n+="</div>";$(".privew").append(n);$(".answerList input[type='radio']").click(function(){$(".answerList li").removeClass("selected");if($(this).is(":checked")){$(this).parents("li").addClass("selected")}})}function o(){var t=sessionStorage.stutsoofquiz.split(",");if(t.length>=r){var i=sessionStorage.correctquestions.split(",");var s=sessionStorage.selectedAnsver.split(",");var o='<ul class="quizResult">';Score=0;for(var u=0;u<i.length;u++){o+='<li class="resultAnsIs'+t[u]+'">';o+="<h2>"+e[i[u]].questions+"</h2>";if(t[u]=="correct"){o+='<div class="ansStute"></div>';Score=Score+1}else{o+='<div class="ansStute"></div>';o+="<div><strong>Your Answer:</strong> "+e[i[u]].answers[s[u]]+"</div>"}o+="<div><strong>Correct Answer:</strong> "+e[i[u]].answers[e[i[u]].correctAnswer]+"</div>";o+="</li>"}o+="</ul>";o+='<div class="quizScore clearfix"><div class="alingLeft yourScore"><strong>Your Score is</strong>: '+Score+" Out Of 20</div>";o+='<a href="#" id="reTry" class="button">Re Start the '+sessionStorage.currentQuiz+" Quiz</a></div>";$(".privew").append(o);$("#nextquestions").hide();sessionStorage.haverResult="yes";$("#reTry").click(function(){sessionStorage.clear();window.location.assign(n)})}else{window.location.assign(n)}}function u(t){if(t){sessionStorage.litofQution=Number(sessionStorage.litofQution)+1;var n=e[h];if(sessionStorage.correctquestions){sessionStorage.correctquestions=sessionStorage.correctquestions+","+h;sessionStorage.selectedAnsver=sessionStorage.selectedAnsver+","+t}else{sessionStorage.correctquestions=h;sessionStorage.selectedAnsver=t}if(n.correctAnswer==t){if(sessionStorage.stutsoofquiz){sessionStorage.stutsoofquiz=sessionStorage.stutsoofquiz+",correct"}else{sessionStorage.stutsoofquiz="correct"}}else{if(sessionStorage.stutsoofquiz){sessionStorage.stutsoofquiz=sessionStorage.stutsoofquiz+",wrong"}else{sessionStorage.stutsoofquiz="wrong"}}$(".privew").empty();o();sessionStorage.list=Number(sessionStorage.list)+1}else{alert("Please Select Correct Answer")}}$("#nextquestions").show();e=t;sessionStorage.start=corrntPage;if(sessionStorage.haverResult){o()}else{s(h)}$("#nextquestions").click(function(){getCorrectAnsver=$('[name="answerGroup"]:checked').val();u(getCorrectAnsver)});$("#skipquestions").click(function(){var e=confirm("If you Want to Skip this question");if(e==true){if(sessionStorage.skip>=i){alert("Sorry Your Skip Limit("+sessionStorage.skip+") is over");return false}else{sessionStorage.skip=Number(sessionStorage.skip)+1}}else{return false}sessionStorage.list=Number(sessionStorage.list)+1;window.location.assign(n)})}var e;var t=rootPath+"quizlist/"+corrntPage+".php";var n=corrntPage+".html";var r=20;var i=3;var o=new Date;var u=o.getMilliseconds();var a=u.toString();if(a.length>=3){s=a.slice(0,2)}else{s=0}if(typeof Storage!=="undefined"){var f="qeTest",l=window.sessionStorage;try{l.setItem(f,"1");l.removeItem(f)}catch(c){if(c.code===DOMException.QUOTA_EXCEEDED_ERR&&l.length===0){alert("Hello Sir this app working with web store and your browser is in private browser mode. Please Disable private mode")}else throw c}if(!sessionStorage.start){}else{if(sessionStorage.start!=corrntPage){sessionStorage.clear()}}if(!sessionStorage.litofQution){sessionStorage.litofQution=1}if(!sessionStorage.stutsoofqui){$(".privew").append('<div class="privewHome"></div>');$(".privewHome").load(rootPath+"quizhome/"+corrntPage+".html",function(){$("#StartTest").click(function(){sessionStorage.stutsoofqui=" ";sessionStorage.currentQuiz=$(this).attr("data-id");if(!sessionStorage.currentQuiz){sessionStorage.currentQuiz=""}window.location.assign(n)})})}else{$.getJSON(t,p);if(!sessionStorage.skip){sessionStorage.skip=0}if(sessionStorage.list){if(sessionStorage.list>=100){sessionStorage.list=s;h=sessionStorage.list}else{h=sessionStorage.list}}else{sessionStorage.list=s;h=sessionStorage.list}}}else{alert(" Sorry! No web storage support.");var h=s}})