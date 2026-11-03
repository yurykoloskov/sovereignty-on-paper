# FINAL REPORT — Sovereignty on paper? (3 Nov 2026)

Status: built and tested locally; **nothing committed or pushed**. `site.zip` is in this folder (git-ignored).

## Pages (10, all load; no script errors; no broken local links or anchors)
| # | File | Title | Contents |
|---|---|---|---|
| 1 | index.html | Sovereignty on paper? | block 0, 3 finding cards, 3-question quiz + reveal, curiosity line, executive summary (bottom) |
| 2 | monopolies.html | The two monopolies | block 1, stats, chain chart, old magnet-export question, policy timeline |
| 3 | words.html | How Beijing justified the shift | block 2, heatmap |
| 4 | ace.html | China's ace in the hole | block 3, magnet-imports chart (plotly), CSV link |
| 5 | paper.html | Sovereignty on paper | block 4, predictor (embedded) → `paper-predictor.html` |
| 6 | hops.html | One hop away | block 5, `dependence_S4_tonnes.png` first, other dependence charts, CSV links, "Illustrative" slider |
| 7 | sovereign.html | Who can be sovereign? | block 6; Next page → map.html |
| 8 | map.html | Map | flows map, 17 clickable country cards |
| 9 | found.html | Expected vs found | H1–H3 from `expected_vs_found.md` |
| 10 | methods.html | Methods & limits | block 7, Read with care, gap/refill formulas, correlation charts, Status panel |

## Checks and results
- Anna's final text (blocks 0–7, summary): every paragraph, Sources, Next-page text and findings line is on its page word for word (script check, 0 missing).
- Predictor, default West, 2024, tonnes: compounds 237%, metals 18%, magnets 13% (CSV: 237.2 / 17.9 / 13.4). Wider West = original predictor (identical tables).
- No page says "approximate" about numbers, mentions claude.ai, or dates the white paper 2010. ("approximately 23 percent" is a quotation of the 2012 white paper; "Claude helped us…" is Anna's Methods text.)
- Quiz (3 questions, reveal), old question, stage buttons, timeline, heatmap, rerouting sliders, map controls, country cards and the predictor's controls were exercised in a simulated browser (jsdom).
- **NOT tested: a real browser and a real phone.** I cannot render pages here, so visual layout, the plotly chart's look, the map rings' positions and phone width (375 px) were checked only by reading the CSS (nav scrolls sideways; the 760 px timeline and 620 px heatmap sit in scrolling boxes; tables and images are fluid). **Please open the site once on desktop and phone before publishing.**

## 1. Fact-check fixes applied (text saved as `../site_build/inputs/anna_texts_final.md`)
Gap-filling (replaced a `[Yuri: …]` bracket with the verified fact; source added to the page's Sources box):
- Block 3: Japan bought most of its rare earths from China "(82% in 2010, by Japanese customs data)". Source: Seaman, Ifri/CIGS, Oct 2012.
- Block 6: deal "closed on 3 September 2026" (USA Rare Earth release, SEC Exhibit 99.1); EU "pitching" bracket removed, sources added (European Commission 26 Jun 2026, Reuters/Kitco 22 Jun, SCMP 27 Jun); Superior Electoral Court result added to Sources (Agência Brasil 26 Oct: Lula 51.79%, Flávio Bolsonaro 48.21%).
- Block 3 Sources: Fastmarkets date and link added.

### Changes that alter what a sentence or source says — please read these
1. **Block 3:** "Japan released the captain within days" → "Japan announced the captain's release on 24 September, three days after the shipments stopped" (Al Jazeera and AP, 24 Sep 2010).
2. **Block 3:** "no dysprosium or terbium oxide has reached Japan this year" → "…has been **shipped directly** to Japan this year" (Fastmarkets: none exported directly).
3. **Blocks 0 and 3, Sources:** "MOFCOM and GAC announcements … Nos. 55–58, 61 and 62" → Nos. 55–58 are MOFCOM + GAC, Nos. 61 and 62 are MOFCOM alone.
4. **Block 3, Sources:** Reuters (Oct–Nov 2010) and Reuters (Moffett and Palmer, 2012), which could not be verified, replaced by AP (24 Sep and 24 Nov 2010), Al Jazeera, Seaman, the WTO dispute pages DS431–433 and the USTR release of 13 March 2012.
5. **Block 6:** "with all its output going to a US government-backed buyer" → "all its **Phase 1** output".
6. **Block 6:** Lula sentence reordered: "In September Brazil passed a critical-minerals law; signing it, Lula said the country's sovereignty was not for sale, and on 25 October he was re-elected." (He said it on 16 Sep, before the election.)
7. **Block 6:** "10 January 2027 at the latest" → "10 January 2027 under the current truce".
8. **Block 6, Sources:** Reuters (20 Apr 2026) and Denham Capital (not opened) replaced by the USA Rare Earth releases of 20 Apr and 4 Sep 2026; SCMP/EU, Law 15,506 and the electoral-court source named as above.
9. **Quiz reveal:** "only about [x] of the world's reserves" → "only about 43% of the world's known rare-earth deposits" (deposits, not reserves; Weng et al. 2015).
10. **Quiz source line:** now "IEA commentary (23 Oct 2025), 2024 data for all three answers; Weng, Jowitt, Mudd and Haque (2015) for the 43% of known deposits". No USGS mention.

Not applied: fix 10 of the earlier list ("by its own count" for the 23% in block 1): it is a suggestion without a source.
Still unverified by me: the NYT piece (Bradsher, 22 Sep 2010; kept from Anna's text, the site blocks automated reading), the Agência Brasil article of 17 Sep 2026 and the WTO/USTR pages (named without links), the TSE page itself (blocked; Agência Brasil used).

## 2. Old prose removed or moved (decision 3)
Removed (repeated Anna's text):
- monopolies: the Puzzle paragraphs' first sentence "Geology does not explain this."; in the chain lede the two sentences "Note that ferrite magnets … does not answer our question." (Anna's Careful line says it).
- words: the lede's two sentences on the 576 documents and the fading of trade language; the headings and "Lead for H1 / H2 / event coding" lines of the three "leads" boxes.
- hops, map: nothing repeated Anna's text, so nothing deleted.
Moved (facts not in Anna's text), as captions:
- monopolies, under the stat cards: white-paper quote "supplies over 90 percent…" with 23 percent of reserves; Klinger (2017) "geologically contingent…"; "Once a commodity is labelled strategic…"; China's instruments since 1999 (quotas, export duties, consolidation, technology bans, licensing); the Western sovereignty policies.
- words, under the heatmap ("Also in the data"): trade-management vocabulary about 50% (2009) → about 21% (2011); high-tech framing at 15–28% in every period, security added on top; Premier's reports mention rare earths 3 times in 28 years.
Kept as they are: all charts, sliders, captions, data notes, the three stat cards (60%, 91%, 71%), the policy-timeline lede, the rerouting lede and formula, the flows-map lede and sources, and the research-question line "If dominance was built by policy, can policy move it?…" (it repeats nothing).
White-paper data note: the "seed said 2010" remark was removed from the timeline event title (2012 rule).

## 3. Placeholders left (yellow)
| Page | Placeholder |
|---|---|
| monopolies | FINDING_1–3 under the policy timeline (no text exists); `[Pietro]` in the block 1 Sources (data note) |
| hops | FINDING_1–3 under the rerouting slider (no text exists) |
| map | FINDING_1–3 under the flows map (no text exists); 2× "TO FILL" on the Australia card (cards file) |
| ace | `[Parth, Pietro]` in the block 3 Sources (predictor credit) |
| paper | `[Parth]` in the block 4 Sources |
| methods | `[Parth: two or three sentences from predictor_method.md]` (file not provided) |
Index, words, sovereign, found: none.

## 4. Other things to look at
- The methods page Status panel is from 20 Oct: it still says dependence measures, tests and the exposure simulator are "Pending" and refers to "chapters 2 and 3". Not changed.
- The map has no per-country shapes, so cards open from orange rings placed at each country's map point (EU27 card on Germany); the country list is also offered as buttons.
- `ace.html` loads plotly.js 3.0.1 from cdnjs; `paper-predictor.html` is 1.8 MB, `map.html` 0.7 MB (all data inline).
- Missing inputs, as in Phase 0: `predictor_method.md`, `magnet_notes.md`, the NLP report as a separate file.
- Predictor "Refill ceiling" tile (100% / 14% / 11%) differs from the "Coverage of China's direct sales" tile (237% / 18% / 13%); the second is Anna's figure. See PROGRESS.md.

## 5. Rebuilding
`cd ../site_build && python3 -I build_pages.py` (pages), `python3 -I make_predictor.py` (predictor), `python3 make_final.py` (final texts), `/data/shared/venvs/ds/bin/python -I pools.py` (predictor pools).
