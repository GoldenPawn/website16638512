document.getElementById('themeChange').addEventListener('click', function () {
    let purpleThemeEnabled = document.body.classList.toggle('purple-theme');
    localStorage.setItem('purple-theme-enabled', purpleThemeEnabled);
});

if(JSON.parse(localStorage.getItem('purple-theme-enabled'))) {
    document.body.classList.add('purple-theme');
}