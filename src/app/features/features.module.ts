import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FeaturesRoutingModule } from './routing.module'

import {
  FeatureDashboardComponent,
  FeatureWelcomeComponent,
  ObservablesComponent
} from './components'


@NgModule({
  declarations: [
    FeatureDashboardComponent,
    ObservablesComponent,
    FeatureWelcomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
