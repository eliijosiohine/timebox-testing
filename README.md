# TimeBox

**TimeBox** is a mod of [BeepBox](https://www.beepbox.co) — a browser-based chiptune music editor. TimeBox extends BeepBox with a large number of new musical features, expanded limits, and a redesigned aesthetic.

> Version: `2.1`

---

## Table of Contents

- [Scales](#scales)
- [Tempo](#tempo)
- [Beats Per Bar](#beats-per-bar)
- [Rhythms](#rhythms)
- [Time Signature Feature](#time-signature-feature)
- [Chip Waves](#chip-waves)
- [Chip Noises](#chip-noises)
- [Chord Size](#chord-size)
- [FM Operator Frequencies](#fm-operator-frequencies)
- [FM Algorithms](#fm-algorithms)
- [Envelope Automation Targets](#envelope-automation-targets)
- [Channel Counts](#channel-counts)
- [Pitch Range](#pitch-range)
- [Color Theme](#color-theme)
- [Other Changes](#other-changes)

---

## Scales

The scale list has been completely replaced. Instead of BeepBox's 12 emoji-named scales, TimeBox has **40 properly named scales** organized by category.

**Major**
- Major (Ionian), Major Bebop, Major Bulgarian, Major Hexatonic, Major Pentatonic, Major Persian, Major Polymode

**Minor**
- Minor Harmonic, Minor Hungarian, Minor Melodic, Minor Natural (Aeolian), Minor Neapolitan, Minor Pentatonic, Minor Polymode, Minor Romanian

**Other**
- Arabic, Bebop Dominant, Blues Nonatonic, Blues, Diminished, Dorian, Eastern, Egyptian, Enigmatic, Hirajoshi, Iwato, Japanese Insen, Locrian Super, Locrian, Lydian, Mixolydian, Neapolitan, Phrygian Dominant, Phrygian, Piongio, Prometheus, Whole Tone

---

## Tempo

| Setting | BeepBox | TimeBox |
|---|---|---|
| Minimum BPM | 30 | **10** |
| Maximum BPM | 300 | **522** |
| Default BPM | 150 | **120** |
| Slider | 15-step fixed list | **Logarithmic 0–100 scale** |

The tempo slider uses a logarithmic mapping so that low tempos have fine control and high tempos remain reachable.

---

## Beats Per Bar

| Setting | BeepBox | TimeBox |
|---|---|---|
| Minimum | 3 | **1** |
| Maximum | 16 | **128** |

---

## Rhythms

Instead of 5 hardcoded rhythm options, TimeBox **dynamically generates the rhythm list** from `partsPerBeat` (raised from 24 to **2520**). Every divisor of `partsPerBeat` up to 100 — plus ÷3 and ÷4 always — becomes an available rhythm. This enables far more subdivisions than before.

A **"Custom... (EXPERIMENTAL)"** option is pinned at the top of the list, letting you type in any steps-per-beat value. Entering a custom value rebuilds the rhythm list around the new divisor and rescales all existing notes to prevent data corruption.

---

## Time Signature Feature

A time signature control widget is inserted into the editor's menu area. It displays the current time signature (e.g., `4/4`) and opens an interactive dialog when clicked.

The dialog includes:

- **Numerator selector** — beats per bar (1–24)
- **Denominator selector** — rhythm / steps per beat (from the full rhythm list)
- **Live preview** — the dialog title updates as you change the selectors
- **8 conversion strategies** for how existing notes are handled when the bar length changes:

| Strategy | Behavior |
|---|---|
| Stretch | Scale note positions and tempo to fit the new length |
| Splice | Cut notes that extend beyond the new bar boundary |
| Overflow | Push excess notes into the next bar |
| Delete All | Clear every note from every pattern |
| Keep First Beat | Erase everything except the first beat |
| Keep Last Beat | Erase everything except the last beat |
| Mirror | Reverse note order within each bar |
| Compact | Pack all notes together with no gaps, truncating overflow |

The display stays in sync with song state via BeepBox's notifier system.

---

## Chip Waves

17 new waveforms are added to the chip instrument:

| New Wave | Description |
|---|---|
| 1/16 pulse | Very narrow duty cycle |
| 1/32 pulse | Extremely narrow duty cycle |
| ramp | Reverse sawtooth |
| tri-pulse | Triangle-pulse hybrid |
| staircase | Stepped descending wave |
| sine | Approximated sine from samples |
| trapezoid | Flat-topped sine-like shape |
| 3/8 pulse | Asymmetric pulse |
| organ | Rounded organ-like shape |
| metallic | Alternating amplitude wave |
| stepped triangle | Quantized triangle |
| bit-reduced sine | Low-bit-depth sine |
| pulse-saw | Pulse that transitions to saw |
| dual triangle | Double triangle shape |
| shimmer | High-frequency shimmering |
| fuzzed | Clipped/distorted shape |
| v-shape | V-shaped symmetric wave |

---

## Chip Noises

18 new noise types are added beyond BeepBox's original 5:

`static` `hum` `grit` `steam` `crush` `ocean` `pulse noise` `tinny` `radio` `rumble` `geiger` `vinyl` `bit-rot` `void` `clutter` `friction` `spark` `dust`

---

## Chord Size

Maximum chord size increased from **4** to **32** simultaneous pitches per note.

---

## FM Operator Frequencies

The operator frequency multiplier list is extended from 20× all the way to **128×**. Every integer multiplier from 21× through 128× is now available (108 new entries), in addition to the original set.

---

## FM Algorithms

Many new FM operator routing configurations are added:

**Chains & Parallel Paths**
- `4→3→2→1`, `1→2 & 3→4`, `1→2→3`, `2→3→4`

**Ring Modulators**
- `1→2 & 2→1`, `3→4 & 4→3`, `1→2→1`

**Feedback + Routing**
- `1⟲ →2`, `2⟲ →3`, `3⟲ →4`, `1⟲ →2→3`, `1⟲ 2→3`, `1→2 4⟲`

**Broadcast (one-to-many)**
- `1→2,3,4`, `2→1,3,4`, `3→1,2,4`, `4→1,2,3`

**Convergence (many-to-one)**
- `1,2,3→4`, `1,2→3,4`, `2,3,4→1`

**Complex Rings & Cross-Talk**
- `1→2→3→4→1` (Full Ring), `1↔2 3↔4` (Dual Rings), `1→3 2→4 3→1 4→2` (Cross Rings), and more

**Special**
- `Chaos (All)` — all four operators modulate all other operators simultaneously ⚠️ high gain

---

## Envelope Automation Targets

10 new automation targets are available in the envelope system:

| Target | Display Name | Notes |
|---|---|---|
| attackTime | attack | All instrument types |
| decayTime | decay | All instrument types |
| releaseTime | release | All instrument types |
| lfoRate | lfo speed | All instrument types |
| lfoDepth | lfo depth | All instrument types |
| reverbMix | reverb wet | Requires reverb effect |
| delayMix | delay wet | Requires delay effect |
| bitcrush | bitcrush | Requires bitcrusher effect |
| noiseVolume | noise vol | Chip & harmonics instruments |
| distortion | distortion | Requires distortion effect |
| panning | pan | All instrument types |

---

## Channel Counts

| Setting | BeepBox | TimeBox |
|---|---|---|
| Max pitch channels | 10 | **128** |
| Max noise channels | 5 | **128** |

---

## Pitch Range

The pitch range is extended from 7 octaves to **10 octaves** (84 pitches → 120 pitches total).

---

## Color Theme

Both the dark and light themes are redesigned with a **deep purple/violet aesthetic**.

- **Dark theme:** Deep navy-to-black backgrounds (`#05020f`, `#0a0818`), lavender text (`#ddd4ff`), purple loop accent (`#a063ff`), cyan link accent (`#60c8ff`)
- **Light theme:** Also deep purple — TimeBox's "light classic" is a darker purple variant rather than a white theme
- All pitch and noise channel colors are reworked to match the purple palette

---

## Other Changes

**Note Splitting** — Refactored with a new `ChangeSplitNotesAtPoint` class. When a note is cut, the split pins are given correctly interpolated pitches and sizes at the cut point, with pitches snapped to the current scale.

**Scale Dictionary Key** — The internal key for the chromatic/expert scale is renamed from `"expert"` to `"Chromatic"` to match the new scale naming convention. The "notes outside scale" preference uses this key.

**Song Recovery Player Path** — The iframe src for the song recovery prompt changed from `player/` to `player./`.

**`window.beepboxEditor` Exposed Early** — The editor instance is assigned to `window.beepboxEditor` at construction time (not just after the first resize), so the time signature display can read song state immediately on load.

**Code Modernization** — Hundreds of loose equality comparisons (`==`, `!=`) throughout the codebase have been replaced with strict equality (`===`, `!==`).

---

## Based On

[BeepBox](https://github.com/johnnesky/beepbox) by John Nesky, licensed under MIT.
