export interface DataStorageInterface {
  quantity: number
  unit: string
}

export interface ResolutionInterface {
  width: number
  height: number
  unit: string
}

export interface ScreenInterface {
  type: string
  resolution: ResolutionInterface
  protection: string
}

export interface PositionCameraInterface {
  id: number
  pixel: number
}

export interface PositionsCameraInterface {
  [key: string]: PositionCameraInterface[]
  back: PositionCameraInterface[]
  front: PositionCameraInterface[]
}

export interface CameraInterface {
  unit: string
  positions: PositionsCameraInterface
}

export interface BatteryInterface {
  quantity: number
  unit: string
}

export interface PhoneInterface {
  _id?: string
  manufacturer: string
  model: string
  year: number
  operationSystem: string
  chipset: string
  randomAccessMemory: DataStorageInterface
  internalMemory: DataStorageInterface
  screen: ScreenInterface
  camera: CameraInterface
  battery: BatteryInterface
}