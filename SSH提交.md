## 先拉取,再修改,最后提交推送

bash

运行

```
# 1. 开始写代码前:同步远程最新代码(最重要!)
git pull origin main

# 2. 写完代码后:暂存所有修改
git add .

# 3. 提交到本地仓库(写清楚改了什么)
git commit -m "修改说明"

# 4. 推送到 GitHub(第一次加 -u,之后直接 git push 就行)
git push origin main
```

---

## 🔍 每日辅助命令(随时可用)

bash

运行

```
# 查看当前修改状态(哪些文件改了、哪些没提交)
git status

# 查看最近的提交记录(按 q 退出)
git log --oneline

# 检查远程有没有新提交(不自动合并,先看看)
git fetch origin

# 查看本地和远程的差异(有没有没拉下来的代码)
git log main..origin/main
```
