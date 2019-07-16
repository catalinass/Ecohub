import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';

// App Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProgressSpinnerModule, ProgressSpinnerComponent } from './progress-spinner/progress-spinner.module';
import { AppOverlayModule } from './overlay/overlay.module';
import { HomeComponent } from './home/home.component';
import { AssetsService } from './services/assets.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    //MatProgressSpinnerModule,
    AppOverlayModule,
    ProgressSpinnerModule,
    HttpClientModule
      ],

  entryComponents: [AppComponent, ProgressSpinnerComponent],
  providers: [HttpClient, AssetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
