import * as vscode from 'vscode'; 

export function activate(context: vscode.ExtensionContext) {

    let markHandler = new MarkHandler();

    var disposable = vscode.commands.registerCommand('extension.setMark', () => {
        markHandler.mark(vscode.window.activeTextEditor.selection.active);
    });
    context.subscriptions.push(markHandler);
    context.subscriptions.push(disposable);
}

class MarkHandler {
    private state: boolean = false;
    private posit: vscode.Position;
    public mark(pos: vscode.Position) {
        switch (this.state) {
            //add mark
            case false:
                this.posit = pos;
                this.state = true;
                vscode.window.setStatusBarMessage("Mark created at [" + pos.character + "," + pos.line + "]");
                break;
            //add point and select to it
            case true:
                vscode.window.activeTextEditor.selection = new vscode.Selection(this.posit, pos);
                this.state = false;
                vscode.window.setStatusBarMessage("");
                break;
        }
    }
    public dispose(){}
}

export function deactivate() {
}