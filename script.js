// GlobalKit 官网脚本：从 version.json 动态填充版本信息
fetch('version.json')
  .then(function (r) { return r.json(); })
  .then(function (v) {
    var name = 'v' + v.latestVersionName;
    var ver = document.getElementById('hero-ver');
    var stat = document.getElementById('stat-ver');
    if (ver) ver.textContent = name;
    if (stat) stat.textContent = name;
  })
  .catch(function () { /* 保持 HTML 中的默认版本号 */ });