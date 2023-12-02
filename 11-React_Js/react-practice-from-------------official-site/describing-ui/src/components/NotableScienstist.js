
import { GetimageUrl2 } from "./utils";

function NotableProfile({name, imageId, profession, awards, discovery, imageSize='70' }) {
    return (
        <section className="profile">
          <h2>{name}</h2>
          <img
            className="avatar"
            src={GetimageUrl2(imageId)}
            alt={name}
            width={imageSize}
            height={imageSize}
          />
          <ul>
            <li>
              <b>Profession: </b> 
              {profession}
            </li>
            <li>
              <b>Awards: {awards.length} </b> 
              ( {awards.join(', ')} )
            </li>
            <li>
              <b>Discovered: </b>
              {discovery}
            </li>
          </ul>
        </section>
    )
}


export default function NotableGallery() {
    return (
      <div>
        <h1>Notable Scientists</h1>
        {/* caller of NotableProfile  */}
        <NotableProfile 
            name="Maria Skłodowska-Curie"
            imageId="szV5sdG"
            profession="physicist and chemist"
            awards={[
                'Nobel Prize in Physics',
                'Nobel Prize in Chemistry',
                'Davy Medal',
                'Matteucci Medal',
              ]}
            discovery="polonium (chemical element)"
        />

        <NotableProfile
            name="Katsuko Saruhashi"
            imageId="YfeOqp2"
            profession="geochemist"
            awards={[
                'Miyake Prize for geochemistry',
                'Tanaka Prize'
            ]}
            discovery="a method for measuring carbon dioxide in seawater"
        />
      </div>
    );
  }
  