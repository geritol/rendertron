'use strict';

import * as fs from 'fs';
import { test, afterEach } from 'ava';
import * as mockFs from 'mock-fs';

import { FileSystemCache } from '../fs-cache';

afterEach(() => {
  mockFs.restore();
});

test('it persists to the filesystem', async (t) => {
  const location = '/tmp/rendertron';
  mockFs({ [location]: {} });

  const maxEntries = 1;
  const cache = new FileSystemCache({ location, maxEntries });

  cache.cacheContent('test-key');

  t.true(fs.existsSync(`${location}/test-key`));
});
