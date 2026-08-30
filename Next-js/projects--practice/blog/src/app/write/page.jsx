
"use client";

import Image from "next/image"
import { useState } from "react"
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
import styles from "./pagePage.module.scss";
import Button from "@/small-components/button/Button";
import btnStyle from "@/small-components/button/Button.module.scss"




function Writepage() {
    const [openBtns, setOpenBtns] = useState(false);
    const [value, setValue] = useState("");

    function openOtherBtns() {
        setOpenBtns(()=> {
            return !openBtns
        })
    }

  return (
    <div className={`${styles['editor-main-wrapper']}`}>
        <input type="text" placeholder="Title" />
        <div className={`${styles['texteditor']}`}>
            <button onClick={openOtherBtns}>
                <Image src="/plus.png" alt="" width="16" height="16" />
            </button>
            {
                openBtns && (
                    <div className={`${styles['addBtns']}`} >
                        <button className="editorBtn">
                            <Image src="/image.png" alt="" width="16" height="16" />
                        </button>
                        <button className="editorBtn">
                            <Image src="/external.png" alt="" width="16" height="16" />
                        </button>
                        <button className="editorBtn">
                            <Image src="/video.png" alt="" width="16" height="16" />
                        </button>
                    </div>
                )
            }
            <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder="Tell your story"
            />
        </div>
        <button className={`${btnStyle['btnn']}`} >
            <Button content="publish" />
        </button>
    </div>
  )


}

export default Writepage


