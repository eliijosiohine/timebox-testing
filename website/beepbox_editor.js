var beepbox = (function (exports) {
    'use strict';

    /*!
    Copyright (c) John Nesky and contributing authors.

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
    of the Software, and to permit persons to whom the Software is furnished to do
    so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    */
    class Config {
        static _generateSineWave() {
            const wave = new Float32Array(Config.sineWaveLength + 1);
            for (let i = 0; i < Config.sineWaveLength + 1; i++) {
                wave[i] = Math.sin(i * Math.PI * 2.0 / Config.sineWaveLength);
            }
            return wave;
        }
    }
Config.scales = toNameMap([
    { name: "Major Pentatonic", flags: [true, false, true, false, true, false, false, true, false, true, false, false] },
    { name: "Minor Pentatonic", flags: [true, false, false, true, false, true, false, true, false, false, true, false] },
    { name: "Ryukyu (Island)", flags: [true, false, false, false, true, true, false, true, false, false, false, true] },
    { name: "Pelog Selisir", flags: [true, true, false, true, false, false, false, true, true, false, false, false] },
    { name: "Major Blues", flags: [true, false, true, true, true, false, false, true, false, true, false, false] },
    { name: "Minor Blues", flags: [true, false, false, true, false, true, true, true, false, false, true, false] },
    { name: "Major (Ionian)", flags: [true, false, true, false, true, true, false, true, false, true, false, true] },
    { name: "Minor Natural (Aeolian)", flags: [true, false, true, true, false, true, false, true, true, false, true, false] },
    { name: "Double Harmonic Major", flags: [true, true, false, false, true, true, false, true, true, false, false, true] },
    { name: "Double Harmonic Minor", flags: [true, false, true, true, false, false, true, true, true, false, false, true] },
    { name: "Whole Tone", flags: [true, false, true, false, true, false, true, false, true, false, true, false] },
    { name: "Chromatic", flags: [true, true, true, true, true, true, true, true, true, true, true, true] },
    { name: "Major Bebop", flags: [true, false, true, false, true, true, false, true, true, true, false, true] },
    { name: "Major Bulgarian", flags: [true, false, true, true, false, true, true, true, false, true, false, true] },
    { name: "Major Hexatonic", flags: [true, false, true, false, true, true, false, true, false, true, false, false] },
    { name: "Major Persian", flags: [true, true, false, false, true, true, true, false, true, false, false, true] },
    { name: "Major Polymode", flags: [true, true, false, true, true, true, true, true, true, false, true, true] },
    { name: "Minor Harmonic", flags: [true, false, true, true, false, true, false, true, true, false, false, true] },
    { name: "Minor Hungarian", flags: [true, false, true, true, false, false, true, true, true, false, false, true] },
    { name: "Minor Melodic", flags: [true, false, true, true, false, true, false, true, false, true, false, true] },
    { name: "Minor Neapolitan", flags: [true, true, false, true, false, true, false, true, true, false, false, true] },
    { name: "Minor Polymode", flags: [true, false, true, true, true, true, true, true, false, true, true, true] },
    { name: "Minor Romanian", flags: [true, false, true, true, false, false, true, true, false, true, true, false] },
    { name: "Other Arabic", flags: [true, true, false, false, true, true, true, false, true, true, false, false] },
    { name: "Other Bebop Dominant", flags: [true, false, true, false, true, true, false, true, false, true, true, true] },
    { name: "Other Blues Nonatonic", flags: [true, false, true, true, true, true, true, true, false, true, true, false] },
    { name: "Other Diminished", flags: [true, false, true, true, false, true, true, false, true, true, false, true] },
    { name: "Other Dorian", flags: [true, false, true, true, false, true, false, true, false, true, true, false] },
    { name: "Other Eastern", flags: [true, true, false, false, true, true, false, true, true, false, false, true] },
    { name: "Other Egyptian", flags: [true, false, true, false, false, true, false, true, false, false, true, false] },
    { name: "Other Enigmatic", flags: [true, true, false, false, true, false, true, false, true, false, true, true] },
    { name: "Other Hirajoshi", flags: [true, false, true, true, false, false, false, true, true, false, false, false] },
    { name: "Other Iwato", flags: [true, true, false, false, false, true, true, false, false, false, true, false] },
    { name: "Other Japanese Insen", flags: [true, true, false, false, false, true, false, true, false, false, true, false] },
    { name: "Other Locrian", flags: [true, true, false, true, false, true, true, false, true, false, true, false] },
    { name: "Other Locrian Super", flags: [true, true, false, true, true, false, true, false, true, false, true, false] },
    { name: "Other Lydian", flags: [true, false, true, false, true, false, true, true, false, true, false, true] },
    { name: "Other Mixolydian", flags: [true, false, true, false, true, true, false, true, false, true, true, false] },
    { name: "Other Phrygian", flags: [true, true, false, true, false, true, false, true, true, false, true, false] },
    { name: "Other Phrygian Dominant", flags: [true, true, false, false, true, true, false, true, true, false, true, false] },
    { name: "Other Piongio", flags: [true, false, true, false, false, true, false, true, false, true, false, false] },
    { name: "Other Prometheus", flags: [true, false, true, false, true, false, true, false, false, true, true, false] },
    { name: "Other Average", flags: [true, true, true, true, true, true, false, true, false, true, false, false] },
    { name: "Average Pentatonic", flags: [true, true, true, true, true, false, false, false, false, false, false, false] },
    { name: "Average Hexatonic", flags: [true, true, true, true, true, false, false, true, false, false, false, false] },
    { name: "Average Heptatonic", flags: [true, true, true, true, false, false, false, true, false, true, true, false] },
    { name: "Average Octatonic", flags: [true, true, true, true, false, true, false, true, true, true, false, false] }
    ]);
  Config.keys = toNameMap([
        { name: "C", isWhiteKey: true, basePitch: 12 },
        { name: "C♯", isWhiteKey: false, basePitch: 13 },
        { name: "D", isWhiteKey: true, basePitch: 14 },
        { name: "D♯", isWhiteKey: false, basePitch: 15 },
        { name: "E", isWhiteKey: true, basePitch: 16 },
        { name: "F", isWhiteKey: true, basePitch: 17 },
        { name: "F♯", isWhiteKey: false, basePitch: 18 },
        { name: "G", isWhiteKey: true, basePitch: 19 },
        { name: "G♯", isWhiteKey: false, basePitch: 20 },
        { name: "A", isWhiteKey: true, basePitch: 21 },
        { name: "A♯", isWhiteKey: false, basePitch: 22 },
        { name: "B", isWhiteKey: true, basePitch: 23 },
    ]);
    Config.blackKeyNameParents = [-1, 1, -1, 1, -1, 1, -1, -1, 1, -1, 1, -1];
    Config.tempoMin = 10;
    Config.tempoMax = 522;
    Config.echoDelayRange = 24;
    Config.echoDelayStepTicks = 4;
    Config.echoSustainRange = 8;
    Config.echoShelfHz = 4000.0;
    Config.echoShelfGain = Math.pow(2.0, -0.5);
    Config.reverbShelfHz = 8000.0;
    Config.reverbShelfGain = Math.pow(2.0, -1.5);
    Config.reverbRange = 4;
    Config.reverbDelayBufferSize = 16384;
    Config.reverbDelayBufferMask = Config.reverbDelayBufferSize - 1;
    Config.beatsPerBarMin = 1;
    Config.beatsPerBarMax = 128;
    Config.barCountMin = 1;
    Config.barCountMax = 128;
    Config.instrumentCountMin = 1;
    Config.layeredInstrumentCountMax = 4;
    Config.patternInstrumentCountMax = 10;
    Config.partsPerBeat = 25200;
    Config.ticksPerPart = 2;
	
   const rhythmList = [];
    const ppb = Config.partsPerBeat;

    // This loop checks every number from 1 up to the partsPerBeat.
    // If the number divides evenly, it's a valid rhythm.
    for (let i = 1; i <= ppb; i++) {
        
        // Mathematical check: is this a valid divisor?
        if (ppb % i === 0) {
            
            let name = "÷" + i;
            let ticksPerArpeggio = 3;
            let roundUpThresholds = null;
            let arpeggioPatterns = [[0], [0, 1], [0, 1, 2, 1]];

            // Apply special BeepBox labels and settings for common rhythms
            if (i === 3) {
                name = "÷3 (triplets)";
                ticksPerArpeggio = 4;
                arpeggioPatterns = [[0], [0, 0, 1, 1], [0, 1, 2, 1]];
                roundUpThresholds = [Math.floor(ppb/3 * 0.2), Math.floor(ppb/3 * 0.5), Math.floor(ppb/3 * 0.8)];
            } else if (i === 4) {
                name = "÷4 (standard)";
                ticksPerArpeggio = 3;
                arpeggioPatterns = [[0], [0, 0, 1, 1], [0, 1, 2, 1]];
                roundUpThresholds = [Math.floor(ppb/4 * 0.1), Math.floor(ppb/4 * 0.4), Math.floor(ppb/4 * 0.7), Math.floor(ppb/4 * 0.9)];
            } else if (i === 6) {
                ticksPerArpeggio =…
