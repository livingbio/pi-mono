import * as Sentry from "@sentry/node";
import { createSentryInitOptions } from "./sentry.js";

Sentry.init(createSentryInitOptions(process.env.MOM_SENTRY_DSN));
