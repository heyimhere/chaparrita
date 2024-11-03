import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as gtag from '../../lib/gtag';

export default function GoogleAnalytics({GA_MEASUREMENT_ID}) {
  const params = useParams();
  const pathName = useLocation();

  useEffect(() => {
    const url = params + pathName.toString();

    gtag.pageview(url);

  }, [params, pathName]);

  return (
    <>
      <script strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/>
      <script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
        });
        `,
        }}
      />
    </>
  )
}
