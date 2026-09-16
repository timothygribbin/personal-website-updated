<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Token Efficiency

Minimize token and context usage while preserving correctness.

## Rules

- Read only files directly relevant to the current task. Do not scan the repository broadly by default.
- Use targeted searches (`rg`, exact filenames, symbols, imports, routes, errors) before opening files.
- For large files, read only the relevant section.
- Do not reread unchanged files unless necessary.
- Ignore `node_modules`, `.next`, build output, generated files, lockfiles, logs, coverage, datasets, and vendored code unless directly relevant.
- Identify the minimum files that need modification before editing.
- Make the smallest correct patch. Do not rewrite entire files for localized changes.
- Do not perform unrelated refactors, cleanup, formatting, documentation, or architectural changes.
- Search for existing components, utilities, types, styles, and helpers before creating new ones.
- Do not add dependencies unless necessary.
- Run the narrowest validation necessary. Avoid full test suites and production builds for isolated changes unless required.
- Never repeat a command that already passed unless relevant code changed.
- Do not dump long logs or command output into context. Extract only relevant errors/results.
- Keep plans, explanations, progress updates, and final responses extremely concise.
- Do not narrate routine actions.
- Ask questions only when missing information genuinely blocks implementation.
- Reuse information already available in conversation/context instead of rediscovering it.
- For Next.js documentation, read only the specific relevant guide in `node_modules/next/dist/docs/`. Never ingest the entire docs directory.
- Stop when the requested task is implemented and sufficiently validated. Do not investigate unrelated improvements.

## Default Workflow

1. Locate the exact target with a focused search.
2. Read the minimum necessary context.
3. Make the smallest correct change.
4. Run the narrowest useful validation.
5. Report only:
   - files changed
   - validation performed
   - remaining errors or risks

## Avoid Unless Required

- Repository-wide exploration
- Large recursive searches
- Reading entire large files
- Full git history analysis
- Full dependency analysis
- Full builds for trivial changes
- Full test suites for isolated changes
- Reformatting unrelated code
- Unrequested refactoring
- Long implementation plans
- Long explanations of completed work
- Repeating information already known
