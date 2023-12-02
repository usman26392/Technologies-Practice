

export function GetimageUrl(person, size='s') {
    return (
        // 'https://i.imgur.com/' + person.imageId + size + '.jpg'
        `https://i.imgur.com/${person.imageId}${size}.jpg`
    )

}



export function GetimageUrl2(imageId, size='s') {
    return (
        `https://i.imgur.com/${imageId}${size}.jpg`
    )
}