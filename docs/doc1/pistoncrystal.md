# PistonCrystal - 活塞水晶

**模块类型**: 战斗功能  
**功能简介**: 使用活塞推动水晶进行攻击（活塞水晶）

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| TargetRange | 浮点数 (1-6) | 目标距离 | 6.0 |
| range | 浮点数 (1-6) | 放置距离 | 4.5 |
| delay-ms | 整数 (0-500) | 放置延迟 | 50 |
| breakDelay-ms | 整数 (0-500) | 破坏延迟 | 300 |
| MinDamage | 浮点数 (1-36) | 最小对敌伤害 | 4.0 |
| MaxSelfDmg | 浮点数 (1-36) | 最大自伤 | 12 |
| UsingPause | 布尔 | 使用暂停 | true |
| OnlyMain | 布尔 | 仅主手 | true |
| NoSuicide | 布尔 | 防自杀 | true |
| rotate | 布尔 | 转头 | true |
| InventorySwap | 布尔 | 背包鬼手 | true |
| Mine | 布尔 | 自动挖掘阻挡方块 | true |
| YawDeceive | 布尔 | 朝向欺骗（绕过反作弊） | true |
| redStone | 枚举 | 红石模式<br>- Torch: 火把<br>- Block: 红石块 | Block |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| render | 布尔 | 渲染开关 | true |
| crystal Color | 颜色 | 水晶颜色 | 红色 |
| piston Color | 颜色 | 活塞颜色 | 白色 |
| redstone Color | 颜色 | 红石颜色 | 橙色 |

---

## 使用方法

1. 确保背包中有活塞、红石、水晶
2. 靠近目标玩家，开启模块
3. 模块会自动放置活塞-红石-水晶组合
4. 活塞推动水晶到目标位置并引爆
