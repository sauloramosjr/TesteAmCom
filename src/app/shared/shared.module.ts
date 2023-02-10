import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AvatarComponent } from 'src/app/shared/components/avatar/avatar.component';
import { TemplateComponent } from 'src/app/shared/components/template/template.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { AsideComponent } from './components/template/components/aside/aside.component';
import { AsideButtomComponent } from './components/template/components/aside/components/aside-buttom/aside-buttom.component';
import { HeaderComponent } from './components/template/components/header/header.component';
import { CpfMaskDirective } from './directives/cpf-mask.directive';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
CdkStepperModule;
@NgModule({
  declarations: [
    BreadcrumbComponent,
    TemplateComponent,
    AsideComponent,
    HeaderComponent,
    AsideButtomComponent,
    AvatarComponent,
    OnlyNumbersDirective,
    CpfMaskDirective,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTooltipModule,
    BreadcrumbComponent,
    TemplateComponent,
    AvatarComponent,
    MatMenuModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    OnlyNumbersDirective,
    CpfMaskDirective,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [OnlyNumbersDirective, CpfMaskDirective],
})
export class SharedModule {}
