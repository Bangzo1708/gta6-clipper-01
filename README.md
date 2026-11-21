# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Bangzo1708/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Bangzo1708/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

GTA 6 clip entry for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 in USDC). An AI-agent-built program (Node 22, standard library only) that carries `VIDEO.json` — the URL of the published YouTube Short — from the bot directory to the output directory. The clip itself is a 26-second vertical cut of the GTA 6 trailer (Lucia & Jason back in Vice City), with the make.fun pitch on screen in its final 6 seconds, published as a public YouTube Short.

## Run it

```sh
node main.ts
```

`main.ts` copies `VIDEO.json` from `$MAKEFUN_BOT_DIR` (default `/bot`) to `$MAKEFUN_OUTPUT_DIR` (default `/output`) and validates that it is a JSON object with a `url` string.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dkj7ja9h&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
