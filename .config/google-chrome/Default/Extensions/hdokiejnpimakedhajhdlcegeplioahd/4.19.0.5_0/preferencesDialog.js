var PreferencesDialog=function(e){Dialog.call(this,e,{additionalHeaderClasses:"icon",title:Strings.translateString("Preferences"),closeButtonEnabled:!0,maximizeButtonEnabled:!0,buttonAlign:this.RIGHT_ALIGN}),this.hotkeyFields={}};PreferencesDialog.prototype=Object.create(Dialog.prototype),PreferencesDialog.prototype.constructor=PreferencesDialog,function(){var e,t,r="hotkeyField",o="checkboxField",a={usepopupfill:!0,enablenamedpipes:!0,language:!0},n=function(e,t){var r;DialogInput.Input.apply(this,arguments),this.keyCode=0,this.mods="",(r=this).input.bind("keydown",function(e){(function(e){var t=[];if(e.ctrlKey&&t.push("control"),e.metaKey&&t.push("meta"),e.altKey&&t.push("alt"),e.shiftKey&&t.push("shift"),t.length>e.shiftKey)switch(e.which){case 16:case 17:case 18:case 91:case 92:break;default:this.setValue(e.which,t.join(" "))}switch(e.which){case 8:case 46:this.clear();break;case 9:break;default:e.preventDefault(),e.stopPropagation()}}).call(r,e)})};(n.prototype=Object.create(DialogInput.Input.prototype)).constructor=n,n.prototype.setValue=(e=null,t=null,function(r,o){var a="";if(o&&r){for(var n=o.split(" "),i=(null===t&&(t={control:Strings.translateString("Ctrl"),meta:Strings.translateString("Meta"),alt:Strings.translateString("Alt"),shift:Strings.translateString("Shift")}),t),l=0,s=n.length;l<s;++l)n[l]=i[n[l]];var u=(null===e&&(e={33:Strings.translateString("Page Up"),34:Strings.translateString("Page Down"),35:Strings.translateString("End"),36:Strings.translateString("Home"),37:Strings.translateString("Left"),38:Strings.translateString("Up"),39:Strings.translateString("Right"),40:Strings.translateString("Down"),189:"-",219:"[",220:"\\",221:"]",186:";",222:"'",188:",",187:"+",190:".",191:"/",106:"*",192:"~",124:Strings.translateString("Print Screen")}),e);void 0!==u[r]?n.push(u[r]):n.push(String.fromCharCode(r).toUpperCase()),a=n.join("+"),this.keyCode=r,this.mods=o}else this.keyCode=0,this.mods="";DialogInput.Input.prototype.setValue.call(this,a)});var i=function(e,t){var r,a;DialogInput.Input.apply(this,arguments),this.checkboxField=$("#"+this.input.attr(o)),a=null,void 0===(r=this).checkboxField.attr(Dialog.prototype.DIALOG_FIELD)&&(r.checkboxField.bind("change",function(){if(r.checkboxField.prop("checked"))if(null!==a)r.setValue(a),a=null;else switch(r.checkboxField.selector){case"#autoautoEnabled":r.setValue(25);break;case"#pollServerEnabled":r.setValue(15);break;case"#recentUsed":r.setValue(10)}else a=r.getValue(),r.setValue("")}),r.onChange(function(e){r.checkboxField.prop("checked",e>0)}))};(i.prototype=Object.create(DialogInput.Input.prototype)).constructor=i,i.prototype.enable=function(){DialogInput.Input.prototype.enable.apply(this,arguments),this.checkboxField.prop("disabled",!1)},i.prototype.disable=function(){DialogInput.Input.prototype.disable.apply(this,arguments),this.checkboxField.prop("disabled",!0)},i.prototype.buildError=function(){return this.buildErrorElement({element:this.input.parent().children()})},i.prototype.setValue=function(e){("number"!=typeof e||e>0)&&DialogInput.Input.prototype.setValue.apply(this,arguments)},i.prototype.validate=function(e,t,r){if(r){var o=parseInt(r);if(isNaN(o)||o<0)return e.addError(t,Strings.translateString("Value must be greater than or equal to %1.",0)),!1}return!0};PreferencesDialog.prototype.setupButtons=function(e){Dialog.prototype.setupButtons.apply(this,arguments),this.resetDefaultsButton=$(LPTools.createElement("button","nbtn btn_midi wbtn dynamicWidth leftButton")),this.resetDefaultsButton.bind("click",this.createHandler(this.resetDefaults)),this.buttonContainer.prepend(this.resetDefaultsButton)},PreferencesDialog.prototype.resetDefaults=function(){for(var e=this.currentViewElement.find("["+this.DIALOG_FIELD+"]"),t={},r=0,o=e.length;r<o;++r)t[e[r].getAttribute(this.DIALOG_FIELD)]=!0;this.populateFields(bg.Preferences.getDefault(t))},PreferencesDialog.prototype.leftMenuChange=function(e){this.resetDefaultsButton.text(Strings.translateString("Restore '%1' Defaults",e.text()))},PreferencesDialog.prototype.getHotKeyPreferenceNames=function(){var e={};for(var t in this.hotkeyFields)e[t+"KeyCode"]=!0,e[t+"Mods"]=!0;return e},PreferencesDialog.prototype.getData=function(){var e=Dialog.prototype.getData.apply(this,arguments);for(var t in this.hotkeyFields){var r=this.hotkeyFields[t];e[t+"KeyCode"]=r.keyCode,e[t+"Mods"]=r.mods}return e},PreferencesDialog.prototype.defaultFields=function(e){e.defaultData=$.extend(e.defaultData,bg.Preferences.get(DialogInput.getProperties(this.inputFields))),LPTools.setSelectOptions(this.inputFields.defaultffid.getNativeElement(),function(){for(var e=LPProxy.getFormFillModels(),t=[{value:0,label:""}],r=0,o=e.length;r<o;++r){var a=e[r];t.push({value:a.getID(),label:a.getName()})}return t}()),LPTools.setSelectOptions(this.inputFields.language.getNativeElement(),function(){var e=[],t=bg.get("g_langs");for(var r in t)e.push({value:r,label:t[r]});return e}()),Dialog.prototype.defaultFields.apply(this,arguments);var t=bg.Preferences.get(this.getHotKeyPreferenceNames());for(var r in this.hotkeyFields){this.hotkeyFields[r].setValue(t[r+"KeyCode"],t[r+"Mods"])}var o=bg.get("g_prefoverrides");bg.getLogoffWhenCloseBrowser(function(e){if(e){var t=document.getElementById("logoffWhenCloseBrowserLabel"),r=document.getElementById("logoffWhenCloseBrowserVal");t&&(t.innerText="Automatically Log out when all browsers are closed."),r&&(r.style.display="none")}o.logoffclosebrowser>-1&&(this.inputFields.logoffWhenCloseBrowser.setValue(o.logoffclosebrowser),this.inputFields.logoffWhenCloseBrowser.disable(),e||(this.inputFields.logoffWhenCloseBrowserVal.setValue(o.logoffclosebrowser),this.inputFields.logoffWhenCloseBrowserVal.disable()))}),o.logoffidle>-1?(this.inputFields.idleLogoffVal.setValue(o.logoffidle),this.inputFields.idleLogoffVal.disable()):this.inputFields.idleLogoffVal.enable(),bg.get("g_flags").pollIntervalSetByPolicy?this.inputFields.pollServerVal.disable():this.inputFields.pollServerVal.enable()},PreferencesDialog.prototype.clearFields=function(){for(var e in Dialog.prototype.clearFields.apply(this,arguments),this.hotkeyFields)this.hotkeyFields[e].clear()};var l,s=function(e){return function(t){var r=e.getValue();r&&(e.clear(),LPTools.requireBinary(function(){e.setValue(r)}))}};PreferencesDialog.prototype.initialize=function(e){this.initializeInputFields(e.find("input["+o+"]"),function(e){return new i(e,this)}),Dialog.prototype.initialize.apply(this,arguments);for(var t=e.find("input["+r+"]"),a=0,l=t.length;a<l;++a){var u=t[a],p=u.getAttribute(r);this.hotkeyFields[p]=new n(u,this)}var g=LPPlatform.getUnavailablePreferences();for(var c in g)g[c]&&(e.find("input["+this.DIALOG_FIELD+"="+c+"]").closest("tr").detach(),e.find("select["+this.DIALOG_FIELD+"="+c+"]").closest("tr").detach(),e.find("input["+r+"="+c+"]").closest("tr").detach());var f=LPPlatform.getPreferencesRequiringBinary();for(var c in f)if(f[c]){var d=this.inputFields[c];d&&d.input.bind("change",s(d))}bg.get("LPContentScriptFeatures").is_infield_enabled||document.getElementById("infieldPopupEnabled").parentElement.parentElement.remove(),bg.get("g_hidelogoffprefs")&&$("#securityPrefs").remove(),bg.get("g_hideappearancebox")&&$("#appearancePrefs").remove(),bg.get("g_hidehelptranslate")&&$("#helpTranslateButton").remove(),bg.get("g_issafari")&&$("#iconMenuItem").LP_hide(),bg.get("LPContentScriptFeatures").ziggy?document.getElementById("toplevelmatchingsites").parentNode.parentNode.style.display="none":$("#helpTranslateButton").bind("click",function(){bg.openURL(bg.get("base_url")+"translate.php")})},PreferencesDialog.prototype.validate=function(e){var t=Dialog.prototype.validate.apply(this,arguments);return e.autoautoVal&&""!=e.autoautoVal?e.autoautoVal&&e.autoautoVal<10&&(this.addError("autoautoVal",Strings.translateString("Value must be greater than or equal to %1.",10)),t=!1):e.autoautoVal=-1,e.pollServerVal&&""!=e.pollServerVal?e.pollServerVal&&e.pollServerVal<5&&(this.addError("pollServerVal",Strings.translateString("Value must be greater than or equal to %1.",5)),t=!1):e.pollServerVal=-1,e.recentUsedCount&&""!=e.recentUsedCount||(e.recentUsedCount=-1),t},PreferencesDialog.prototype.checkForRestartOrLogoff=function(e,t){for(var r in a)if(e[r]!==this.originalData[r])return void dialogs.alert.open({title:Strings.translateString("Restart Required"),text:Strings.translateString("You must restart your browser before all of the changes will take effect."),handler:t,closeHandler:t});t()},PreferencesDialog.prototype.handleSubmit=(l=function(e){var t=this.getChanges(e);this.checkForRestartOrLogoff(e,this.createHandler(function(){bg.Preferences.set(t),LPPlatform.handlePreferenceChanges(t),this.close(!0)}))},function(e){(e.logoffWhenCloseBrowser||e.idleLogoffEnabled)&&(bg.Preferences.get("rememberpassword")||bg.get("g_master_password_saved"))?dialogs.confirmation.open({title:Strings.translateString("Remember Password"),text:Strings.translateString("You currently have LastPass set to remember your password.  Doing so essentially makes the automatically log out options you've chosen useless.  Would you like LastPass to stop remembering your password?"),handler:this.createHandler(function(){bg.Preferences.set("rememberpassword",!1),bg.deletesavedpw(bg.get("g_username")),l.call(this,e)}),closeHandler:this.createHandler(l,e)}):l.call(this,e)})}();
//# sourceMappingURL=sourcemaps/preferencesDialog.js.map
