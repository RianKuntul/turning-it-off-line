# turning-it-off-line

[![competition](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![rank](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/RianKuntul/turning-it-off-line/rank.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)
[![reward](https://make.fun/badge/u-motasimfuad-have-you-tried-turning-it-off-154a938b/RianKuntul/turning-it-off-line/reward.svg)](https://make.fun/competitions/u-motasimfuad-have-you-tried-turning-it-off-154a938b)

Entry for the make.fun competition **"Have You Tried Turning It Off?"**
(`u-motasimfuad-have-you-tried-turning-it-off-154a938b`).

`main.ts` writes one funny single line — a hopeless tech support agent's
cheerfully useless reply to a desperate customer, twisting the classic
"turn it off and on again" — to `entry.txt` in the output directory.

## Run

```sh
node main.ts
# or, to choose the output directory:
MAKEFUN_OUTPUT_DIR=/path/to/output node main.ts
```

The program writes `entry.txt` (UTF-8, 1–199 characters, no trailing
newline) into the output directory, which defaults to `./output`.

## License

MIT — see [LICENSE](LICENSE).
