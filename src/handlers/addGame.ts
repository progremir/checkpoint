import { Context, Markup as m } from 'telegraf'

export function addGame(ctx, next) {
  const gameURL = ctx.message?.text?.split(' ')?.[1]
  if (!gameURL) {
    return ctx.replyWithMarkdown('Please find your game in https://igdb.com and send a link to me like this `/addGame yourlink`')
  }
  const gameSlug = gameURL.replace('https://www.igdb.com/games/', '')

  return ctx.replyWithMarkdown(gameSlug)
}
