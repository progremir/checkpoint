import { prop } from '@typegoose/typegoose'

export enum GameStatus {
  WISHLIST = 'wishlist',
  WANT_TO_PLAY = 'want to play',
  ACTIVE = 'active',
  PAUSED = 'paused',
  COMPLETED = 'completed',
  ABANDONED = 'abandoned'
}

export class GameRecord {
  @prop({ required: true, index: true })
  id: number

  @prop({ required: true })
  name: string

  @prop({ required: true, enum: GameStatus, default: GameStatus.WISHLIST })
  status: GameStatus

  @prop({ required: false })
  rating: number

  @prop({ required: false })
  comment: string
}
