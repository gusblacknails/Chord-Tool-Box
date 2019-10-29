import React from "react"
// import "../css/chordictionary.min.css"
// import * as chordictionary from "chordictionary"
import "../css/chordFinder.css"

// import { chord } from "tonal-dictionary"
// import * as Scale from "tonal-scale"
// import * as Chord from "tonal-chord"
// import * as PcSet from "tonal-pcset"
import Chord from "@tombatossals/react-chords/lib/Chord"
import "../css/harmonizerChordStyles.css"
import * as teoria from "teoria"
import * as teoriaChordProgression from "teoria-chord-progression"
import * as guitar from "@tombatossals/chords-db/lib/guitar.json"

class Harmonizer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      root: "C",
      scale: "Maj",
      normalChords: "",
      seventhChords: "",
    }
  }
  //Get all chords that fits a given scale
  // Scale.chords("pentatonic") // => ["5", "64", "M", "M6", "Madd9", "Msus2"]

  // console.log("TOKEN:", Chord.tokenize(props.chord))
  // let fitChordsFromScales = Scale.supersets("pentatonic")
  // console.log("chord:", chord(props.chord), Chord.notes(props.chord))

  // console.log("chroma:", PcSet.chroma(["C", "D", "E"]))
  // DONT USE SCALES: chromatic, doubleharmonic, harmonicchromatic
  extractRoot(name) {
    let out
    if (name) {
      out = name.charAt(0)
    } else {
      return name
    }

    if (name.charAt(1) === "#") {
      out = out + "#"
    }
    if (name.charAt(1) === "b") {
      out = out + "b"
    }
    if (out === "A#") {
      out = "Bb"
    }
    if (out === "B#") {
      out = "C"
    }
    if (out === "G#") {
      out = "Ab"
    }
    if (out === "Db") {
      out = "Csharp"
    }
    if (out === "C#") {
      out = "Csharp"
    }
    if (out === "F#") {
      out = "Fsharp"
    }
    if (out === "D#") {
      out = "Eb"
    }
    if (out === "E#") {
      out = "F"
    }
    if (out === "Cb") {
      out = "B"
    }
    if (out === "Gb") {
      out = "Fsharp"
    }
    if (out === "Fb") {
      out = "E"
    }

    return out
  }
  extractType(type) {
    if (type === "") {
      return "major"
    }
    if (type === "m") {
      return "minor"
    } else {
      return type
    }
  }

  harmonizeScale(props) {
    const defaultSetup = {
      strings: 6,
      fretsOnChord: 4,
      name: "Guitar",
      keys: [],
      tunings: {
        standard: ["E", "A", "D", "G", "B", "E"],
      },
    }
    const lite = false
    this.setState({
      root: props.root,
      scale: props.scale,
    })

    // console.log("HARMONIZER this PROPS:", props.root)
    // console.log("SCALE TYPE:", typeof props.scale === "string")
    let scale_root
    try {
      scale_root = this.extractRoot(props.root)
    } catch (e) {
      console.log("scale_root_error:", e)
    }

    // console.log("HARMONIZER PROPS:", scale_root, props.root, props.scale)
    if (scale_root === "Csharp") {
      scale_root = "C#"
      if (props.scale === "lydian") {
        scale_root = "Db"
      }
    }
    if (scale_root === "Fsharp") {
      scale_root = "F#"
    }
    if (scale_root === "Eb") {
      scale_root = "D#"
      if (
        props.scale === "major" ||
        props.scale === "ionian" ||
        props.scale === "lydian" ||
        props.scale === "mixolydian" ||
        props.scale === "harmonicminor" ||
        props.scale === "melodicminor"
      ) {
        scale_root = "Eb"
      }
    }
    if (scale_root === "Ab") {
      scale_root = "G#"
      if (
        props.scale === "major" ||
        props.scale === "ionian" ||
        props.scale === "lydian" ||
        props.scale === "harmonicminor" ||
        props.scale === "melodicminor"
      ) {
        scale_root = "Ab"
      }
    }
    // let scaleToHarmonizeTest = teoria.scale("Ab", "harmonicminor")
    // console.log("scaleToHarmonizeTest:", scaleToHarmonizeTest)
    // let testAllChords = teoriaChordProgression(scaleToHarmonizeTest, [
    //   1,
    //   2,
    //   3,
    //   4,
    //   5,
    //   6,
    //   7,
    // ])
    // console.log("testAllChords:", testAllChords)
    // let testChord = guitar.chords["G"].find(chord => chord.suffix === "dim")
    // console.log("testChord:", testChord)

    //c#: lydian
    //d#: major, ionian, lydian, mixolydian, harmonicminor, melodicminor,
    //g#: melodicminor, harmonicminor, lydian, ionian, major
    let scaleToHarmonize = teoria.scale(scale_root, props.scale)

    let chords = []
    for (let i = 1; i <= scaleToHarmonize.scale.length; i++) {
      chords.push(i)
    }
    let allChords

    try {
      allChords = teoriaChordProgression(scaleToHarmonize, chords)
    } catch (e) {
      console.log("ERROR_teoriaChordProgression:", e)
    }

    // console.log("allChords:", allChords)
    // console.log("scaleToHarmonize:", scaleToHarmonize, chords)
    let allChordsSeventh
    if (props.scale != "minorpentatonic" && props.scale != "majorpentatonic") {
      allChordsSeventh = teoriaChordProgression(scaleToHarmonize, chords, 4)
    }
    // try {
    //   allChordsSeventh = teoriaChordProgression(scaleToHarmonize, chords, 4)
    // } catch (e) {
    //   console.error("allChordsSeventh_error:", e, allChordsSeventh)
    // }

    let renderChords = []
    let renderChordsSeventh = []
    let chord
    let currentGrade = 0
    const scaleGrades = ["I", "II", "III", "IV", "V", "VI", "VII"]
    // console.log(
    //   "allChords ==",
    //   allChords,
    //   typeof allChords.chords[5].name,
    //   typeof allChords.chords[6].name
    // )
    if (allChords) {
      allChords.chords.forEach(element => {
        let root = this.extractRoot(element.name)
        let type = this.extractType(element.symbol)
        chord = guitar.chords[`${root}`].find(
          chord => chord.suffix === `${type}`
        )
        // console.log("allChords JUST BEFORE PETE:", element, root, type, chord)
        renderChords.push(
          <div className="harmonizerChordbox">
            <div className="chordTitleBox">
              <span className="chordGrade">{scaleGrades[currentGrade]}</span>
              <span className="chordName">{root + " " + type}</span>
            </div>

            <Chord
              chord={chord.positions[0]}
              instrument={defaultSetup}
              lite={lite}
            />
          </div>
        )

        currentGrade += 1
        // console.log("out chord:", root, type, chord.positions[0])
      })
    }

    // console.log(
    //   "allChordsSeventh:",
    //   allChordsSeventh.chords[0].name,
    //   allChords.chords[0].name
    // )
    if (
      allChordsSeventh &&
      allChordsSeventh.chords[0].name !== allChords.chords[0].name
    ) {
      currentGrade = 0
      allChordsSeventh.chords.forEach(element => {
        let root = this.extractRoot(element.name)
        let type = this.extractType(element.symbol)

        chord = guitar.chords[`${root}`].find(
          chord => chord.suffix === `${type}`
        )
        // console.log("chord:", chord)
        // console.log("allChords:", allChords)
        // console.log("in seventh chord:", root, type, chord)
        renderChordsSeventh.push(
          <div className="harmonizerChordbox">
            <div className="chordTitleBox">
              <span className="chordGrade">{scaleGrades[currentGrade]}</span>
              <span className="chordName">{root + " " + type}</span>
            </div>

            <Chord
              chord={chord.positions[0]}
              instrument={defaultSetup}
              lite={lite}
            />
          </div>
        )
        currentGrade += 1
        // console.log("out chord:", root, type, chord.positions[0])
      })
    }
    if (renderChords) {
      this.setState({
        normalChords: renderChords,
      })
    }
    if (renderChordsSeventh) {
      this.setState({
        seventhChords: renderChordsSeventh,
      })
    }
  }
  componentWillReceiveProps(newProps) {
    this.harmonizeScale(newProps)
  }
  componentWillMount() {
    this.harmonizeScale(this.props)
  }

  render() {
    // create teoria.scale object
    // var harmonicminor = teoria.scale("C", "minor")
    // let allScales = teoria.Scale.KNOWN_SCALES
    // chords 1-7 in heptatonic scale
    // var chords = [1, 2, 3, 4, 5, 6, 7]
    // var chords = [2, 5, 1]

    // construct a diatonic chord progression

    return (
      <React.Fragment>
        <div>
          <div className="">
            <h2 className="titles" id="chordByFred">
              {this.props.root} {this.props.scale} scale diatonic chords:
            </h2>
            <div className="harmonizerChordsBox">
              <div className="harmonizerChordsBox">
                {this.state.normalChords}
              </div>
            </div>
          </div>
          {this.state.seventhChords.length > 0 && (
            <div className="">
              <h2 className="titles" id="chordByFred">
                {this.props.root} {this.props.scale} scale seventh chords:
              </h2>
              <div className="harmonizerChordsBox">
                <div className="harmonizerChordsBox">
                  {this.state.seventhChords}
                </div>
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    )
  }
}
export default Harmonizer