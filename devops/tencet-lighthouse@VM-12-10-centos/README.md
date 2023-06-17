# 腾讯云轻应用服务器部署配置

## 想法、规划、思路

* 想法：没有特别原因自2023年3月开始使用了腾讯云，成本原因使用了轻应用服务器，技术熟悉原因选择Node.js环境

* 规划：
    ```txt
                             -> index.html (app/index)
    client --(https)-> nginx -> cdn docs (html/css/js)
                             --(http)-> node.js 
    ```

* 思路：
  * nginx是VM自带的，适合服务静态资源，并作为路由入口
  * 静态资源优先路由，提升效率
  * node.js 监听http本地端口，通过nginx proxy_pass提供外部访问

## VM规格

名称 | 说明
---------|----------
地域和可用区 | 广州 
套餐类型 | 通用型
CPU | 2核 内存 - 2GB
系统盘 | SSD云硬盘 60GB
流量包 | 300GB/月（带宽：4Mbps）
镜像名称 | Node.js
镜像类型 | 应用镜像
操作系统 | CentOS 7.8 64bit
费率 | 55元/月
创建时间 | 2023-03-19 16:31:50

## VM配置文件

VM HOME文件目录布局：

File or Folder | 说明
---------|----------
`downloads/` | 上传或下载的介质
`sites/` | CDN文档站点静态资源
`ssl_certs/` | HTTPS证书
`www.weikaopu.cn_nginx` | 从腾讯云上传的原始HTTPS证书(备份)

关键配置文件：

File or Folder | 路径
---------|----------
`nodejs.conf` | `/usr/local/lighthouse/softwares/nginx/conf/include/nodejs.conf`

目录布局快照
```shell
[lighthouse@VM-12-10-centos ~]$ ll
total 20
drwxrwxr-x 2 lighthouse lighthouse 4096 Jun 17 16:32 downloads
drwxrwxr-x 6 lighthouse lighthouse 4096 Jun 16 23:04 sites
drwxrwxr-x 2 lighthouse lighthouse 4096 Apr  2 23:37 ssl_certs
drwxrwxrwx 2 lighthouse lighthouse 4096 Apr  4 09:26 www.weikaopu.cn_nginx
```