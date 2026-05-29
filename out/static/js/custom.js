// 设置默认主题为 dark
(function(){
    var theme = localStorage.getItem("theme");
    if(!theme || theme === "light"){
        localStorage.setItem("theme", "dark");
    }
})();