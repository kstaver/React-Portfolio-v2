import React from "react";
import { saveAs } from "file-saver";
import FileSaver from 'file-saver';

const saveFile=()=>{
    FileSaver.saveAs(
        process.env.PUBLIC_URL + "../../../assets/Kendra Staver-Resume.pdf",
        "Kendra Staver-Resume.pdf"
    );
};

export default saveFile;
