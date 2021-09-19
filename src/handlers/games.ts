import { Context } from "telegraf"

export function games(ctx: Context) {
  const user = ctx.dbuser
  const prettyGames = user.games.map(game => `${game.name} with status ${game.status}`).join('\n')
  if (!prettyGames) {
    const gif = 'https://media.giphy.com/media/IeGEp01UIiQuFT9dvS/giphy.gif?cid=ecf05e47164vqijzzovfxyozurgv0y1vvmc8tvs6df995rv0&rid=giphy.gif&ct=g'
    return ctx.replyWithAnimation(gif)
  }
  return ctx.replyWithMarkdown(prettyGames)
}
