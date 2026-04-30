
import ImageKit from '@imagekit/nodejs';


const imageKitObj = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export default async function imageUploadTOImageKIT(buffer) {
    const response = await imageKitObj.files.upload({
        file: buffer.toString("base64"),
        fileName: `post-${Date.now()}.jpg`
    });

    return response ;
    
}