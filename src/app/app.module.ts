import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InMemoryService } from './mocks/in-memory.service';

// Paczka, generuje problemy podczas importowania, dlatego zmieniamy ma require.
const mem = require('angular-in-memory-web-api');
const InMemoryWebApiModule = mem.InMemoryWebApiModule;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // INFO(piecioshka): routing dla mocków
    InMemoryWebApiModule.forRoot(InMemoryService, {
      // Flaga powoduje, że pomimo tego, że są włączone mocki, to
      // kiedy routing nie znajdzie URLa w swojej mapie
      // zmokowanych URLi to wyśle zwykły request HTTP.
      passThruUnknownUrl: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
