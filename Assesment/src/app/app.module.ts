import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from '@app/services';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from '@app/services';
import { AppComponent } from './app.component';
import { AlertComponent } from './Alert';
import { HomeComponent } from './home';;
import { AboutUsComponent } from './about-us/about-us.component'
;
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'
;
import { GalleryComponent } from './gallery/gallery.component';
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
,
        AboutUsComponent ,
        UserDashboardComponent ,
        GalleryComponent  ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
