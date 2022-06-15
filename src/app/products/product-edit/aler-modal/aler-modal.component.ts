import { Component, Output } from "@angular/core";

@Component({
  selector: "app-aler-modal",
  templateUrl: "./aler-modal.component.html",
  styleUrls: ["./aler-modal.component.css"],
})
export class AlerModalComponent {
  @Output() delete;
  @Output() cancel;

  onDelete() {
    this.delete.emit();
  }
  onCancel() {
    this.cancel.emit();
  }
}
