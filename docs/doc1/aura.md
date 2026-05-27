# Aura - 杀戮光环

**模块类型**: 战斗功能  
**功能简介**: 自动攻击周围目标，适配Grim反作弊

---

## 参数说明

### 通用组 (General)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| TargetRange | 整数 (0-8) | 目标搜索距离 | 6 |
| Range | 浮点数 (0-8) | 攻击距离 | 3.5 |
| Weapon | 枚举 | 武器选择<br>- Sword: 剑<br>- Axe: 斧<br>- Mace: 重锤<br>- Trident: 三叉戟<br>- All: 全部武器<br>- Any: 任意物品 | Sword |
| AutoSwitch | 枚举 | 自动切换武器<br>- Normal: 普通切换<br>- Silent: 静默切换<br>- None: 不切换 | Silent |
| Reset | 布尔 | 自动重置攻击冷却 | true |
| HurtTime | 整数 (0-10) | 目标受伤时间阈值，低于此值不攻击 | 10 |
| Cooldown | 浮点数 (0-1) | 攻击冷却时间（秒） | 0.55 |
| WallRange | 浮点数 (0.1-7) | 穿墙攻击距离 | 3.5 |
| UsingPause | 布尔 | 使用物品时暂停攻击 | true |

### 目标组 (Targeting)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| entities | 实体列表 | 攻击目标实体类型 | Player |
| Rotate | 布尔 | 攻击时转头看向目标 | true |
| ignore-named | 布尔 | 忽略命名生物 | true |
| ignore-passive | 布尔 | 忽略中立生物 | false |
| ignore-tamed | 布尔 | 忽略已驯服生物 | true |

### 渲染组 (Render)

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| TargetESP | 布尔 | 目标ESP高亮显示 | true |
| ESPColor | 颜色 | ESP颜色 | 白色 |

---

## 使用建议

1. **武器选择**: 根据当前版本最强武器选择，1.21推荐Mace
2. **穿墙攻击**: `WallRange` 建议小于 `Range`，避免被反作弊检测
3. **目标过滤**: 开启 `ignore-named` 避免误伤宠物
