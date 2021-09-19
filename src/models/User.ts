import { prop, getModelForClass } from '@typegoose/typegoose'
import { GameRecord } from './GameRecord'

export class User {
  @prop({ required: true, index: true, unique: true })
  id: number

  @prop({ required: true, default: 'en' })
  language: string

  @prop({ type: () => GameRecord, required: true, default: [] })
  games: GameRecord[]
}

export const UserModel = getModelForClass(User, {
  schemaOptions: { timestamps: true },
})

// Get or create user
export async function findUser(id: number) {
  let user = await UserModel.findOne({ id })
  if (!user) {
    // Try/catch is used to avoid race conditions
    try {
      user = await new UserModel({ id }).save()
    } catch (err) {
      user = await UserModel.findOne({ id })
    }
  }
  return user
}
