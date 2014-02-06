/*jshint browser:true, yui:true */
YUI.add("plugin-lazy-images", function(Y) {
    "use strict";
    
    var plugins = Y.namespace("Plugins"),
        LazyImages;
    
    LazyImages = Y.Base.create("lazyImages", Y.Plugin.Base, [], {
        // Y.Base lifecycle fns
        initializer : function() {
            var host = this.get("host");
            
            host.plug(Y.Plugin.ScrollInfo, {
                scrollMargin : this.get("distance")
            });
            
            this._handles = [
                host.scrollInfo.after([ "scrollDown", "scrollUp" ], this.loadVisible, this)
            ];

            this._host = host;
        },
        
        destructor : function() {
            this.get("host").unplug(Y.Plugin.ScrollInfo);
            
            new Y.EventTarget(this._handles).detach();
            
            this._handles = this._host = null;
        },
        
        // Public API
        loadVisible : function() {
            this._host.scrollInfo.getOnscreenNodes("[data-src]").each(function(img) {
                img.set("src", img.getData("src"));
                
                img.removeAttribute("data-src");
            });
        }
    }, {
        NS : "lazyimg",
        
        ATTRS : {
            distance : {
                value : 100
            }
        }
    });
    
    plugins.LazyImages = LazyImages;
    
}, "@VERSION@", {
    requires : [
        // YUI
        "base-build",
        "plugin",
        "node-scroll-info"
    ]
});
