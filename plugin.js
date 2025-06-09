Draw.loadPlugin(function(ui) {
  const graph = ui.editor.graph;

  // 添加 AI助手动作
  ui.actions.addAction('aiHelper', async function() {
    const prompt = prompt("请输入你的操作命令（如：插入一个红色圆形，写‘开始’）");

    if (!prompt) return;

    const reply = await fetch("https://your-api.com/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    }).then(res => res.json());

    const cmd = reply.command;

    if (cmd.action === "insert") {
      graph.getModel().beginUpdate();
      try {
        const parent = graph.getDefaultParent();
        const style = `${cmd.shape};fillColor=${cmd.style.fillColor}`;
        graph.insertVertex(parent, null, cmd.label, cmd.position.x, cmd.position.y, cmd.size.width, cmd.size.height, style);
      } finally {
        graph.getModel().endUpdate();
      }
    } else {
      alert("未识别的操作");
    }
  });

  // 添加菜单入口
  ui.menus.get('extras').funct = function(menu, parent) {
    ui.menus.addMenuItem(menu, 'aiHelper');
  };
});
