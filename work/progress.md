# gta6-clipper-01 — progress log (coordinator)

## 2026-11-21 ~16:05 WIB — kickoff
- Trailer 2 verified on disk: /home/hatch/Downloads/gta6-trailer-2.mp4 (1,462,646,011 B, h264 3840x2160, 166.73s = 2:47, official Rockstar CDN).
- Live API checks: competition OPEN, acceptingSubmissions True, submissionCount 1757, deadline 2026-11-23T01:00:00Z (Mon 23 Nov 08:00 WIB), opensAt 2026-11-20T01:00:00Z.
- Quota: can_submit TRUE (day 5/5 left, hard limit 40 left). Play code confirmed: makefun-quilt-cobalt-acrobat.
- Kit: ~/workspace/makefun/kit/gta6-clipper-01-kit/gta6-clipper-01-kit (harness@ba4baca8..., program/v1, bundle upload — NOT strict-record submit).
- CRITICAL FINDING: this bounty REQUIRES a public YouTube upload. The video itself is the entry (YouTube Data API, ranked by views, top 20 share $500). VIDEO.json must name the YouTube URL. The agent cannot upload (no channel access; YouTube unreachable from VM; never ask for password/key/token). Plan: build clip + repo + bundle + check now; the upload itself must be done by bangzo from his phone (clip file + exact title/description handed to him) OR skipped. This must be told to him plainly — an earlier message said no YouTube upload was needed, which is wrong per the bounty spec.
- Builder spawned ~16:05 WIB (bot dir ~/workspace/makefun/gta6-clipper-01/).

## 2026-11-21 ~16:05 WIB — moment chosen (after inspecting frames every 10s, then every 2s in candidate ranges)
CHOSEN MOMENT: the heist climax, trailer 117s-143s (26s of footage).
- Hook (first 2s): Lucia firing from a moving car as police cars explode (~117-119s). Most scroll-stopping frame in the trailer; instantly GTA.
- Then: plane jump (~120s), Vice City street chaos (~126s), airboat/helicopter chase (~140s), Jason on bike with plane overhead (~142s). One narrative beat (the job goes sideways), new action every 2-3s, no slow shot to swipe away from.
- Rejected: opening 0-40s (Jason's day jobs, too slow); dock sunset 82-84s (beautiful but quiet, weak hook); 74-78s intimate scenes (avoided); plane jump alone (only ~2s).
- Pitch: on screen over final 6s, white Noto Sans Bold + black outline, safe area. Line 1 (3s): "Make clips like this with AI and earn money on make.fun" (wrapped to 2 display lines for legibility). Line 2 (3s): "make.fun/bounty/gta6-clipper-01". Trailer audio kept.
- Vertical: blur-fill, NOT center crop — wide shots have action across the full width (explosion, plane); cropping would cut it out.

## 2026-11-21 ~16:10 WIB — clip rendered + verified
RENDER: ffmpeg, trailer 117-143s (26s), crop letterbox 3840:1728, blur-fill to 1080x1920, original audio, libx264 crf 20. -> gta6-clip-vertical.mp4, 26.0s, 1080x1920, 14,054,597 bytes, h264+aac.
PITCH on screen: t=20-23 "Make clips like this with AI / and earn money on make.fun", t=23-26 "make.fun/bounty/gta6-clipper-01", Noto Sans Bold white + black outline + dim box.
VERIFIED by reading 4 frames: t=1 hook (Lucia shooting, police cars exploding) strong; t=12 Vice City nightlife beat; t=21 pitch line 1 legible, inside safe area; t=24.5 pitch line 2 legible over jet-ski chase. Framing good, full 16:9 frame visible via blur-fill. No fix needed.
NOTE: one ~2s nightclub shot inside the window (trailer ~128s) — official trailer footage, non-explicit, kept as part of the Vice City chaos beat.

## 2026-11-21 ~16:12 WIB — repo files written + main.ts run twice
main.ts written BY HAND in this session (no starter read), stdlib-only copy of VIDEO.json (MAKEFUN_BOT_DIR default /bot -> MAKEFUN_OUTPUT_DIR default /output, mkdir recursive, exit 1 on failure). Second genuine edit: ENOENT-specific message + validates copied VIDEO.json parses as JSON with a url string.
VIDEO.json: placeholder {"url":"https://www.youtube.com/shorts/PLACEHOLDER"} — real URL after upload.
UPLOAD.md written to work/ (title, tags, exact description + play code makefun-quilt-cobalt-acrobat).
RUNS: node v24.22.1; run 1 OK, run 2 OK, out/VIDEO.json identical (sha256 945c3429a8d0c87abe3d3772da564c9f0a42e61948d7aa9fe8e04b62897fc6dd). Only a harmless MODULE_TYPELESS_PACKAGE_JSON warning on stderr.
NOT DONE (by design): no YouTube upload (no channel access), no GitHub repo (repo agent next). Clip kept OUT of git.

## 2026-11-21 ~16:10 WIB — builder done, repo ready locally, TWO blockers
- Builder verified by coordinator: clip 1080x1920, 26.0s, 14,054,597 B, h264; moment = heist climax trailer 117-143s; pitch on screen final 6s; main.ts hand-written + 1 genuine edit, determinism 2 runs identical; VIDEO.json placeholder; UPLOAD.md exact (title/tags/description verbatim + play code).
- Repo agent done locally: commit aec7052 (8 files: .gitignore, .makefun/owner.json, LICENSE SPDX MIT, README from requirements template w/ 3 badges, VIDEO.json, main.ts, work/UPLOAD.md, work/progress.md). Hashes main.ts/VIDEO.json unchanged. Clip NOT in repo. Verified by coordinator (git log/status/ls-files).
- BLOCKER 1 (push): execution-risk flag on the repo directory stopped `gh repo create --push` + About edit. Needs bangzo's explicit go-ahead (same mitigation as poem: all git with -c core.hooksPath=/dev/null).
- BLOCKER 2 (YouTube): entry REQUIRES a public YouTube Short upload; agent cannot upload (no channel access, YouTube unreachable from VM). Bangzo must upload the clip himself from his phone (file + title + description ready in work/UPLOAD.md) or the bounty cannot be entered. NOTE: an earlier message told him no YouTube upload was needed — WRONG per bounty spec; must be corrected to him.
- After both blockers clear: update VIDEO.json with real Shorts URL (in a bundled session) -> bundle (builder+repo+fix sessions, handed-off pattern) -> check -> submit. Quota can_submit TRUE, day 5/5, hard 40/40. Deadline Mon 23 Nov 08:00 WIB.
