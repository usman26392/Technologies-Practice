import "./Scienstist.scss";
import { people } from "../api/data";
import { GetimageUrl } from "./utils";



function ScienstistItems() {
  return (
    <>
      {
        people.map((ppl, idx) => {
            return (
                <li className="scientist-item" key={idx}>
                    <span>
                        <img src={GetimageUrl(ppl)} alt={ppl.name} />
                    </span>
                    <span>
                        <p> 
                            <strong>{ppl.name}: </strong> 
                            {ppl.profession + ""  } known for {""}
                            {ppl.accomplishment} 
                        </p>
                    </span>
                </li>
            )
        })
      }
    </>
  );
}

const Scientists = () => {
  return (
    <div>
      <h1>Scientists</h1>
      <ul className="scientist">
        <ScienstistItems/>
      </ul>
    </div>
  );
};

export default Scientists;
