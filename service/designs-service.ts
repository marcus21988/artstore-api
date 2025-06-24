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
            description: art.description,
            imagePath: art.image_path
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
            description: art.description,
            imagePath: art.image_path
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
            format: data[0].format_id,
            state: data[0].state_id,
            article: data[0].article_id,
            size: data [0].size_id,
            artist: data[0].artist_id,
            description: data[0].description,
            total: data[0].total_artworks,
            sold: data[0].sold_artworks,
            reserved: data[0].reserved_artworks,
            published: data[0].published,
            scoreTrending: data[0].scoreTrending,
            scorePopular: data[0].scorePopular,
            sales: data[0].sales,
            updated: data[0].updated,
            created: data[0].created,
            imagePath: data[0].imagePath
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