#!/usr/bin/env sh

if test -z $1
then
  message="commited-by-VSCode"
else
  message=$1
fi

cd ~/Site

# 确保脚本抛出遇到的错误
set -e

git add -A
git commit -m $message
git push -f git@e.coding.net:Xerrors/Site.git master

echo " "
echo "  >>> 成功将整体文件上传到 腾讯云 [ git@e.coding.net:Xerrors/Site.git ]"
echo " "

git push -f git@github.com:Xerrors/Site.git master

echo " "
echo "  >>> 成功将资源文件上传到 GitHub [ git@github.com:Xerrors/Site.git ]"
echo " "

# 生成静态文件
vuepress build docs

# 进入生成的文件夹
cd docs/.vuepress/dist
cp -r ./* /www/wwwroot/www.xerrors.fun

echo " "
echo "  >>> 成功将资源文件复制到网站根目录 /www/wwwroot/www.xerrors.fun/"
echo " "

cd ~/Node

forever start zone.js

