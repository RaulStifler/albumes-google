export const saveToken = token => ({
    type: 'SET_TOKEN',
    token
})

export const clearToken = () => ({
    type: 'CLEAR_TOKEN'
})

export const setUser = user => ({
    type: 'SET_USER',
    user
})

export const clearUser = () => ({
    type: 'CLEAR_USER'
})

export const setAlbumes = albumes => ({
    type: 'SET_ALBUMES',
    albumes
})

export const clearAlbumes = () => ({
    type: 'CLEAR_ALBUMES'
})

export const setAlbum = album => ({
    type: 'SET_ALBUM',
    album
})

export const clearAlbum = () => ({
    type: 'CLEAR_ALBUM'
})

export const setPhotos = photos => ({
    type: 'SET_PHOTOS',
    photos
})

export const clearPhotos = () => ({
    type: 'CLEAR_PHOTOS'
})