# AutoAnchor - 自动重生锚

**模块类型**: 战斗功能  
**功能简介**: 自动放置和引爆重生锚攻击敌人

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| TargetRange | 浮点数 (1-20) | 目标搜索距离 | 12.0 |
| range | 浮点数 (1-6) | 操作距离 | 4.5 |
| delay-ms | 整数 (0-500) | 放置延迟（毫秒） | 50 |
| MinDamage | 浮点数 (1-36) | 对敌人最小伤害 | 4.0 |
| MaxSelfDmg | 浮点数 (1-36) | 自身最大承受伤害 | 12 |
| UsingPause | 布尔 | 使用物品时暂停 | true |
| OnlyMain | 布尔 | 仅主手操作 | true |
| PreferHead | 布尔 | 优先在目标头部位置放置 | true |
| PlaceHelper | 布尔 | 放置辅助方块 | true |
| NoSuicide | 布尔 | 防自杀，伤害过高时停止 | true |
| rotate | 布尔 | 操作时转头 | true |
| InventorySwap | 布尔 | 背包鬼手切换物品 | true |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| RenderDmg | 布尔 | 渲染伤害数值 | true |
| DamageColor | 颜色 | 伤害文本颜色 | 白色 |
| Shape Mode | 枚举 | 方块渲染模式 | Both |
| Line Color | 颜色 | 边框颜色 | 白色 |
| Side Color | 颜色 | 填充颜色 | 透明 |
| RenderSpeed | 浮点数 (0-1) | 渲染动画速度 | 0.1 |

---

## 使用建议

1. **伤害计算**: 根据服务器爆炸伤害调整 `MinDamage` 和 `MaxSelfDmg`
2. **放置延迟**: 延迟过低可能被反作弊检测，建议50ms以上
3. **辅助方块**: 开启 `PlaceHelper` 可以在无法直接放置时自动放置支撑方块
