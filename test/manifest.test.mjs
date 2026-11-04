import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('manifest selects exact stable server rather than arbitrary PATH wm',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../gemini-extension.json',import.meta.url)));
 assert.equal(manifest.name,'whitemagic');assert.equal(manifest.version,'9.3.4');assert.equal(manifest.contextFileName,'GEMINI.md');
 assert.deepEqual(manifest.mcpServers,{whitemagic:{command:'npx',args:['-y','whitemagic-mcp@9.3.4','serve','--profile','curated']}});
 assert.ok(readFileSync(new URL('../GEMINI.md',import.meta.url)).length);
});
