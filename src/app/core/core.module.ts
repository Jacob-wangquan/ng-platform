import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MdIconRegistry} from '@angular/material';
import { DomSanitizer} from '@angular/platform-browser';
import { MdToolbarModule, MdIconModule, MdButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvgResources } from '../utils/svg.util';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule,
    MdButtonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule,ir: MdIconRegistry,ds:DomSanitizer){
    if(parent){
      throw new Error("模块已经存在，不能再次加载");
    }
    loadSvgResources(ir, ds);
  }
}
