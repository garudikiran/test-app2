import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./material.module";

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ],
    exports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ]
})
export class SharedModule { }