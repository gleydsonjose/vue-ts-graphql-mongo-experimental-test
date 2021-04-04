import { DataStorageUnits, BatteryUnits, ResolutionUnits } from '@ts_types/unions/Units'

export type Units = {
  dataStorage: [DataStorageUnits]
  battery: [BatteryUnits]
  resolution: [ResolutionUnits]
}
