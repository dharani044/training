window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);(function(){function retrieve(n){var m,k='kx'+n;if(window.localStorage){return window.localStorage[k]||"";}else if(navigator.cookieEnabled){m=document.cookie.match(k+'=([^;]*)');return (m&&unescape(m[1]))||"";}else{return '';}}Krux.user=retrieve('user');Krux.segments=retrieve('segs')&&retrieve('segs').split(',')||[];})();