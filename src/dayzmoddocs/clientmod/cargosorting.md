---
title: 库存整理
cover: /assets/images/cover1.jpg
icon: file-zipper
author: 稻草人
date: 2024-07-05
---

## 资费

- 免费模组, 不收取任何费用
- 同样也不允许任何人利用此模组进行收费

## 功能说明

任何带有库存空间的物品,在该物品的标题栏会显示额外的两个按钮,
- 叠加按钮

点击叠加按钮,会将背包内可叠加的同类型物品进行堆叠,每组最大数量堆叠.

- 整理按钮

点击整理按钮,会将当前背包内的所有物资进行排序.
排序规则为,按照 面积大小=>相同名字=>从左往右 插空排列.

## 如何使用

- 需要先订阅模组: [订阅地址](https://steamcommunity.com/sharedfiles/filedetails/?id=3276386418)

- 服务端启动参数: -sortlimit=3 -mod=@CargoSorting;

    -sortlimit参数代表玩家点击刷新按钮的时间间隔, 单位秒.
    如果你的启动参数不好修改,则在`serverDZ.cfg`文件中添加这个参数
    `sortlimit = 3;`

## 扩展
- 计划将库存间快速转移功能,加入到模组中.

## 视频演示

<iframe src="//player.bilibili.com/player.html?isOutside=true&aid=1305783999&bvid=BV1JM4m1m7z1&cid=1598714158&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="380"></iframe>