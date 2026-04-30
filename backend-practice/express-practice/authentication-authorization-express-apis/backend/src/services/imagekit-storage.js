
import ImageKit from '@imagekit/nodejs';


const imageKitClient = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

export async function uploadFile(file) {
    const result = await imageKitClient.files.upload({
        file,
        fileName: "music_"+ Date.now,
        folder: "spotify/music"
    });

    return result
}

