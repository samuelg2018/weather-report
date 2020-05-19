(this["webpackJsonpweather-report"]=this["webpackJsonpweather-report"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(4),c=n.n(r),o=(n(19),n(20),n(1)),l=n(2),u=n.n(l),d=n(5),s=n(6),m=n(7),v=n(13),h=n(12),p=n(8),f=n(11),y=function(){return i.a.createElement("div",null,i.a.createElement("h1",{id:"title"},"Weather Report"),i.a.createElement("p",{id:"subtitle"},"Find weather conditions on any city."))},E=function(e){return i.a.createElement("form",{onSubmit:e.getWeather},i.a.createElement("input",{type:"text",name:"city",placeholder:"City...",className:"form-control"}),i.a.createElement("input",{type:"text",name:"country",placeholder:"Country...",className:"form-control"}),i.a.createElement("select",{className:"form-control",id:"unit_list"},i.a.createElement("option",{value:"metric"},"Celcius"),i.a.createElement("option",{selected:"selected",value:"imperial"},"Fahrenheit"),i.a.createElement("option",{value:"kelvin"},"Kelvin")),i.a.createElement("button",null,"Get Weather"))},w=function(e){return i.a.createElement("div",null,e.city&&e.country&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Location: "),i.a.createElement("div",{id:"weatherInfo"}," ",e.city,", ",e.country)),e.description&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Condition:"),i.a.createElement("div",null,e.description)),e.temperature&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Temperature: "),i.a.createElement("div",{id:"weatherInfo"}," ",e.temperature,"imperial"==e.unit?" \xb0F":"metric"===e.unit?" \xb0C":"kelvin"==e.unit?" \xb0K":null," ")),e.feelsLike&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Feels like: "),i.a.createElement("div",{id:"weatherInfo"}," ",e.feelsLike,"imperial"==e.unit?" \xb0F":"metric"===e.unit?" \xb0C":"kelvin"==e.unit?" \xb0K":null," ")),e.humidity&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Humidity: "),i.a.createElement("div",{id:"weatherInfo"}," ",e.humidity," %")),e.wind&&i.a.createElement("div",{className:"outputContainer"},i.a.createElement("div",{id:"weatherTitle"},"Wind Speed: "),i.a.createElement("div",{id:"weatherInfo"}," ",e.wind,"imperial"==e.unit?" miles/hour":"metric"===e.unit||"kelvin"==e.unit?" meter/sec":null," ")),e.error&&i.a.createElement("p",null,e.error))};function b(){var e=Object(p.a)(['\n        height: 100vh; \n        background: url("',"/img/",'.png");\n        background-position: center;\n        background-repeat: no-repeat;\n        background-attachment: fixed;\n        background-size: cover;\n        display: flex;\n        justify-content: safe center;\n        align-items: safe center;\n    ']);return b=function(){return e},e}var g=function(e){var t="Clear";null!=e.condition&&(t="Haze"==e.condition||"Fog"==e.condition?"Mist":"Ash"==e.condition||"Dust"==e.condition?"Smoke":"Squall"==e.condition||"Tornado"==e.condition?"Rain":e.condition);var n=f.a.div(b(),"/project-name",t);return i.a.createElement(n,null,i.a.createElement("div",{className:"main container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"mx-auto text-center mt-5"},i.a.createElement(y,null))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"mx-auto text-center mt-3"},i.a.createElement(E,{getWeather:e.getWeather}))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"mx-auto mt-4"},i.a.createElement(w,{temperature:e.temperature,city:e.city,country:e.country,humidity:e.humidity,description:e.description,feelsLike:e.feelsLike,wind:e.wind,unit:e.unit,error:e.error})))))},k="ee3bea37b5ccfc98b44c8fd612ca6d84",N=function(e){Object(v.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,condition:void 0,feelsLike:void 0,wind:void 0,unit:void 0,error:void 0},e.getWeather=function(){var t=Object(d.a)(u.a.mark((function t(n){var a,r,c,o,l;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),a=n.target.elements.city.value,r=n.target.elements.country.value,c=n.target.elements.unit_list.value,t.next=6,fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(a,",").concat(r,"&units=").concat(c,"&APPID=").concat(k));case 6:return o=t.sent,t.next=9,o.json();case 9:l=t.sent,a?(e.setState({temperature:l.main.temp,city:l.name,country:l.sys.country,humidity:l.main.humidity,description:l.weather[0].description,condition:l.weather[0].main,feelsLike:l.main.feels_like,wind:l.wind.speed,unit:c,error:""}),l.weather[0].description):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,condition:void 0,feelsLike:void 0,wind:void 0,unit:void 0,error:i.a.createElement("div",{className:"alert alert-danger mt-3"},"Please enter data before clicking the button.")});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"render",value:function(){var e;return i.a.createElement("div",null,i.a.createElement(g,(e={description:this.state.description,temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity},Object(o.a)(e,"description",this.state.description),Object(o.a)(e,"condition",this.state.condition),Object(o.a)(e,"feelsLike",this.state.feelsLike),Object(o.a)(e,"wind",this.state.wind),Object(o.a)(e,"unit",this.state.unit),Object(o.a)(e,"error",this.state.error),Object(o.a)(e,"getWeather",this.getWeather),e)))}}]),n}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.4f32cc71.chunk.js.map