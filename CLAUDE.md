<ai_agent_rules>
MANDATORY - Read before ANY task. Do NOT skip steps.

<load_documentation>

- [ ] Read `docs/README.md` - documentation index
</load_documentation>

<tool_preferences>
Use **Serena** for code navigation and editing. Prefer over grep/glob/view for code files.

- `get_symbols_overview`, `find_symbol`, `find_referencing_symbols`, `search_for_pattern`
- `replace_lines`, `delete_lines`, `insert_at_line`, `create_text_file`

Use **Context7** (`resolve-library-id` → `query-docs`) for external libraries. Do NOT rely on training data.
</tool_preferences>

<documentation_maintenance>
AFTER completing any task, you MUST ask: **"Update docs/?"** if you discovered new patterns, conventions, or architectural decisions.
BEFORE context compaction or when context is running low, SAVE key findings to `docs/` so they are not lost.
Source of truth is `docs/` - update existing files, do NOT create new unless topic does not fit anywhere.
</documentation_maintenance>
</ai_agent_rules>
