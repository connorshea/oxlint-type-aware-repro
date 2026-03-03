Setup:

- `git clone https://www.github.com/connorshea/oxlint-type-aware-repro`
- `cd oxlint-type-aware-repro`
- `cd client`
- `pnpm install`
- `pnpm run oxlint`, see that it runs fine and reports 2 linter violations.
- Open the `oxlint-type-aware-repro` directory in VS Code, and open `client/src/index.ts`. You will only see 1 violation in the file according to the LSP.

In the output channel for the VS Code extension, you will see an error about the `tsgolint` binary not being found. The extension does not do any searching for tsgolint like it does for the `oxlint` binary.
