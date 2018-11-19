const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {

  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
    <script
      key={`gatsby-plugin-google-optimize-prevent-flicker`}
      dangerouslySetInnerHTML={{
        __html: `
        (function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
        h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
        (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
        })(window,document.documentElement,'async-hide','dataLayer',4000,
        {'GTM-NRBXFV3':true});
        `,
      }}
    />,
    <script
       key={`gatsby-plugin-inspectlet`}
       dangerouslySetInnerHTML={{
         __html: `
           (function() {
            window.__insp = window.__insp || [];
            __insp.push(['wid', 666304966]);
            var ldinsp = function(){
            if(typeof window.__inspld != "undefined") return; window.__inspld = 1; var insp = document.createElement('script'); insp.type = 'text/javascript'; insp.async = true; insp.id = "inspsync"; insp.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://cdn.inspectlet.com/inspectlet.js?wid=666304966&r=' + Math.floor(new Date().getTime()/3600000); var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(insp, x); };
            setTimeout(ldinsp, 0);
            })();
         `,
       }}
     />,
     <script
       key={`gatsby-plugin-hotjar`}
       dangerouslySetInnerHTML={{
         __html: `
            (function(h,o,t,j,a,r){
               h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
               h._hjSettings={hjid:940134,hjsv:6};
               a=o.getElementsByTagName('head')[0];
               r=o.createElement('script');r.async=1;
               r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
               a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
         `,
       }}
     />,
     <script
       key={`gatsby-plugin-fullstory`}
       dangerouslySetInnerHTML={{
         __html: `
            window['_fs_debug'] = false;
            window['_fs_host'] = 'fullstory.com';
            window['_fs_org'] = 'D5EA2';
            window['_fs_namespace'] = 'FS';
            (function(m,n,e,t,l,o,g,y){
               if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
               g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
               o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
               y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
               g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
               g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
               g.consent=function(a){g("consent",!arguments.length||a)};
               g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
               g.clearUserCookie=function(){};
            })(window,document,window['_fs_namespace'],'script','user');
         `,
       }}
     />,
    ])
  }
}
