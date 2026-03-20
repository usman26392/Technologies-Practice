
import { Fragment } from "react";

const poem = {
    lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.', "asdsdasdasd"]
  };


const Poem = () => {
  return (
    <div>
        {
            poem.lines.map(function(line, idx) {
                return (
                    <Fragment key={idx}>
                        {idx > 0 && <hr/>}
                        <p>{line}</p>
                    </Fragment>
                )
            })
        }
    </div>
  )
}

export default Poem