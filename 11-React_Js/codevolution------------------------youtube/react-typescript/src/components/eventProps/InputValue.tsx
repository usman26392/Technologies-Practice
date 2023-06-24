

type inputTypes = {
    fieldValue: string,
    // changeValue: ()=> void
    changeValue: (event: React.ChangeEvent<HTMLInputElement>)=> void

}


const InputField = (props: inputTypes ) => {
  return (
    <div>
        <input type="text" value={props.fieldValue }  onChange={props.changeValue }  />
    </div>
  )
}

export default InputField