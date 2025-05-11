import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'xqschecv',
    dataset: 'production',
  },
  studio: {
    host: 'galeriemnc',
  },
  autoUpdates: true,
});
