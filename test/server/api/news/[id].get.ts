import { news } from '~~/server/data/news'


export default defineEventHandler((event) => {
    const id = Number(getRouterParam(event, 'id'))

    return news.find(item => item.id === id)
})
