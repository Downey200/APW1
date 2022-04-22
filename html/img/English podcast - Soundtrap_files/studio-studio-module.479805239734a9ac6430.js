(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"9C2h":function(t,e,r){"use strict";r.r(e),r.d(e,"StudioModule",(function(){return I}));var n=r("8Y7J"),i=r("SVse"),o=r("mrSG"),c=r("IheW"),u=r("tqRt"),s=r("SxV6"),a=r("5+tZ"),l=r("XqQ8"),d=r("G7eK"),f=r("jotj"),p=r("Mv/r"),b=r("0ZMP"),h=r("zwYe"),v=r("XTU/"),g=r("T42a"),w=r("eDC6"),S=r("I1xb"),j=r("EzwX"),O=r("UW5l"),k=r("/01l"),y=r("vkgz"),m=r("CqXF"),x=r("6iVk"),D=function(t){return t.Removed="removed",t.Updated="updated",t}({}),T=function(){function t(t,e){this.store=t,this.localStorageService=e}return t.prototype.removeStaleDrafts=function(){this.localStorageService.removeKeyStartingWith("DraftStatus-")},t.prototype.setDraftForUser=function(t,e){var r,n={exists:!0,date:Date.now(),title:e};this.localStorageService.setItem("DraftStatus-"+(null!==(r=null==t?void 0:t.id)&&void 0!==r?r:0),n)},t.prototype.removeDraftForUser=function(t){var e;this.localStorageService.removeKey("DraftStatus-"+(null!==(e=null==t?void 0:t.id)&&void 0!==e?e:0))},t.prototype.update=function(t,e){var r=this;return void 0===e&&(e="UNSAVED PROJECT"),this.removeStaleDrafts(),t?this.store.pipe(Object(u.o)(p.c),Object(y.a)((function(t){return r.setDraftForUser(t,e)})),Object(m.a)(D.Updated)):this.store.pipe(Object(u.o)(p.c),Object(y.a)((function(t){return r.removeDraftForUser(t)})),Object(m.a)(D.Removed))},t.\u0275fac=function(e){return new(e||t)(n.wc(u.c),n.wc(x.a))},t.\u0275prov=n.ic({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),E=r("yA6W"),C=function(){},_=function(){function t(t,e,r,n,i,o,c,u,s,a,l,d,f){this.http=t,this.downloadService=e,this.serviceWorkerService=r,this.globalExperimentsService=n,this.trackingService=i,this.dialogService=o,this.tutorialsService=c,this.store=u,this.authService=s,this.draftService=a,this.soundcloudService=l,this.window=d,this.dialogs=f}return t.prototype.register=function(){this.setupStudioGlobals()},t.prototype.getTranslations=function(t,e,r){this.http.get("/public/i18n/studio/messages."+t+".json?z=7").subscribe({next:e,error:function(t){return r(t)}})},t.prototype.download=function(t){var e=this,r=t.url,n=t.format,i=t.name,o=t.blob,u=t.headers,s=Object.keys(null!=u?u:{}).length>0,a=new c.g;n&&a.set("format",n),r&&s?this.downloadService.downloadBlob(r,u).subscribe((function(t){return e.downloadService.triggerDownload(t.blob,null!=i?i:t.fileName)})):r?this.window.location.href=r:o&&this.downloadService.triggerDownload(o,i)},t.prototype.showTrialDialog=function(t,e,r){var n=this;this.store.pipe(Object(u.o)(p.e),Object(s.a)((function(t){return t!==d.a.Unknown})),Object(a.b)((function(){return n.store.pipe(Object(u.o)(p.c))})),Object(l.a)((function(e){return e.educational?n.dialogService.confirm({title:"view.dialogs.ctrl.notavail",primaryButtonText:"view.dialogs.close"}).result:n.dialogService.open(v.b,{data:t}).afterClosed()}))).subscribe(e,r)},t.prototype.trackEvent=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object(o.g)(t,7),n=r[0],i=r[1],c=r[2],u=r[3],s=r[4],a=r[5];this.trackingService.track("studio",{category:n,action:i,label:c,value:u,data:s,projectId:this.projectId}),a(null)},t.prototype.trackTiming=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Object(o.g)(t,5),n=r[0],i=r[1],c=r[2],u=r[3],s=r[4];this.trackingService.track(n,{action:i,value:c,label:u}),s(null)},t.prototype.getEncoders=function(t,e){t([])},t.prototype.getConfiguration=function(t,e){this.store.pipe(Object(u.o)(f.a),Object(s.a)((function(t){return!!t}))).subscribe((function(r){return e(r[t])}))},t.prototype.navigateTo=function(t,e,r,n){e?this.window.open(t,"_blank").opener=null:this.window.location.href=t,r(null)},t.prototype.login=function(t){this.dialogs.showLoginDialog({extraOptions:{onResultDefer:{resolve:function(e){return t(e)}}}})},t.prototype.logout=function(t,e){this.authService.logOutUser().subscribe((function(){return t(null)}),(function(t){return e(t)}))},t.prototype.setupStudioGlobals=function(){var t=this;this.window.ST||(this.window.ST={}),this.window.ST.studio={HostApi:function(){return{getTranslations:function(e,r,n){return t.getTranslations(e,r,n)},addEventListener:C,download:function(e){return t.download(e)},encodeChunk:C,encodeEnd:C,encodeStart:C,getCurrentUser:function(e,r){return e(t.window.g_studio_current_user_params)},getEncoders:function(e,r){return t.getEncoders(e,r)},getSoundcloudClientId:function(e){return t.getConfiguration("soundcloudClientId",e)},getStartParams:function(e,r){return e(t.window.g_studio_start_params)},getLanguageConfigurations:function(e){return t.getConfiguration("languageConfigurations",e)},getTutorialVideos:function(e){return e(t.tutorialsService.getAllVideos())},login:function(e){return t.login(e)},logout:function(e,r){return t.logout(e,r)},navigateTo:function(e,r,n,i){return t.navigateTo(e,r,n,i)},notifyDraftStatus:C,notifyDraftStatus2:function(e,r,n){t.draftService.update(e.exists,e.title).subscribe((function(){return r(null)}))},removeEventListener:C,setTrackProjectId:function(e,r,n){t.projectId=e,r(null)},showTrialDialog:function(e,r,n,i,o,c){return t.showTrialDialog({context:e},o,c)},showTrialDialog2:function(e,r,n,i,o,c,u){return t.showTrialDialog({context:e,reference:o},c,u)},soundcloudRequest:function(e,r,n,i){var c;(c=t.soundcloudService).call.apply(c,Object(o.i)([e],Object(o.g)(r))).subscribe(n,i)},trackEvent:function(e,r,n,i,o,c,u){return t.trackEvent(e,r,n,i,o,c,u)},flushEvents:function(e,r){t.trackingService.forceFlushInternalEvents(),e(null)},trackTiming:t.trackTiming.bind(t),getAndTrackExperimentParam:function(e,r,n,i){try{t.globalExperimentsService.track(e),n(t.globalExperimentsService.getParam(e,r))}catch(o){i(o)}},trackExperiment:function(e,r){t.globalExperimentsService.track(e),r(null)},getExperimentVersion:function(e,r){return r(t.globalExperimentsService.getVersion(e))},share:C}},inited:function(){return t.serviceWorkerService.state!==h.b.Initial},isServiceWorkerStarted:function(){return t.serviceWorkerService.state>0}}},t.\u0275fac=function(e){return new(e||t)(n.wc(c.b),n.wc(g.a),n.wc(h.a),n.wc(w.a),n.wc(S.b),n.wc(j.a),n.wc(O.a),n.wc(u.c),n.wc(k.a),n.wc(T),n.wc(E.a),n.wc(b.a),n.wc("Dialogs"))},t.\u0275prov=n.ic({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),I=function(){function t(t){this.hostService=t,this.hostService.register()}return t.\u0275fac=function(e){return new(e||t)(n.wc(_))},t.\u0275mod=n.kc({type:t}),t.\u0275inj=n.jc({imports:[[i.c]]}),t}()},yA6W:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var n=r("8Y7J"),i=r("LRne"),o=r("PqYM"),c=r("z6cu"),u=r("Cfvw"),s=r("HDdC"),a=r("r0o6"),l=r("5+tZ"),d=r("lJxs"),f=r("vkgz"),p=r("xsd7"),b=r("GHmQ"),h=r("7WdQ"),v=r("6WyQ"),g=r("4cz8"),w=r("bjvk"),S=r("XNiG"),j=r("zx2A"),O=function(){function t(e,r){Object(g.a)(this,t),this.notifier=e,this.source=r}return Object(w.a)(t,[{key:"call",value:function(t,e){return e.subscribe(new k(t,this.notifier,this.source))}}]),t}(),k=function(t){Object(h.a)(r,t);var e=Object(v.a)(r);function r(t,n,i){var o;return Object(g.a)(this,r),(o=e.call(this,t)).notifier=n,o.source=i,o}return Object(w.a)(r,[{key:"error",value:function(t){if(!this.isStopped){var e=this.errors,n=this.retries,i=this.retriesSubscription;if(n)this.errors=void 0,this.retriesSubscription=void 0;else{e=new S.a;try{n=(0,this.notifier)(e)}catch(o){return Object(p.a)(Object(b.a)(r.prototype),"error",this).call(this,o)}i=Object(j.c)(n,new j.a(this))}this._unsubscribeAndRecycle(),this.errors=e,this.retries=n,this.retriesSubscription=i,e.next(t)}}},{key:"_unsubscribe",value:function(){var t=this.errors,e=this.retriesSubscription;t&&(t.unsubscribe(),this.errors=void 0),e&&(e.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0}},{key:"notifyNext",value:function(){var t=this._unsubscribe;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=t,this.source.subscribe(this)}}]),r}(j.b),y=r("CqXF"),m=r("SxV6"),x=r("Jq9r"),D=r("0ZMP"),T=r("1HG1"),E=r("3VjY"),C=r("T42a"),_=function(){function t(t,e,r,n){var u,s=this;this.scriptLoaderService=t,this.projectService=e,this.downloadService=r,this.window=n,this.sdk$=Object(i.a)({}).pipe(Object(l.b)((function(){return s.scriptLoaderService.load("https://connect.soundcloud.com/sdk/sdk-3.3.2.js","soundcloud-sdk")})),Object(d.a)((function(){return s.window.SC})),Object(f.a)((function(t){return s.init(t)})),(u=function(t){return t.pipe(Object(l.b)((function(t,e){return e<5?Object(o.a)(1e3*(2^e)):Object(c.a)(t)})))},function(t){return t.lift(new O(u,t))}))}return t.prototype.init=function(t){var e=x.a.production?window.location.origin:"https://localhost";t.initialize({client_id:x.a.soundcloudClientId,redirect_uri:e+"/public/soundcloud-callback.html"})},t.prototype.call=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return this.sdk$.pipe(Object(l.b)((function(r){return Object(u.a)(r[t].apply(e))})))},t.prototype.connect=function(){return this.sdk$.pipe(Object(l.b)((function(t){return Object(u.a)(t.connect()).pipe(Object(y.a)(t))})),Object(m.a)())},t.prototype.getAudioBlob=function(t){var e=this;return this.projectService.getMixUrlAndHeaders(t.id).pipe(Object(l.b)((function(t){return e.downloadService.downloadBlobWithProgress(t.url,t.headers)})))},t.prototype.upload=function(t,e){return this.sdk$.pipe(Object(l.b)((function(r){return new s.a((function(n){r.upload({file:t,title:e,progress:function(t){n.next({progress:t.loaded/t.total})}}).then((function(t){n.next({progress:1,result:{url:t.permalink_url}}),n.complete()}))}))})))},t.prototype.share=function(t){var e=this;return this.connect().pipe(Object(l.b)((function(){return e.getAudioBlob(t)})),Object(l.b)((function(r){var n=r.blob,o=r.progress,c=e.upload(n,t.title).pipe(Object(d.a)((function(t){return{progress:.5+t.progress/2,result:t.result}})));return Object(a.a)((function(){return!!n}),c,Object(i.a)({progress:o/2}))})))},t.\u0275fac=function(e){return new(e||t)(n.wc(T.a),n.wc(E.a),n.wc(C.a),n.wc(D.a))},t.\u0275prov=n.ic({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);