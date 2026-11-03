# FIXES_REPORT.md: final fixes, 3 November 2026

Source of truth: the build pipeline in `../site_build/` exists, so every change was made in its inputs or scripts (`build_pages.py`, `texts.py`, `make_final.py`, `anna_texts_final.md`, `country_cards.md`, `expected_vs_found.md`) and the pages were rebuilt. Nothing was edited by hand in the HTML.

## 0b. Blank chart on `ace.html`
Cause: in `build_pages.py`, `ptag + d3tag if d3 else ""` was parsed as `(ptag + d3tag) if d3 else ""`, so plotly.js was added only to pages that also load d3, and `ace.html` does not. Fixed with brackets. `ace.html` now loads `plotly.js 3.0.1` from cdnjs.
Checked in a real browser (headless Chromium, the page's own scripts only): no script errors; chart has 3 traces, USA 31 points, Japan 32, EU27 32. All other pages: no console errors, no failed requests. No other page uses a library it does not load (`paper-predictor.html` carries its own inline d3).

## Names and course
Home byline and footer on all pages: Anna Carminati · Parth Piyush Prasad · Yury Koloskov · Pietro Ceccone. Course shown as "AI-Assisted Analysis, KINT 6005" (the trailing "- 0" you gave is not shown; tell me if it should be). Page titles end in "· KINT 6005". "work in progress" removed from the home page.

## Placeholders (15 yellow highlights on the live site, now 0)
| # | Page | Placeholder | Replaced by | Status |
|---|---|---|---|---|
| 1 | monopolies | `[Pietro]` in Sources | "computed by Pietro from CEPII BACI HS92 V202601", with the two CSVs linked | final |
| 2–4 | monopolies | FINDING_1–3, policy timeline | three-line findings box | (draft) |
| 5 | ace | `[Parth, Pietro]` | "predictor built by Parth, supply pools by Pietro" | final |
| 6 | paper | `[Parth]` | "predictor built by Parth"; `coverage_note.md` dropped; CSV linked | final |
| 7–9 | hops | FINDING_1–3, rerouting toy | three-line findings box | (draft) |
| 10–12 | map | FINDING_1–3, flows map | three-line findings box | (draft) |
| 13–14 | map | Australia "TO FILL" ×2 | USGS MCS 2026 figures: 2025 mine production 29,000 t REO; reserves 6,300,000 t (3.3 Mt JORC-compliant), p. 153 | final (checked in the PDF in `re_magnet_data/data/raw/D4_usgs/mcs/`) |
| 15 | methods | `[Parth: …predictor_method.md]` | three sentences (cut, reach, pool, coverage, "what-if not forecast") | (draft for Parth): `predictor_method.md` was not found anywhere |

## Changes to Anna's text (quoted before → after)
1. Monopolies, opening: "with only about a quarter of known reserves:" → "with, by its own count, only about a quarter of world reserves:"
2. Home finding card: "Japan halved its direct dependence on Chinese magnets after 2010" → "Japan almost halved its direct dependence…". The Japan map card got the same change. "Halved its fentanyl tariff" on `ace.html` is untouched.
3. Sovereign: "Mountain Pass, the only US mine, closed in 2002" → "Mountain Pass, then the only US mine, closed in 2002"
4. Sovereign, last sentence: "The next test is the end of the truce: 10 November on paper, 10 January 2027 under the current truce." → "The next test is the deadline: the pause on China's October 2025 controls was set to end on 10 November 2026, and the wider truce now runs to 10 January 2027." Matches the home "Why now" and its Sources (MOFCOM No. 70; MOFCOM statement of 28 September 2026).
5. Tense of 10 November (home page, three sentences): "suspension ends on paper on 10 November 2026" → "suspension was set to end on 10 November 2026"; "the pause on its strongest controls ends on paper on 10 November 2026" → "… was set to end on 10 November 2026"; "On paper, the pause ends on 10 November 2026;" → "On paper, the pause was set to end on 10 November 2026;". Other mentions ("until 10 November 2026") were already tense-neutral.
6. Credits in Sources (monopolies, ace, paper, hops, methods) and the Methods line "All figures are drafts…" → "All figures were computed in October 2026 from the data versions named on each page."
`make_final.py` holds all of these (ids A1–A4, D1–D3, C1–C7). The word-for-word check (46 paragraphs and findings lines) finds 0 missing.

## Other changes by page
- **monopolies:** 60% and 91% cards: "IEA commentary, 23 October 2025". Timeline source line now "Source: group list of policy events (60 events, 41 verified against primary text; coding provisional)." (the note on the 57 plotted events stays).
- **hops:** rerouting note replaced by "We use the proportional rule throughout the site; a threshold rule is a possible alternative. No real values are shown here."; "Draft" badge → "Data"; Sources line "draft, computed by Pietro on 29 October 2026" → "computed by Pietro, October 2026".
- **words:** "fig3 of the NLP report" → "our text-analysis report (fig. 3)"; source line "NLP report … fig4" → "our text-analysis report … fig. 4".
- **map:** all 17 cards: internal labels (`calc_notes.md`, "news file", "Framework, Part B", "guide, Step 4", "Anna's texts") replaced by the public source or a link to the page. Items traced in the news file: 6 = Japan 2026 (MOFCOM No. 1 of 2026; Fastmarkets, 6 Oct 2026); 7 = Serra Verde (Reuters, 4 Dec 2025; USA Rare Earth releases of 20 April and 4 Sept 2026; Agência Brasil, 17 Sept 2026); 9 = Japan 2010 (AP and Al Jazeera, 24 Sept 2010; Seaman, Ifri/CIGS, Oct 2012); 10 = MP Materials listing (MOFCOM No. 23 of 2026; Al Jazeera, 22 June 2026). "Part B, B5 (Mountain Pass)" → Hansen Tobin, CSIS (2020), as in Anna's Sources. "Part B, B2" and "B6" labels dropped with nothing cited. CSV names are linked to `data/`.
- **map, Myanmar / Malaysia / Laos:** "draft, to verify" removed after checking against `data/coverage_split_2012_2024.csv`: 162.46% / 44,347.7 t; 15.97% / 4,359.85 t / 3,716.75 t; 38.53% / 10,518.2 t. All three match.
- **found:** "Part B…(B5, B6, B7, B2)" → "our project framework's historical background"; where it quotes the framework, the primary source it cites is named: Tse, USGS (2011, p. 6); Shen, Moomy and Eggert (2020); Reuters (2021); Tang and Morrison (2012, p. 12). The "building its own chain is costly" and "the West will depend on China for finished products" quotes are the framework's own conclusions and cite no source there. "(site, chapter 2/6)" → links to *The two monopolies* and *How Beijing justified the shift*. "None of this is in Pietro's 29 October outputs, which are annual" → "Our trade outputs so far are annual". `charts/dependence_S4_tonnes.png` → link to `img/`. "(Pietro)" → "(computed by Pietro)".
- **methods:** status panel rewritten as of 3 November 2026 (trade panel acquired and used on four named pages; dependence measures "Done (draft, 29 Oct)"; predictor "Live (draft)"; "chapters 2 and 3" gone; H1/H2 tests still Pending). Sources box: internal filenames replaced by "Group calculation notes and code checks (Pietro, Parth); the CSV files in `data/` (linked); the text-analysis report."
- **data/:** `china_imports_by_stage_partner.csv` and `china_net_trade_by_stage.csv` copied unchanged from `site_build/inputs/` and linked wherever cited. (`data/` now has six CSVs, not four.)
- **CSS:** `.ph` rule removed (0 placeholders left); select and `<code>` wrap so `map.html` and `found.html` no longer scroll sideways at 375 px.

## Draft texts for the group to approve
| Text | Where | How it was built |
|---|---|---|
| Timeline findings (3 lines) | monopolies | counts from the 57 plotted events: by code 23 / 22 / 12; by period 6 / 10 / 9 / 7 / 25; binding in 2023–2026: 11; declaratory in 2012–15 and 2016–22: 7 + 5 = 12 of 16 |
| Rerouting findings (3 lines) | hops | describes the sliders; Japan 36% direct and 68% one hop come from Anna's text and the dependence chart |
| Flows-map findings (3 lines) | map | China's share of world S4 export value = China's S4 exports ÷ world S4 exports in the page's own totals table (`atlas.T`): 9.7% (1995), 40.8% (2010), 63.6% (2024); by weight 35.2%, 58.5%, 73.8%. China's flows among the 70 largest S4 flows by value: 9, 29, 39. The 70 largest cover 76.3%, 81.7%, 85.8% of world S4 value |
| Predictor method (3 sentences) | methods | (draft for Parth), written from the method text in `paper-predictor.html` |

## Not done / to know
- `predictor_method.md` and `magnet_notes.md` were not found; the first is replaced by the draft above.
- Policy-event source URLs inside the timeline data were not link-checked.
- External links on the pages (16): 12 return 200. Two SEC links return 403 to a script (bot block, they open in a browser) and two are only `preconnect` hosts for Google Fonts.
- `paper-predictor.html` (embedded on *Sovereignty on paper*) still shows a footer with the internal path `data/processed/baci_chain.parquet`; it was outside the scope of this prompt.
- The CSV headers still say "DRAFT - not checked by a person"; files were copied unchanged on purpose.
- Visual check: screenshots of all pages at 1280 px and 375 px were taken in headless Chromium; page width fits at 375 px on all pages. Not checked on a physical phone.
