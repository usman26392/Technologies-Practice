import { people } from "../../../api/data.js";
import { GetimageUrl } from "../../utils.js";
import { Fragment } from "react";

export default function List() {
  let chemist = people.filter(function (ppl) {
    return ppl.profession === "chemist";
  });

  let others = people.filter(function (ppl) {
    return ppl.profession !== "chemist";
  });

  const listItemsChemist = chemist.map((person) => (
    <Fragment key={person.id}>
      <li>
        <img src={GetimageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    </Fragment>
  ));

  const listItems = others.map((person) => (
    <Fragment key={person.id}>
      <li>
        <img src={GetimageUrl(person)} alt={person.name} />
        <p>
          <b>{person.name}:</b>
          {" " + person.profession + " "}
          known for {person.accomplishment}
        </p>
      </li>
    </Fragment>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{listItemsChemist}</ul>
      <h2>Others</h2>
      <ul>{listItems}</ul>
    </article>
  );
}
