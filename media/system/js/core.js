function writeDynaList(e,t,n,r,i){var s="\n  <select "+e+">",o,u;o=0;for(x in t){if(t[x][0]==n){u="";if(r==n&&i==t[x][1]||o==0&&r!=n)u='selected="selected"';s+='\n     <option value="'+t[x][1]+'" '+u+">"+t[x][2]+"</option>"}o++}s+="\n </select>",document.writeln(s)}function changeDynaList(e,t,n,r,s){var o=document.adminForm[e];for(i in o.options.length)o.options[i]=null;i=0;for(x in t)if(t[x][0]==n){opt=new Option,opt.value=t[x][1],opt.text=t[x][2];if(r==n&&s==opt.value||i==0)opt.selected=!0;o.options[i++]=opt}o.length=i}function radioGetCheckedValue(e){if(!e)return"";var t=e.length,n;if(t==undefined)return e.checked?e.value:"";for(n=0;n<t;n++)if(e[n].checked)return e[n].value;return""}function getSelectedValue(e,t){var n=document[e],r=n[t];return i=r.selectedIndex,i!=null&&i>-1?r.options[i].value:null}function listItemTask(e,t){var n=document.adminForm,r,i,s=n[e];if(s){for(r=0;!0;r++){i=n["cb"+r];if(!i)break;i.checked=!1}s.checked=!0,n.boxchecked.value=1,submitbutton(t)}return!1}function submitbutton(e){Joomla.submitform(e)}function submitform(e){Joomla.submitform(e)}function saveorder(e,t){checkAll_button(e,t)}function checkAll_button(e,t){t||(t="saveorder");var n,r;for(n=0;n<=e;n++){r=document.adminForm["cb"+n];if(!r){alert("You cannot change the order of items, as an item in the list is `Checked Out`");return}r.checked==0&&(r.checked=!0)}submitform(t)}Joomla=window.Joomla||{},Joomla.editors={},Joomla.editors.instances={},Joomla.submitform=function(e,t,n){t||(t=document.getElementById("adminForm")),e&&(t.task.value=e),t.noValidate=!n;var r=document.createElement("input");r.style.display="none",r.type="submit",t.appendChild(r).click(),t.removeChild(r)},Joomla.submitbutton=function(e){Joomla.submitform(e)},Joomla.JText={strings:{},_:function(e,t){return typeof this.strings[e.toUpperCase()]!="undefined"?this.strings[e.toUpperCase()]:t},load:function(e){for(var t in e)this.strings[t.toUpperCase()]=e[t];return this}},Joomla.replaceTokens=function(e){var t=document.getElementsByTagName("input"),n;for(n=0;n<t.length;n++)t[n].type=="hidden"&&t[n].name.length==32&&t[n].value=="1"&&(t[n].name=e)},Joomla.isEmail=function(e){var t=new RegExp("^[\\w-_.]*[\\w-_.]@[\\w].+[\\w]+[\\w]$");return t.test(e)},Joomla.checkAll=function(e,t){t||(t="cb");if(e.form){var r=0,i,s;for(i=0,n=e.form.elements.length;i<n;i++)s=e.form.elements[i],s.type==e.type&&(t&&s.id.indexOf(t)==0||!t)&&(s.checked=e.checked,r+=s.checked==1?1:0);return e.form.boxchecked&&(e.form.boxchecked.value=r),!0}return!1},Joomla.renderMessages=function(e){Joomla.removeMessages();var t=document.getElementById("system-message-container");for(var n in e)if(e.hasOwnProperty(n)){var r=e[n],i=document.createElement("div");i.className="alert alert-"+n;var s=Joomla.JText._(n);if(typeof s!="undefined"){var o=document.createElement("h4");o.className="alert-heading",o.innerHTML=Joomla.JText._(n),i.appendChild(o)}for(var u=r.length-1;u>=0;u--){var a=document.createElement("p");a.innerHTML=r[u],i.appendChild(a)}t.appendChild(i)}},Joomla.removeMessages=function(){var e=document.getElementById("system-message-container");while(e.firstChild)e.removeChild(e.firstChild);e.style.display="none",e.offsetHeight,e.style.display=""},Joomla.isChecked=function(e,t){typeof t=="undefined"&&(t=document.getElementById("adminForm")),e==1?t.boxchecked.value++:t.boxchecked.value--;var r=!0,i,s;for(i=0,n=t.elements.length;i<n;i++){s=t.elements[i];if(s.type=="checkbox"&&s.name!="checkall-toggle"&&s.checked==0){r=!1;break}}t.elements["checkall-toggle"]&&(t.elements["checkall-toggle"].checked=r)},Joomla.popupWindow=function(e,t,n,r,i){var s=(screen.width-n)/2,o,u,a;o=(screen.height-r)/2,u="height="+r+",width="+n+",top="+o+",left="+s+",scrollbars="+i+",resizable",a=window.open(e,t,u),a.window.focus()},Joomla.tableOrdering=function(e,t,n,r){typeof r=="undefined"&&(r=document.getElementById("adminForm")),r.filter_order.value=e,r.filter_order_Dir.value=t,Joomla.submitform(n,r)};