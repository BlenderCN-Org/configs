var fn_addin=function(t,o,e){var i=i||{};return i.styles=i.styles||{},i.commands=i.commands||{},i.dependencies=e||i.dependencies||{},i.styles.style=function(){},i.views=i.views||{},i.collect=i.collect||{},i.models=i.models||{},i.templates=i.templates||{},i.info={widget:!0,placeholderType:"none",id:"teamFocus",addin:"d5bb3f5e-b59c-430d-8c6f-141bf3187a64",visibleSetting:"focusVisible"},t.console.log(t.elapsed()+": "+i.info.id+" started"),i.templates=i.templates||{},i.templates.teamfocus=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,o,i){var s,l=t.helperMissing,a="function",n=this.escapeExpression;return'<div class="team-focus-content">\n\t<div class="side-col">\n\n\t</div>\n\t<div class="center-col">\n\t\t<span class="goal-label editable" data-ph="Team Goal">'+n(typeof(s=null!=(s=t.label||(null!=e?e.label:e))?s:l)===a?s.call(e,{name:"label",hash:{},data:i}):s)+'</span>\x3c!--\n\t\t--\x3e<span class="goal editable">'+n(typeof(s=null!=(s=t.goal||(null!=e?e.goal:e))?s:l)===a?s.call(e,{name:"goal",hash:{},data:i}):s)+'</span>\n\t\t<button class="team-focus-button add-team-focus"><i class="icon icon-plus"></i> Team Goal</button>\n\t</div>\n\t<div class="side-col">\n\t\t<div class="more more-dash">\n\t\t\t<div class="icon-wrapper dash-icon more-toggle">\n\t\t\t\t<i class="icon-ellipsis more-icon"></i>\n\t\t\t</div>\n\n\t\t\t<div class="app dropdown more-dropdown dash-dropdown team-focus-dropdown nipple-top-left">\n\t\t\t\t<ul class="dropdown-list">\n\t\t\t\t\t<li class="team-focus-edit">Edit</li>\n\t\t\t\t\t<li class="team-focus-clear">Clear</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n'},useData:!0}),i.styles=i.styles||{},i.styles.style=function(){var e=document.createElement("style");e.type="text/css",e.innerHTML=".team-focus{line-height:100%}.team-focus-content{display:flex}.team-focus.no-focus-set .team-focus-content{margin:0}.focus-fade-out .team-focus-content{animation:fade-out .5s ease 0s 1 forwards}@keyframes fade-out{from{opacity:1}to{opacity:0}}.team-focus .side-col{flex:1 0 50px;display:inline-flex;align-items:center}.team-focus-view{max-width:80vw;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.team-focus .editable{display:inline-block;border-bottom:1px solid rgba(255,255,255,0);transition:border .2s ease}.team-focus .editable:empty{display:none}.team-focus.show-editor .editable{display:inline-block;border-bottom:1px solid rgba(255,255,255,1);outline:0}.team-focus .goal-label{margin-right:11px;font-size:.9375rem;font-weight:600;text-transform:uppercase;text-align:right}.team-focus .goal-label:empty:before{content:attr(data-ph)}.team-focus.show-editor .goal-label{padding-bottom:3px;border-bottom:1px solid rgba(255,255,255,0)!important}.team-focus .goal{margin-right:5px;padding-bottom:6px;font-size:21px;color:rgba(255,255,255,.8);text-align:left}.team-focus .goal:empty,.team-focus.show-editor .goal{min-width:150px}.team-focus .team-focus-button{padding:7px 19px 8px;display:inline-flex;opacity:0;background:rgba(255,255,255,.7);border-radius:50px;border:none;color:#181c1f;cursor:pointer;font-size:.875rem;font-weight:500;outline:0;transition:all .2s ease}.focuses:hover .team-focus-button{opacity:1}.team-focus .team-focus-button:hover{background:#fff}.team-focus .team-focus-button i{margin-left:-4px;margin-right:4px}.team-focus .add-team-focus{display:none}.team-focus.no-focus-set .add-team-focus{display:inline-flex}.team-focus.no-focus-set .more,.team-focus.show-editor .team-focus-button,.team-focus.show-editor ul{display:none}.team-focus .more{margin-left:4px}.team-focus .more-toggle{margin-top:-2px}.team-focus .more-icon{margin-top:2px;font-size:1.0625rem}.team-focus-dropdown-wrapper{position:relative;font-size:1rem}.team-focus .dash-dropdown{left:-8px;margin-top:2px}.team-focus-dropdown ul{min-width:90px}",document.getElementsByTagName("head")[0].appendChild(e)},i.collect.TeamFocus=t.collect.SyncedCollection.extend({initialize:function(e){(e=e||{}).name="teamFocus",e.serverIdAttribute="focusUuid",e.model=i.models.TeamFocus,e.transientProps=["createdDate"],e.apiUrl=t.globals.urlRootApi+"team/focus",t.collect.SyncedCollection.prototype.initialize.call(this,e)}}),i.models.TeamFocus=Backbone.Model.extend({initialize:function(e){e=e||{},this.idAttribute=this.collection.idAttribute||"csid",Backbone.Model.prototype.initialize.call(this,e)},defaults:function(){return{title:"Do the thing",createdDate:t.date(),updatedDate:t.now(),label:"This Week",active:!1,serverSetId:!1}}}),i.views.TeamFocus=Backbone.View.extend({template:i.templates.teamfocus,attributes:{id:"team-focus",class:"team-focus has-dash-icon u--fadeable"},events:{"click .team-focus-content":"handleClick","click .team-focus-edit":"toggleEditor","click .add-team-focus":"toggleEditor","click .team-focus-clear":"deactivate","click .team-focus-editor-close":"toggleEditor","click .team-focus-editor-save":"save","click .team-focus-dropdown":"eatClick","keydown .goal-label":"handleKeydown","keydown .goal":"handleKeydown","blur .editable":"handleBlur","click .more-dash":"toggleDropdown","focus .editable":"handleFocus"},initialize:function(){this.defaultLabel="Team Goal",this.dropdownOpen=!1,this.editorOpen=!1,this.focusSet=null,this.listenTo(t,"globalEvent:click",this.handleGlobalClick),this.listenTo(this.collection,"sync",this.onSync),this.collection.fetch({reset:!0}),this.listenTo(t,"focus:showMessage",this.hideGoal),this.listenTo(t,"focus:hideMessage",this.showGoal)},render:function(){var e={},t=this.options.order+"To";this.model&&this.model.get("active")?(e.goal=this.model.get("title"),e.label=this.model.get("label"),e.active=this.model.get("active"),e.label&&0!==e.label.length||(e.label=this.defaultLabel),this.$el.removeClass("no-focus-set"),this.$el.addClass("focus-set"),this.focusSet=!0):(this.model=null,this.$el.removeClass("focus-set"),this.$el.addClass("no-focus-set"),this.focusSet=!1),this.$el[t]("."+this.options.region)[this.renderedOnce?"mShow":"mFadeIn"]().html(this.template(e)),this.renderedOnce=!0,this.$content=this.$(".team-focus-content"),this.$goal=this.$(".goal"),this.$label=this.$(".goal-label"),this.$dropdownContainer=this.$(".more")},hideGoal:function(e){this.$el.mFadeOut(500,!1,e)},showGoal:function(e){this.$el.mFadeIn(500,!1,e)},handleClick:function(e){this.editorOpen||(this.focusSet&&this.dropdownOpen?this.toggleDropdown():this.focusSet||this.toggleEditor())},toggleDropdown:function(e,t){e&&e.stopPropagation(),void 0!==t?(this.dropdownOpen=t,this.$dropdownContainer.toggleClass("active",t)):(this.dropdownOpen=!this.dropdownOpen,this.$dropdownContainer.toggleClass("active"))},toggleEditor:function(e,t){void 0!==t?(this.editorOpen=t,o(this.$el).toggleClass("show-editor",t),this.toggleDropdown(void 0,!1)):(this.editorOpen=!this.editorOpen,o(this.$el).toggleClass("show-editor")),this.editorOpen?(o(this.$goal).attr("contenteditable","true"),o(this.$label).attr("contenteditable","true"),setEndOfContenteditable(this.$goal[0]),this.toggleDropdown(void 0,!1)):(o(this.$goal).attr("contenteditable","false"),o(this.$label).attr("contenteditable","false"))},handleKeydown:function(e){if(e&&13===e.keyCode){o(this.el).off("blur",".editable"),e.preventDefault(),this.save();var t=this;setTimeout(function(){o(t.el).on("blur",".editable",t,t.handleBlur)},10)}else e&&27===e.keyCode&&(this.toggleEditor(e,!1),this.toggleDropdown(e,!1),this.revertValues())},revertValues:function(){var e=this.model&&this.model.get("title"),t=this.model&&this.model.get("label");e||t?(o(this.$goal).text(e||""),o(this.$label).text(t||this.defaultLabel)):this.delete()},save:function(){var e=this.$(".goal-label").text(),t=this.$(".goal").text();e||t?(e&&0!==e.length||(e=this.defaultLabel),this.model?this.model.save({label:e,title:t}):this.collection.create({label:e,title:t,active:!0})):this.delete(),this.toggleEditor(void 0,!1),this.toggleDropdown(void 0,!1)},onSync:function(){this.model=this.collection.models&&this.collection.models.length&&this.collection.max(function(e){return e.get("active")?e.get("updatedDate"):0}),this.render(),this.listenTo(this.model,"change",this.render)},deactivate:function(){this.toggleDropdown(void 0,!1),this.$el.addClass("focus-fade-out");var e=this;setTimeout(function(){e.model&&e.model.save({active:!1}),e.collection.fetch({reset:!0}),e.model=null,e.render(),e.$el.removeClass("focus-fade-out")},1e3)},delete:function(){this.toggleDropdown(void 0,!1),this.$el.addClass("focus-fade-out");var e=this;setTimeout(function(){e.model&&e.model.destroy(),e.model=null,e.render(),e.$el.removeClass("focus-fade-out")},1e3)},handleGlobalClick:function(e){(this.dropdownOpen||this.editorOpen)&&e&&!o.contains(this.$content[0],e.target)&&(this.toggleDropdown(e,!1),this.toggleEditor(e,!1))},handleBlur:function(e){var t=this;e&&e.data&&(t=e.data),t.timeout=setTimeout(function(){t.revertValues(),t.toggleEditor(void 0,!1),t.toggleDropdown(void 0,!1)},20)},handleFocus:function(e){this.timeout&&clearTimeout(this.timeout)},eatClick:function(e){e&&e.preventDefault(),e&&e.stopPropagation()}}),i.styles.style(),t.collect.teamfocus=new i.collect.TeamFocus,t.views.teamfocus=new i.views.TeamFocus({collection:t.collect.teamfocus,model:t.models.teamfocus,region:"team-focus-wrapper",order:"append"}),t.widgets.push(t.views.teamfocus),i};m.addinManager&&m.addinManager.registerAddinFn("d5bb3f5e-b59c-430d-8c6f-141bf3187a64",fn_addin);