import { Component, ViewContainerRef } from '@angular/core';
import { overlayConfigFactory } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { AppDialogComponentContext } from './app.dialog.component.context';
import { AppDialogComponent } from './app.dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'Modal Sample App';

    constructor(public modal: Modal) {
    }

    modalAlert() {
        const dialogRef = this.modal.alert()
            .size('sm')
            .title('Modal Alert')
            .showClose(true)
            .body(`A simple alert dialog message.`)
            .open();

        dialogRef.result.then((result) => {
            if (result) {
                alert(`The result is: ${result}`);
            }
        }, () => {
            return;
        });
    }

    modalConfirm(): void {
        const dialogRef = this.modal.confirm()
            .title('Modal Confirm')
            .cancelBtn('Cancel')
            .cancelBtnClass('btn btn-secondary')
            .okBtn('Ok')
            .okBtnClass('btn btn-primary')
            .isBlocking(true)
            .showClose(false)
            .body(`<p>A simple confirm dialog message.</p>`)
            .open();

        dialogRef.result.then((result) => {
            if (result) {
                alert(`The result is: ${result}`);
            }
        }, () => {
            return;
        });
    }

    modalOpen() {
        const componentContext = <AppDialogComponentContext>{ message: 'Hello Modal' };
        const dialogRef = this.modal.open(AppDialogComponent, overlayConfigFactory(componentContext));

        dialogRef.result.then((result) => {
            if (result) {
                alert(`The result is: ${result}`);
            }
        }, () => {
            return;
        });
    }
}
