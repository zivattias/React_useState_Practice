export function getRatingName(rating) {
    if (rating < 9) {
        return 'OK'
    } else if (rating < 9.5) {
        return 'Great'
    } else {
        return 'WOW'
    }
}