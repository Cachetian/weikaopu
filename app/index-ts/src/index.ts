export default `
<!DOCTYPE html>
<html lang="en">

<head>
  <title>WEI靠谱</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/js/bootstrap.min.js"></script>
  <style>
    body {
      font: 20px Montserrat, sans-serif;
      line-height: 1.8;
      color: #f5f6f7;
    }

    p {
      font-size: 16px;
    }

    p a {
      color: #eeeeee;
    }

    .margin {
      margin-bottom: 45px;
    }

    .bg-1 {
      background-color: #0854A0;
      /* Green */
      color: #ffffff;
    }

    .bg-2 {
      background-color: #89919a;
      /* Dark Blue */
      color: #ffffff;
    }

    .bg-3 {
      background-color: #ffffff;
      /* White */
      color: #555555;
    }

    .bg-4 {
      background-color: #2f2f2f;
      /* Black Gray */
      color: #fff;
    }

    .container-fluid {
      padding-top: 70px;
      padding-bottom: 70px;
    }

    .navbar {
      padding-top: 15px;
      padding-bottom: 15px;
      border: 0;
      border-radius: 0;
      margin-bottom: 0;
      font-size: 12px;
      letter-spacing: 5px;
    }

    .navbar-nav li a:hover {
      color: #d1e8ff !important;
    }

    .navbar-default .navbar-brand {
      color: #fff;
    }

    .navbar-default .navbar-brand:hover {
      color: #d1e8ff;
    }

    .navbar-default .navbar-nav>li>a {
      color: #fff;
    }

    .navbar-default {
      background-color: #354a5f;
      border-color: #e7e7e7;
    }
  </style>
</head>

<body>

  <!-- Navbar -->
  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">wei靠谱</a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#who-we-are">WHO</a></li>
          <li><a href="#what-we-do">WHAT</a></li>
          <li><a href="#where-we-are">WHERE</a></li>
          <li><a href="https://gitee.com/weikaopu/weikaopu/blob/main/app/index/index.html">Gitee</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- First Container -->
  <div class="container-fluid bg-1 text-center" id="who-we-are">
    <h3 class="margin">我们是谁?</h3>
    <h3>我们是一小群愿意交流，传播，分享知识的靠谱SAP顾问</h3>
  </div>

  <!-- Second Container -->
  <div class="container-fluid bg-2 text-center" id="what-we-do">
    <h3 class="margin">我们是做什么的?</h3>
    <p>我们擅长的技术领域包括SAP<a href="https://www.sap.cn/products/technology-platform.html">业务技术平台</a>应用开发（比如：<a href="https://cap.cloud.sap/docs/">CAP</a>技术）、用户体验（比如：<a href="https://ui5.sap.com/">UI5</a>和<a href="https://www.sap.cn/products/technology-platform/fiori.html">Fiori</a>技术）和安全</p>
  </div>

  <!-- Third Container (Grid) -->
  <div class="container-fluid bg-3 text-center" id="where-we-are">
    <h3 class="margin">我们在哪?</h3><br>
    <div class="row">
      <div class="col-sm-4">
        <p>五湖四海，目前该社区还在建设初期，尚无公开的联系方式</p>
      </div>
      <div class="col-sm-4">
        <p>圈子很小，有时会在生活中偶遇</p>
      </div>
      <div class="col-sm-4">
        <p>希望就在这里，能找到靠谱的资料</p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="container-fluid bg-4 text-center">
    <p>WEI靠谱 © Copyright 2023 <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备14019396号-3</a></p>
  </footer>

</body>

</html>
`