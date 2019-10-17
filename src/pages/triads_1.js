import React from "react"
import { Link } from "gatsby"
import GuitarChord from "react-guitar-chords"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/article.css"
import NavBar from "../header"

const SecondPage = () => (
  <React.Fragment>
    <NavBar />
    <Layout>
      <SEO title="Triads" />
      <h1>Triads, why they are so important?</h1>
      <p>
        There is a common scenario in many bands with two guitars where both
        guitars are playing exactly the same chords at some point in the song.
        In these situations, in my opinion, the best is to stop playing until
        the next section unless you know how to use triads. There is a maxim
        that says: “the bigger is the band the less you play“. In other words,
        “play less but better”.
      </p>

      <p>
        There are other situations like a band with an organ/keyboard player
        vamping with chords that are taking up a lot of harmonic space. In this
        case, other chord instruments such as guitar must find their own spot if
        they want to deal with whatever the other players are laying down.
      </p>
      <p>
        In order to find your own harmonic space using chords on guitar -or any
        other chord instrument- “triads” will do the trick. Triads only use
        three notes: Generally, these are the root, the third and the fifth and
        are played on adjacent strings in groups of three strings. So imagine a
        chord progression where the rhythm guitar is playing open chords or
        barre chords using all the strings at the same time as the following
        one:
      </p>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="C Major"
          frets={["x", 3, 2, 0, 1, 0]}
          fingering={["x", 1, 3, 5, 1, 3]}
        />
        <GuitarChord
          chordName="F Major"
          frets={[1, 3, 3, 2, 1, 1]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
        <GuitarChord
          chordName="C Major"
          frets={["x", 3, 2, 0, 1, 0]}
          fingering={["x", 1, 3, 5, 1, 3]}
        />
        <GuitarChord
          chordName="G Major"
          frets={[3, 2, 0, 0, 3, 3]}
          fingering={[1, 3, 5, "x", 5, 1]}
        />
      </div>
      <p>Or the same chord progression using only barre chords:</p>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="C Major"
          frets={["x", 3, 5, 5, 5, 3]}
          fingering={["x", 1, 5, 1, 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major"
          frets={[1, 3, 3, 2, 1, 1]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major"
          frets={["x", 3, 5, 5, 5, 3]}
          fingering={["x", 1, 5, 1, 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="G Major"
          frets={[3, 5, 5, 4, 3, 3]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
      </div>

      <p>
        As you can see in this common I / IV / I / V chord progression the
        guitar is using all the strings so there are some notes that are
        repeated. These repetitions work well when a guitar is strummed or
        arpeggiated. The more notes a chord has the bigger its sound will be. So
        if you are a single player or the main rhythm guitar don’t worry about
        these chords but if you are trying to arrange a second guitar, please
        forget them unless you have a good reason for using them.
      </p>
      <p>
        When we want to compose a second guitar or just create a guitar
        arrangement is where triads make sense. Triads are one of the
        cornerstones of guitar composition and one of the first things should
        learn anybody that wants to learn to talk through his guitar.
      </p>
      <p>
        Following the chord progression above we're going to demonstrate how to
        figure out which triads can be used.
      </p>
      <p>
        The first thing is to identify our chords on the whole neck using the
        CAGED system. Our first chord is a CMaj and is played using the C shape
        so following the CAGED we know that the next chord will have the A shape
        and so on.
      </p>
      <p>These are the CAGED chords for our chord progression:</p>
      <span>For the I chord:</span>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="C Major on A shape"
          frets={["x", 3, 5, 5, 5, 3]}
          fingering={["x", 1, 5, 1, 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major on G shape"
          frets={["x", 7, 5, 5, 5, 8]}
          fingering={["x", 3, 5, 1, 3, 1]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major on E shape"
          frets={[8, 10, 10, 9, 8, 8]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major on D shape"
          frets={["x", 10, 10, 12, 13, 12]}
          fingering={["x", 5, 1, 5, 1, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major on C shape"
          frets={["x", 15, 14, 12, 13, 12]}
          fingering={["x", 1, 3, 5, 1, 3]}
        />
      </div>
      <span>For the IV chord:</span>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="F Major on E shape"
          frets={[1, 3, 3, 2, 1, 1]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major on D shape"
          frets={["x", 3, 3, 5, 6, 5]}
          fingering={["x", 5, 1, 5, 1, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major on C shape"
          frets={["x", 8, 7, 5, 6, 5]}
          fingering={["x", 1, 3, 5, 1, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major on A shape"
          frets={["x", 8, 10, 10, 10, 8]}
          fingering={["x", 1, 5, 1, 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="F Major on G shape"
          frets={[1, 0, "x", "x", 1, 1]}
          fingering={[1, 3, "x", "x", 5, 1]}
        />
      </div>
      <span>For the V chord:</span>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="G Major on E shape"
          frets={[3, 5, 5, 4, 3, 3]}
          fingering={[1, 5, 1, 3, 5, 1]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="G Major on D shape"
          frets={["x", 5, 5, 7, 8, 7]}
          fingering={["x", 5, 1, 5, 1, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="G Major on C shape"
          frets={["x", 10, 9, 7, 8, 7]}
          fingering={["x", 1, 3, 5, 1, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="G Major on A shape"
          frets={["x", 10, 12, 12, 12, 10]}
          fingering={["x", 1, 5, 1, 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="G Major on G shape"
          frets={[3, 2, "x", "x", 3, 3]}
          fingering={[1, 3, "x", "x", 5, 1]}
        />
      </div>
      <p>
        Once we’ve identified our CAGED shapes we can extract the triads from
        them. As we’ve said before these shapes have repeated notes but we only
        want to use the 1st, 3rd and 5th.
      </p>
      <p>
        So, for example, assuming the C Maj chord in A shape is our first
        position we can extract these triads from there:
      </p>
      <div className="chordProgressionBox">
        <GuitarChord
          className="guitarChord"
          chordName="Reference A shape"
          frets={["x", 3, 5, 5, 5, 3]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major on A shape"
          frets={["x", "x", "x", 5, 5, 3]}
          fingering={["x", "x", "x", "R", 3, 5]}
        />
        <GuitarChord
          className="guitarChord"
          chordName="C Major on A shape"
          frets={["x", "x", 5, 5, 5, "x"]}
          fingering={["x", "x", 5, "R", 3, "x"]}
        />
      </div>
      <p>
        Using E and C shapes we can extract the rest of triad shapes for the 1st
        to 3rd group of strings and for 2nd to 4th group of strings:
      </p>
      <div className="chordTriadsShapesBox">
        <div className="chordTriadsShapesRows">
          <GuitarChord
            className="guitarChord"
            chordName="Reference E shape"
            frets={[1, 3, 3, 2, 1, 1]}
          />
          <GuitarChord
            className="guitarChord"
            chordName="F Major on E shape"
            frets={["x", "x", "x", 2, 1, 1]}
            fingering={["x", "x", "x", 3, 5, "R"]}
          />
          <GuitarChord
            className="guitarChord"
            chordName="F Major on E shape"
            frets={["x", "x", 3, 2, 1, "x"]}
            fingering={["x", "x", "R", 3, 5, "x"]}
          />
        </div>
        <div className="chordTriadsShapesRows">
          <GuitarChord
            className="guitarChord"
            chordName="Reference C shape"
            frets={[1, 4, 3, 1, 2, 1]}
          />
          <GuitarChord
            className="guitarChord"
            chordName="G Major on C shape"
            frets={["x", "x", "x", 1, 2, 1]}
            fingering={["x", "x", "x", 5, "R", 3]}
          />
          <GuitarChord
            className="guitarChord"
            chordName="G Major on C shape"
            frets={["x", "x", 3, 1, 2, "x"]}
            fingering={["x", "x", 3, 5, "R", "x"]}
          />
        </div>
      </div>
      <p>
        With these three CAGED shapes, we've been able to figure out all the
        major triads from the first to the fourth string. With C G and D shapes
        we'll be able to extract the ones for the lower notes. Now you know from
        where triads come and what's the theory behind it. In the next articles,
        we'll take a look at other common progressions using triads and which
        shapes are used for the minor and diminished triads.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  </React.Fragment>
)

export default SecondPage
