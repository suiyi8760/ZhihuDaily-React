(function(window){var svgSprite='<svg><symbol id="icon-back" viewBox="0 0 1000 1000"><path d="M141.8576 481.9912 516.3211 856.4203c0 0 37.4352-74.6304 37.4352-76.0564 0-0.1809-299.5572-298.5746-299.5572-298.3637 0 0.7155 299.5572-299.6448 299.5572-299.5609 0 0.7685-37.4352-74.8862-37.4352-74.8862L141.8576 481.9912zM291.8981 444.5676h598.8485334841706v74.87523459094734h-598.8485334841706l-37.699-37.4436L291.8981 444.5676z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M196.535165 234.270605l635.021871 0c19.48375 0 35.279504-15.793708 35.279504-35.279504 0-19.485797-15.795754-35.278481-35.279504-35.278481L196.535165 163.712619c-19.48375 0-35.278481 15.793708-35.278481 35.278481C161.256684 218.47792 177.052438 234.270605 196.535165 234.270605zM831.557036 445.944562 196.535165 445.944562c-19.48375 0-35.278481 15.795754-35.278481 35.279504 0 19.48375 15.795754 35.276435 35.278481 35.276435l635.021871 0c19.48375 0 35.279504-15.793708 35.279504-35.276435C866.836541 461.740316 851.040786 445.944562 831.557036 445.944562zM831.557036 704.659905 196.535165 704.659905c-19.48375 0-35.278481 15.793708-35.278481 35.276435s15.795754 35.278481 35.278481 35.278481l635.021871 0c19.48375 0 35.279504-15.795754 35.279504-35.278481S851.040786 704.659905 831.557036 704.659905z"  ></path></symbol><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M983.794811 516.520967l-162.581865-162.582889L821.212946 100.749612 698.437691 100.749612l0 130.415258L525.37717 58.103326c-3.597945-3.587712-8.453533-5.613858-13.519921-5.613858-5.067412 0-9.942443 2.026146-13.508665 5.613858L40.213375 516.216022c-5.472642 5.494131-7.115048 13.703093-4.14439 20.859074 2.949168 7.133468 9.921977 11.795651 17.664312 11.795651L181.128779 548.870746l0 403.526473c0 10.558473 8.553817 19.114336 19.113313 19.114336l183.298699 0L383.540791 713.237257l256.926604 0 0 258.274298 183.745884 0c10.559497 0 19.11229-8.55484 19.11229-19.114336L843.325569 639.273708l0.264013-90.118484 126.687354 0c7.721869 0 14.693654-4.663206 17.674545-11.797697C990.88837 530.202571 989.249033 521.974166 983.794811 516.520967"  ></path></symbol><symbol id="icon-more" viewBox="0 0 1024 1024"><path d="M512 288.24182c49.231261 0 89.503477-40.274262 89.503477-89.505523s-40.272215-89.503477-89.503477-89.503477c-49.229215 0-89.503477 40.272215-89.503477 89.503477S462.769762 288.24182 512 288.24182z"  ></path><path d="M512 735.760227c-49.229215 0-89.503477 40.272215-89.503477 89.503477 0 49.231261 40.273239 89.503477 89.503477 89.503477 49.231261 0 89.503477-40.272215 89.503477-89.503477C601.503477 776.032442 561.231261 735.760227 512 735.760227z"  ></path><path d="M512 422.497547c-49.229215 0-89.503477 40.271192-89.503477 89.503477s40.273239 89.503477 89.503477 89.503477c49.231261 0 89.503477-40.272215 89.503477-89.503477S561.231261 422.497547 512 422.497547z"  ></path></symbol><symbol id="icon-download" viewBox="0 0 1024 1024"><path d="M853.728 393.696h-189.312V109.728h-283.968v283.968H191.136l331.296 331.296 331.296-331.296zM191.136 819.616v94.656h662.592v-94.656H191.136z"  ></path></symbol><symbol id="icon-share" viewBox="0 0 1024 1024"><path d="M768.8 703.6c-35.6 0-68 14.8-91.2 38.4l-309.2-171.6c9.2-17.6 14.6-37.2 14.6-58.4 0-12.6-2.4-24.4-5.6-36L682 286.8c22.8 20.4 52.4 33.2 85.2 33.2 70.6 0 128-57.4 128-128s-57.4-128-128-128-128 57.4-128 128c0 14.6 3 28.4 7.4 41.4l-301.8 187.4c-23-22.8-54.8-37-89.8-37-70.6 0-128 57.4-128 128s57.4 128 128 128c25.6 0 49.6-7.8 69.4-20.8l321.2 178.4c-3 11-5.2 22.2-5.2 34 0 70.6 57.4 128 128 128s128-57.4 128-128-57.2-127.8-127.6-127.8z"  ></path></symbol><symbol id="icon-comment" viewBox="0 0 1024 1024"><path d="M957.833021 154.177452c0-49.13814-39.757492-89.337701-88.895633-89.337701H154.203034c-49.13814 0-89.341794 40.199561-89.341794 89.337701v536.051789c0 49.13814 40.203654 89.345887 89.341794 89.345887h625.393583L958.279183 958.258717l-0.446162-804.081265zM779.595594 600.886423H243.544829v-89.337701h536.051788v89.337701h-0.001023z m0-134.013203H243.544829V377.531426h536.051788v89.341794h-0.001023z m0-134.008087H243.544829v-89.341794h536.051788v89.341794h-0.001023z" fill="" ></path></symbol><symbol id="icon-remind" viewBox="0 0 1024 1024"><path d="M512.3 961.6c62 0 114.1-42.5 129-99.9h-258c14.8 57.5 67 99.9 129 99.9z m299.8-303.2V427s10.7-163-171.2-215.4c3-10.4 4.6-21.3 4.6-32.7 0-64.4-52.2-116.6-116.6-116.6-64.4 0-116.6 52.2-116.6 116.6 0 8.8 1 17.4 2.8 25.7C202.8 247.3 212.5 427 212.5 427v231.4c-103 45.7-99.9 176-99.9 170.2H379v-0.1h533c7.8-108.5-99.9-170.1-99.9-170.1z" fill="#5C5C5C" ></path></symbol><symbol id="icon-multi-pics" viewBox="0 0 1024 1024"><path d="M768 182.848H109.696c-40.384 0-73.152 32.768-73.152 73.152v658.304c0 40.384 32.768 73.152 73.152 73.152H768c40.384 0 73.152-32.768 73.152-73.152V256c0-40.384-32.768-73.152-73.152-73.152z m0 694.848c0 20.224-16.384 36.608-36.544 36.608H146.304c-20.224 0-36.544-16.384-36.544-36.608V292.544c-0.064-20.16 16.32-36.544 36.544-36.544h585.152c20.16 0 36.544 16.384 36.544 36.544v585.152zM950.848 36.544H219.456c-20.224 0-36.608 16.384-36.608 36.608s16.384 36.544 36.608 36.544H914.24v694.848c0 20.224 16.384 36.544 36.608 36.544 20.16 0 36.544-16.32 36.544-36.544V73.152c0.064-20.16-16.32-36.608-36.544-36.608z"  ></path></symbol><symbol id="icon-collect" viewBox="0 0 1024 1024"><path d="M505.3 50.6l114.1 351h369.1l-298.6 217 114 351-298.6-216.9-298.6 216.9 114.1-351-298.6-217h369.1z"  ></path></symbol><symbol id="icon-fabulous" viewBox="0 0 1024 1024"><path d="M79.727 320.013h175.487v584.955H79.727V320.013zM890.113 854.836c-5.015 27.882-31.11 50.132-58.364 50.132H362.943c-27.254 0-49.348-22.25-49.348-50.132V388.09c0-37.288 26.19-68.077 58.496-68.077h555.706c32.306 0 52.958 30.789 46.252 68.077l-83.936 466.746z" fill="" ></path><path d="M454.964 419.065c-28.762 37.446-72.847 51.848-98.468 32.169l-23.195-17.816c-25.62-19.679-23.074-65.988 5.688-103.433l156.233-203.403c28.762-37.446 72.847-51.848 98.468-32.169l23.195 17.816c25.62 19.68 23.074 65.988-5.688 103.434L454.964 419.065z" fill="" ></path></symbol><symbol id="icon-comment-pen" viewBox="0 0 1024 1024"><path d="M949.570847 212.673727l-41.801035 41.517579L768.565377 115.843378l41.801035-41.459251c15.340383-15.283078 39.522132-16.084327 53.892421-1.768273l87.024006 86.454024C965.710432 173.382862 964.91123 197.393719 949.570847 212.673727L949.570847 212.673727zM580.373227 579.594491 441.169815 441.244516l306.238706-304.299541 139.205459 138.348951L580.373227 579.594491 580.373227 579.594491zM560.984644 598.869486l-194.863083 55.314817 55.659671-193.666838L560.984644 598.869486 560.984644 598.869486zM236.551554 178.118724c-48.13223 0-87.081311 38.949081-87.081311 87.024006l0 522.372232c0 48.062646 38.962384 87.026052 87.026052 87.026052l522.485819 0c48.063669 0 87.028099-38.963407 87.028099-87.028099L846.010213 439.248046l87.079264-87.028099 0 464.321094c0 80.124875-64.954361 145.078213-145.078213 145.078213L207.468169 961.619254c-80.124875 0-145.078213-64.954361-145.078213-145.078213L62.389956 236.114602c0-80.124875 64.954361-145.078213 145.078213-145.078213l464.435705 0-87.083357 87.083357L236.551554 178.119747 236.551554 178.118724z"  ></path></symbol><symbol id="icon-sofa" viewBox="0 0 1024 1024"><path d="M241.40288 574.73536c4.532224-100.75648-41.708544-138.85952-102.218752-159.377408C102.56384 79.98464 710.279168 84.296704 838.633472 242.7136c30.831616 38.06208 48.279552 107.389952 48.410624 172.644352-60.94336 19.961856-111.186944 53.141504-102.20544 159.377408C784.83968 574.73536 521.464832 438.924288 241.40288 574.73536z"  ></path><path d="M214.244352 614.576128c40.603648-176.791552-137.980928-215.12192-150.649856-73.034752-9.3184 104.409088 44.407808 225.890304 75.314176 278.893568 5.198848 1.634304 10.2656 3.392512 15.622144 4.847616l18.993152 0 0 33.585152c0 15.1552 16.8448 27.460608 37.609472 27.460608 20.779008 0 37.629952-12.306432 37.629952-27.460608l0-33.585152 527.059968 0 0 33.585152c0 15.1552 16.857088 27.460608 37.643264 27.460608 20.793344 0 37.63712-12.306432 37.63712-27.460608l0-33.585152 16.982016 0c6.832128-3.090432 11.961344-8.281088 18.676736-11.495424 32.410624-70.453248 93.861888-188.025856 69.986304-298.821632-16.1024-74.374144-122.523648-89.926656-145.301504 0-10.080256 39.88992 15.753216 63.490048-10.76736 106.256384C800.68096 621.222912 532.547584 461.048832 214.244352 614.576128z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
