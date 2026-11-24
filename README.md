[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/mgigin/makefun-post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/mgigin/makefun-post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

# Post X Promote Make Your Own Bounty

An entry for the make.fun bounty **Post X Promote Make Your Own Bounty**: a quote post on X promoting make.fun's make-your-own-bounty post, posted manually from @bc1p__.

## The entry

The entry is the X post itself, recorded in `POST.json`:

> https://x.com/bc1p__/status/2125355701308739839

It quotes make.fun's post (https://x.com/makefunai/status/2124915864336236646), carries its own photo, and its text links make.fun, tags @makefunai, and includes the play code `makefun-saucer-orchid-dancer`.

## Run

```sh
node main.ts
```

No dependencies, no network. The program validates `POST.json` (a JSON object whose `url` matches `x.com/<handle>/status/<id>`, at most 16384 bytes) and copies it to `/output/POST.json`, falling back to `./output/POST.json` if `/output` cannot be written.

## Referral

https://make.fun/r/c6yw2yzb
