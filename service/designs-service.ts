import dbConnection from "../common/db-connection"
import designRepository from "../repository/design-repository"

const getAllDesigns = async () => {
    const data = await designRepository.getAllDesigns()
    const result: any = []

    data.forEach((art:any) => {
        result.push({
            // id: design.id,
            // title: design.title,
            // artist: design.artist,
            // description: design.description,
            // published: design.published,
            // scoreTrending: design.scoreTrending,
            // scorePopular: design.scorePopular,
            // sales: design.sales,
            // availability: design.availability,
            // updated: design.updated,
            // created: design.created
            id: art.id,
            title: art.title,
            formatId: art.format_id,
            stateId: art.state_id,
            articleId: art.article_id,
            sizeId: art.size_id,
            artistId: art.artist_id,
            datePublished: art.date_published,
            ISBN: art.ISBN,
            totalArtworks: art.total_artworks,
            soldArtworks: art.sold_artworks,
            reservedArtworks: art.reserved_artworks,
            description: art.description
    })
    });
    return result
}

const getAllDesignsDetailed = async () => {
    const data = await designRepository.getAllDesignsDetailed()
    const result: any = []

    data.forEach((art:any) => {
        result.push({
            id: art.id,
            title: art.title,
            format: art.Format,
            state: art.State,
            article: art.Article,
            size: art.Size,
            artist: art.Artist,
            datePublished: art.date_published,
            ISBN: art.ISBN,
            totalArtworks: art.total_artworks,
            soldArtworks: art.sold_artworks,
            reservedArtworks: art.reserved_artworks,
            description: art.description
        })
    })
    return result
}

const getDesignById = async (id: Number) => {
    const data = await designRepository.getDesignById(id)
    if(data && data.length > 0) {
        return {
            id: data[0].id,
            title: data[0].title,
            artist: data[0].artist,
            description: data[0].description,
            published: data[0].published,
            scoreTrending: data[0].scoreTrending,
            scorePopular: data[0].scorePopular,
            sales: data[0].sales,
            updated: data[0].updated,
            created: data[0].created
        }
    }
    return null
}

const createNewDesign = async (design: any) => {
    const data = await designRepository.createNewDesign(design)
    return data
}

const updateDesign = async (id:Number, design:any)=> {
    const data = await designRepository.updateDesign(id, design)
    return data
}

const deleteDesign = async (id: Number) => {
    const data = await designRepository.deleteDesign(id)
    return data
}


export default {getAllDesigns,getAllDesignsDetailed, getDesignById, createNewDesign, updateDesign, deleteDesign}