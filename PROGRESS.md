# PROGRESS

## Phase 0 (check inputs) — done 3 Nov 2026
Inputs: `../site_build/inputs/`. Repo: only README.md and index.html (identical to `index (2).html`); no partial split.

Present: index.html, five Q*.png (named `Q… (1).png`), one_hop_dependence.csv, coverage_split_2012_2024.csv, coverage.py, magnet_exports_chart.html, magnet_imports_from_china_monthly.csv, predictor (`predictor.html.html`, double extension).
Was missing, now copied in (new files only): anna_texts.md (from Drive, 31 Oct version), country_cards.md and expected_vs_found.md (from `Yury 29.10 news/`, corrected versions), dependence_{S1,S2,S3,S4,placebo}_tonnes.png (from `2026-10-29_pietro/charts/`).
Still missing (become yellow placeholders): `predictor_method.md` (Parth's method sentences, methods page), `magnet_notes.md`, the text-analysis report and the policy-timeline file as separate inputs (the timeline is presumably inside index.html).

Left: Phases 1–5.

## Phase 1 (split into 10 pages) — done 3 Nov 2026
Generator: `../site_build/build_pages.py` (re-run with `python3 -I build_pages.py`); it reads the original single page and writes the 10 pages plus `assets/style.css` and `assets/main.js`. Nothing is committed or pushed yet.

Pages: index, monopolies (Puzzle, Chain, Policy), words, ace, paper, hops (Rerouting), sovereign, map (Flows map), found (hypotheses), methods ("Read with care" box, Status panel, source notes). Same nav on every page, current page highlighted, scrolls sideways on phones. Each chart has a findings box (What you see / What it means / Careful); pages 1–7 end with a Sources box and a Next-page link.

Tests (jsdom plus `python3 -m http.server`): all 10 pages return 200, no script errors, no broken local links; guess quiz, stage buttons, policy timeline, heatmap, hypothesis cards, rerouting sliders and map controls all respond.

Changes to existing content (everything else moved unchanged):
- The chapter numbers ("01", "02"…) in section headings were removed, because the sections are now on different pages.
- found.html: removed the sentence "The original note dates the white paper 2010 …" from the source line (2012 rule). The whole block is replaced in Phase 4.
- Dropped the `claude:viewport-fit-sides` meta tag and the scroll-spy nav script (replaced by per-page nav).

Yellow placeholders now on the site: TEXT_HOOK, HOME_CARD_1–3, EXEC_SUMMARY (index); TEXT_MONOPOLIES; TEXT_WORDS; TEXT_ACE, TEXT_PAPER, TEXT_SOVEREIGN, TEXT_HOPS, TEXT_METHODS; FINDING_1–3 under each chart (share chart, policy timeline, frames heatmap, rerouting toy, flows map, magnet-imports chart, predictor); SOURCES and NEXT_TEXT on pages 1–7; figure placeholders on ace.html and paper.html (filled in Phases 2–3).

Open points:
1. hops.html still carries the old "Coming next · What if China stopped exporting magnets tomorrow?" box. It becomes wrong once the predictor is live; I plan to remove it in Phase 3 unless you want it kept.
2. The old one-question home quiz (magnet exports by value, 64% in 2024) still stands; Phase 4 replaces it and moves the old question to monopolies.html.
3. Old ledes, source lines and the "leads" boxes on words.html stay beside Anna's text for now; in Phase 4 I will list which old paragraphs duplicate hers before deleting any.

Left: Phases 2–5.

## Phase 2 (predictor) — done 3 Nov 2026
Files: `paper-predictor.html` (the predictor, 1.8 MB, all data inline, no external calls except Google Fonts), embedded on `paper.html` in an iframe with an "Open on its own page" link; formulas copied into `methods.html` (section "How the gap and the refill ceiling are computed"). Builders: `../site_build/pools.py` (recomputes the supply pool for a chosen West from `re_magnet_data/data/processed/baci_chain.parquet`, same logic as `exposure_simulator.capacity()`, writes nothing into `re_magnet_data`) and `../site_build/make_predictor.py`.

What changed in the predictor (everything else is Parth's page unchanged):
- New switch "Who counts as the West": default **USA + Japan + EU27 (extra-EU only)**, plus **Wider West (38 countries)** = the original definition.
- S1 shown greyed out with "not rare-earth-specific (catch-all code HS 2530.90)". The page never modelled S1.
- Default view 2024, weight (tonnes), magnets, larger-of-two channel, cut = reach = 100%, refill 0. Saved state removed so the defaults always show.
- New tile "Coverage of China's direct sales to the West" (pool ÷ China's direct sales, not capped at 100%). It is the figure in `coverage_split_2012_2024.csv`.
- A back link to paper.html (hidden when embedded); method text updated for the West switch.
- "Approximate" notes: none existed in the predictor or the pages, so nothing was removed. Nothing in the page depends on claude.ai.

Checks (jsdom, 2024, tonnes, channel max, low-priced flows excluded):
| | page tile (default West) | `coverage_split_2012_2024.csv` |
|---|---|---|
| S2 compounds | 237% | 237.2% (64,761 t vs 27,297 t) |
| S3 metals | 18% | 17.9% |
| S4 magnets | 13% | 13.4% (6,479 t vs 48,232 t) |
The pool tonnes also match Pietro's CSV for 2012 and 2024, all three stages, to within 0.01 t.
Wider West: my recomputed pool and supplier tables are identical to the original page's (0 differences in all 90 year/stage/metric tables), and the page shows the same ceiling and "bid alone" tiles as the original for S2 (100%), S3 (12%), S4 (8%).

Things to know:
1. **The page's own "Refill ceiling" is not the 237% / 13%.** It divides the pool by the bloc gap *including* the via-hub loss, and caps at 100%. With the default West it reads S2 100% (175% uncapped), S3 14%, S4 11%. The 237% / 13% divide by China's *direct* sales only. That is why I added the separate tile; Anna's text ("more than twice what China sells to the West", "13%") uses the direct definition. Pietro's `coverage_note.md` says the same.
2. **93% / 16% (Anna's text) are not shown on the page.** They come from the CSV (221.5% of the 237.2% goes to China, 15.8% elsewhere). The page's supplier table shows it per country (for instance Myanmar's output going to China).
3. `methods.html` Status panel still says the dependence measures and the exposure simulator are "Pending" (from 20 Oct). Not changed; Phase 4 or you.
4. On the map in default mode Canada, UK, etc. are still coloured as importers, with a note that they are not in the bloc gap.

Left: Phases 3–5.

## Phase 3 (charts) — done 3 Nov 2026
- **hops.html**: `dependence_S4_tonnes.png` first and full width, then S2, S3, S1 and placebo charts in a grid below, with links to `data/one_hop_dependence.csv` and `data/top5_gap_contributors_2024.csv`. The rerouting slider toy stays, tagged "Illustrative · not data". I removed the old "Coming next · What if China stopped exporting magnets tomorrow?" box, because the predictor is live.
- **ace.html**: Anna's interactive chart (`magnet_exports_chart.html`) rebuilt from its own data: same three series, same values, hover text, event lines and source note, unchanged. The 4.8 MB file was mostly an embedded copy of plotly.js 4.1.1; the page now loads plotly.js 3.0.1 from cdnjs (the data is stored in the compact binary form that version reads). Restyled: transparent background, site fonts and colours (follows dark mode), phone layout. Link to `data/magnet_imports_from_china_monthly.csv`.
- **methods.html**: the five correlation PNGs (`img/Q1_substitution.png`, `Q1_supply_loss`, `Q2_price`, `Q3_hubs`, `Q4_comovement`) with the caption "Exploratory: correlations of growth rates, not tests of our hypotheses".
- Copied into the repo: `img/` (10 PNGs), `data/` (4 CSVs; `coverage_split_2012_2024.csv` is referenced by the predictor text).

Checks: no broken local links; ace.html rendered in jsdom with the real plotly.js: 3 traces (USA 31 points, Japan 32, EU27 32) and the chart draws. I cannot see the picture itself here, so please look at it once in a browser.

Notes:
1. The chart's own title ("Magnet imports from China, monthly, 2024-2026 (index…)") is kept as in the source and repeats the page's job; say if you want it hidden.
2. The ace chart and the dependence PNGs are not restyled beyond that; the PNGs are Pietro's images as they are.
3. Findings boxes are still placeholders (Phase 4).

Left: Phases 4–5.

## Phase 4 (texts) — done 3 Nov 2026
Builders: `../site_build/texts.py` (reads the three text files) and `build_pages.py` (places them). Anna's wording is inserted unchanged; a script check confirms every paragraph, Proof, Transition and findings line of blocks 0–7 and the executive summary appears on its page word for word. Labels Claim / Proof / Transition / Chart are not shown.

Placement: block 0 + 3 Home finding cards + executive summary (bottom) on index; 1 monopolies; 2 words; 3 ace; 4 paper; 5 hops; 6 sovereign; 7 methods (top; its Proof shown as Sources at the bottom). Findings boxes: block 1 under the share chart, 2 under the heatmap, 3 under the magnet chart, 4 under the predictor, 5 under the main dependence chart. Proof = "Sources", Transition = text of the "Next page" link.
- **Home quiz:** three questions, one slider each, answers 60 / 91 / 94%, then the reveal in large type. Reveal sentence about reserves = your approved line ("about 43% of the world's known rare-earth deposits"). The curiosity line (State Council, 2012, 23%) with its sources is under the quiz, in small type. Anna's own "Quiz source" line is shown unchanged under the reveal and still cites USGS for reserves; see decision 2.
- **Old quiz question** (magnet exports by value, answer 64%) moved to monopolies.html under the Chain chart, with your note about exports not being production.
- **map.html:** 17 country cards from `country_cards.md`. Orange rings on the map (and a row of name buttons) open the card. The map has no per-country shapes, so the rings sit at the country's map point; the EU27 card is on Germany. Australia's two numbers still say "TO FILL" (yellow), as in the cards file.
- **found.html:** the old hypothesis cards are replaced by `expected_vs_found.md` for H1–H3: hypothesis, expected and why, what would confirm / contradict, test and data, what we found (H3 table kept), verdict. The two H3 limitations (unit, placebo) are in a box at the end. Not shown (internal notes): the file's intro line and its Notes section (white-paper note, "sustained public money" explanation, coding question).

2012 rule: removed "(seed said 2010 -> corrected: June 2012)" from the white-paper event's title in the timeline data (monopolies.html). No page mentions 2010 for the white paper (checked by search).

### Fact-check fixes NOT applied (from `fact_check_step5.md`; approve and I apply them)
1. Block 3: "bought most of its rare earths from China [Yury: verify the share]" → 82% in 2010 (Seaman, Ifri/CIGS, Oct 2012).
2. Block 3: "released the captain within days [Yury: verify the date]" → released 24 Sep 2010, three days after shipments stopped.
3. Block 3: "no dysprosium or terbium oxide has reached Japan" → "has been shipped **directly** to Japan" (Fastmarkets, 6 Oct 2026).
4. Blocks 0, 3: "Nos. 55–58, 61 and 62" → 55–58 are MOFCOM + GAC, 61 and 62 are MOFCOM alone.
5. Block 3 Proof: Reuters 2010 / Reuters (Moffett and Palmer, 2012) could not be verified → swap for AP (24 Sep, 24 Nov 2010), WTO DS431–433 pages, USTR 13 Mar 2012.
6. Block 6: "with all its output going to a US government-backed buyer" → "all its **Phase 1** output"; deal closed 3 Sep 2026 (answers [Yury: check whether the deal has closed]); EU pitch confirmed as a pitch, not a signed deal (Síkela, June 2026) (answers [Yury: verify]); Lula 51.79% (answers [Yury: news file item 7]).
7. Block 6: Lula's "not for sale" was said on 16 Sep when signing Law 15,506, before the election. Suggested order: "…signing it, Lula said … and on 25 October he was re-elected."
8. Block 6: "10 November on paper, 10 January 2027 at the latest" → "10 January 2027 under the current truce".
9. Block 6 Proof: Reuters 20 Apr 2026 and Denham → USA Rare Earth release of 20 Apr 2026 (SEC Exhibit 99.1).
10. Block 1 (and Hook): the 23% is stated as fact; consider "by its own count" (see the curiosity line).

### Decisions for you
1. **Approve the fixes above** (all, or which)? Until then the yellow `[Yury: …]` brackets stay visible on sovereign.html and ace.html.
2. The quiz source line (Anna's) names USGS for the reserves figure, but the reveal now uses Weng et al. 2015 (43%); Weng is in the curiosity sources. Replace the USGS mention?
3. **Old text next to Anna's.** The old ledes, source lines and "leads" boxes remain below her text: Puzzle and Chain ledes (monopolies), lede and 3 "leads" boxes (words), rerouting lede (hops), flows lede (map). They partly repeat her paragraphs. Delete or keep?
4. Block 6 has no Transition, so sovereign.html's "Next page" link text is a yellow `[NEXT_TEXT]`.

### Placeholders left on the site
ace: [Yury: verify the share], [Yury: verify the date], [Parth, Pietro]. sovereign: [Yury: check whether the deal has closed], [Yury: verify], [Yury: news file item 7], [NEXT_TEXT]. monopolies: [Pietro] (data note) and FINDING_1–3 under the policy timeline. hops: FINDING_1–3 under the rerouting toy. map: FINDING_1–3 under the flows map, 2× TO FILL (Australia). paper: [Parth]. methods: [Parth: two or three sentences from `predictor_method.md`].

Left: Phase 5.

## Decisions applied + Phase 5 (final check) — done 3 Nov 2026
Fact-check fixes, quiz source, old-prose trims and the sovereign → map link applied (details in FINAL_REPORT.md). Final texts saved as `../site_build/inputs/anna_texts_final.md`. All checks run; `FINAL_REPORT.md`, `site.zip` and `prompts_log.md` written. Left: real-browser and phone check by a person, then commit and push.
