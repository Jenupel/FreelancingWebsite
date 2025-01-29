import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file",file);
    data.append("upload_preset","NFTmarketplace");

    try{
        const res = await axios.post(
            //"cloudinary://489385492689829:6KaHeNqtGkFseLfLCpDrishmCDU@dqhh7i6c0/jenupel/image/upload",
            "https://api.cloudinary.com/v1_1/dqhh7i6c0/image/upload",
            data);

            const {url} = res.data;
            return url;

    }catch(err){
        console.log(err);
    }
};

export default upload;