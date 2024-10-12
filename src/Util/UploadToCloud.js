export const UploadToCloud = async (pics) => {

    if (pics) {
        const data = new FormData();
        data.append("file", pics)
        data.append("upload_preset", "twitter");
        data.append("cloud_name", "djijie1mr")
        const res=await fetch("https://api.cloudinary.com/v1_1/djijie1mr/image/upload",{

                method:"post",
                body:data
        }) 
        const fileData=await res.json();
        return fileData.url.toString();
    }else{
        console.log("erropr from upload function")
    }
}