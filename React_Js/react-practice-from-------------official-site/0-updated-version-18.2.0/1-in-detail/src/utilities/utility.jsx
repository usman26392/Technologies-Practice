
/**
 * ---------------- utilities functions --------------------------
 */

// here size is default parameter
export function getImageUrl(person, size = 's' ) {
    return (
        `https://i.imgur.com/${person.imageId}${size}.jpg`
    )
}

