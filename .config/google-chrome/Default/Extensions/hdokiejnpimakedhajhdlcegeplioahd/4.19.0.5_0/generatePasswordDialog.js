var GeneratePasswordDialog=function(e){VaultItemDialog.call(this,e,{additionalHeaderClasses:["icon","leftIcon"],dynamicHeight:!0,responsive:!1,title:Strings.translateString("Generate"),nextButtonText:Strings.translateString("Use Password"),confirmOnClose:!1,overlayDialog:!0})};GeneratePasswordDialog.prototype=Object.create(Dialog.prototype),GeneratePasswordDialog.prototype.constructor=GeneratePasswordDialog,GeneratePasswordDialog.prototype.open=function(e){e=$.extend(e,{defaultData:{length:bg.Preferences.get("generate_length"),minimumLengthByPolicy:0,uppercase:bg.Preferences.get("generate_upper"),lowercase:bg.Preferences.get("generate_lower"),numeric:bg.Preferences.get("generate_digits"),special:bg.Preferences.get("generate_special"),minNumeric:bg.Preferences.get("generate_mindigits"),avoidAmbiguous:bg.Preferences.get("generate_ambig"),reqevery:bg.Preferences.get("generate_reqevery"),pronounceable:bg.Preferences.get("generate_pronounceable")}}),Dialog.prototype.open.call(this,e)},GeneratePasswordDialog.prototype.makePronounceable=function(){this.inputFields.numeric.setValue(!1),this.inputFields.numeric.disable(),this.inputFields.special.setValue(!1),this.inputFields.special.disable(),this.inputFields.minNumeric.disable(),this.inputFields.minNumeric.disable(),this.inputFields.avoidAmbiguous.disable()},GeneratePasswordDialog.prototype.initialize=function(){var e;Dialog.prototype.initialize.apply(this,arguments),this.inputFields.password.getElement().LP_addPasswordMeter(),LPFeatures.allowClipboardCopy()||$("#copyPassword").LP_hide(),(e=this).inputFields.password.getElement().on("copy",function(){e.setCopiedGeneratedPassword(e.inputFields.password.getValue())}),e.nextButton.unbind("click"),e.nextButton.bind("click",function(){e.usePassword()}),$("#generateButton").bind("click",function(){e.submit()}),e.updatePasswordLengthOptions(),e.inputFields.length.setReadOnly(),e.inputFields.length.onChange(function(){e.setupComplete&&e.submit()}),LPPlatform.addEventListener(document.getElementById("copyPassword"),"click",function(){var t=e.inputFields.password.getValue();LPProxy.copyGeneratedPassword(t,e.data.saveOptions.source,e.data.tabURL,-1),e.setCopiedGeneratedPassword(t),"function"==typeof e.data.onCopy&&e.data.onCopy(),e.close()}),e.inputFields.reqevery.onChange(function(t){t&&e.setupComplete&&(e.inputFields.uppercase.setValue(!0),e.inputFields.lowercase.setValue(!0),e.inputFields.numeric.enable(),e.inputFields.numeric.setValue(!0),e.inputFields.special.enable(),e.inputFields.special.setValue(!1),e.inputFields.minNumeric.enable(),e.inputFields.avoidAmbiguous.enable())}),e.inputFields.pronounceable.onChange(function(t){t&&e.setupComplete&&e.makePronounceable()}),$("input[type='checkbox'],input[type='radio'],input[type='text']").bind("change",function(){e.submit()})},GeneratePasswordDialog.prototype.updatePasswordLengthOptions=function(){for(var e=Math.max(4,this.data.defaultData.minimumLengthByPolicy),t=[],a=e;a<101;a++)t.push({value:a.toString(),label:a.toString()});this.inputFields.length.setOptions(t);var i=Math.max(this.data.defaultData.length,e);this.inputFields.length.setValue(i.toString())},GeneratePasswordDialog.prototype.setCopiedGeneratedPassword=function(e){bg.LPTabState&&bg.LPTabState.setCopiedGeneratedPassword&&bg.LPTabState.setCopiedGeneratedPassword(e)},GeneratePasswordDialog.prototype.saveState=function(){var e=this.getData();bg.Preferences.set({generate_advanced:this.advancedOptionsShown,generate_length:e.length,generate_upper:e.uppercase,generate_lower:e.lowercase,generate_digits:e.numeric,generate_special:e.special,generate_mindigits:e.minNumeric,generate_ambig:e.avoidAmbiguous,generate_reqevery:e.reqevery,generate_pronounceable:e.pronounceable}),this.storePassword()},GeneratePasswordDialog.prototype.close=function(){return this.saveState(),Dialog.prototype.close.apply(this,arguments)},GeneratePasswordDialog.prototype.applySitePasswordLengthPolicy=function(){this.data.defaultData.minimumLengthByPolicy=0;var e=bg.get("g_prefoverrides").sitepwlen;if(e)if(e=JSON.parse(e),"function"==typeof bg.get_selected_tab_data_no_extension){var t=this;bg.get_selected_tab_data_no_extension(null,function(a){var i=bg.lp_gettld_url(a.url);if(e[i]){var s=e[i];t.data.defaultData.minimumLengthByPolicy=s,t.updatePasswordLengthOptions()}})}else t.data.defaultData.minimumLengthByPolicy=0,t.updatePasswordLengthOptions()},GeneratePasswordDialog.prototype.setup=function(e,t){bg.Preferences.get("generate_advanced")&&this.showAdvancedOptions(),this.applySitePasswordLengthPolicy(),Dialog.prototype.setup.apply(this,arguments),LPTools.getOption(this.data,"fillGenerated",!0)?this.nextButton.LP_removeAttr("style"):void 0===t.input&&this.nextButton.hide(),this.inputFields.password.setValues(bg.get("g_genpws")||[])},GeneratePasswordDialog.prototype.postSetup=function(e){Dialog.prototype.postSetup.apply(this,arguments),this.submit()},GeneratePasswordDialog.prototype.storePassword=function(){var e=this.inputFields.password.getValue();if(e&&e.length>0){var t=bg.get("g_genpws")||[];t.unshift(e),t.length>20&&t.splice(20,t.length-20),bg.set("g_genpws",t),this.inputFields.password.setValues(t)}},GeneratePasswordDialog.prototype.usePassword=function(){var e=this.inputFields.password.getValue();this.data.input?(this.data.input.val(e),this.close()):(bg.fillGeneratedPassword(this.data.tabID,this.data.tabURL,e,$.extend(this.data.saveOptions,{avoidAmbiguous:this.inputFields.avoidAmbiguous.getValue(),length:this.inputFields.length.getValue(),lowercase:this.inputFields.lowercase.getValue(),numeric:this.inputFields.numeric.getValue(),pronounceable:this.inputFields.pronounceable.getValue(),special:this.inputFields.special.getValue(),uppercase:this.inputFields.uppercase.getValue()})),LPPlatform.closePopup(!0)),this.saveState()},GeneratePasswordDialog.prototype.handleSubmit=function(e){this.storePassword(),this.inputFields.password.setValue(bg.lpCreatePass(e.length,e.uppercase,e.lowercase,e.numeric,e.special,e.minNumeric,e.avoidAmbiguous,e.reqevery,e.pronounceable))};
//# sourceMappingURL=sourcemaps/generatePasswordDialog.js.map
