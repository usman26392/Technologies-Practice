

type styleProps = {
    styles: React.CSSProperties
}


const Titles = (props: styleProps ) => {
    // destructuring of props in typescript
    const {styles} = props
    console.log(props)
    return (
        <h3 style={styles} >Title</h3>
    )
}

export default Titles