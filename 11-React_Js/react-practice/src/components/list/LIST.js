

// lets suppose these data (json) are comming from server.
const possibilitiesData = [
  {
    id: '1',
    title: 'Chatbots',
    text: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  },
  {
    id: '2',
    title: 'Knowledgebase',
    text: '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  },
  {
    id: '3',
    title: 'Education',
    text: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, repellendus.'
  }
];

const LIST = () => {
  let num = [1,2,3,4];
  return (
    <div>
        <hr />
        <hr />
        <ul> 
            {/* {
                num.map(function(n, index) {
                    return (<li key={index}> {n *2} </li>)        
                })
            } */}

            {/* or */}

            {/* {
              (function() {
                let a = num.map(function(n, index) {
                  return (<li key={index}> {n *2}    </li>)        
                })
                console.log(a)

              })()
            } */}

            {/* use of posssibilties data */}
            {
              possibilitiesData.map(function(data) {
                return (<li key={data.id}> {data.title} </li>)
              })
            }

        </ul>
    </div>
  )
}

export default LIST


