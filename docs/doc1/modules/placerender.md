# PlaceRender - 放置渲染

**模块类型**: 渲染功能  
**功能简介**: 渲染方块放置位置和动画效果

---

## 参数说明

| 参数名 | 类型 | 说明 | 默认值 |
|--------|------|------|--------|
| ShapeMode | 枚举 | 渲染模式 | Both |
| Speed | 整数 (1-100) | 渲染速度 | 10 |
| Animation Exponent | 浮点数 (0-10) | 动画指数 | 3 |
| SideStart | 颜色 | 填充渐变起始颜色 | 透明 |
| SideEnd | 颜色 | 填充渐变结束颜色 | 半透白 |
| LineStart | 颜色 | 边框渐变起始颜色 | 透明 |
| LineEnd | 颜色 | 边框渐变结束颜色 | 白色 |

---

## 使用方法

1. 配合其他放置类模块（如ScaffoldPlus、AutoPlaceBlock）使用
2. 可视化显示即将放置方块的位置
3. 调整 `Speed` 和 `Animation Exponent` 改变动画效果
