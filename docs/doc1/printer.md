# Printer - 投影打印机

**模块类型**: 建筑功能  
**功能简介**: 自动根据Litematica投影放置方块（需要安装Litematica）

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| Rotate | 布尔 | 转头 | true |
| PrintingRange | 整数 (1-6) | 打印距离 | 4 |
| InventorySwap | 布尔 | 背包鬼手 | true |
| SafeWalk | 布尔 | 安全行走（防止掉落） | true |
| IgnoreSneak | 布尔 | 忽略潜行 | true |
| ShiftTime | 整数 (0-1000) | 潜行时间 | 100 |
| SneakSpeed | 整数 (0-20) | 潜行速度 | 0 |

### 过滤组 (Filter)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| ListMode | 枚举 | 方块过滤模式<br>- Whitelist: 白名单<br>- Blacklist: 黑名单 | Blacklist |
| BlackList | 方块列表 | 黑名单方块 | 空 |
| WhiteList | 方块列表 | 白名单方块 | 空 |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| ShapeMode | 枚举 | 渲染模式 | Both |
| Line Color | 颜色 | 边框颜色 | 白色 |
| Side Color | 颜色 | 填充颜色 | 白色 |
| DeBug | 布尔 | 调试模式 | false |

---

## 使用方法

1. 安装Litematica模组并加载投影文件
2. 站在投影范围内，开启模块
3. 模块会自动根据投影放置对应方块
4. 背包中需要有投影所需的方块
