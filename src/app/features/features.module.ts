import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './routing.module'

import {
  FeatureDashboardComponent,
  ObservablesComponent
} from './components'


@NgModule({
  declarations: [
    FeatureDashboardComponent,
    ObservablesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
