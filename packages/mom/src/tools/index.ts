import type { AgentTool } from "@mariozechner/pi-agent-core";
import type { Executor } from "../sandbox.js";
import { createAttachTool } from "./attach.js";
import { createBashTool } from "./bash.js";
import { createEditTool } from "./edit.js";
import { createReadTool } from "./read.js";
import { createWriteTool } from "./write.js";

export function createMomTools(executor: Executor): {
	tools: AgentTool<any>[];
	setUploadFunction: (fn: (filePath: string, title?: string) => Promise<void>) => void;
} {
	const { tool: attachTool, setUploadFunction } = createAttachTool();
	return {
		tools: [
			createReadTool(executor),
			createBashTool(executor),
			createEditTool(executor),
			createWriteTool(executor),
			attachTool,
		],
		setUploadFunction,
	};
}
