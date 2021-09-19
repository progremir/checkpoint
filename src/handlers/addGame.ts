import { findGameByURL } from '@/helpers/igdb'
import { Context } from 'telegraf'

export async function addGame(ctx: Context, next) {
  if (!('text' in ctx.message)) return next()

  const gameURL = ctx.message.text.split(' ')[1]
  if (!gameURL) {
    return ctx.replyWithMarkdown('Please find your game in https://igdb.com and send a link to me like this `/addGame yourlink`')
  }
  try {
    const response = await findGameByURL(gameURL)
    // TODO: show list of options as inline button
    const { name, id } = response.data[0]
    const user = ctx.dbuser
    user.games.addToSet({ id, name })
    user.save()
    return ctx.replyWithMarkdown(`${name} has been added to your gaming list!`)
  } catch (e) {
    return ctx.replyWithMarkdown('not noic')
  }
}
