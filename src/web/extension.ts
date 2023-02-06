import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('dagster-vscode.dagster', () => {
        // Create and show a new webview
        const panel = vscode.window.createWebviewPanel(
            'dagster',
            'Dagster',
            vscode.ViewColumn.One,
            {
                enableScripts: true,
            }
        )
        // And set its HTML content
		// TODO: is there a way to set URL directly instead of using an iframe?
        panel.webview.html = getWebviewContent()
    })

    context.subscriptions.push(disposable)
}

function getWebviewContent() {
    return `
		<html>

		<body>

			<head>
				<style>
					body,
					html,
					iframe {
						height: 100%;
						width: 100%;
						padding: 0;
						margin: 0;
						border: 0;
						outline: 0;
						overflow: hidden;
					}
				</style>
				<script>
					window.onload = (event) => {
						console.log("page is fully loaded");
						document.querySelectorAll("div").forEach((item, index) => {
							item.addEventListener('click', () => {
								console.log("clicked within iframe")
							});
						})
					};
				</script>
			</head>
			<iframe id="iframe" src="http://127.0.0.1:3000/">

		</body>

		</html>
	`
}

// This method is called when your extension is deactivated
export function deactivate() {}
