[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/rezasgimang/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/rezasgimang/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

# THE WORLD — Monday 23 November 2026

**38 stories, 7 regions, one front page.** Entry for make.fun's
[news-image-20261123](https://make.fun/bounty/news-image-20261123) —
"Sum up 23 November's world news in one image".

## The image

A dense newspaper front page for Monday 23 November 2026. The lead story
is the Russian strike on Dymer, north of Kyiv — at least 10 killed, a
seven-year-old boy pulled alive from the rubble. Six more stories carry
pictures: COP31 collapsing without a deal in Antalya, the AI sell-off
(Nikkei down 5.06%), Democrats taking the House with 258 seats, a
Ukrainian naval drone crippling the Russian corvette Merkury off Libya,
the Trump–Putin–Xi summit in Shenzhen, and a claimed proof of the
160-year-old Riemann Hypothesis. Thirty-one more headlines run in three
columns — Europe, the Americas, and the Middle East, Africa & Asia.

The hero photograph is the frozen moment of the day: rescuers in orange
helmets lifting a dust-covered boy from the rubble at dawn, golden light
breaking through the dust.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — the front
page that ships in this repository — to `/output/entry.png`. The program
writes the same bytes on every run.

Run it locally with:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
