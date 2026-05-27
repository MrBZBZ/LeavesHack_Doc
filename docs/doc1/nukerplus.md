# NukerPlus - 范围挖掘

**模块类型**: 辅助功能  
**功能简介**: 大范围自动挖掘方块，绕过3c3u反作弊

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| shape | 枚举 | 破坏形状<br>- Sphere: 球形<br>- Cube: 立方体<br>- UniformCube: 均匀立方体 | Sphere |
| mode | 枚举 | 破坏模式<br>- All: 全部挖掘<br>- Flatten: 平整模式<br>- Smash: 粉碎模式 | Flatten |
| range | 浮点数 | 破坏距离 | 4 |
| up/down/left/right/forward/back | 整数 | Cube模式各方向距离 | 1 |
| delay | 整数 (0-100) | 破坏延迟 | 0 |
| ClickDelay | 整数 (0-100) | 点击延迟 | 8 |
| max-blocks-per-tick | 整数 (1-6) | 每tick最大挖掘数量 | 1 |
| sort-mode | 枚举 | 排序模式<br>- None: 无<br>- Closest: 最近优先<br>- Furthest: 最远优先<br>- TopDown: 从上到下 | Closest |
| swing-hand | 布尔 | 挖掘时挥手 | true |
| packet-mine | 布尔 | 发包挖掘模式 | true |
| rotate | 布尔 | 挖掘时转头 | true |

### 过滤组 (Filter)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| list-mode | 枚举 | 方块过滤模式<br>- Whitelist: 白名单<br>- Blacklist: 黑名单 | Blacklist |
| blacklist | 方块列表 | 黑名单方块 | 空 |
| whitelist | 方块列表 | 白名单方块 | 空 |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| render | 布尔 | 渲染开关 | true |
| ShapeMode | 枚举 | 渲染模式 | Both |
| Line Color | 颜色 | 边框颜色 | 白色 |
| Side Color | 颜色 | 填充颜色 | 白色 |

---

## 使用方法

1. 选择破坏形状和模式
2. 设置范围（Sphere模式用 `range`，Cube模式用方向参数）
3. 配置白名单/黑名单过滤方块
4. 开启模块后自动挖掘范围内符合条件的方块
