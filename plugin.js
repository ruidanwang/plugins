Draw.loadPlugin(function(ui) {
  ui.actions.addAction('sayHello', function() {
    alert('你好，这是插件测试！');
  });

  // 添加到“帮助”菜单中
  var menu = ui.menus.get('help');
  var oldFunct = menu.funct;
  menu.funct = function(menu, parent) {
    oldFunct.apply(this, arguments);
    ui.menus.addMenuItem(menu, 'sayHello');
  };
});
