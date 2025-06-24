import { add } from "lodash";
import additionalRepository from "../repository/additional-repository";

const getFormats = async () => {
    const data = (await additionalRepository.getFormats()).data
    const result: any = []

    data.forEach((item: any)=> {
        result.push({
            id: item.id,
            name: item.name
        })
    })

    return result
}

const getStates = async () => {
    const data = (await additionalRepository.getStates()).data
    const result: any = []

    data.forEach((item: any)=> {
        result.push({
            id: item.id,
            name: item.name
        })
    })

    return result
}

const getArticles = async () => {
    const data = (await additionalRepository.getArticles()).data
    const result: any = []

    data.forEach((item: any)=> {
        result.push({
            id: item.id,
            name: item.name
        })
    })

    return result
}

const getSizes = async () => {
    const data = (await additionalRepository.getSizes()).data
    const result: any = []

    data.forEach((item: any)=> {
        result.push({
            id: item.id,
            name: item.name
        })
    })

    return result
}

const getArtists = async () => {
    const data = (await additionalRepository.getArtists()).data
    const result: any = []

    data.forEach((item: any)=> {
        result.push({
            id: item.id,
            name: item.name
        })
    })

    return result
}


// const getStates = async () => {
//     const data = (await additionalRepository.getStates()).data
//     const result: any = []

//     data.forEach((item: any)=> {
//         result.push({
//             id: item.id,
//             name: item.name
//         })
//     })

//     return result
// }

// const getArticles = async () => {
//     const data = (await additionalRepository.getArticles()).data
//     const result: any = []

//     data.forEach((item: any)=> {
//         result.push({
//             id: item.id,
//             name: item.name
//         })
//     })

//     return result
// }

// const getSizes = async () => {
//     const data = (await additionalRepository.getSizes()).data
//     const result: any = []

//     data.forEach((item: any)=> {
//         result.push({
//             id: item.id,
//             name: item.name
//         })
//     })

//     return result
// }

// const getArtists = async () => {
//     const data = (await additionalRepository.getArtists()).data
//     const result: any = []

//     data.forEach((item: any)=> {
//         result.push({
//             id: item.id,
//             name: item.name
//         })
//     })

//     return result
// }

export default {getFormats, getStates, getArticles, getSizes, getArtists}