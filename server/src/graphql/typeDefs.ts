const { gql } = require('apollo-server')

export default gql`
  type Units {
    dataStorage: [String]
    battery: [String]
    resolution: [String]
  }

  type DataStorage {
    quantity: Int
    unit: String
  }

  type Resolution {
    width: Int
    height: Int
    unit: String
  }

  type Screen {
    type: String
    resolution: Resolution
    protection: String
  }

  type PositionCamera {
    id: Int
    pixel: Int
  }

  type PositionsCamera {
    back: [PositionCamera]
    front: [PositionCamera]
  }

  type Camera {
    unit: String
    positions: PositionsCamera
  }

  type Battery {
    quantity: Int
    unit: String
  }

  type Phone {
    _id: ID
    manufacturer: String
    model: String
    year: Int
    operationSystem: String
    chipset: String
    randomAccessMemory: DataStorage
    internalMemory: DataStorage
    screen: Screen
    camera: Camera
    battery: Battery
  }

  input DataStorageInput {
    quantity: Int
    unit: String
  }

  input ResolutionInput {
    width: Int
    height: Int
    unit: String
  }

  input ScreenInput {
    type: String
    resolution: ResolutionInput
    protection: String
  }

  input PositionCameraInput {
    id: Int
    pixel: Int
  }

  input PositionsCameraInput {
    back: [PositionCameraInput]
    front: [PositionCameraInput]
  }

  input CameraInput {
    unit: String
    positions: PositionsCameraInput
  }

  input BatteryInput {
    quantity: Int
    unit: String
  }

  input PhoneInput {
    _id: ID
    manufacturer: String
    model: String
    year: Int
    operationSystem: String
    chipset: String
    randomAccessMemory: DataStorageInput
    internalMemory: DataStorageInput
    screen: ScreenInput
    camera: CameraInput
    battery: BatteryInput
  }

  type Query {
    phone (_id: ID!): Phone
    phones: [Phone!]
    units: Units
  }

  type Mutation {
    addPhone (phone: PhoneInput!): Phone
    editPhone (_id: ID!, phone: PhoneInput!): Phone
    deletePhone (_id: ID!): Boolean
  }
`
