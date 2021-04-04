import { DataStorageUnits, BatteryUnits, ResolutionUnits } from '@ts_types/unions/Units'

export type DataStorage = {
  quantity: number
  unit: DataStorageUnits
}

export type Resolution = {
  width: number
  height: number
  unit: ResolutionUnits
}

export type Screen = {
  type: string
  resolution: Resolution
  protection: string
}

export type Camera = {
  unit: string
  back: [number]
  front: [number]
}

export type Battery = {
  quantity: number
  unit: BatteryUnits
}

export type Phone = {
  manufacturer: string
  model: string
  year: number
  operationSystem: string
  chipset: string
  randomAcessMemory: DataStorage
  internalMemory: DataStorage
  screen: Screen
  camera: Camera
  battery: Battery
}

export type QueryPhone = {
  _id: string
}

export type MutationPhone = {
  _id?: string
  phone: Phone
}
