import { news } from '~~/server/data/news'
import type { NewsShort } from '~~/app/types/News'


const PAGE_SIZE = 10


export default defineEventHandler((event): NewsShort[] => {
    const categoryId = Number(getRouterParam(event, 'id'))
    const page = Number(getQuery(event).page) || 0

    return news
        .filter(item => item.categoryId === categoryId)
        .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
        .map(({ id, title, date, shortDescription }) => ({ id, title, date, shortDescription }))
})
