

export default function Toolbar({onPlayMovie, onUploadImage}) {
  return (
    <div>
        <h2>ToolBar</h2>
        <Button click={onPlayMovie}>
          playing movie
        </Button>
        <Button click={onUploadImage} >
          Upload image
        </Button>
    </div>
  )
}



function Button({click, children}) {
  return (
    <button onClick={click}>
      {children}
    </button>
  )
}
