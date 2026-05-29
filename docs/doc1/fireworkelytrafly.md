# FireworkElytraFly - 烟花鞘翅飞行

**模块类型**: 移动功能  
**功能简介**: 自动使用烟花加速鞘翅飞行，支持甲飞（飞行时穿护甲）

---

## 参数说明

### 通用组 (General)

| 参数名          | 类型           | 说明                                                     | 默认值            |
|--------------|--------------|--------------------------------------------------------|----------------|
| Mode         | 枚举           | 运行模式<br>- Legit: 正常模式<br>- GrimDurability: Grim甲飞      | GrimDurability |
| FireWorkMode | 枚举           | 烟花使用模式<br>- Delay: 延迟使用<br>- Auto: 自动使用<br>- None: 不使用 | Auto           |
| PacketDelay  | 浮点数 (0-100)  | 发包延迟（tick）                                             | 3              |
| Unbreaking   | 布尔           | 无限耐久模式（客户端显示）                                          | true           |
| FakeDelay    | 浮点数 (0-1000) | 无限耐久操作延迟                                               | 800            |

### 甲飞组 (ArmorFly)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| Stand | 布尔 | 站飞模式（飞行时站立姿态） | true |
| ReleaseSneak | 布尔 | 自动松开Shift | true |
| PressSneak | 布尔 | 自动按下Shift | true |
| ReleaseDelay | 整数 (0-1000) | Shift松开延迟 | 100 |
| FireWorkDelay | 浮点数 (0-3000) | 烟花使用延迟 | 1000 |
| CheckFireWork | 布尔 | 自动检查烟花数量 | true |
| InventorySwap | 布尔 | 背包鬼手切换烟花 | true |

### 控制组 (Control)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| Control | 布尔 | 甲飞控制 | true |
| FallSpeed | 浮点数 (0-3) | 下落速度 | 0.02 |
| DeBug | 布尔 | 调试模式 | false |

---

## 使用方法

1. 确保背包中有鞘翅和烟花
2. 开启模块后按空格起飞
3. 模块会自动使用烟花加速，按W放烟花，Auto模式全自动续烟花，甲飞一定用Auto模式的烟花
4. 配合 `AutoArmorPlus` 的 `AutoElytra` 实现背包自动切换鞘翅

---
