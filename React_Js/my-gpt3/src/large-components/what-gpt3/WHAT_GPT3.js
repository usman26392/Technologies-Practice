
import './WHAT_GPT3.css';
import POSSIBILTIES from '../../small-components/possibilties-box/POSSIBILTIES';

const possibilitiesData = [
  {
    title: 'Chatbots',
    text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  },
  {
    title: 'Knowledgebase',
    text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  },
  {
    title: 'Education',
    text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  }
];



const WHAT_GPT3 = () => {
  return (
    <section className="c-py">
        <div className="container">
          <div className="possibilities-main-wrapper">
            <div className="what_gpt3">
              <h4 className="what_gpt3__title top-line-title">What is GPT-3</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, iure, dolor voluptatibus velit ullam illum fuga incidunt commodi impedit placeat quos sint consequuntur labore alias praesentium perferendis. Incidunt, sunt adipisci?</p>
            </div>
            <div className="possibilities">
              <h3 className="possibilities__title gradient-text">The possibilities are beyond your imagination</h3>
              <a href="/" className="possibilities__link">Explore The Library</a>
            </div>
            <div className="possibilities-row">

                {/* {
                  possibilitiesData.map((item, index) => (
                    <POSSIBILTIES titleHeading={item.title} para={item.text} key={index} />
                    ))
                  } */}

                  {/* or */}

                {/* {
                  possibilitiesData.map((item, index)=> {
                    return (
                      <POSSIBILTIES titleHeading={item.title} para={item.text} key={index} />
                    )
                  })
                }   */}

                  {/* or */}

                {
                  possibilitiesData.map(function(item, index) {
                    return (
                      <POSSIBILTIES titleHeading={item.title} para={item.text} key={index} />
                      )
                    })
                }

                
                
            </div>
          </div>
        </div>
    </section>
  )
}

export default WHAT_GPT3