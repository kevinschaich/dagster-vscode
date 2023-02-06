# Demo + Planned Features

Goal is to integrate Dagster as a Webview within a VSCode extension & support bidirectional interactions to streamline local development of assets, ops, and jobs.

* Split view
    * Left section is your asset/job code in a regular VSCode editor.
    * Right top section is your Dagster graph.
    * Bottom section is a rendering of the local copy of your de-serialized output for that node (e.g. we find the file, unpickle it, and then show it in a table).
    * VSCode panels are movable by default so people can drag these around as they like to customize the views.
* Sync interactions between panels.
    * Clicking on a function in your code or a node on the graph in Dagster highlights the respective section in the other panel.
    * Clicking on a function or node switches the output preview to the correct file.

![](https://user-images.githubusercontent.com/9244728/216626940-756e329c-89e1-4fbd-8133-6372ff0a9603.png)

# TODOs

- [ ] Resolve Content Security Policy (CSP) issues so we can interact with iframes (need to serve an HTML file from localhost domain to match local Dagster instance)
- [ ] Sync interactions from VSCode to Dagster (highlighting source code for an op/job/asset in VSCode opens/highlights respective elements in Dagit)
- [ ] Sync interactions from Dagster to VSCode (highlighting/opening page in Dagit highlights source code in VSCode)
- [ ] Figure out a way to enable a "preview" panel for recently materialized assets/run ops (need to find path on disk, use IOManager for that job to unserialize it, and render a table view)

# Developing

1. Clone, install dependencies, open in VSCode, start Dagster server

```bash
git clone git@github.com:kevinschaich/dagster-vscode.git
cd dagster-vscode
yarn
code .
dagster dev # (in the root directory of your pipelines)
```

2. Open VSCode Command Palette (`⌘` + `Shift` + `P`) & select `Debug: Select and Start Debugging`
3. A new VSCode window will open with compiled extension code
4. Open VSCode Command Palette (`⌘` + `Shift` + `P`) & select `Open Dagster`
