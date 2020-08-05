# Willin.Love

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![Build Status](https://travis-ci.org/willin-love/willin.love.svg?branch=master)](https://travis-ci.org/willin-love/willin.love) ![sync](https://github.com/willin-love/willin.love/workflows/sync/badge.svg?branch=master)

## Dev

```bash
yarn
git submodule update --init --recursive
cd sync && yarn && cd ..
yarn sync
```

## Structure

Workflow 1:

1. Someone Star this project `willin-love/willin.love`, trigger Github Actions
2. Github Actions sync data and generate static site to `willin-love/willin-love.github.io`
3. Webhooks to Aliyun, sync site files to oss (for Baidu SEO)

Workflow 2:

1. Travis CI crontab tasks every day / Push to `willin-love/willin.love` master branch
2. Sync data and generate static site to `willin-love/willin-love.github.io`
3. Webhooks to Aliyun, sync site files to oss (for Baidu SEO)

## LICENSE

Apache-2.0

![qr](https://user-images.githubusercontent.com/1890238/89126156-0f3eeb80-d516-11ea-9046-5a3a5d59b86b.png)
