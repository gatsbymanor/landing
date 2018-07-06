const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {

  if (process.env.NODE_ENV === `production`) {
    return setHeadComponents([
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
    ])
  }
}
