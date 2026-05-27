# AutoCrystal - 自动水晶

**模块类型**: 战斗功能  
**功能简介**: 自动放置和破坏末地水晶进行PVP

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| TargetRange | 浮点数 (1-20) | 目标搜索距离 | 12.0 |
| PlaceRange | 浮点数 (1-6) | 水晶放置距离 | 4.5 |
| BreakRange | 浮点数 (1-6) | 水晶破坏距离 | 4.5 |
| PlaceDelay | 整数 (0-500) | 放置延迟（毫秒） | 50 |
| BreakDelay | 整数 (0-500) | 破坏延迟（毫秒） | 50 |
| CalcMode | 枚举 | 伤害计算模式<br>- AlienV4: 高精度计算<br>- Meteor: 标准计算 | AlienV4 |
| MinDamage | 浮点数 (1-36) | 对敌人最小伤害 | 4.0 |
| MaxSelfDmg | 浮点数 (1-36) | 自身最大承受伤害 | 12 |
| Predict | 整数 (0-12) | 目标位置预判tick数 | 4 |
| PreferMode | 枚举 | 优先模式<br>- PreferCrystal: 优先水晶<br>- PreferAnchor: 优先重生锚 | PreferAnchor |
| AutoBase | 布尔 | 自动放置水晶底座（基岩/黑曜石） | true |
| BaseDelay | 整数 (0-1000) | 底座放置延迟 | 500 |
| UsingPause | 布尔 | 使用物品时暂停 | true |
| OnlyMain | 布尔 | 仅主手操作 | true |
| NoSuicide | 布尔 | 防自杀 | true |
| InventorySwap | 布尔 | 背包鬼手切换物品 | true |
| PlaceAfterBreak | 布尔 | 破坏后立即放置新水晶 | true |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| Render | 布尔 | 渲染开关 | true |
| RenderDmg | 布尔 | 渲染伤害数值 | true |
| Line Color | 颜色 | 边框颜色 | 白色 |
| Side Color | 颜色 | 填充颜色 | 白色 |
| RenderSpeed | 浮点数 (0-1) | 渲染速度 | 0.05 |
| RenderHeight | 浮点数 (0-1) | 渲染高度 | 0.1 |

---

## 使用建议

1. **延迟平衡**: `PlaceDelay` 和 `BreakDelay` 过低会被检测，建议50ms以上
2. **预判设置**: `Predict` 根据目标移动速度调整，高速移动目标可设为6-8
3. **伤害计算**: `AlienV4` 模式更精确但计算量更大
