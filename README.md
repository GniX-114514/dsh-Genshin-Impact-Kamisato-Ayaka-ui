# 白鹭霜华 · 花时来信

一款以《原神》神里绫华为主题的 **DeepSeek Harness（DSH）界面皮肤插件**。

以蓝白为主色，搭配少量淡粉色点缀，将「花时来信」立绘、Q 版侧栏壁纸、蓝蝶与水彩花饰融入日常聊天界面，让工作区与对话拥有轻盈、柔和的视觉风格。

## 特色

- **绫华主题背景**：聊天主区域使用「花时来信」立绘，左侧工作区搭配 Q 版绫华壁纸。
- **蓝白界面配色**：统一侧栏、选项、菜单、文字和输入框的颜色，并跟随 DSH 切换明暗模式。
- **全宽回复卡片**：助手正文铺满可用回复区域，以双层细边框、蓝蝶和水彩花饰装点边角。
- **简洁输入框**：用柔和高光与阴影增加层次，蓝蝶和花饰自然融入边框。
- **保留工作区空间**：不添加侧栏主题面板，工作区和会话列表沿用原有布局。
- **长内容阅读**：代码块和宽表格支持横向滚动，宽表格保持在回复卡片内。
- **本地素材**：运行所需图片随插件分发，无需从第三方素材网站加载。

插件只调整界面外观，不修改模型请求、提示词或回复内容。装饰元素不拦截鼠标操作。

## 预览

以下为 DSH 桌面版的实际使用截图。

### 首页与工作区

![白鹭霜华首页与工作区](docs/images/home.png)

### 对话与回复卡片

![白鹭霜华对话与回复卡片](docs/images/chat.png)

## 安装

### DSH 桌面版

1. 下载并解压插件安装包，将 `ayaka-frost` 文件夹放到固定目录，例如 `C:/Themes/ayaka-frost`。
2. 在 DSH 中打开 **插件 → 添加插件**。
3. 填入插件文件夹的绝对路径。该文件夹内应直接包含 `package.json`。
4. 按提示启用插件，并重启 DSH。

安装前请停用其他界面皮肤，避免多套样式叠加。若使用皮肤管理器，也需要取消其他皮肤的自动启用。

### CLI 启动的 Web 版

在终端中运行，替换为实际路径和使用的 profile：

```powershell
dsh plugin --profile web add 'C:/Themes/ayaka-frost'
```

随后按宿主提示启用插件，并重启对应的 DSH 实例。CLI 的 `web` profile 与桌面版分开管理；桌面版请从应用内安装。

### 更新与停用

更新时，先在 DSH 中移除旧版插件，再替换插件文件夹、重新添加并重启。

在插件列表中停用本插件即可恢复宿主样式。若仍看到其他角色装饰，请检查是否同时启用了另一套主题或独立装饰插件。

## 兼容性

插件声明的宿主版本范围为：

```text
@deepseek-ai/dsh >=0.2.0-rc.2 <0.3.0-0
```

主题面向 DSH 原生界面。第三方发行版、修改聊天渲染方式的插件，以及声明范围之外的宿主版本，可能需要额外适配。

已进行浏览器模拟验证，覆盖明暗模式、窄屏布局、回复卡片、长代码、宽表格滚动、滚动条悬停稳定性和停用清理。浏览器检查不代表所有 DSH 版本均已完成实机验证。

## 本地开发

需要 Node.js。在项目根目录运行：

```powershell
npm run build
```

构建脚本只使用 Node.js 内置模块，无需额外安装构建依赖。它会将样式与运行素材打包到 `lib/client.js`，并检查插件图标是否符合 256 KiB 的大小限制。

修改 `src/` 或相关素材后，请重新构建；通过源码分发插件时，应同时保留对应的 `lib/` 构建产物。

```text
ayaka-frost/
├── assets/              主题图片、装饰素材与插件图标
├── docs/images/         README 使用的实机预览截图
├── lib/                 可直接加载的插件构建产物
├── locale/              插件名称与简介的本地化文件
├── scripts/             构建脚本
├── src/                 客户端逻辑与主题样式
├── cordis.patch.yml     DSH 插件加载配置
├── package.json         包元信息
├── preview.html         首页设计预览
├── preview-chat.html    对话卡片设计预览
├── LICENSE              代码许可证
└── NOTICE               素材来源与权利说明
```

## 问题反馈

反馈显示或交互问题时，请提供 DSH 版本、操作系统、同时启用的界面插件，以及截图或简短录屏。对于表格、代码块等问题，附上可复现的示例内容更便于定位。

## 致谢与许可

插件接口与加载方式参考 [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale)。

本项目为非官方个人主题，与 HoYoverse、miHoYo 和 DeepSeek 无隶属关系。

- **软件代码**：采用 [MIT 许可证](LICENSE)。
- **图片与角色素材**：不属于 MIT 授权范围，权利归相应权利人所有；具体说明见 [NOTICE](NOTICE)。部分图片的作者与再分发授权尚待核实，公开分发相关素材前需确认相应许可。


# Ayaka Frost · Spring Letter

A **Kamisato Ayaka theme plugin for DeepSeek Harness (DSH)**, inspired by *Genshin Impact*.

Featuring a blue-and-white palette with subtle pink accents, this theme combines Ayaka’s Springbloom Missive artwork, a chibi sidebar background, blue butterflies, and watercolor flowers for a soft, elegant chat interface.

## Features

- **Ayaka backgrounds** — Springbloom Missive artwork in the main area and a chibi Ayaka wallpaper in the sidebar.
- **Coordinated colors** — Themed text, menus, controls, and input surfaces, with light and dark modes following DSH.
- **Full-width reply cards** — Assistant replies fill the available message area, framed by fine borders and subtle floral details.
- **Decorated input box** — Soft highlights, gentle shadows, blue butterflies, and watercolor flowers.
- **Compact sidebar** — No additional theme settings panel taking space away from workspaces and conversations.
- **Readable long content** — Code blocks and wide tables support horizontal scrolling. Wide tables stay inside reply cards.
- **Bundled assets** — Runtime artwork is included with the plugin and does not require third-party image servers.

This plugin changes visual presentation only. It does not modify model requests, prompts, or response content. Decorative elements do not intercept pointer interactions.

## Screenshots

The following screenshots show the theme running in the DSH desktop application.

### Home and Workspace

![Ayaka Frost home and workspace](docs/images/home.png)

### Conversation and Reply Cards

![Ayaka Frost conversation and reply cards](docs/images/chat.png)

## Installation

### DSH Desktop

1. Download and extract the plugin archive.
2. Move the `ayaka-frost` folder to a permanent location, such as `C:/Themes/ayaka-frost`.
3. Open **Plugins → Add Plugin** in DSH.
4. Enter the absolute path to the plugin folder. This folder must directly contain `package.json`.
5. Enable the plugin as prompted, then restart DSH.

Disable other interface themes before enabling this plugin to avoid overlapping styles. If you use a skin manager, also disable automatic activation of other themes.

### CLI Web Profile

Run the following command, replacing the path and profile name as needed:

```powershell
dsh plugin --profile web add 'C:/Themes/ayaka-frost'
```

Follow the host’s instructions to enable the plugin, then restart the corresponding DSH instance.

CLI profiles and the desktop application are managed separately. Install the desktop plugin through the application’s plugin interface.

### Updating and Disabling

To update, remove the previous plugin entry in DSH, replace the plugin folder, add it again, and restart.

Disable the plugin from the plugin list to restore the host’s appearance. If decorations from another character remain visible, check whether another theme or decoration plugin is still enabled.

## Compatibility

The declared host version range is:

```text
@deepseek-ai/dsh >=0.2.0-rc.2 <0.3.0-0
```

The theme targets the native DSH interface. Third-party distributions, plugins that replace chat rendering, and host versions outside this range may require additional adaptation.

Browser-based checks cover light and dark modes, narrow layouts, reply cards, long code blocks, wide-table scrolling, scrollbar hover stability, and cleanup when disabled. These checks do not guarantee compatibility with every DSH release.

## Development

Node.js is required. Run the following command from the project root:

```powershell
npm run build
```

The build script uses only Node.js built-in modules, so no additional build dependencies are required. It bundles styles and runtime artwork into `lib/client.js` and checks that the plugin icon stays within the 256 KiB size limit.

Rebuild after modifying `src/` or runtime assets. Include the corresponding `lib/` output when distributing the plugin from source.

```text
ayaka-frost/
├── assets/              Artwork, decorations, and plugin icon
├── docs/images/         Screenshots used in the README
├── lib/                 Ready-to-load plugin output
├── locale/              Localized plugin metadata
├── scripts/             Build script
├── src/                 Client logic and theme styles
├── cordis.patch.yml     DSH plugin loading configuration
├── package.json         Package metadata
├── README.md            Chinese project introduction
├── README.en.md         English project introduction
├── LICENSE              Software license
└── NOTICE               Artwork attribution and rights information
```

## Reporting Issues

When reporting a visual or interaction issue, please include:

- Your DSH version and operating system.
- Other active interface plugins.
- A screenshot or short recording.
- Reproducible sample content for table or code-block issues.

## Credits and License

The plugin interface and loading approach reference [dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale).

This is an unofficial personal theme project and is not affiliated with HoYoverse, miHoYo, or DeepSeek.

- **Software code:** Licensed under the [MIT License](LICENSE).
- **Artwork and character assets:** Excluded from the MIT license. Rights remain with their respective owners. See [NOTICE](NOTICE) for details. Attribution and redistribution permissions for some images have not yet been verified; confirm the applicable permissions before redistributing those assets.
