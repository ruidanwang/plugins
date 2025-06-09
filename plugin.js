Draw.loadPlugin(function(ui) {
  ui.actions.addAction('sayHello', function() {
    alert('你好，Draw.io 插件测试成功！');
  });

  ui.menus.get('extras').funct = function(menu, parent) {
    ui.menus.addMenuItem(menu, 'sayHello');
  };
});
