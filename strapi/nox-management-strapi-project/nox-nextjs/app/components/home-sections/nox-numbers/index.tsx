

type NoxNumbersProps = {
    History__Title?: string;
    history?: {
        Count?: string;
        Event?: string;
    }[];

}


export default function NoxNumbers({History__Title, history}: NoxNumbersProps) {
    console.log("Nox numbers component rendered");
  return (
    <section className="py-8 xl:py-48 bg-no-repeat bg-bottom bg-contain " style={{'backgroundImage': 'url(/svgs/nox-bg.svg)' }}>
        <div className="container">
            <h2 className="text-center">{History__Title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 mt-16 *:border-b *:border-solid *:border-white *:mb-8 2xl:justify-items-center">
                
                {
                    (history ?? []).length > 0 && history?.map((item, idx)=> (
                        <div key={idx} className="[&:last-child]:border-0 sm:[&:last-child]:border-b 2xl:border-0 2xl:[&:last-child]:border-0 ">
                            <h3 className="text-brown xl:text-2xl">{item?.Count} </h3>
                            <p>{item?.Event}</p>
                        </div>
                    )) 
                }
                
                
            </div>
        </div>
    </section>
  )
}
