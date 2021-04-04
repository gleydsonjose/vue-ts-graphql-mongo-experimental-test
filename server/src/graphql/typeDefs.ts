const { gql } = require('apollo-server')

export default gql`
  enum DataStorageUnits {
    GB
    Gb
    MB
    Mb
    KB
    Kb
  }

  enum BatteryUnits {
    Ah
    mAh
  }

  enum ResolutionUnits {
    px
    Mp
  }

  type Units {
    dataStorage: [DataStorageUnits]
    battery: [BatteryUnits]
    resolution: [ResolutionUnits]
  }

  type DataStorage {
    quantity: Int
    unit: DataStorageUnits
  }

  type Resolution {
    width: Int
    height: Int
    unit: ResolutionUnits
  }

  type Screen {
    type: String
    resolution: Resolution
    protection: String
  }

  type Camera {
    unit: String
    back: [Int]
    front: [Int]
  }

  type Battery {
    quantity: Int
    unit: BatteryUnits
  }

  type Phone {
    _id: ID
    manufacturer: String
    model: String
    year: Int
    operationSystem: String
    chipset: String
    randomAcessMemory: DataStorage
    internalMemory: DataStorage
    screen: Screen
    camera: Camera
    battery: Battery
  }

  input DataStorageInput {
    quantity: Int
    unit: DataStorageUnits
  }

  input ResolutionInput {
    width: Int
    height: Int
    unit: ResolutionUnits
  }

  input ScreenInput {
    type: String
    resolution: ResolutionInput
    protection: String
  }

  input CameraInput {
    unit: String
    back: [Int]
    front: [Int]
  }

  input BatteryInput {
    quantity: Int
    unit: BatteryUnits
  }

  input PhoneInput {
    _id: ID
    manufacturer: String
    model: String
    year: Int
    operationSystem: String
    chipset: String
    randomAcessMemory: DataStorageInput
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
