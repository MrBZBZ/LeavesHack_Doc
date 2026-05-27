# PacketMine - 发包挖掘

**模块类型**: 辅助功能  
**功能简介**: 使用数据包挖掘，支持秒挖和双挖

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| UsingPause | 布尔 | 使用物品时暂停 | true |
| OnlyMain | 布尔 | 仅检查主手 | true |
| AutoSwitch | 枚举 | 自动切换镐子<br>- Normal: 普通<br>- Silent: 静默<br>- None: 不切换 | Silent |
| Range | 整数 (0-12) | 操作距离 | 6 |
| TryBreakTime | 整数 (0-10) | 最大尝试次数 | 6 |
| FarCancel | 布尔 | 过远取消挖掘 | true |
| SwingHand | 布尔 | 挥手 | true |

### 秒挖组 (Instant)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| InstantMine | 布尔 | 秒挖模式（瞬间完成） | false |
| InstantDelay | 整数 (0-1000) | 秒挖延迟 | 10 |

### 绕过组 (Bypass)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| FastBypass | 布尔 | 快速挖掘绕过 | true |
| DoubleBreak | 布尔 | 双挖模式（同时挖两个方块） | false |
| CheckGround | 布尔 | 检查是否着地 | true |
| BypassGround | 布尔 | 滞空挖掘绕过 | false |
| SwitchDamage | 整数 (0-100) | 切镐进度阈值 | 95 |
| SwitchTime | 整数 (0-1000) | 持镐时间 | 100 |
| MineDelay | 整数 (0-1000) | 挖掘选择延迟 | 300 |
| PacketDelay | 整数 (0-1000) | 绕过包发送延迟 | 0 |
| Damage | 浮点数 (0-2) | 总挖掘进度 | 0.8 |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| Animation Exponent | 浮点数 (0-10) | 动画指数 | 3 |
| RenderProgress | 布尔 | 渲染挖掘进度 | true |
| Primary Color | 颜色 | 主挖颜色 | 绿色 |
| Secondary Color | 颜色 | 副挖颜色 | 黄色 |
| ShapeMode | 枚举 | 渲染模式 | Both |

---

## 使用方法

1. 对准要挖掘的方块，模块自动开始发包挖掘
2. 开启 `InstantMine` 实现秒挖（部分服务器可用）
3. 开启 `DoubleBreak` 可同时挖掘两个方块
4. `Damage` 控制挖掘进度，设为1为瞬间完成
