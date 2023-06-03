import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Custom input modules
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import {CdkTableModule} from '@angular/cdk/table';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';

//Import SCADA components
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {WheatsNavBarComponent} from './wheats-nav-bar/wheats-nav-bar.component';
import {WheatProteinContainerComponent} from './wheat-protein-container/wheat-protein-container.component';


//Import services
import {ApiService} from './api.service';
import { SocketioService } from './socketio.service';
import { FetchComponent } from './fetch/fetch.component';
import { StoreExperimentComponent } from './store-experiment/store-experiment.component';
import { FetchFlourComponent } from './fetch-flour/fetch-flour.component';
import { SpectrumsComponent } from './spectrums/spectrums.component';
import { SiloTabComponent } from './silo-tab/silo-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    WheatsNavBarComponent,
    WheatProteinContainerComponent,
    FetchComponent,
    StoreExperimentComponent,
    FetchFlourComponent,
    SpectrumsComponent,
    SiloTabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxChartsModule,
    CdkTableModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    ScrollingModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    RouterModule.forRoot([
      {path: "register",component: RegisterComponent},
      {path: "wheats", component: WheatsNavBarComponent},
      {path: "wheatProtein", component: WheatProteinContainerComponent},
      {path: "fetchWheat", component: FetchComponent},
      {path: "app-store-experiment", component: StoreExperimentComponent},
      {path: "app-fetch-flour", component: FetchFlourComponent},
      {path: "app-spectrums", component: SpectrumsComponent},
      {path: "app-silo-tab", component: SiloTabComponent }]), //Router module is used in order to load different components (e.g. from index go to register form)
    AppRoutingModule
  ],
  providers: [
    ApiService,
    SocketioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
