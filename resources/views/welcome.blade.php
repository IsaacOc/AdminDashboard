<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-200 scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-500 dark:scrollbar-thumb-gray-100">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="icon" href="{{ asset('favicon.png') }}">
    <title><%= htmlWebpackPlugin.options.title %></title>

    <meta name="description" content="Admin One - free Vue.js 3 Tailwind dashboard">

    <meta property="og:url" content="https://justboil.github.io/admin-one-vue-tailwind/">
    <meta property="og:site_name" content="JustBoil.me">
    <meta property="og:title" content="Admin One Vue 3">
    <meta property="og:description" content="Admin One - free Vue.js 3 Tailwind dashboard">
    <meta property="og:image" content="https://justboil.me/images/one-vue3-tailwind/repository-preview-hi-res.png">
    <meta property="og:image:type" content="image/png">
    <meta property="og:image:width" content="1920">
    <meta property="og:image:height" content="960">

    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:title" content="Admin One Vue 3">
    <meta property="twitter:description" content="Admin One - free Vue.js 3 Tailwind dashboard">
    <meta property="twitter:image:src" content="https://justboil.me/images/one-vue3-tailwind/repository-preview-hi-res.png">
    <meta property="twitter:image:width" content="1920">
    <meta property="twitter:image:height" content="960">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-130795909-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-130795909-1');
    </script>
        <!-- Styles -->
        <link rel="stylesheet" href="{{ asset('themes/rouge/css/main.css') }}">

        <!-- Scripts -->
        <script src="{{ asset('themes/rouge/js/app.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/error.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/forms.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/login.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/profile.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/responsive.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/tables.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/ui.js') }}" defer></script>
        <script src="{{ asset('themes/rouge/js/modules.js') }}" defer></script>
    </head>
    <body class="bg-gray-50 text-base dark:bg-gray-800 dark:text-gray-100">
    <noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '658339141622648');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=658339141622648&ev=PageView&noscript=1"/></noscript>
    <!-- built files will be auto injected -->
  </body>
</html>
